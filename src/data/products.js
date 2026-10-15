export const categoryBanners = [
  {
    id: 'everything-in-one-place',
    tag: 'Everyday Essentials',
    title: 'Everything In One Place',
    description: 'Practical essentials for every room, routine, and household.',
    buttonText: 'Shop Home',
    categoryId: 'home-and-kitchen',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'home-essentials',
    tag: 'Home Essentials',
    title: 'Family Care & Wellness',
    description: 'Helpful products for family care, wellness, and everyday comfort.',
    buttonText: 'Shop Care',
    categoryId: 'beauty-and-personal-care',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'everyday-care',
    tag: 'Everyday Care',
    title: 'Hobbies, Pets & Active Life',
    description: 'Gear, tools, and supplies for hobbies, pets, and active days.',
    buttonText: 'Browse More',
    categoryId: 'sports-pets-outdoors',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80'
  }
];

export const categories = [
  {
    id: 'tools-and-office-supplies',
    name: 'Tools & Office Supplies',
    tagline: 'Precision tools & modern workspace supplies',
    description: 'Tackle projects with confidence using practical tools, office supplies, and home improvement products that help keep tasks moving.',
    buttonText: 'Explore Tools',
    image: '/images/tools-office-1.jpg',
    itemCount: '12+ Items'
  },
  {
    id: 'sports-pets-outdoors',
    name: 'Sports, Pets & Outdoors',
    tagline: 'Active gear, fitness & pet comfort essentials',
    description: 'Find useful supplies for your pets, hobbies, and active lifestyle, from outdoor gear to toys and everyday pet essentials.',
    buttonText: 'Shop Outdoors',
    image: 'https://images.unsplash.com/photo-1687184144629-49f79ae829a0?q=85&w=800&fit=crop',
    itemCount: '18+ Items'
  },
  {
    id: 'beauty-and-personal-care',
    name: 'Beauty & Personal Care',
    tagline: 'Wellness, skincare & self-care essentials',
    description: 'Care for yourself and your family with dependable health, beauty, and personal care essentials chosen for everyday use.',
    buttonText: 'Browse Care',
    image: 'https://images.unsplash.com/photo-1589729444386-a41ec86f4359?q=85&w=800&fit=crop',
    itemCount: '15+ Items'
  },
  {
    id: 'home-and-kitchen',
    name: 'Home & Kitchen',
    tagline: 'Everyday cookware, dining & home comfort',
    description: 'Make daily routines easier with thoughtfully selected home and kitchen products for cooking, organizing, cleaning, and comfortable living.',
    buttonText: 'Shop Kitchen',
    image: 'https://images.unsplash.com/photo-1683803168320-ab1162844e89?q=85&w=800&fit=crop',
    itemCount: '24+ Items'
  },
  {
    id: 'automotive-essentials',
    name: 'Automotive Essentials',
    tagline: 'Vehicle maintenance & travel emergency gear',
    description: 'Keep your car ready for the road with practical automotive essentials designed for everyday maintenance, comfort, and convenience.',
    buttonText: 'Shop Automotive',
    image: 'https://images.unsplash.com/photo-1690776573395-d05779d199c1?q=85&w=800&fit=crop',
    itemCount: '10+ Items'
  }
];

