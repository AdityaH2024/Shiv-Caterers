/* ============================================================
   SHIV CATERERS — Shared Menu Data
   File: menu-data.js
   Extracted from official Shiv Caterers menu card
   ============================================================ */

var SHIV_MENU = [
  {
    id: 'welcome-drinks',
    name: 'Welcome Drinks',
    icon: '🥤',
    items: [
      'Rose Sharbat', 'Orange Rasna', 'Pineapple Rasna', 'Lemon Rasna',
      'Limbu Sharbat', 'Kokam Sharbat', 'Kairi Panha', 'Mirinda', 'Thumbs Up', 'Fanta', 'Lassi'
    ]
  },
  {
    id: 'hot-drinks',
    name: 'Hot Drinks',
    icon: '☕',
    items: ['Chai (Tea)', 'Coffee']
  },
  {
    id: 'soups',
    name: 'Soups',
    icon: '🍜',
    items: [
      'Tomato Soup', 'Manchow Soup', 'Sweet Corn Soup',
      'Veg Hot & Sour Soup', 'Veg Clear Soup'
    ]
  },
  {
    id: 'starters',
    name: 'Starters',
    icon: '🥗',
    items: [
      'Veg Manchurian', 'Paneer Chilli', 'Harabhara Kabab', 'Cutlet / Tikki', 'Corn Kabab'
    ]
  },
  {
    id: 'paneer-dishes',
    name: 'Paneer Dishes (Gravy)',
    icon: '🧀',
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
    icon: '🥕',
    items: [
      'Aloo Palak', 'Vangi Fry Masala', 'Mix Veg', 'Aloo Gobi',
      'Aloo Methi', 'Matki Usal', 'Matar Usal', 'Batata Dosa Bhaji', 'Dam Aloo'
    ]
  },
  {
    id: 'dal',
    name: 'Dal Varieties',
    icon: '🫘',
    items: [
      'Dal Tadka', 'Sadi Kadhi', 'Gujarati Kadhi', 'Dal Fry',
      'Sadi Dal', 'Sambar', 'Dal Makhni', 'Katachi Amti', 'Kadhi Pakoda'
    ]
  },
  {
    id: 'rice',
    name: 'Rice & Pulav',
    icon: '🍚',
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
    icon: '🫓',
    premium: true,
    items: [
      'Puri', 'Methi Puri', 'Khasta Puri', 'Palak Puri', 'Chapati',
      'Phulka', 'Rumali Roti ★', 'Tandoori Roti ★', 'Naan ★', 'Tava Paratha ★'
    ]
  },
  {
    id: 'bhaji-fritters',
    name: 'Bhaji (Fritters)',
    icon: '🧆',
    items: [
      'Batata Bhaji', 'Mini Batata Vada', 'Kanda Palak Mix',
      'Kanda Kurkuri Bhaji', 'Palak Bhaji', 'Mug Bhaji'
    ]
  },
  {
    id: 'sweets',
    name: 'Sweets (Mithai)',
    icon: '🍮',
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
    icon: '🫙',
    items: [
      'Pudina Chutney', 'Ola Khobra Chutney', 'Imli Chutney',
      'Sauce', 'Thecha', 'Shejwan Chutney'
    ]
  },
  {
    id: 'common',
    name: 'Common Items',
    icon: '🥒',
    items: [
      'Papad', 'Lonche (Pickle)', 'Bisleri Water', 'Badishep + Khadisaakhar', 'Koeshimbir / Salad'
    ]
  },
  {
    id: 'salads-raita',
    name: 'Salad & Raita',
    icon: '🥗',
    items: [
      'Koeshimbir', 'Vegetable Salad', 'Bundi Raita (Dry)',
      'Bundi Raita (Thin)', 'Pineapple Raita'
    ]
  },
  {
    id: 'breakfast',
    name: 'Breakfast / Nashta',
    icon: '🌅',
    items: ['Poha Shev + Limbu', 'Upit Shev + Limbu']
  },
  {
    id: 'chinese',
    name: 'Chinese',
    icon: '🍜',
    premium: true,
    items: [
      'Veg Manchurian ★', 'Fried Rice ★', 'Shejwan Rice ★', 'Spring Roll ★', 'Noodles ★'
    ]
  },
  {
    id: 'chaat',
    name: 'Chaat Counter',
    icon: '🧆',
    premium: true,
    items: [
      'Pani Puri ★', 'Bhel ★', 'Shev Papdi Chaat ★', 'Aloo Tikki ★', 'Dahi Vada ★'
    ]
  },
  {
    id: 'fasting',
    name: 'Fasting Foods (Upvas)',
    icon: '🙏',
    premium: true,
    items: ['Sabudana Vada ★', 'Sabudana Khichdi ★', 'Batata Wafers ★']
  },
  {
    id: 'fruit-stall',
    name: 'Fruit Stall',
    icon: '🍎',
    premium: true,
    items: ['Safarchand / Papaya ★', 'Keli / Chikku ★', 'Kalingad / Tarbuj ★']
  },
  {
    id: 'light-meals',
    name: 'Light Meals',
    icon: '🥙',
    premium: true,
    items: ['Pav Bhaji ★', 'Chole Bhatura ★', 'Puri Bhaji ★']
  },
  {
    id: 'mukhavas',
    name: 'Mukhavas (After-Meal)',
    icon: '🌿',
    premium: true,
    items: ['Paan ★']
  },
  {
    id: 'ice-cream',
    name: 'Ice Cream',
    icon: '🍦',
    premium: true,
    items: ['Vanilla + Chocolate Sauce ★', 'Butter Scotch ★']
  }
];
