const hotels = [
  {
    hotelId: "hotel_001",
    hotelName: "Grand Palace Hotel",
    description: "Luxurious 5-star hotel in the heart of the city with stunning architecture and world-class amenities.",
    address: "123 Royal Avenue",
    city: "New York",
    country: "USA",
    images: [
      "https://example.com/images/grand-palace-1.jpg",
      "https://example.com/images/grand-palace-2.jpg",
      "https://example.com/images/grand-palace-3.jpg"
    ],
    rating: 4.8,
    reviewCount: 1247,
    amenities: ["WiFi", "Pool", "Spa", "Gym", "Restaurant", "Room Service", "Concierge"],
    propertyType: ["Hotel", "Luxury"],
    location: {
      latitude: 40.7128,
      longitude: -74.0060,
      landmark: "Times Square",
      distanceFromCenter: 0.5
    },
    contactInfo: {
      phone: "+1-555-0123",
      email: "info@grandpalace.com",
      website: "https://grandpalace.com"
    },
    checkInOutPolicy: {
      checkInTime: "15:00",
      checkOutTime: "11:00",
      cancellationPolicy: "Free cancellation up to 24 hours before check-in"
    },
    lowestPrice: 299.99,
    isAvailable: true
  },
  {
    hotelId: "hotel_002",
    hotelName: "Seaside Resort & Spa",
    description: "Beautiful beachfront resort with private beach access and full-service spa facilities.",
    address: "456 Ocean Drive",
    city: "Miami",
    country: "USA",
    images: [
      "https://example.com/images/seaside-1.jpg",
      "https://example.com/images/seaside-2.jpg",
      "https://example.com/images/seaside-3.jpg"
    ],
    rating: 4.6,
    reviewCount: 892,
    amenities: ["WiFi", "Beach Access", "Pool", "Spa", "Restaurant", "Bar", "Water Sports"],
    propertyType: ["Resort", "Beachfront"],
    location: {
      latitude: 25.7617,
      longitude: -80.1918,
      landmark: "South Beach",
      distanceFromCenter: 2.1
    },
    contactInfo: {
      phone: "+1-555-0456",
      email: "reservations@seasideresort.com",
      website: "https://seasideresort.com"
    },
    checkInOutPolicy: {
      checkInTime: "16:00",
      checkOutTime: "12:00",
      cancellationPolicy: "Free cancellation up to 48 hours before check-in"
    },
    lowestPrice: 199.99,
    isAvailable: true
  },
  {
    hotelId: "hotel_003",
    hotelName: "Mountain View Lodge",
    description: "Cozy mountain retreat with breathtaking views and outdoor activities.",
    address: "789 Alpine Trail",
    city: "Denver",
    country: "USA",
    images: [
      "https://example.com/images/mountain-1.jpg",
      "https://example.com/images/mountain-2.jpg",
      "https://example.com/images/mountain-3.jpg"
    ],
    rating: 4.4,
    reviewCount: 563,
    amenities: ["WiFi", "Fireplace", "Hiking", "Restaurant", "Bar", "Parking"],
    propertyType: ["Lodge", "Mountain"],
    location: {
      latitude: 39.7392,
      longitude: -104.9903,
      landmark: "Rocky Mountains",
      distanceFromCenter: 15.3
    },
    contactInfo: {
      phone: "+1-555-0789",
      email: "info@mountainlodge.com",
      website: "https://mountainlodge.com"
    },
    checkInOutPolicy: {
      checkInTime: "15:00",
      checkOutTime: "11:00",
      cancellationPolicy: "Free cancellation up to 72 hours before check-in"
    },
    lowestPrice: 149.99,
    isAvailable: true
  },
  {
    hotelId: "hotel_004",
    hotelName: "Business Center Hotel",
    description: "Modern business hotel with state-of-the-art conference facilities and executive amenities.",
    address: "321 Commerce Street",
    city: "Chicago",
    country: "USA",
    images: [
      "https://example.com/images/business-1.jpg",
      "https://example.com/images/business-2.jpg",
      "https://example.com/images/business-3.jpg"
    ],
    rating: 4.2,
    reviewCount: 734,
    amenities: ["WiFi", "Business Center", "Meeting Rooms", "Gym", "Restaurant", "Laundry"],
    propertyType: ["Hotel", "Business"],
    location: {
      latitude: 41.8781,
      longitude: -87.6298,
      landmark: "Downtown Chicago",
      distanceFromCenter: 0.8
    },
    contactInfo: {
      phone: "+1-555-0321",
      email: "bookings@businesscenter.com",
      website: "https://businesscenter.com"
    },
    checkInOutPolicy: {
      checkInTime: "14:00",
      checkOutTime: "12:00",
      cancellationPolicy: "Free cancellation up to 24 hours before check-in"
    },
    lowestPrice: 179.99,
    isAvailable: true
  },
  {
    hotelId: "hotel_005",
    hotelName: "Budget Inn Express",
    description: "Clean and comfortable budget accommodation with essential amenities.",
    address: "654 Main Street",
    city: "Austin",
    country: "USA",
    images: [
      "https://example.com/images/budget-1.jpg",
      "https://example.com/images/budget-2.jpg"
    ],
    rating: 3.8,
    reviewCount: 421,
    amenities: ["WiFi", "Parking", "Continental Breakfast"],
    propertyType: ["Hotel", "Budget"],
    location: {
      latitude: 30.2672,
      longitude: -97.7431,
      landmark: "Austin Downtown",
      distanceFromCenter: 1.2
    },
    contactInfo: {
      phone: "+1-555-0654",
      email: "info@budgetinn.com",
      website: null
    },
    checkInOutPolicy: {
      checkInTime: "15:00",
      checkOutTime: "11:00",
      cancellationPolicy: "Free cancellation up to 24 hours before check-in"
    },
    lowestPrice: 79.99,
    isAvailable: true
  }
];