export const products = [
  {
    id: 1,
    name: 'Tools & Office Supplies',
    shortTitle: 'Tools & Office Supplies',
    category: 'tools-and-office-supplies',
    categoryName: 'Tools & Office Supplies',
    sku: 'ZR-TOS-021',
    price: '₨ 40',
    priceNumeric: 40,
    originalPrice: '₨ 55',
    discount: '27% OFF',
    packSize: 'Multi-Piece Workspace Precision Kit',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 450,
    minOrder: '1 Unit',
    rating: 5.0,
    popularity: 99,
    reviewCount: 46,
    badge: 'Popular',
    image: '/images/tools-office-1.jpg',
    images: [
      '/images/tools-office-1.jpg',
      '/images/tools-office-2.jpg',
      'https://images.unsplash.com/photo-1671453359163-a9b0a56371d5?q=85&w=1000&fit=crop',
      'https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Tackle projects with confidence using practical tools, office supplies, and home improvement products that help keep tasks moving.',
    longDescription: 'Curated specifically for modern desks, home offices, creative studios, and household maintenance. This Tools & Office Supplies bundle combines durable forged carbon-steel hand tools with sleek desk organization equipment. Built to last with anti-corrosion matte black finish, shock-absorbing rubber grips, and an all-in-one organizer stand.',
    features: [
      'Industrial-grade forged alloy steel with anti-rust matte black finish',
      'Dual-purpose tools designed for household repairs, electronics, and office setups',
      'Compact organized desk caddy keeps screwdrivers, pens, pliers, and cutters sorted',
      'Ergonomic non-slip grips engineered for comfortable, strain-free handling',
      'Backed by Zaroora LLC quality inspection guarantee overseen by Muhammad Nasir'
    ],
    specs: [
      { label: 'Set Contents', value: 'Precision Driver Set, Measuring Tape, Heavy Utility Knife, Pliers, Desk Organizer Caddy' },
      { label: 'Material', value: 'High-Carbon Steel, ABS Polymer & Matte Alloy' },
      { label: 'Organizer Dimensions', value: '18 cm x 10 cm x 12 cm' },
      { label: 'Suitability', value: 'Home, Office, Electronics, Crafting & Repairs' },
      { label: 'Warranty', value: '1 Year Full Quality Guarantee' },
      { label: 'Verified Seller', value: 'Zaroora LLC (Muhammad Nasir)' }
    ],
    reviews: [
      {
        id: 1,
        author: 'Adeel Tariq',
        rating: 5,
        date: '2 days ago',
        comment: 'Super fast delivery in Lahore! The tools organizer looks very premium on my study desk. Precision drivers work great on laptops.'
      },
      {
        id: 2,
        author: 'Usman Malik',
        rating: 5,
        date: '1 week ago',
        comment: 'Completely satisfied with the quality. Muhammad Nasir’s team contacted me on WhatsApp with tracking details. Highly recommended!'
      }
    ]
  },
  {
    id: 2,
    name: 'Sports, Pets & Outdoors',
    shortTitle: 'Sports, Pets & Outdoors',
    category: 'sports-pets-outdoors',
    categoryName: 'Sports, Pets & Outdoors',
    sku: 'ZR-SPO-019',
    price: '₨ 28',
    priceNumeric: 28,
    originalPrice: '₨ 38',
    discount: '26% OFF',
    packSize: 'Active Lifestyle & Pet Care Pack',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 620,
    minOrder: '1 Unit',
    rating: 4.9,
    popularity: 96,
    reviewCount: 52,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1687184144629-49f79ae829a0?q=85&w=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1687184144629-49f79ae829a0?q=85&w=1000&fit=crop',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Find useful supplies for your pets, hobbies, and active lifestyle, from outdoor gear to toys and everyday pet essentials.',
    longDescription: 'Whether taking your canine companion for an evening hike or maintaining your personal fitness regimen, this versatile outdoor and pet pack delivers resilience and high utility. Features weatherproof fabrics, heavy-duty clips, and versatile fitness attachments.',
    features: [
      'Weather-resistant 600D ripstop nylon construction',
      'High-elasticity training resistance loops with reinforced webbing',
      'Pet care harness & quick-release reflective safety leash',
      'Lightweight and packable into any travel duffle or backpack',
      'Tested for active outdoor performance under demanding conditions'
    ],
    specs: [
      { label: 'Primary Use', value: 'Outdoor Fitness, Trail Walking & Pet Travel' },
      { label: 'Material', value: 'Ripstop Oxford Nylon, Steel Carabiners & Latex' },
      { label: 'Weight', value: '0.8 kg' },
      { label: 'Care', value: 'Wipe Clean / Hand Washable' },
      { label: 'Verified Seller', value: 'Zaroora LLC (Muhammad Nasir)' }
    ],
    reviews: [
      {
        id: 1,
        author: 'Hamza Sheikh',
        rating: 5,
        date: '3 days ago',
        comment: 'Great quality straps and pet harness. Sturdy stitching and nice material.'
      }
    ]
  },
  {
    id: 3,
    name: 'Beauty & Personal Care',
    shortTitle: 'Beauty & Personal Care',
    category: 'beauty-and-personal-care',
    categoryName: 'Beauty & Personal Care',
    sku: 'ZR-BPC-017',
    price: '₨ 18',
    priceNumeric: 18,
    originalPrice: '₨ 25',
    discount: '28% OFF',
    packSize: 'Daily Wellness & Grooming Set',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 880,
    minOrder: '1 Unit',
    rating: 5.0,
    popularity: 98,
    reviewCount: 68,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1589729444386-a41ec86f4359?q=85&w=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1589729444386-a41ec86f4359?q=85&w=1000&fit=crop',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1608248597359-00993510e060?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Care for yourself and your family with dependable health, beauty, and personal care essentials chosen for everyday use.',
    longDescription: 'Designed for daily self-care routines, this Beauty & Personal Care collection brings spa-grade hydration and clean ingredients into your home. Paraben-free, sulfate-free, and suitable for all sensitive skin types, delivering all-day freshness and softness.',
    features: [
      'Enriched with botanical plant extracts and vitamins E & B5',
      '100% cruelty-free, hypoallergenic, and dermatologist tested',
      'Non-greasy, fast-absorbing texture for effortless daily use',
      'Subtle refreshing natural fragrance derived from plant oils',
      'Eco-friendly recyclable pumps and amber bottles'
    ],
    specs: [
      { label: 'Skin Type', value: 'All Skin Types (Sensitive Safe)' },
      { label: 'Volume', value: 'Set of 3 x 200ml Bottles' },
      { label: 'Key Ingredients', value: 'Aloe Vera, Jojoba Oil, Vitamin E, Shea Butter' },
      { label: 'Certification', value: 'Cruelty-Free & Dermatologist Approved' },
      { label: 'Verified Seller', value: 'Zaroora LLC (Muhammad Nasir)' }
    ],
    reviews: [
      {
        id: 1,
        author: 'Sana Bilal',
        rating: 5,
        date: '5 days ago',
        comment: 'Very gentle on the skin, fragrant without being overpowering. Will buy again!'
      }
    ]
  },
  {
    id: 4,
    name: 'Home & Kitchen',
    shortTitle: 'Home & Kitchen',
    category: 'home-and-kitchen',
    categoryName: 'Home & Kitchen',
    sku: 'ZR-HAK-015',
    price: '₨ 33',
    priceNumeric: 33,
    originalPrice: '₨ 45',
    discount: '26% OFF',
    packSize: 'Complete Daily Kitchenware Suite',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 510,
    minOrder: '1 Unit',
    rating: 4.9,
    popularity: 97,
    reviewCount: 74,
    badge: 'Top Pick',
    image: 'https://images.unsplash.com/photo-1683803168320-ab1162844e89?q=85&w=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1683803168320-ab1162844e89?q=85&w=1000&fit=crop',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Make daily routines easier with thoughtfully selected home and kitchen products for cooking, organizing, cleaning, and comfortable living.',
    longDescription: 'Elevate your culinary workspace with this comprehensive Home & Kitchen set. Built from food-grade stainless steel and heat-resistant silicone, each utensil and vessel is crafted to withstand high temperatures without warping, scratching, or retaining odors.',
    features: [
      'Food-grade BPA-free silicone with heat tolerance up to 230°C (450°F)',
      'Smooth brushed stainless steel handles with hanging loops',
      'Non-stick pan safe — protects expensive nonstick cookware surfaces',
      'Dishwasher safe for rapid, hygienic post-dinner cleanups',
      'Modern neutral design complements every kitchen aesthetic'
    ],
    specs: [
      { label: 'Package Includes', value: 'Turner, Ladle, Whisk, Tongs, Slotted Spoon & Counter Caddy' },
      { label: 'Material', value: 'BPA-Free Food-Grade Silicone & 304 Stainless Steel' },
      { label: 'Heat Resistance', value: 'Up to 230°C / 446°F' },
      { label: 'Dishwasher Safe', value: 'Yes' },
      { label: 'Verified Seller', value: 'Zaroora LLC (Muhammad Nasir)' }
    ],
    reviews: [
      {
        id: 1,
        author: 'Zainab Qureshi',
        rating: 5,
        date: '4 days ago',
        comment: 'High grade utensils, heat resistant and beautiful color. Worth every rupee.'
      }
    ]
  },
  {
    id: 5,
    name: 'Automotive Essentials',
    shortTitle: 'Automotive Essentials',
    category: 'automotive-essentials',
    categoryName: 'Automotive Essentials',
    sku: 'ZR-AUTO-013',
    price: '₨ 25',
    priceNumeric: 25,
    originalPrice: '₨ 35',
    discount: '29% OFF',
    packSize: 'Driver Emergency & Maintenance Kit',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 390,
    minOrder: '1 Unit',
    rating: 4.8,
    popularity: 94,
    reviewCount: 38,
    badge: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1690776573395-d05779d199c1?q=85&w=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1690776573395-d05779d199c1?q=85&w=1000&fit=crop',
      'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Keep your car ready for the road with practical automotive essentials designed for everyday maintenance, comfort, and convenience.',
    longDescription: 'Equip your vehicle for reliable daily commuting and highway road trips. This Automotive Essentials bundle includes high-grade tire pressure monitoring, rapid emergency LED illumination, multi-surface interior detailing tools, and compact jumper cables stowed neatly in a ballistic nylon boot organizer.',
    features: [
      'Digital high-precision tire gauge with backlit LCD display',
      'Heavy-duty copper-clad emergency booster cables (10 AWG)',
      'Multi-mode LED emergency roadside beacon with magnetic mount',
      'Microfiber lint-free interior detailing set with vent cleaning brushes',
      'Compact zip storage bag fits under seats or in the trunk compartment'
    ],
    specs: [
      { label: 'Set Contents', value: 'Booster Cables, Digital Tire Gauge, LED Beacon, Detailing Brushes, Carry Case' },
      { label: 'Compatibility', value: 'Universal (Cars, SUVs, Vans, Motorcycles)' },
      { label: 'Cable Length', value: '3 Meters (10 Feet)' },
      { label: 'Storage Bag', value: 'Waterproof 600D Polyester Case' },
      { label: 'Warranty', value: '1 Year Full Quality Guarantee' },
      { label: 'Verified Seller', value: 'Zaroora LLC (Muhammad Nasir)' }
    ],
    reviews: [
      {
        id: 1,
        author: 'Fahad Mehmood',
        rating: 5,
        date: '1 week ago',
        comment: 'Must-have for every car owner. The booster cables are thick and well made, tire gauge is very accurate.'
      }
    ]
  }
];
