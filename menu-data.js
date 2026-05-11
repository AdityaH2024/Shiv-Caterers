/* ============================================================
   SHIV CATERERS — Shared Menu Data
   File: menu-data.js
   Extracted from official Shiv Caterers menu card
   ============================================================ */

var SHIV_MENU = [
  {
    id: 'welcome-drinks',
    name: 'Welcome Drinks',
    image: 'Welcome Drinks.png',
    items: [
      'Rose Sharbat', 'Orange Rasna', 'Pineapple Rasna', 'Lemon Rasna',
      'Limbu Sharbat', 'Kokam Sharbat', 'Kairi Panha', 'Mirinda', 'Thumbs Up', 'Fanta', 'Lassi'
    ]
  },
  {
    id: 'hot-drinks',
    name: 'Hot Drinks',
    image: 'Hot Drinks.png',
    items: ['Chai (Tea)', 'Coffee']
  },
  {
    id: 'soups',
    name: 'Soups',
    image: 'Soups.png',
    items: [
      'Tomato Soup', 'Manchow Soup', 'Sweet Corn Soup',
      'Veg Hot & Sour Soup', 'Veg Clear Soup'
    ]
  },
  {
    id: 'starters',
    name: 'Starters',
    image: 'Starters.png',
    items: [
      'Veg Manchurian', 'Paneer Chilli', 'Harabhara Kabab', 'Cutlet / Tikki', 'Corn Kabab'
    ]
  },
  {
    id: 'paneer-dishes',
    name: 'Paneer Dishes (Gravy)',
    image: 'Paneer Dishes (Gravy).png',
    premium: true,
    items: [
      'Matar Paneer', 'Shahi Paneer', 'Palak Paneer',
      'Paneer Tikka Masala', 'Paneer Butter Masala', 'Green Peas Masala',
      'Veg Kurma', 'Chole Masala', 'Rajma Masala', 'Matki Masala',
      'Saag Bhaji', 'Aloo Matar', 'Malai Kofta', 'Kaju Masala',
      'Rajwadi Aloo', 'Paneer Lababdar', 'Paneer Angara',
      'Paneer Hyderabadi', 'Paneer Do Pyaza', 'Paneer Kadhai',
      'Aloo Bhaji'
    ]
  },
  {
    id: 'dry-veg',
    name: 'Dry Veg (Suki Bhaji)',
    image: 'Dry Veg (Suki Bhaji).png',
    items: [
      'Aloo Palak', 'Vangi Fry Masala', 'Mix Veg', 'Aloo Gobi',
      'Aloo Methi', 'Matki Usal', 'Matar Usal', 'Batata Dosa Bhaji', 'Dam Aloo'
    ]
  },
  {
    id: 'dal',
    name: 'Dal Varieties',
    image: 'Dal Varieties.png',
    items: [
      'Dal Tadka', 'Sadi Kadhi', 'Gujarati Kadhi', 'Dal Fry',
      'Sadi Dal', 'Sambar', 'Dal Makhni', 'Katachi Amti', 'Kadhi Pakoda'
    ]
  },
  {
    id: 'rice',
    name: 'Rice & Pulav',
    image: 'Rice & Pulav.png',
    premium: true,
    items: [
      'Sadha Bhat (Plain Rice)', 'Masala Bhat', 'Veg Pulav', 'Matar Pulav',
      'Jeera Rice', 'Mugdal Khichdi', 'Paneer Pulav ★', 'Veg Biryani ★',
      'Shahi Pulav ★', 'Tava Pulav ★'
    ]
  },
  {
    id: 'roti',
    name: 'Roti & Breads',
    image: 'Roti & Breads.png',
    premium: true,
    items: [
      'Puri', 'Methi Puri', 'Khasta Puri', 'Palak Puri', 'Chapati',
      'Phulka', 'Rumali Roti ★', 'Tandoori Roti ★', 'Naan ★', 'Tava Paratha ★'
    ]
  },
  {
    id: 'bhaji-fritters',
    name: 'Bhaji (Fritters)',
    image: 'Bhaji (Fritters).png',
    items: [
      'Batata Bhaji', 'Mini Batata Vada', 'Kanda Palak Mix',
      'Kanda Kurkuri Bhaji', 'Palak Bhaji', 'Mug Bhaji'
    ]
  },
  {
    id: 'sweets',
    name: 'Sweets (Mithai)',
    image: 'Sweets (Mithai).png',
    premium: true,
    items: [
      'Gulab Jamun', 'Gulab Jamun (Dry)', 'Gulab Jamun (Hot)',
      'Pineapple Shira', 'Jilebi', 'Dollar Jilebi',
      'Shrikhand', 'Aamrakhand', 'Dryfruit Shrikhand ★', 'Fruit Shrikhand ★',
      'Shevai Kheer ★', 'Diljani ★', 'Rabdi ★', 'Sitafal Rabdi ★',
      'Mango Rabdi ★', 'Fruit Rabdi ★', 'Aamras ★', 'Basundi ★',
      'Ras Malai ★', 'Anguri Rasmallai ★', 'Kala Jamun ★',
      'Mug Dal Halwa ★', 'Gajar Halwa ★', 'Puran Poli ★',
      'Rasgulla ★', 'Traffic Jam ★', 'Shahi Tukda ★'
    ]
  },
  {
    id: 'chutney',
    name: 'Chutney & Accompaniments',
    image: 'Chutney & Accompaniments.png',
    items: [
      'Pudina Chutney', 'Ola Khobra Chutney', 'Imli Chutney',
      'Sauce', 'Thecha', 'Shejwan Chutney'
    ]
  },
  {
    id: 'common',
    name: 'Common Items',
    image: 'Common Items.png',
    items: [
      'Papad', 'Lonche (Pickle)', 'Bisleri Water', 'Badishep + Khadisaakhar', 'Koeshimbir / Salad'
    ]
  },
  {
    id: 'salads-raita',
    name: 'Salad & Raita',
    image: 'Salad & Raita.png',
    items: [
      'Koeshimbir', 'Vegetable Salad', 'Bundi Raita (Dry)',
      'Bundi Raita (Thin)', 'Pineapple Raita'
    ]
  },
  {
    id: 'breakfast',
    name: 'Breakfast / Nashta',
    image: 'Breakfast  Nashta.png',
    items: ['Poha Shev + Limbu', 'Upit Shev + Limbu']
  },
  {
    id: 'chinese',
    name: 'Chinese',
    image: 'Chinese.png',
    premium: true,
    items: [
      'Veg Manchurian ★', 'Fried Rice ★', 'Shejwan Rice ★', 'Spring Roll ★', 'Noodles ★'
    ]
  },
  {
    id: 'chaat',
    name: 'Chaat Counter',
    image: 'Chaat Counter.png',
    premium: true,
    items: [
      'Pani Puri ★', 'Bhel ★', 'Shev Papdi Chaat ★', 'Aloo Tikki ★', 'Dahi Vada ★'
    ]
  },
  {
    id: 'fasting',
    name: 'Fasting Foods (Upvas)',
    image: 'Fasting Foods (Upvas).png',
    premium: true,
    items: ['Sabudana Vada ★', 'Sabudana Khichdi ★', 'Batata Wafers ★']
  },
  {
    id: 'fruit-stall',
    name: 'Fruit Stall',
    image: 'Fruit Stall.png',
    premium: true,
    items: ['Safarchand / Papaya ★', 'Keli / Chikku ★', 'Kalingad / Tarbuj ★']
  },
  {
    id: 'light-meals',
    name: 'Light Meals',
    image: 'Light Meals.png',
    premium: true,
    items: ['Pav Bhaji ★', 'Chole Bhatura ★', 'Puri Bhaji ★']
  },
  {
    id: 'mukhavas',
    name: 'Mukhavas (After-Meal)',
    image: 'Mukhavas (After-Meal).png',
    premium: true,
    items: ['Paan ★']
  },
  {
    id: 'ice-cream',
    name: 'Ice Cream',
    image: 'Ice Cream.png',
    premium: true,
    items: ['Vanilla + Chocolate Sauce ★', 'Butter Scotch ★']
  }
];
