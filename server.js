const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mockData = require('./data/mockData');

const app = express();
const PORT = process.env.PORT || 9090;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Helper function to validate date format
const isValidDate = (dateString) => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
};

// Helper function to filter hotels based on search criteria
const filterHotels = (hotels, filters) => {
  return hotels.filter(hotel => {
    // Filter by destination (city or hotel name)
    if (filters.destination) {
      const destination = filters.destination.toLowerCase();
      if (!hotel.city.toLowerCase().includes(destination) && 
          !hotel.hotelName.toLowerCase().includes(destination)) {
        return false;
      }
    }

    // Filter by price range
    if (filters.minPrice && hotel.lowestPrice < filters.minPrice) return false;
    if (filters.maxPrice && hotel.lowestPrice > filters.maxPrice) return false;

    // Filter by rating
    if (filters.minRating && hotel.rating < filters.minRating) return false;

    return true;
  });
};

// Helper function to sort hotels
const sortHotels = (hotels, sortBy) => {
  switch (sortBy) {
    case 'price_low':
      return hotels.sort((a, b) => a.lowestPrice - b.lowestPrice);
    case 'price_high':
      return hotels.sort((a, b) => b.lowestPrice - a.lowestPrice);
    case 'rating':
      return hotels.sort((a, b) => b.rating - a.rating);
    case 'name':
      return hotels.sort((a, b) => a.hotelName.localeCompare(b.hotelName));
    default:
      return hotels;
  }
};

// Routes

// Health check endpoint
app.get('/healthcheck', (req, res) => {
  res.json(true);
});

