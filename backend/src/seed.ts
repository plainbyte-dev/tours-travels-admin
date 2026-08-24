import 'dotenv/config';
import mongoose from 'mongoose';
import { Package } from './models/Package';
import type { PackageInput } from './schemas/package.schema';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tours-travels';

const noMeals = { breakfast: false, lunch: false, dinner: false };
const allMeals = { breakfast: true, lunch: true, dinner: true };

const pokharaPackage: PackageInput = {
  category: 'nepal-tours',
  title: 'Pokhara Lakeside & Sarangkot Sunrise',
  coverImage: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1200',
  destinations: ['Pokhara'],
  duration: '5-7',
  bestTimeToVisit: [
    { month: 'October', rating: 'best' },
    { month: 'November', rating: 'best' },
    { month: 'March', rating: 'normal' },
    { month: 'April', rating: 'normal' },
    { month: 'July', rating: 'average' },
  ],
  description:
    'A relaxed six-day escape to Pokhara combining lakeside leisure, a sunrise hike over the Annapurna range, and cultural stops around the valley. Ideal for travellers who want mountain views without a multi-day trek.',
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Pokhara',
      description: 'Arrive in Pokhara, transfer to hotel, and enjoy a relaxed evening walk along Phewa Lake.',
      images: [],
      keyActivities: ['Airport pickup', 'Lakeside stroll', 'Welcome dinner'],
      accommodation: 'Lakeside boutique hotel',
      transportation: 'Private car from Pokhara airport',
      meals: { ...noMeals, dinner: true },
    },
    {
      day: 2,
      title: 'Sarangkot Sunrise Hike',
      description: 'Early morning drive to Sarangkot to watch sunrise over the Annapurna and Machhapuchhre ranges, followed by a gentle downhill hike back to the lake.',
      images: [],
      keyActivities: ['Sunrise viewpoint', 'Downhill hike', 'Photography'],
      accommodation: 'Lakeside boutique hotel',
      transportation: 'Private jeep to Sarangkot',
      meals: allMeals,
    },
    {
      day: 3,
      title: 'Caves and Viewpoints',
      description: 'Visit Davis Falls, Gupteshwor Cave, and the World Peace Pagoda across the lake, with a boat ride included.',
      images: [],
      keyActivities: ['Davis Falls', 'Gupteshwor Cave', 'World Peace Pagoda', 'Boating'],
      accommodation: 'Lakeside boutique hotel',
      transportation: 'Private car and rowboat',
      meals: { ...noMeals, breakfast: true },
    },
    {
      day: 4,
      title: 'Begnas Lake Day Trip',
      description: 'A quieter alternative to Phewa Lake — cycle or drive out to Begnas Lake for a peaceful countryside afternoon.',
      images: [],
      keyActivities: ['Cycling', 'Begnas Lake', 'Local village walk'],
      accommodation: 'Lakeside boutique hotel',
      transportation: 'Mountain bike rental',
      meals: { ...noMeals, breakfast: true },
    },
    {
      day: 5,
      title: 'International Mountain Museum',
      description: 'Explore the International Mountain Museum and Old Pokhara Bazaar before a free afternoon for shopping and cafes.',
      images: [],
      keyActivities: ['Mountain Museum', 'Old Bazaar', 'Free time'],
      accommodation: 'Lakeside boutique hotel',
      transportation: 'On foot / private car',
      meals: { ...noMeals, breakfast: true },
    },
    {
      day: 6,
      title: 'Departure',
      description: 'Final breakfast by the lake before transfer to the airport for departure.',
      images: [],
      keyActivities: ['Farewell breakfast', 'Airport transfer'],
      accommodation: 'N/A',
      transportation: 'Private car to airport',
      meals: { ...noMeals, breakfast: true },
    },
  ],
  cost: { from: 25000, to: 40000, currency: 'NPR', unit: 'per_person' },
  status: 'published',
};

const chitwanPackage: PackageInput = {
  category: 'nepal-tours',
  title: 'Chitwan Jungle Safari Escape',
  coverImage: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1200',
  destinations: ['Chitwan'],
  duration: '3-4',
  bestTimeToVisit: [
    { month: 'October', rating: 'best' },
    { month: 'January', rating: 'normal' },
    { month: 'February', rating: 'normal' },
  ],
  description:
    'A compact three-day jungle safari in Chitwan National Park featuring canoe rides, wildlife tracking, and an evening Tharu cultural show.',
  itinerary: [
    {
      day: 1,
      title: 'Arrival and Village Walk',
      description: 'Arrive at Sauraha, check in to a jungle resort, and take a guided walk through a Tharu village.',
      images: [],
      keyActivities: ['Tharu village walk', 'Resort check-in', 'Cultural show'],
      accommodation: 'Jungle resort, Sauraha',
      transportation: 'Private car from Bharatpur airport',
      meals: { ...noMeals, dinner: true },
    },
    {
      day: 2,
      title: 'Canoe Ride and Jungle Safari',
      description: 'Morning canoe ride along the Rapti River followed by a full jeep safari inside Chitwan National Park to spot rhinos and birdlife.',
      images: [],
      keyActivities: ['Canoe ride', 'Jeep safari', 'Bird watching'],
      accommodation: 'Jungle resort, Sauraha',
      transportation: 'Canoe and safari jeep',
      meals: allMeals,
    },
    {
      day: 3,
      title: 'Elephant Breeding Center and Departure',
      description: 'Visit the Elephant Breeding Center in the morning, then transfer back with a stop at a riverside viewpoint before departure.',
      images: [],
      keyActivities: ['Elephant Breeding Center', 'Riverside viewpoint'],
      accommodation: 'N/A',
      transportation: 'Private car to Bharatpur airport',
      meals: { ...noMeals, breakfast: true },
    },
  ],
  cost: { from: 12000, to: 18000, currency: 'NPR', unit: 'per_person' },
  status: 'published',
};