const rooms = [
  // Hotel 001 rooms
  {
    roomId: "room_001_001",
    hotelId: "hotel_001",
    roomType: "Deluxe Suite",
    roomName: "Royal Deluxe Suite",
    description: "Spacious suite with city views, separate living area, and premium amenities.",
    maxOccupancy: 4,
    pricePerNight: 399.99,
    images: [
      "https://example.com/images/suite-1.jpg",
      "https://example.com/images/suite-2.jpg"
    ],
    amenities: ["King Bed", "Living Room", "Minibar", "City View", "Marble Bathroom"],
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 0,
      kingBeds: 1,
      queenBeds: 0
    },
    roomSize: 65.5,
    availableCount: 3
  },
  {
    roomId: "room_001_002",
    hotelId: "hotel_001",
    roomType: "Standard Room",
    roomName: "Classic King Room",
    description: "Comfortable king room with modern amenities and city views.",
    maxOccupancy: 2,
    pricePerNight: 299.99,
    images: [
      "https://example.com/images/king-room-1.jpg",
      "https://example.com/images/king-room-2.jpg"
    ],
    amenities: ["King Bed", "Work Desk", "Coffee Maker", "City View"],
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 0,
      kingBeds: 1,
      queenBeds: 0
    },
    roomSize: 35.0,
    availableCount: 8
  },
  // Hotel 002 rooms
  {
    roomId: "room_002_001",
    hotelId: "hotel_002",
    roomType: "Ocean View Suite",
    roomName: "Premium Ocean Suite",
    description: "Luxurious oceanfront suite with private balcony and stunning sea views.",
    maxOccupancy: 4,
    pricePerNight: 349.99,
    images: [
      "https://example.com/images/ocean-suite-1.jpg",
      "https://example.com/images/ocean-suite-2.jpg"
    ],
    amenities: ["Ocean View", "Private Balcony", "King Bed", "Sofa Bed", "Minibar"],
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 0,
      kingBeds: 1,
      queenBeds: 0
    },
    roomSize: 55.0,
    availableCount: 5
  },
  {
    roomId: "room_002_002",
    hotelId: "hotel_002",
    roomType: "Standard Room",
    roomName: "Garden View Room",
    description: "Comfortable room with garden views and beach access.",
    maxOccupancy: 2,
    pricePerNight: 199.99,
    images: [
      "https://example.com/images/garden-room-1.jpg"
    ],
    amenities: ["Queen Bed", "Garden View", "Beach Access", "Coffee Maker"],
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 0,
      kingBeds: 0,
      queenBeds: 1
    },
    roomSize: 30.0,
    availableCount: 12
  },
  // Hotel 003 rooms
  {
    roomId: "room_003_001",
    hotelId: "hotel_003",
    roomType: "Mountain Suite",
    roomName: "Alpine Mountain Suite",
    description: "Rustic suite with fireplace and panoramic mountain views.",
    maxOccupancy: 6,
    pricePerNight: 249.99,
    images: [
      "https://example.com/images/alpine-suite-1.jpg",
      "https://example.com/images/alpine-suite-2.jpg"
    ],
    amenities: ["Mountain View", "Fireplace", "Kitchenette", "Sofa Bed", "Private Deck"],
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 1,
      kingBeds: 1,
      queenBeds: 0
    },
    roomSize: 70.0,
    availableCount: 4
  },
  {
    roomId: "room_003_002",
    hotelId: "hotel_003",
    roomType: "Standard Room",
    roomName: "Cozy Mountain Room",
    description: "Warm and inviting room with mountain charm and modern comfort.",
    maxOccupancy: 2,
    pricePerNight: 149.99,
    images: [
      "https://example.com/images/cozy-room-1.jpg"
    ],
    amenities: ["Queen Bed", "Mountain View", "Coffee Maker", "Reading Nook"],
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 0,
      kingBeds: 0,
      queenBeds: 1
    },
    roomSize: 25.0,
    availableCount: 10
  },
  // Hotel 004 rooms
  {
    roomId: "room_004_001",
    hotelId: "hotel_004",
    roomType: "Executive Suite",
    roomName: "Business Executive Suite",
    description: "Premium suite designed for business travelers with work area and meeting space.",
    maxOccupancy: 3,
    pricePerNight: 279.99,
    images: [
      "https://example.com/images/exec-suite-1.jpg",
      "https://example.com/images/exec-suite-2.jpg"
    ],
    amenities: ["King Bed", "Work Area", "Meeting Table", "City View", "Executive Lounge Access"],
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 0,
      kingBeds: 1,
      queenBeds: 0
    },
    roomSize: 45.0,
    availableCount: 6
  },
  {
    roomId: "room_004_002",
    hotelId: "hotel_004",
    roomType: "Standard Room",
    roomName: "Business Standard Room",
    description: "Well-appointed room with work desk and business amenities.",
    maxOccupancy: 2,
    pricePerNight: 179.99,
    images: [
      "https://example.com/images/business-room-1.jpg"
    ],
    amenities: ["Queen Bed", "Work Desk", "Ergonomic Chair", "High-Speed WiFi"],
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 0,
      kingBeds: 0,
      queenBeds: 1
    },
    roomSize: 28.0,
    availableCount: 15
  },
  // Hotel 005 rooms
  {
    roomId: "room_005_001",
    hotelId: "hotel_005",
    roomType: "Standard Room",
    roomName: "Economy Double Room",
    description: "Clean and comfortable room with essential amenities at an affordable price.",
    maxOccupancy: 2,
    pricePerNight: 79.99,
    images: [
      "https://example.com/images/economy-room-1.jpg"
    ],
    amenities: ["Double Bed", "WiFi", "TV", "Private Bathroom"],
    bedConfiguration: {
      singleBeds: 0,
      doubleBeds: 1,
      kingBeds: 0,
      queenBeds: 0
    },
    roomSize: 20.0,
    availableCount: 20
  }
];

