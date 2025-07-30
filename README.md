# Hotel API - Mock Data Implementation

A Node.js/Express API implementation that provides mocked hotel data based on the OpenAPI specification.

## Features

- **Hotel Search**: Search hotels with filters (destination, price range, rating, etc.)
- **Hotel Details**: Get detailed information about a specific hotel
- **Room Availability**: Check room availability for specific dates
- **Nearby Attractions**: Get attractions near a hotel
- **Pagination**: Support for paginated results
- **Error Handling**: Proper HTTP status codes and error messages

## API Endpoints

### Health Check
- **GET** `/healthcheck` - Returns API health status

### Hotel Operations
- **GET** `/hotels/search` - Search hotels with various filters
  - Query Parameters:
    - `destination` (string, optional) - City or hotel name
    - `checkInDate` (string, optional) - Check-in date (YYYY-MM-DD)
    - `checkOutDate` (string, optional) - Check-out date (YYYY-MM-DD)
    - `guests` (integer, default: 2) - Number of guests
    - `rooms` (integer, default: 1) - Number of rooms
    - `minPrice` (number, optional) - Minimum price filter
    - `maxPrice` (number, optional) - Maximum price filter
    - `minRating` (number, optional) - Minimum rating filter
    - `sortBy` (string, optional) - Sort by: price_low, price_high, rating, name
    - `page` (integer, default: 1) - Page number
    - `pageSize` (integer, default: 10) - Items per page

- **GET** `/hotels/{hotelId}` - Get detailed hotel information
- **GET** `/hotels/{hotelId}/attractions` - Get nearby attractions
- **GET** `/hotels/{hotelId}/availability` - Check room availability
  - Query Parameters:
    - `checkInDate` (string, required) - Check-in date
    - `checkOutDate` (string, required) - Check-out date
    - `guests` (integer, default: 2) - Number of guests
    - `roomCount` (integer, default: 1) - Number of rooms needed

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:9090` by default.

## Sample Data

The API includes mock data for 5 hotels across different cities:
- Grand Palace Hotel (New York) - Luxury
- Seaside Resort & Spa (Miami) - Beachfront Resort
- Mountain View Lodge (Denver) - Mountain Lodge
- Business Center Hotel (Chicago) - Business Hotel
- Budget Inn Express (Austin) - Budget Hotel

Each hotel includes:
- Detailed information (name, description, location, amenities)
- Multiple room types with pricing
- Customer reviews with ratings
- Nearby attractions

## Example API Calls

### Search Hotels
```bash
curl "http://localhost:9090/hotels/search?destination=New%20York&minPrice=200&maxPrice=400&sortBy=price_low"
```

### Get Hotel Details
```bash
curl "http://localhost:9090/hotels/hotel_001"
```

### Check Availability
```bash
curl "http://localhost:9090/hotels/hotel_001/availability?checkInDate=2024-08-01&checkOutDate=2024-08-05&guests=2&roomCount=1"
```

### Get Nearby Attractions
```bash
curl "http://localhost:9090/hotels/hotel_001/attractions"
```

## Response Format

All responses follow the OpenAPI specification format with proper error handling:

### Success Response Example
```json
{
  "hotels": [...],
  "metadata": {
    "totalResults": 5,
    "currentPage": 1,
    "totalPages": 1,
    "pageSize": 10,
    "appliedFilters": {...}
  }
}
```

### Error Response Example
```json
{
  "timestamp": "2024-07-30T10:30:00.000Z",
  "status": 400,
  "reason": "Bad Request",
  "message": "Invalid checkInDate format",
  "path": "/hotels/search",
  "method": "GET"
}
```

## Development

The project structure:
```
hotel_api/
├── server.js          # Main server file
├── data/
│   └── mockData.js    # Mock data definitions
├── package.json       # Dependencies and scripts
├── openapi.yaml       # API specification
└── README.md          # This file
```

## Dependencies

- **express**: Web framework
- **cors**: Cross-origin resource sharing
- **helmet**: Security headers
- **morgan**: HTTP request logger
- **nodemon**: Development auto-reload (dev dependency)

## Notes

- All dates should be in YYYY-MM-DD format
- Price values are in USD
- Rating values are on a scale of 1-5
- Distance values are in kilometers
- Room availability is randomly generated for demonstration
