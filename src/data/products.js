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
    description: 'Durable hardware, smart stationery, and organization tools for home, office, and workshop.',
    buttonText: 'Explore Tools',
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=800&q=80',
    itemCount: '12+ Items'
  },
  {
    id: 'sports-pets-outdoors',
    name: 'Sports, Pets & Outdoors',
    tagline: 'Active gear, fitness & pet comfort essentials',
    description: 'High-performance fitness gear, premium pet bedding, toys, and outdoor adventure gear.',
    buttonText: 'Shop Outdoors',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    itemCount: '18+ Items'
  },
  {
    id: 'beauty-and-personal-care',
    name: 'Beauty & Personal Care',
    tagline: 'Wellness, skincare & self-care essentials',
    description: 'Daily grooming, soothing skincare, wellness solutions, and natural hygiene essentials.',
    buttonText: 'Browse Care',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    itemCount: '15+ Items'
  },
  {
    id: 'home-and-kitchen',
    name: 'Home & Kitchen',
    tagline: 'Everyday cookware, dining & home comfort',
    description: 'Practical kitchenware, dining accessories, cookware, and smart home organizing solutions.',
    buttonText: 'Shop Kitchen',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    itemCount: '24+ Items'
  }
];

export const products = [
  {
    id: 1,
    name: 'Tools & Office Supplies Set',
    shortTitle: 'Tools & Office Supplies',
    category: 'tools-and-office-supplies',
    categoryName: 'Tools & Office Supplies',
    sku: 'ZR-TOS-021',
    price: '₨ 40',
    priceNumeric: 40,
    originalPrice: '₨ 55',
    packSize: 'Multi-Piece Workspace Precision Kit',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 450,
    minOrder: '1 Unit',
    rating: 5.0,
    popularity: 99,
    reviewCount: 46,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932694b?auto=format&fit=crop&w=800&q=80',
    description: 'Practical essential workspace kit featuring ergonomic hand tools, precision measurement instruments, and desktop organizing accessories.',
    longDescription: 'Curated specifically for home offices, creative studios, and light household repairs. This Tools & Office Supplies bundle combines durable forged carbon-steel hand tools with modern desk organization equipment. Built to last with anti-corrosion matte finish and non-slip rubber grips.',
    features: [
      'Industrial-grade forged alloy steel with corrosion-resistant finish',
      'Dual-purpose tools designed for household tasks and office setups',
      'Compact organized storage tray keeps desks and drawers clutter-free',
      'Ergonomic shock-absorbing grips for comfortable long-duration use',
      'Backed by Zaroora LLC standard quality inspection guarantee'
    ],
    specs: [
      { label: 'Set Includes', value: 'Precision Driver Set, Measuring Tape, Heavy Utility Knife, Desk Organizer Tray' },
      { label: 'Material', value: 'High-Carbon Steel, ABS Polymer & Alloy' },
      { label: 'Suitability', value: 'Home, Office, Crafting & Repairs' },
      { label: 'Warranty', value: '1 Year Quality Guarantee' }
    ]
  },
  {
    id: 2,
    name: 'Sports, Pets & Outdoors Gear',
    shortTitle: 'Sports, Pets & Outdoors',
    category: 'sports-pets-outdoors',
    categoryName: 'Sports, Pets & Outdoors',
    sku: 'ZR-SPO-019',
    price: '₨ 28',
    priceNumeric: 28,
    originalPrice: '₨ 38',
    packSize: 'Active Lifestyle & Pet Care Pack',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 620,
    minOrder: '1 Unit',
    rating: 4.9,
    popularity: 96,
    reviewCount: 52,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    description: 'Multi-activity gear built for outdoor adventures, fitness training routines, and daily pet comfort.',
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
      { label: 'Care', value: 'Wipe Clean / Hand Washable' }
    ]
  },
  {
    id: 3,
    name: 'Beauty & Personal Care Routine',
    shortTitle: 'Beauty & Personal Care',
    category: 'beauty-and-personal-care',
    categoryName: 'Beauty & Personal Care',
    sku: 'ZR-BPC-017',
    price: '₨ 18',
    priceNumeric: 18,
    originalPrice: '₨ 25',
    packSize: 'Daily Wellness & Grooming Set',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 880,
    minOrder: '1 Unit',
    rating: 5.0,
    popularity: 98,
    reviewCount: 68,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    description: 'Gentle, nourishing personal care essentials formulated for daily skin comfort, hair vitality, and hygiene.',
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
      { label: 'Certification', value: 'Cruelty-Free & Dermatologist Approved' }
    ]
  },
  {
    id: 4,
    name: 'Home & Kitchen Essentials Set',
    shortTitle: 'Home & Kitchen',
    category: 'home-and-kitchen',
    categoryName: 'Home & Kitchen',
    sku: 'ZR-HAK-015',
    price: '₨ 33',
    priceNumeric: 33,
    originalPrice: '₨ 45',
    packSize: 'Complete Daily Kitchenware Suite',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 510,
    minOrder: '1 Unit',
    rating: 4.9,
    popularity: 97,
    reviewCount: 74,
    badge: 'Top Pick',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    description: 'Essential kitchenware and meal prep accessories designed for seamless cooking, dining, and food storage.',
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
      { label: 'Dishwasher Safe', value: 'Yes' }
    ]
  }
];