const reviews = [
  // Hotel 001 reviews
  {
    reviewId: "review_001",
    hotelId: "hotel_001",
    userId: "user_123",
    userName: "Sarah Johnson",
    rating: 5.0,
    title: "Exceptional luxury experience",
    comment: "The Grand Palace Hotel exceeded all expectations. The service was impeccable, rooms were stunning, and the location couldn't be better. Will definitely return!",
    reviewDate: "2024-07-15",
    categories: {
      cleanliness: 5.0,
      comfort: 5.0,
      location: 5.0,
      service: 5.0,
      valueForMoney: 4.5
    },
    isVerifiedStay: true
  },
  {
    reviewId: "review_002",
    hotelId: "hotel_001",
    userId: "user_456",
    userName: "Michael Chen",
    rating: 4.5,
    title: "Great hotel, minor issues",
    comment: "Beautiful hotel with excellent amenities. The only downside was the noise from the street at night, but overall a wonderful stay.",
    reviewDate: "2024-07-10",
    categories: {
      cleanliness: 4.5,
      comfort: 4.0,
      location: 5.0,
      service: 4.5,
      valueForMoney: 4.0
    },
    isVerifiedStay: true
  },
  // Hotel 002 reviews
  {
    reviewId: "review_003",
    hotelId: "hotel_002",
    userId: "user_789",
    userName: "Emily Rodriguez",
    rating: 4.8,
    title: "Perfect beach getaway",
    comment: "Amazing beachfront location with direct beach access. The spa was incredible and the staff was so friendly and helpful.",
    reviewDate: "2024-07-20",
    categories: {
      cleanliness: 4.5,
      comfort: 5.0,
      location: 5.0,
      service: 5.0,
      valueForMoney: 4.5
    },
    isVerifiedStay: true
  },
  {
    reviewId: "review_004",
    hotelId: "hotel_002",
    userId: "user_321",
    userName: "David Thompson",
    rating: 4.2,
    title: "Good resort with great amenities",
    comment: "The resort has excellent facilities and the beach is beautiful. Food could be improved, but overall a pleasant experience.",
    reviewDate: "2024-07-18",
    categories: {
      cleanliness: 4.0,
      comfort: 4.5,
      location: 5.0,
      service: 4.0,
      valueForMoney: 4.0
    },
    isVerifiedStay: true
  },
  // Hotel 003 reviews
  {
    reviewId: "review_005",
    hotelId: "hotel_003",
    userId: "user_654",
    userName: "Lisa Park",
    rating: 4.6,
    title: "Peaceful mountain retreat",
    comment: "Loved the mountain views and cozy atmosphere. Perfect for a relaxing getaway from city life. The hiking trails nearby are fantastic.",
    reviewDate: "2024-07-12",
    categories: {
      cleanliness: 4.5,
      comfort: 4.5,
      location: 5.0,
      service: 4.5,
      valueForMoney: 4.5
    },
    isVerifiedStay: true
  },
  // Hotel 004 reviews
  {
    reviewId: "review_006",
    hotelId: "hotel_004",
    userId: "user_987",
    userName: "Robert Wilson",
    rating: 4.3,
    title: "Excellent for business travel",
    comment: "Perfect location for business meetings. The conference facilities are top-notch and the rooms are comfortable for working.",
    reviewDate: "2024-07-08",
    categories: {
      cleanliness: 4.0,
      comfort: 4.5,
      location: 4.5,
      service: 4.5,
      valueForMoney: 4.0
    },
    isVerifiedStay: true
  },
  // Hotel 005 reviews
  {
    reviewId: "review_007",
    hotelId: "hotel_005",
    userId: "user_147",
    userName: "Anna Martinez",
    rating: 3.9,
    title: "Good value for money",
    comment: "Basic but clean accommodations. Great for budget travelers who just need a place to sleep. Staff was helpful.",
    reviewDate: "2024-07-25",
    categories: {
      cleanliness: 4.0,
      comfort: 3.5,
      location: 4.0,
      service: 4.0,
      valueForMoney: 4.5
    },
    isVerifiedStay: true
  }
];

