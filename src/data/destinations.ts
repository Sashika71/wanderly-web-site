
export interface Destination {
  id: string;
  name: string;
  country: string;
  category: string;
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  price: number;
  duration: string;
  description: string;
  activities: string[];
  featured: boolean;
}

export const destinations: Destination[] = [
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1000&q=85",
    ],
    rating: 4.9,
    reviews: 284,
    price: 850,
    duration: "5 Days / 4 Nights",
    description:
      "Discover the tropical beauty of Bali, an island filled with golden beaches, peaceful temples, lush rice terraces and breathtaking landscapes. Whether you want to relax by the ocean or explore local culture, Bali offers an unforgettable travel experience.",
    activities: [
      "Explore beautiful tropical beaches",
      "Visit traditional Balinese temples",
      "Discover the famous rice terraces",
      "Enjoy snorkeling and water activities",
      "Experience local food and culture",
    ],
    featured: true,
  },
  {
    id: "ella",
    name: "Ella",
    country: "Sri Lanka",
    category: "Nature",
    image: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/03/Nine-Arch-Bridge-Ella-Sri-Lanka.jpg?resize=1024%2C678&ssl=1",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
    ],
    rating: 4.8,
    reviews: 196,
    price: 320,
    duration: "3 Days / 2 Nights",
    description:
      "Escape to the peaceful mountain town of Ella, surrounded by green hills, tea plantations and spectacular views. Enjoy scenic train journeys, beautiful hiking trails and the relaxing atmosphere of Sri Lanka's hill country.",
    activities: [
      "Visit the Nine Arches Bridge",
      "Hike to Little Adam's Peak",
      "Explore tea plantations",
      "Enjoy scenic train journeys",
      "Discover waterfalls and mountain views",
    ],
    featured: true,
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    category: "City",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1494587416117-f102a2ac0a8d?auto=format&fit=crop&w=1000&q=85",
    ],
    rating: 4.9,
    reviews: 352,
    price: 1200,
    duration: "6 Days / 5 Nights",
    description:
      "Experience the charm of Paris, a city known for its iconic landmarks, romantic streets, world-famous museums and beautiful architecture. Discover French culture while enjoying unforgettable city experiences.",
    activities: [
      "Visit the Eiffel Tower",
      "Explore the Louvre Museum",
      "Enjoy a Seine River cruise",
      "Discover charming Parisian streets",
      "Experience French cafés and cuisine",
    ],
    featured: true,
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85",
    ],
    rating: 5.0,
    reviews: 421,
    price: 1500,
    duration: "4 Days / 3 Nights",
    description:
      "Relax in the Maldives, a tropical paradise surrounded by turquoise waters, white sandy beaches and beautiful island resorts. Enjoy peaceful ocean views and unforgettable experiences in one of the world's most beautiful island destinations.",
    activities: [
      "Enjoy snorkeling and diving",
      "Relax on white sandy beaches",
      "Experience a sunset boat trip",
      "Explore beautiful coral reefs",
      "Enjoy island resort experiences",
    ],
    featured: true,
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1000&q=85",
    ],
    rating: 4.8,
    reviews: 218,
    price: 1100,
    duration: "5 Days / 4 Nights",
    description:
      "Discover Kyoto, a beautiful Japanese city where traditional culture meets peaceful natural scenery. Explore historic temples, traditional gardens, bamboo forests and charming streets.",
    activities: [
      "Visit traditional Japanese temples",
      "Walk through the Arashiyama Bamboo Grove",
      "Explore the Gion district",
      "Experience a traditional tea ceremony",
      "Discover beautiful Japanese gardens",
    ],
    featured: true,
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=85",
    ],
    rating: 4.9,
    reviews: 305,
    price: 1350,
    duration: "5 Days / 4 Nights",
    description:
      "Enjoy the stunning island of Santorini, famous for its whitewashed buildings, blue domes, beautiful coastal views and unforgettable sunsets. Discover charming villages and relax beside the Aegean Sea.",
    activities: [
      "Watch the famous Santorini sunset",
      "Explore Oia village",
      "Relax at unique volcanic beaches",
      "Enjoy a boat trip around the island",
      "Discover local Greek food and culture",
    ],
    featured: true,
  },
];