// Hotel search endpoint
app.get('/hotels/search', (req, res) => {
  try {
    const {
      destination,
      checkInDate,
      checkOutDate,
      guests = 2,
      rooms = 1,
      minPrice,
      maxPrice,
      minRating,
      sortBy,
      page = 1,
      pageSize = 10
    } = req.query;

    // Validate dates if provided
    if (checkInDate && !isValidDate(checkInDate)) {
      return res.status(400).json({
        timestamp: new Date().toISOString(),
        status: 400,
        reason: "Bad Request",
        message: "Invalid checkInDate format",
        path: "/hotels/search",
        method: "GET"
      });
    }

    if (checkOutDate && !isValidDate(checkOutDate)) {
      return res.status(400).json({
        timestamp: new Date().toISOString(),
        status: 400,
        reason: "Bad Request",
        message: "Invalid checkOutDate format",
        path: "/hotels/search",
        method: "GET"
      });
    }

    // Filter hotels
    let filteredHotels = filterHotels(mockData.hotels, {
      destination,
      minPrice: minPrice ? parseFloat(minPrice) : null,
      maxPrice: maxPrice ? parseFloat(maxPrice) : null,
      minRating: minRating ? parseFloat(minRating) : null
    });

    // Sort hotels
    if (sortBy) {
      filteredHotels = sortHotels(filteredHotels, sortBy);
    }

    // Pagination
    const totalResults = filteredHotels.length;
    const totalPages = Math.ceil(totalResults / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + parseInt(pageSize);
    const paginatedHotels = filteredHotels.slice(startIndex, endIndex);

    const response = {
      hotels: paginatedHotels,
      metadata: {
        totalResults,
        currentPage: parseInt(page),
        totalPages,
        pageSize: parseInt(pageSize),
        appliedFilters: {
          destination,
          checkInDate,
          checkOutDate,
          guests: parseInt(guests),
          rooms: parseInt(rooms),
          priceRange: minPrice || maxPrice ? {
            min: minPrice ? parseFloat(minPrice) : null,
            max: maxPrice ? parseFloat(maxPrice) : null
          } : null,
          minRating: minRating ? parseFloat(minRating) : null,
          amenities: null,
          propertyTypes: null
        }
      }
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({
      timestamp: new Date().toISOString(),
      status: 500,
      reason: "Internal Server Error",
      message: "An error occurred while processing the request",
      path: "/hotels/search",
      method: "GET"
    });
  }
});

// Get hotel details
app.get('/hotels/:hotelId', (req, res) => {
  try {
    const { hotelId } = req.params;
    const hotel = mockData.hotels.find(h => h.hotelId === hotelId);

    if (!hotel) {
      return res.status(404).send();
    }

    const rooms = mockData.rooms.filter(r => r.hotelId === hotelId);
    const reviews = mockData.reviews.filter(r => r.hotelId === hotelId).slice(0, 5);
    const attractions = mockData.attractions.filter(a => a.hotelId === hotelId);

    const response = {
      hotel,
      rooms,
      recentReviews: reviews,
      nearbyAttractions: attractions
    };

    res.json(response);
  } catch (error) {
    res.status(400).json({
      timestamp: new Date().toISOString(),
      status: 400,
      reason: "Bad Request",
      message: "Invalid hotel ID",
      path: `/hotels/${req.params.hotelId}`,
      method: "GET"
    });
  }
});

// Get hotel attractions
app.get('/hotels/:hotelId/attractions', (req, res) => {
  try {
    const { hotelId } = req.params;
    const hotel = mockData.hotels.find(h => h.hotelId === hotelId);

    if (!hotel) {
      return res.status(404).send();
    }

    const attractions = mockData.attractions.filter(a => a.hotelId === hotelId);

    const response = {
      hotelId,
      attractions
    };

    res.json(response);
  } catch (error) {
    res.status(400).json({
      timestamp: new Date().toISOString(),
      status: 400,
      reason: "Bad Request",
      message: "Invalid hotel ID",
      path: `/hotels/${req.params.hotelId}/attractions`,
      method: "GET"
    });
  }
});

// Get hotel availability
app.get('/hotels/:hotelId/availability', (req, res) => {
  try {
    const { hotelId } = req.params;
    const { checkInDate, checkOutDate, guests = 2, roomCount = 1 } = req.query;

    if (!checkInDate || !checkOutDate) {
      return res.status(400).json({
        timestamp: new Date().toISOString(),
        status: 400,
        reason: "Bad Request",
        message: "checkInDate and checkOutDate are required",
        path: `/hotels/${hotelId}/availability`,
        method: "GET"
      });
    }

    if (!isValidDate(checkInDate) || !isValidDate(checkOutDate)) {
      return res.status(400).json({
        timestamp: new Date().toISOString(),
        status: 400,
        reason: "Bad Request",
        message: "Invalid date format",
        path: `/hotels/${hotelId}/availability`,
        method: "GET"
      });
    }

    const hotel = mockData.hotels.find(h => h.hotelId === hotelId);
    if (!hotel) {
      return res.status(404).send();
    }

    const availableRooms = mockData.rooms.filter(r => r.hotelId === hotelId && r.availableCount > 0);
    const totalAvailable = availableRooms.reduce((sum, room) => sum + room.availableCount, 0);

    const response = {
      hotelId,
      checkInDate,
      checkOutDate,
      availableRooms,
      totalAvailable
    };

    res.json(response);
  } catch (error) {
    res.status(400).json({
      timestamp: new Date().toISOString(),
      status: 400,
      reason: "Bad Request",
      message: "Invalid request parameters",
      path: `/hotels/${req.params.hotelId}/availability`,
      method: "GET"
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    timestamp: new Date().toISOString(),
    status: 500,
    reason: "Internal Server Error",
    message: "Something went wrong!",
    path: req.path,
    method: req.method
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    timestamp: new Date().toISOString(),
    status: 404,
    reason: "Not Found",
    message: "The requested resource was not found",
    path: req.path,
    method: req.method
  });
});

app.listen(PORT, () => {
  console.log(`Hotel API server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/healthcheck`);
  console.log(`API Documentation: http://localhost:${PORT}/docs`);
});

module.exports = app;