const attractions = [
  // Hotel 001 attractions (New York)
  {
    hotelId: "hotel_001",
    name: "Times Square",
    category: "Entertainment",
    distance: 0.3,
    location: {
      latitude: 40.7580,
      longitude: -73.9855
    }
  },
  {
    hotelId: "hotel_001",
    name: "Central Park",
    category: "Park",
    distance: 1.2,
    location: {
      latitude: 40.7812,
      longitude: -73.9665
    }
  },
  {
    hotelId: "hotel_001",
    name: "Empire State Building",
    category: "Landmark",
    distance: 0.8,
    location: {
      latitude: 40.7484,
      longitude: -73.9857
    }
  },
  // Hotel 002 attractions (Miami)
  {
    hotelId: "hotel_002",
    name: "South Beach",
    category: "Beach",
    distance: 0.1,
    location: {
      latitude: 25.7617,
      longitude: -80.1918
    }
  },
  {
    hotelId: "hotel_002",
    name: "Art Deco District",
    category: "Cultural",
    distance: 0.5,
    location: {
      latitude: 25.7814,
      longitude: -80.1300
    }
  },
  {
    hotelId: "hotel_002",
    name: "Bayside Marketplace",
    category: "Shopping",
    distance: 2.3,
    location: {
      latitude: 25.7783,
      longitude: -80.1868
    }
  },
  // Hotel 003 attractions (Denver)
  {
    hotelId: "hotel_003",
    name: "Rocky Mountain National Park",
    category: "Nature",
    distance: 5.2,
    location: {
      latitude: 40.3428,
      longitude: -105.6836
    }
  },
  {
    hotelId: "hotel_003",
    name: "Red Rocks Amphitheatre",
    category: "Entertainment",
    distance: 8.7,
    location: {
      latitude: 39.6654,
      longitude: -105.2057
    }
  },
  {
    hotelId: "hotel_003",
    name: "Mount Evans Scenic Drive",
    category: "Scenic Drive",
    distance: 12.1,
    location: {
      latitude: 39.5883,
      longitude: -105.6438
    }
  },
  // Hotel 004 attractions (Chicago)
  {
    hotelId: "hotel_004",
    name: "Millennium Park",
    category: "Park",
    distance: 0.4,
    location: {
      latitude: 41.8826,
      longitude: -87.6226
    }
  },
  {
    hotelId: "hotel_004",
    name: "Navy Pier",
    category: "Entertainment",
    distance: 1.1,
    location: {
      latitude: 41.8917,
      longitude: -87.6086
    }
  },
  {
    hotelId: "hotel_004",
    name: "Art Institute of Chicago",
    category: "Museum",
    distance: 0.6,
    location: {
      latitude: 41.8796,
      longitude: -87.6237
    }
  },
  // Hotel 005 attractions (Austin)
  {
    hotelId: "hotel_005",
    name: "South by Southwest (SXSW)",
    category: "Event Venue",
    distance: 0.8,
    location: {
      latitude: 30.2656,
      longitude: -97.7414
    }
  },
  {
    hotelId: "hotel_005",
    name: "Lady Bird Lake",
    category: "Nature",
    distance: 1.5,
    location: {
      latitude: 30.2500,
      longitude: -97.7500
    }
  },
  {
    hotelId: "hotel_005",
    name: "Texas State Capitol",
    category: "Landmark",
    distance: 2.1,
    location: {
      latitude: 30.2747,
      longitude: -97.7404
    }
  }
];

module.exports = {
  hotels,
  rooms,
  reviews,
  attractions
};
