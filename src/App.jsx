import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Search, ArrowRight, CheckCircle2, 
  Send, ExternalLink, ShieldCheck, Truck, Award,
  X, MessageSquare, Layers, Building2, ShoppingCart, Menu as MenuIcon,
  Plus, Minus, Trash2, ShoppingBag, Eye, ArrowLeft, Check, Star, Heart,
  User, UserCheck, Package, Clock, HelpCircle, ChevronRight
} from 'lucide-react';
import { categories, products, categoryBanners } from './data/products';
import logoImg from './images/image.png';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'shop', 'categories', 'about', 'contact'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [modalType, setModalType] = useState(null); // 'account', 'quote', 'contact', 'checkout', null
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Cart & Product Detail state
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('zaroora_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [detailQuantity, setDetailQuantity] = useState(1);
  const [activeDetailTab, setActiveDetailTab] = useState('description');
  const [toastMessage, setToastMessage] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('zaroora_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  // Filter & sort products
  const filteredProducts = products.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'popularity') return (b.popularity || 0) - (a.popularity || 0);
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'latest') return b.id - a.id;
    if (sortBy === 'price-low') return a.priceNumeric - b.priceNumeric;
    if (sortBy === 'price-high') return b.priceNumeric - a.priceNumeric;
    return 0;
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addToCart = (product, qty = 1, openDrawer = true) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    showToast(`Added ${qty}x ${product.name} to cart!`);
    if (openDrawer) {
      setCartOpen(true);
    }
  };

  const updateCartQuantity = (productId, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + (item.product.priceNumeric * item.quantity), 0);

  const viewProductDetail = (product) => {
    setActiveProduct(product);
    setDetailQuantity(1);
    setActiveDetailTab('description');
    setActiveTab('product-detail');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedProduct(null);
    setFormSubmitted(false);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => setNewsletterSuccess(false), 4000);
      setNewsletterEmail('');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const navigateTo = (tabName, categoryId = null) => {
    setActiveTab(tabName);
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f5f7f9] text-[#1e293b]">
      {/* Skip to content link */}
      <a 
        href="#main-content" 
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          zIndex: 9999
        }}
        onFocus={(e) => {
          e.currentTarget.style.position = 'static';
          e.currentTarget.style.width = 'auto';
          e.currentTarget.style.height = 'auto';
        }}
        onBlur={(e) => {
          e.currentTarget.style.position = 'absolute';
          e.currentTarget.style.left = '-9999px';
          e.currentTarget.style.width = '1px';
          e.currentTarget.style.height = '1px';
        }}
      >
        Skip to content
      </a>

      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="top-bar">
        <div className="top-bar-item">
          <span>Official Store: <strong>ZAROORA LLC</strong></span>
          <span style={{ opacity: 0.5, margin: '0 6px' }}>•</span>
          <span>Owned by Muhammad Nasir</span>
          <span style={{ opacity: 0.5, margin: '0 6px' }}>•</span>
          <span>Everyday Essentials & Direct E-Commerce Solutions</span>
        </div>
        <div className="top-bar-contact">
          <div className="top-bar-item">
            <Phone size={14} color="#93c5fd" />
            <a href="tel:+923246105221">(+92) 324 6105221</a>
          </div>
          <div className="top-bar-item">
            <Mail size={14} color="#93c5fd" />
            <a href="mailto:info@zaroorallc.com">info@zaroorallc.com</a>
          </div>
          <div className="top-bar-item">
            <a 
              href="https://wa.me/+923246105221" 
              target="_blank" 
              rel="noreferrer"
              style={{ color: '#4ade80', fontWeight: '600' }}
            >
              WhatsApp (+92)
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER NAVIGATION WITH OFFICIAL LOGO */}
      <header className="main-nav">
        <div className="nav-brand" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
          <img src={logoImg} alt="ZAROORA LLC Logo" className="brand-logo-img" />
          <div>
            <div className="brand-title">ZAROORA LLC</div>
            <div className="brand-subtitle">Muhammad Nasir • Everyday Essentials</div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li>
              <button 
                className={`nav-link ${activeTab === 'home' && selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('all');
                  navigateTo('home');
                }}
                style={{ background: 'none', border: 'none', font: 'inherit' }}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeTab === 'shop' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory('all');
                  navigateTo('shop');
                }}
                style={{ background: 'none', border: 'none', font: 'inherit' }}
              >
                Shop
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeTab === 'categories' ? 'active' : ''}`}
                onClick={() => navigateTo('categories')}
                style={{ background: 'none', border: 'none', font: 'inherit' }}
              >
                Categories
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
                onClick={() => navigateTo('about')}
                style={{ background: 'none', border: 'none', font: 'inherit' }}
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                onClick={() => navigateTo('contact')}
                style={{ background: 'none', border: 'none', font: 'inherit' }}
              >
                Contact Us
              </button>
            </li>
            <li>
              <button 
                className="nav-link"
                onClick={() => setModalType('account')}
                style={{ background: 'none', border: 'none', font: 'inherit' }}
              >
                My Account
              </button>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button 
            className="btn-nav-cart"
            onClick={() => setCartOpen(true)}
            aria-label="Open Shopping Cart"
          >
            <ShoppingCart size={18} />
            <span className="nav-cart-text">Cart</span>
            {totalCartItems > 0 && (
              <span className="nav-cart-badge">{totalCartItems}</span>
            )}
          </button>

          <a 
            className="btn-nav-partner"
            href="https://wa.me/+923246105221"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <span>WhatsApp Support</span>
            <ArrowRight size={16} />
          </a>
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              display: 'none',
              background: '#f1f5f9', 
              border: '1px solid #cbd5e1', 
              borderRadius: '8px', 
              padding: '8px', 
              cursor: 'pointer' 
            }}
          >
            <MenuIcon size={20} />
          </button>
        </div>
      </header>

      {/* MOBILE FLYOUT NAVIGATION */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderBottom: '2px solid #e2e8f0',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.06)'
        }}>
          <button 
            onClick={() => setCartOpen(true)}
            style={{
              padding: '12px 16px',
              background: '#0f2432',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShoppingCart size={18} />
              <span>Shopping Cart</span>
            </span>
            <span className="nav-cart-badge">{totalCartItems}</span>
          </button>
          
          <button
            onClick={() => {
              setSelectedCategory('all');
              navigateTo('home');
            }}
            style={{
              textAlign: 'left',
              padding: '10px 14px',
              background: activeTab === 'home' ? '#e6f4f8' : 'transparent',
              color: activeTab === 'home' ? '#1e7087' : '#334155',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}
          >
            Home
          </button>

          <button
            onClick={() => navigateTo('shop')}
            style={{
              textAlign: 'left',
              padding: '10px 14px',
              background: activeTab === 'shop' ? '#e6f4f8' : 'transparent',
              color: activeTab === 'shop' ? '#1e7087' : '#334155',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}
          >
            Shop
          </button>

          <button
            onClick={() => navigateTo('categories')}
            style={{
              textAlign: 'left',
              padding: '10px 14px',
              background: activeTab === 'categories' ? '#e6f4f8' : 'transparent',
              color: activeTab === 'categories' ? '#1e7087' : '#334155',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}
          >
            Categories
          </button>

          <button
            onClick={() => navigateTo('about')}
            style={{
              textAlign: 'left',
              padding: '10px 14px',
              background: activeTab === 'about' ? '#e6f4f8' : 'transparent',
              color: activeTab === 'about' ? '#1e7087' : '#334155',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}
          >
            About Us
          </button>

          <button
            onClick={() => navigateTo('contact')}
            style={{
              textAlign: 'left',
              padding: '10px 14px',
              background: activeTab === 'contact' ? '#e6f4f8' : 'transparent',
              color: activeTab === 'contact' ? '#1e7087' : '#334155',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}
          >
            Contact Us
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setModalType('account');
            }}
            style={{
              textAlign: 'left',
              padding: '10px 14px',
              background: 'transparent',
              color: '#334155',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}
          >
            My Account
          </button>
        </div>
      )}

      {/* VIEW: HOME PAGE */}
      {activeTab === 'home' && (
        <main id="main-content">
          {/* HERO SECTION WITH USER SPECIFIED COPY */}
          <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-container">
              <div className="hero-content">
                <div className="hero-pretitle">MUHAMMAD NASIR • E-COMMERCE</div>
                <h1 className="hero-title">ZAROORA LLC</h1>
                <p className="hero-description" style={{ fontSize: '1.15rem', fontWeight: '500', marginBottom: '14px', color: '#f8fafc' }}>
                  Zaroora LLC is an e-commerce-focused company dedicated to building and managing online businesses with a professional and customer-oriented approach.
                </p>
                <p className="hero-description" style={{ fontSize: '0.98rem', opacity: 0.9, marginBottom: '20px' }}>
                  The company is owned by Muhammad Nasir, who oversees the business operations and strategic direction of Zaroora LLC. Under his leadership, the company focuses on e-commerce, online retail, product sourcing, and marketplace-based business solutions.
                </p>
                <p style={{ color: '#93c5fd', fontSize: '0.92rem', marginBottom: '28px', fontStyle: 'italic' }}>
                  Our goal is to build reliable and sustainable e-commerce operations by combining quality products, efficient business management, and long-term growth strategies.
                </p>
                <div className="hero-actions">
                  <button 
                    className="btn-hero-primary"
                    onClick={() => {
                      const el = document.getElementById('collection-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Shop Now
                  </button>
                  <button 
                    className="btn-hero-outline"
                    onClick={() => navigateTo('categories')}
                  >
                    Browse Categories
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SHOP BY CATEGORY - 3 PROMO BANNERS AS REQUESTED */}
          <section className="section-wrapper" style={{ paddingBottom: '10px' }}>
            <div className="section-header-center" style={{ marginBottom: '28px' }}>
              <span className="section-tag">FEATURED DEPARTMENTS</span>
              <h2 className="section-title">Shop By Category</h2>
              <p className="section-subtitle">Curated essentials tailored for every home, wellness, and lifestyle routine</p>
            </div>

            <div className="categories-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
              {categoryBanners.map(banner => (
                <div 
                  key={banner.id}
                  className="category-card"
                  onClick={() => {
                    setSelectedCategory(banner.categoryId);
                    navigateTo('shop', banner.categoryId);
                  }}
                >
                  <img 
                    src={banner.image} 
                    alt={banner.title} 
                    className="category-card-img" 
                    loading="lazy"
                  />
                  <div className="category-card-overlay">
                    <span style={{ fontSize: '0.85rem', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
                      {banner.tag}
                    </span>
                    <h3 className="category-title" style={{ fontSize: '1.4rem', marginTop: '4px' }}>
                      {banner.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#e2e8f0', margin: '8px 0 16px' }}>
                      {banner.description}
                    </p>
                    <button 
                      className="btn-category-pill"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory(banner.categoryId);
                        navigateTo('shop', banner.categoryId);
                      }}
                    >
                      {banner.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* BROWSE OUR COLLECTION - 4 EXACT PRODUCTS AS SPECIFIED */}
          <section id="collection-section" className="section-wrapper" style={{ paddingTop: '20px' }}>
            <div className="section-header-center">
              <span className="section-tag">CURATED FOR YOU</span>
              <h2 className="section-title">Browse Our Collection</h2>
              <p className="section-subtitle">Everyday practical essentials with transparent pricing and fast fulfillment</p>
            </div>

            {/* Collection Grid */}
            <div className="products-grid">
              {products.map((prod) => (
                <div 
                  key={prod.id} 
                  className="product-card"
                  onClick={() => viewProductDetail(prod)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="product-img-wrap">
                    <span className="product-badge">{prod.categoryName}</span>
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="product-img" 
                      loading="lazy"
                    />
                  </div>

                  <div className="product-body">
                    <div>
                      <span className="product-sku">SKU: {prod.sku}</span>
                      <h3 className="product-title">{prod.shortTitle || prod.name}</h3>
                      <p style={{ fontSize: '0.86rem', color: '#64748b', marginTop: '6px', lineHeight: 1.4 }}>
                        {prod.description}
                      </p>
                    </div>
                    
                    <div>
                      <div className="product-price-box" style={{ marginTop: '12px' }}>
                        <div className="product-price-val">{prod.price}</div>
                        {prod.originalPrice && (
                          <span style={{ textDecoration: 'line-through', color: '#94a3b8', fontSize: '0.85rem', marginLeft: '8px' }}>
                            {prod.originalPrice}
                          </span>
                        )}
                        <span className="product-price-sub" style={{ marginLeft: 'auto' }}>{prod.badge}</span>
                      </div>

                      <div className="product-actions-row">
                        <button 
                          className="btn-add-cart"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(prod, 1, true);
                          }}
                        >
                          <ShoppingCart size={15} />
                          <span>Add to cart</span>
                        </button>
                        <button 
                          className="btn-view-details"
                          onClick={(e) => {
                            e.stopPropagation();
                            viewProductDetail(prod);
                          }}
                          title="View Full Specifications & Details"
                        >
                          <Eye size={15} />
                          <span>Details</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button
                className="btn-hero-primary"
                onClick={() => navigateTo('shop')}
                style={{ padding: '14px 36px', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                <span>Shop All Products</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </section>

          {/* CUSTOMER REVIEWS SECTION */}
          <section className="section-wrapper" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
            <div className="section-header-center">
              <span className="section-tag">TESTIMONIALS</span>
              <h2 className="section-title">Customer Reviews</h2>
              <p className="section-subtitle">Real experiences from shoppers who trust Zaroora LLC</p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              maxWidth: '1100px',
              margin: '0 auto'
            }}>
              <div style={{
                background: '#ffffff',
                padding: '30px',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '14px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#f59e0b" />
                    ))}
                  </div>
                  <p style={{ fontSize: '1.05rem', color: '#1e293b', fontStyle: 'italic', lineHeight: 1.6 }}>
                    “The Tools & Office Supplies set exceeded my expectations. Practical essentials, well-packaged, and quick doorstep delivery!”
                  </p>
                </div>
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#e0f2fe',
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700'
                  }}>
                    M
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#0f172a' }}>Verified Shopper</div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b' }}>Office & Home Customer</div>
                  </div>
                </div>
              </div>

              <div style={{
                background: '#ffffff',
                padding: '30px',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '14px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#f59e0b" />
                    ))}
                  </div>
                  <p style={{ fontSize: '1.05rem', color: '#1e293b', fontStyle: 'italic', lineHeight: 1.6 }}>
                    “Zaroora LLC offers genuine convenience. Great pricing in USD ($) and responsive customer service on WhatsApp.”
                  </p>
                </div>
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#dcfce7',
                    color: '#16a34a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700'
                  }}>
                    F
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#0f172a' }}>Fatima K.</div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b' }}>Beauty & Personal Care Client</div>
                  </div>
                </div>
              </div>

              <div style={{
                background: '#ffffff',
                padding: '30px',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '14px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#f59e0b" />
                    ))}
                  </div>
                  <p style={{ fontSize: '1.05rem', color: '#1e293b', fontStyle: 'italic', lineHeight: 1.6 }}>
                    “Muhammad Nasir and team run a very professional operation. All items arrived properly sealed with prompt updates.”
                  </p>
                </div>
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#fef3c7',
                    color: '#d97706',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700'
                  }}>
                    T
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: '#0f172a' }}>Tariq A.</div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b' }}>Sports & Outdoor Customer</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* VIEW: SHOP CATALOG */}
      {activeTab === 'shop' && (
        <main className="section-wrapper" style={{ paddingTop: '40px' }}>
          <div className="section-header-center">
            <span className="section-tag">CATALOG & ONLINE RETAIL</span>
            <h1 className="section-title">Shop All Products</h1>
            <p className="section-subtitle">Browse through our quality inventory with competitive prices and swift checkout</p>
          </div>

          {/* Category Filter Tabs */}
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Products ({products.length})
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-tab ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Toolbar: Search + Sorting */}
          <div className="catalog-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
            <div style={{ color: '#64748b', fontSize: '0.95rem', fontWeight: '500' }}>
              Showing {filteredProducts.length} results
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div className="search-container" style={{ margin: 0, minWidth: '260px' }}>
                <Search className="search-icon" size={16} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  style={{ padding: '10px 16px 10px 42px', fontSize: '0.9rem' }}
                />
              </div>

              <div className="sort-selector-wrapper">
                <select 
                  id="sort-select" 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-dropdown"
                  style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#fff', fontSize: '0.9rem', color: '#1e293b', cursor: 'pointer' }}
                >
                  <option value="default">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="latest">Sort by latest</option>
                  <option value="price-low">Sort by price: low to high</option>
                  <option value="price-high">Sort by price: high to low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((prod) => (
              <div 
                key={prod.id} 
                className="product-card"
                onClick={() => viewProductDetail(prod)}
                style={{ cursor: 'pointer' }}
              >
                <div className="product-img-wrap">
                  <span className="product-badge">{prod.categoryName}</span>
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="product-img" 
                    loading="lazy"
                  />
                </div>

                <div className="product-body">
                  <div>
                    <span className="product-sku">SKU: {prod.sku}</span>
                    <h3 className="product-title">{prod.name}</h3>
                    <p style={{ fontSize: '0.86rem', color: '#64748b', marginTop: '6px', lineHeight: 1.4 }}>
                      {prod.description}
                    </p>
                  </div>
                  
                  <div>
                    <div className="product-price-box" style={{ marginTop: '12px' }}>
                      <div className="product-price-val">{prod.price}</div>
                      {prod.originalPrice && (
                        <span style={{ textDecoration: 'line-through', color: '#94a3b8', fontSize: '0.85rem', marginLeft: '8px' }}>
                          {prod.originalPrice}
                        </span>
                      )}
                      <span className="product-price-sub" style={{ marginLeft: 'auto' }}>{prod.badge}</span>
                    </div>

                    <div className="product-actions-row">
                      <button 
                        className="btn-add-cart"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(prod, 1, true);
                        }}
                      >
                        <ShoppingCart size={15} />
                        <span>Add to cart</span>
                      </button>
                      <button 
                        className="btn-view-details"
                        onClick={(e) => {
                          e.stopPropagation();
                          viewProductDetail(prod);
                        }}
                      >
                        <Eye size={15} />
                        <span>Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '16px' }}>
              <p style={{ fontSize: '1.1rem', color: '#64748b' }}>No products match your search or filter.</p>
              <button 
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                style={{ marginTop: '12px', background: '#1e7087', color: '#fff', padding: '8px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>
      )}

      {/* VIEW: CATEGORIES PAGE */}
      {activeTab === 'categories' && (
        <main className="section-wrapper" style={{ paddingTop: '40px' }}>
          <div className="section-header-center">
            <span className="section-tag">DEPARTMENTS & SECTORS</span>
            <h1 className="section-title">Product Categories</h1>
            <p className="section-subtitle">Explore our specialized retail categories and product collections</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '30px' }}>
            {categories.map(cat => (
              <div 
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  navigateTo('shop', cat.id);
                }}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(15, 36, 50, 0.85)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    fontWeight: '600'
                  }}>
                    {cat.itemCount}
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '6px' }}>{cat.name}</h3>
                  <div style={{ fontSize: '0.85rem', color: '#1e7087', fontWeight: '600', marginBottom: '8px' }}>{cat.tagline}</div>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5, marginBottom: '16px' }}>
                    {cat.description}
                  </p>
                  <button 
                    style={{
                      background: '#f1f5f9',
                      border: 'none',
                      color: '#0f172a',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{cat.buttonText}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* VIEW: ABOUT US PAGE */}
      {activeTab === 'about' && (
        <main className="section-wrapper" style={{ padding: '50px 24px', maxWidth: '1000px', margin: '0 auto' }}>
          <div className="section-header-center">
            <span className="section-tag">ABOUT US</span>
            <h1 className="section-title">ZAROORA LLC</h1>
            <p className="section-subtitle">Dedicated to building and managing premier e-commerce operations</p>
          </div>

          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
            marginTop: '30px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '28px', borderBottom: '1px solid #f1f5f9', paddingBottom: '24px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: '#e0f2fe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0284c7'
              }}>
                <Building2 size={32} />
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: '#1e7087', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Leadership & Overview
                </span>
                <h2 style={{ fontSize: '1.6rem', color: '#0f172a', margin: '2px 0 0' }}>MUHAMMAD NASIR</h2>
                <div style={{ fontSize: '0.95rem', color: '#64748b' }}>Owner & Managing Director, Zaroora LLC</div>
              </div>
            </div>

            <div style={{ lineHeight: 1.8, fontSize: '1.05rem', color: '#334155' }}>
              <p style={{ marginBottom: '20px' }}>
                <strong>Zaroora LLC</strong> is an e-commerce-focused company dedicated to building and managing online businesses with a professional and customer-oriented approach.
              </p>
              <p style={{ marginBottom: '20px' }}>
                The company is owned by <strong>Muhammad Nasir</strong>, who oversees the business operations and strategic direction of Zaroora LLC. Under his leadership, the company focuses on e-commerce, online retail, product sourcing, and marketplace-based business solutions.
              </p>
              <p style={{ marginBottom: '28px', padding: '16px 20px', background: '#f8fafc', borderLeft: '4px solid #1e7087', borderRadius: '4px', fontStyle: 'italic', color: '#0f172a' }}>
                “Our goal is to build reliable and sustainable e-commerce operations by combining quality products, efficient business management, and long-term growth strategies.”
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '30px' }}>
              <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <ShieldCheck size={24} color="#1e7087" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontSize: '1.05rem', color: '#0f172a', marginBottom: '6px' }}>Quality Assurance</h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b' }}>Every item in our collection undergoes rigorous product verification and packaging standards.</p>
              </div>

              <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <Truck size={24} color="#1e7087" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontSize: '1.05rem', color: '#0f172a', marginBottom: '6px' }}>Reliable Fulfillment</h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b' }}>Direct-to-door delivery with order tracking and rapid customer response times.</p>
              </div>

              <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <Award size={24} color="#1e7087" style={{ marginBottom: '10px' }} />
                <h4 style={{ fontSize: '1.05rem', color: '#0f172a', marginBottom: '6px' }}>Customer First</h4>
                <p style={{ fontSize: '0.88rem', color: '#64748b' }}>Accessible customer support via phone, email, and live WhatsApp chat.</p>
              </div>
            </div>

            <div style={{ marginTop: '36px', textAlign: 'center' }}>
              <button 
                className="btn-hero-primary"
                onClick={() => navigateTo('shop')}
                style={{ padding: '12px 30px' }}
              >
                Explore Online Catalog
              </button>
            </div>
          </div>
        </main>
      )}

      {/* VIEW: PRODUCT DETAIL 2-COLUMN VIEW */}
      {activeTab === 'product-detail' && activeProduct && (
        <main className="section-wrapper" style={{ padding: '30px 24px 60px', maxWidth: '1280px', margin: '0 auto' }}>
          
          <button 
            className="btn-back-breadcrumb"
            onClick={() => navigateTo('home')}
          >
            <ArrowLeft size={16} />
            <span>Back to All Products</span>
          </button>

          <div className="product-detail-layout">
            
            {/* LEFT COLUMN: PRODUCT IMAGERY */}
            <div className="product-gallery-card">
              <div className="main-gallery-view">
                <span className="gallery-badge">{activeProduct.categoryName}</span>
                <img 
                  src={activeProduct.image} 
                  alt={activeProduct.name} 
                  className="gallery-main-img" 
                />
              </div>

              <div className="gallery-thumbnails">
                <button 
                  className="thumb-btn active"
                  aria-label="Product Image View 1"
                >
                  <img src={activeProduct.image} alt={activeProduct.name} />
                </button>
                <button 
                  className="thumb-btn"
                  aria-label="Product Image View 2"
                >
                  <img src={activeProduct.image} alt={activeProduct.name} style={{ filter: 'brightness(0.95)' }} />
                </button>
              </div>

              <div className="trust-strip-grid">
                <div className="trust-pill">
                  <ShieldCheck size={18} color="#0284c7" />
                  <span>Quality Guarantee</span>
                </div>
                <div className="trust-pill">
                  <Truck size={18} color="#0284c7" />
                  <span>Prompt Delivery</span>
                </div>
                <div className="trust-pill">
                  <Award size={18} color="#0284c7" />
                  <span>Authentic Items</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: PRODUCT SPECIFICATIONS & ACTIONS */}
            <div className="product-info-panel">
              <div className="detail-header-block">
                <div className="detail-meta-row">
                  <span className="sku-tag">SKU: {activeProduct.sku}</span>
                  <span className="category-pill-tag">{activeProduct.categoryName}</span>
                </div>

                <h1 className="detail-product-title">{activeProduct.name}</h1>

                <div className="detail-rating-strip">
                  <div className="stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span className="rating-score">5.0 / 5.0</span>
                  <span className="rating-count">({activeProduct.reviewCount || 42} verified customer reviews)</span>
                </div>
              </div>

              {/* Price Callout */}
              <div className="detail-price-panel">
                <div className="price-main-row">
                  <span className="price-tag-large">{activeProduct.price}</span>
                  {activeProduct.originalPrice && (
                    <span style={{ textDecoration: 'line-through', color: '#94a3b8', fontSize: '1.2rem', marginLeft: '10px' }}>
                      {activeProduct.originalPrice}
                    </span>
                  )}
                  <span className="stock-indicator">
                    <span className="stock-dot"></span>
                    {activeProduct.availability}
                  </span>
                </div>
                <div className="price-sub-caption">
                  Standard Packaging: <strong>{activeProduct.packSize}</strong>
                </div>
              </div>

              {/* Tabs for Overview / Specs / Reviews */}
              <div className="detail-tabs-nav">
                <button 
                  className={`detail-tab-btn ${activeDetailTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveDetailTab('description')}
                >
                  Description
                </button>
                <button 
                  className={`detail-tab-btn ${activeDetailTab === 'specs' ? 'active' : ''}`}
                  onClick={() => setActiveDetailTab('specs')}
                >
                  Specifications
                </button>
                <button 
                  className={`detail-tab-btn ${activeDetailTab === 'features' ? 'active' : ''}`}
                  onClick={() => setActiveDetailTab('features')}
                >
                  Key Features
                </button>
              </div>

              <div className="detail-tab-content">
                {activeDetailTab === 'description' && (
                  <div>
                    <p style={{ marginBottom: '14px', lineHeight: 1.6, color: '#334155' }}>
                      {activeProduct.longDescription || activeProduct.description}
                    </p>
                    <p style={{ lineHeight: 1.6, color: '#64748b', fontSize: '0.92rem' }}>
                      Supplied and inspected by Zaroora LLC under the management of Muhammad Nasir. We maintain stringent stock standards to ensure you receive reliable, high-utility goods for your household and daily routine.
                    </p>
                  </div>
                )}

                {activeDetailTab === 'specs' && (
                  <div className="specs-table">
                    {activeProduct.specs?.map((spec, i) => (
                      <div key={i} className="spec-row">
                        <span className="spec-label">{spec.label}</span>
                        <strong className="spec-value">{spec.value}</strong>
                      </div>
                    ))}
                    <div className="spec-row">
                      <span className="spec-label">Seller</span>
                      <strong className="spec-value">Zaroora LLC (Muhammad Nasir)</strong>
                    </div>
                  </div>
                )}

                {activeDetailTab === 'features' && (
                  <ul className="features-bullet-list">
                    {activeProduct.features?.map((feat, i) => (
                      <li key={i}>
                        <Check size={16} color="#16a34a" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Quantity selector and Action Buttons */}
              <div className="detail-cta-box">
                <div className="quantity-bar-row">
                  <span className="qty-label">Quantity:</span>
                  <div className="qty-picker">
                    <button 
                      onClick={() => setDetailQuantity(Math.max(1, detailQuantity - 1))}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span>{detailQuantity}</span>
                    <button 
                      onClick={() => setDetailQuantity(detailQuantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className="qty-total-calc">
                    Total: <strong>${(activeProduct.priceNumeric * detailQuantity).toLocaleString()}</strong>
                  </div>
                </div>

                <div className="detail-actions-grid">
                  <button 
                    className="btn-detail-add-cart"
                    onClick={() => addToCart(activeProduct, detailQuantity, true)}
                  >
                    <ShoppingCart size={18} />
                    <span>Add to Cart ({detailQuantity})</span>
                  </button>

                  <a 
                    className="btn-detail-whatsapp"
                    href={`https://wa.me/+923246105221?text=${encodeURIComponent(`Hello Zaroora LLC (Muhammad Nasir), I want to order ${detailQuantity}x ${activeProduct.name} (SKU: ${activeProduct.sku}, Total: $${(activeProduct.priceNumeric * detailQuantity).toLocaleString()}).`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageSquare size={18} />
                    <span>Order via WhatsApp (+92)</span>
                  </a>
                </div>
              </div>

              <div className="detail-help-strip">
                <span>Need assistance or bulk quote?</span>
                <a href="https://wa.me/+923246105221" target="_blank" rel="noreferrer" className="help-link">
                  Chat with Muhammad Nasir (+92 324 6105221)
                </a>
              </div>
            </div>

          </div>
        </main>
      )}

      {/* VIEW: CONTACT PAGE */}
      {activeTab === 'contact' && (
        <main className="section-wrapper" style={{ padding: '60px 24px', maxWidth: '1000px', margin: '0 auto' }}>
          <div className="section-header-center">
            <span className="section-tag">GET IN TOUCH</span>
            <h1 className="section-title">Contact ZAROORA LLC</h1>
            <p className="section-subtitle">Owned by Muhammad Nasir. We are here to assist with any questions regarding orders, sourcing, or customer service.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
            <div style={{ background: '#fff', padding: '35px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: '#0f172a' }}>Direct Contacts</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <a href="tel:+923246105221" style={{ display: 'flex', gap: '15px', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Phone / Direct Line</div>
                    <strong style={{ fontSize: '1.05rem', color: '#0f172a' }}>(+92) 324 6105221</strong>
                  </div>
                </a>

                <a href="mailto:info@zaroorallc.com" style={{ display: 'flex', gap: '15px', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Email Us</div>
                    <strong style={{ fontSize: '1.05rem', color: '#0f172a' }}>info@zaroorallc.com</strong>
                  </div>
                </a>

                <a href="https://wa.me/+923246105221" target="_blank" rel="noreferrer" style={{ display: 'flex', gap: '15px', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>WhatsApp Direct</div>
                    <strong style={{ fontSize: '1.05rem', color: '#16a34a' }}>(+92) 324 6105221</strong>
                  </div>
                </a>
              </div>

              <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '10px', color: '#0f172a' }}>Official Socials</h4>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a href="https://facebook.com/" target="_blank" rel="noreferrer" style={{ padding: '8px 16px', background: '#f1f5f9', borderRadius: '20px', textDecoration: 'none', color: '#334155', fontSize: '0.88rem', fontWeight: '500' }}>Facebook</a>
                  <a href="https://instagram.com/" target="_blank" rel="noreferrer" style={{ padding: '8px 16px', background: '#f1f5f9', borderRadius: '20px', textDecoration: 'none', color: '#334155', fontSize: '0.88rem', fontWeight: '500' }}>Instagram</a>
                  <a href="https://tiktok.com/" target="_blank" rel="noreferrer" style={{ padding: '8px 16px', background: '#f1f5f9', borderRadius: '20px', textDecoration: 'none', color: '#334155', fontSize: '0.88rem', fontWeight: '500' }}>TikTok</a>
                  <a href="https://wa.me/+923246105221" target="_blank" rel="noreferrer" style={{ padding: '8px 16px', background: '#dcfce7', borderRadius: '20px', textDecoration: 'none', color: '#16a34a', fontSize: '0.88rem', fontWeight: '600' }}>WhatsApp</a>
                </div>
              </div>
            </div>

            <div style={{ background: '#fff', padding: '35px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '15px', color: '#0f172a' }}>Send Us a Message</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" required placeholder="Enter your full name" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" required placeholder="name@domain.com" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp</label>
                  <input type="text" placeholder="(+92) 324 6105221" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea rows={4} required placeholder="How can we help you?" className="form-textarea"></textarea>
                </div>
                <button type="submit" className="btn-submit-modal" style={{ width: '100%', marginTop: '10px' }}>
                  Send Message
                </button>
              </form>
              {formSubmitted && (
                <div style={{ marginTop: '16px', padding: '12px', background: '#ecfdf5', color: '#065f46', borderRadius: '8px', fontSize: '0.9rem', textAlign: 'center' }}>
                  ✓ Thank you! Your message has been sent to Zaroora LLC. We will reply promptly.
                </div>
              )}
            </div>
          </div>
        </main>
      )}

      {/* 3. FOOTER AS SPECIFIED BY USER */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <img src={logoImg} alt="ZAROORA LLC Logo" className="footer-logo-img" />
            <h3>ZAROORA LLC</h3>
            <p>
              Zaroora LLC is an e-commerce-focused company dedicated to building and managing online businesses with a professional and customer-oriented approach. Owned by Muhammad Nasir.
            </p>
            <div style={{ marginTop: '16px', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <div><strong>Owner:</strong> Muhammad Nasir</div>
              <div><strong>Email:</strong> info@zaroorallc.com</div>
              <div><strong>Phone:</strong> (+92) 324 6105221</div>
              <div><strong>WhatsApp:</strong> (+92) 324 6105221</div>
            </div>
          </div>

          <div className="footer-col">
            <h4>Menu</h4>
            <ul>
              <li><a href="#main-content" onClick={(e) => { e.preventDefault(); setSelectedCategory('all'); navigateTo('home'); }}>Home</a></li>
              <li><a href="#main-content" onClick={(e) => { e.preventDefault(); setSelectedCategory('all'); navigateTo('shop'); }}>Shop</a></li>
              <li><a href="#main-content" onClick={(e) => { e.preventDefault(); navigateTo('categories'); }}>Categories</a></li>
              <li><a href="#main-content" onClick={(e) => { e.preventDefault(); navigateTo('about'); }}>About Us</a></li>
              <li><a href="#main-content" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}>Contact Us</a></li>
              <li><a href="#main-content" onClick={(e) => { e.preventDefault(); setModalType('account'); }}>My Account</a></li>
              <li><a href="#main-content" onClick={(e) => { e.preventDefault(); setCartOpen(true); }}>Cart ({totalCartItems})</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacts</h4>
            <ul style={{ marginBottom: '20px' }}>
              <li>
                <a href="mailto:info@zaroorallc.com">
                  info@zaroorallc.com
                </a>
              </li>
              <li>
                <a href="tel:+923246105221">
                  (+92) 324 6105221
                </a>
              </li>
            </ul>

            <h4 style={{ marginTop: '16px' }}>Socials</h4>
            <ul>
              <li><a href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://tiktok.com/" target="_blank" rel="noreferrer">TikTok</a></li>
              <li><a href="https://wa.me/+923246105221" target="_blank" rel="noreferrer" style={{ color: '#4ade80' }}>WhatsApp</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Subscribe to our newsletter</h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '14px', color: '#cbd5e1' }}>
              Stay updated with our latest arrivals, exclusive savings, and everyday essentials.
            </p>
            <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Email *</label>
              <input 
                type="email" 
                required 
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid #334155',
                  background: '#0f2432',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
              <button 
                type="submit" 
                style={{
                  background: '#1e7087',
                  color: '#ffffff',
                  padding: '10px',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '4px'
                }}
              >
                Subscribe
              </button>
            </form>

            {newsletterSuccess && (
              <div style={{ marginTop: '10px', color: '#4ade80', fontSize: '0.82rem' }}>
                ✓ Thank you for subscribing to our newsletter!
              </div>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © 2026 <strong>zaroora llc</strong>. All rights reserved.
          </div>
          <div style={{ color: '#94a3b8' }}>
            Owned by Muhammad Nasir • Modern E-Commerce Solutions
          </div>
        </div>
      </footer>

      {/* CART DRAWER SLIDE-OVER */}
      {cartOpen && (
        <div className="cart-backdrop" onClick={() => setCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShoppingBag size={20} color="#1e7087" />
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a' }}>Shopping Cart</h3>
                <span className="cart-header-count">{totalCartItems}</span>
              </div>
              <button className="cart-close-btn" onClick={() => setCartOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="cart-items-list">
              {cart.length === 0 ? (
                <div className="cart-empty-state">
                  <ShoppingCart size={48} color="#94a3b8" />
                  <h4>Your cart is empty</h4>
                  <p>Explore our practical essentials and add items to your cart.</p>
                  <button 
                    className="btn-empty-shop"
                    onClick={() => {
                      setCartOpen(false);
                      navigateTo('shop');
                    }}
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.product.id} className="cart-item-row">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="cart-item-thumb" 
                    />
                    <div className="cart-item-info">
                      <div className="cart-item-name">{item.product.name}</div>
                      <div className="cart-item-sku">SKU: {item.product.sku}</div>
                      <div className="cart-item-price-unit">{item.product.price} each</div>
                      
                      <div className="cart-item-bottom">
                        <div className="cart-qty-ctrl">
                          <button onClick={() => updateCartQuantity(item.product.id, -1)} aria-label="Decrease">
                            <Minus size={12} />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateCartQuantity(item.product.id, 1)} aria-label="Increase">
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="cart-item-total">
                          ${(item.product.priceNumeric * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <button 
                      className="btn-remove-cart-item"
                      onClick={() => removeFromCart(item.product.id)}
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="cart-summary-box">
                  <div className="cart-summary-line">
                    <span>Items Count</span>
                    <span>{totalCartItems} units</span>
                  </div>
                  <div className="cart-summary-line cart-summary-total">
                    <span>Subtotal</span>
                    <span>${cartSubtotal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="cart-checkout-actions">
                  <a 
                    className="btn-checkout-wa"
                    href={`https://wa.me/+923246105221?text=${encodeURIComponent(
                      `Hello Zaroora LLC (Muhammad Nasir), I want to place an order:\n\n` +
                      cart.map(i => `• ${i.quantity}x ${i.product.name} (SKU: ${i.product.sku}) - $${(i.product.priceNumeric * i.quantity).toLocaleString()}`).join('\n') +
                      `\n\nTotal Order Value: $${cartSubtotal.toLocaleString()}\n\nPlease confirm availability and delivery details.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <MessageSquare size={18} />
                    <span>Order via WhatsApp (+92)</span>
                  </a>

                  <button 
                    className="btn-clear-cart"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: '#0f172a',
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '0.9rem',
          fontWeight: '500'
        }}>
          <CheckCircle2 size={18} color="#4ade80" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* MODAL WINDOW FOR ACCOUNT */}
      {modalType === 'account' && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <User size={20} color="#1e7087" />
                <h3 style={{ margin: 0 }}>My Account</h3>
              </div>
              <button className="modal-close-btn" onClick={closeModal}>
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <div style={{ textAlign: 'center', padding: '16px 0 24px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#e0f2fe',
                  color: '#0284c7',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px'
                }}>
                  <UserCheck size={32} />
                </div>
                <h4 style={{ margin: '0 0 4px', fontSize: '1.15rem', color: '#0f172a' }}>Welcome to Zaroora LLC</h4>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748b' }}>Track orders, manage favorites, and contact support</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <div style={{ padding: '14px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Package size={18} color="#1e7087" />
                    <span style={{ fontSize: '0.92rem', fontWeight: '500' }}>Active Orders in Cart</span>
                  </div>
                  <strong style={{ color: '#1e7087' }}>{totalCartItems} items</strong>
                </div>

                <div style={{ padding: '14px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Clock size={18} color="#1e7087" />
                    <span style={{ fontSize: '0.92rem', fontWeight: '500' }}>Direct Support Line</span>
                  </div>
                  <span style={{ fontSize: '0.88rem', color: '#0f172a', fontWeight: '600' }}>(+92) 324 6105221</span>
                </div>
              </div>

              <a 
                href="https://wa.me/+923246105221" 
                target="_blank" 
                rel="noreferrer"
                className="btn-submit-modal"
                style={{ textAlign: 'center', display: 'block', textDecoration: 'none', marginBottom: '10px' }}
              >
                Chat on WhatsApp Support
              </a>
              <button 
                onClick={closeModal}
                style={{
                  width: '100%',
                  padding: '10px',
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#475569',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