const kathmanduLumbiniPackage: PackageInput = {
  category: 'nepal-tours',
  title: 'Kathmandu Heritage & Lumbini Pilgrimage',
  coverImage: 'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=1200',
  destinations: ['Kathmandu', 'Lumbini'],
  duration: '8-10',
  bestTimeToVisit: [
    { month: 'September', rating: 'best' },
    { month: 'October', rating: 'best' },
    { month: 'November', rating: 'normal' },
    { month: 'March', rating: 'normal' },
  ],
  description:
    'An eight-day journey through Kathmandu Valley\'s UNESCO heritage sites followed by a peaceful pilgrimage to Lumbini, the birthplace of Lord Buddha, with monasteries and gardens along the way.',
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Kathmandu',
      description: 'Arrive in Kathmandu, transfer to hotel, and relax with an orientation walk around Thamel in the evening.',
      images: [],
      keyActivities: ['Airport pickup', 'Thamel walk'],
      accommodation: 'Heritage hotel, Kathmandu',
      transportation: 'Private car from Tribhuvan International Airport',
      meals: { ...noMeals, dinner: true },
    },
    {
      day: 2,
      title: 'Kathmandu Durbar Square and Swayambhunath',
      description: 'Guided tour of Kathmandu Durbar Square followed by a visit to the Swayambhunath (Monkey Temple) stupa complex.',
      images: [],
      keyActivities: ['Durbar Square', 'Swayambhunath Stupa'],
      accommodation: 'Heritage hotel, Kathmandu',
      transportation: 'Private car with guide',
      meals: { ...noMeals, breakfast: true },
    },
    {
      day: 3,
      title: 'Bhaktapur and Patan',
      description: 'Full-day exploration of the medieval squares of Bhaktapur and Patan, including pottery square and traditional Newari architecture.',
      images: [],
      keyActivities: ['Bhaktapur Durbar Square', 'Patan Durbar Square', 'Pottery Square'],
      accommodation: 'Heritage hotel, Kathmandu',
      transportation: 'Private car with guide',
      meals: { ...noMeals, breakfast: true },
    },
    {
      day: 4,
      title: 'Pashupatinath and Boudhanath',
      description: 'Visit the sacred Pashupatinath Temple on the Bagmati River, then the vast Boudhanath Stupa, one of the largest in the world.',
      images: [],
      keyActivities: ['Pashupatinath Temple', 'Boudhanath Stupa'],
      accommodation: 'Heritage hotel, Kathmandu',
      transportation: 'Private car with guide',
      meals: { ...noMeals, breakfast: true },
    },
    {
      day: 5,
      title: 'Fly to Bhairahawa, Transfer to Lumbini',
      description: 'Morning flight to Bhairahawa followed by a short drive to Lumbini, with an evening visit to the Maya Devi Temple complex.',
      images: [],
      keyActivities: ['Domestic flight', 'Maya Devi Temple'],
      accommodation: 'Pilgrim lodge, Lumbini',
      transportation: 'Domestic flight and private car',
      meals: { ...noMeals, breakfast: true, dinner: true },
    },
    {
      day: 6,
      title: 'Lumbini Monastic Zone',
      description: 'Full day cycling or walking through the Lumbini Monastic Zone, visiting monasteries built by different Buddhist nations.',
      images: [],
      keyActivities: ['Monastic Zone', 'World Peace Pagoda, Lumbini', 'Cycling'],
      accommodation: 'Pilgrim lodge, Lumbini',
      transportation: 'Bicycle rental / walking',
      meals: allMeals,
    },
    {
      day: 7,
      title: 'Return to Kathmandu',
      description: 'Morning flight back to Kathmandu with a free afternoon for last-minute shopping in Thamel and Asan Bazaar.',
      images: [],
      keyActivities: ['Domestic flight', 'Thamel shopping', 'Asan Bazaar'],
      accommodation: 'Heritage hotel, Kathmandu',
      transportation: 'Domestic flight and private car',
      meals: { ...noMeals, breakfast: true },
    },
    {
      day: 8,
      title: 'Departure',
      description: 'Final breakfast at the hotel before transfer to the airport for international departure.',
      images: [],
      keyActivities: ['Farewell breakfast', 'Airport transfer'],
      accommodation: 'N/A',
      transportation: 'Private car to airport',
      meals: { ...noMeals, breakfast: true },
    },
  ],
  cost: { from: 550, to: 800, currency: 'USD', unit: 'per_person' },
  status: 'published',
};

const samplePackages = [pokharaPackage, chitwanPackage, kathmanduLumbiniPackage];

async function seed(): Promise<void> {
  await mongoose.connect(MONGODB_URI);
  await Package.deleteMany({});
  await Package.insertMany(samplePackages);
  console.log(`Seeded ${samplePackages.length} packages`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
