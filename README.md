# TradeNexa — Premium TradingView Buy & Sell Indicator Website

A complete, production-quality SaaS website for the TradeNexa TradingView trading indicator.

## 🗂️ Project Structure

```
tradenexa/
├── index.html              # Homepage (main landing page)
├── features.html           # Features page
├── how-it-works.html       # How it works page  
├── signals.html            # Signals demo page
├── pricing.html            # Pricing page
├── faq.html                # FAQ page
├── about.html              # About page
├── contact.html            # Contact page
│
├── login.html              # Login page
├── signup.html             # Sign up / Create account
├── checkout.html           # Checkout page
├── payment-success.html    # Post-payment success
│
├── dashboard.html          # User dashboard
├── tradingview-access.html # TradingView installation guide
├── account.html            # Account settings
├── billing.html            # Billing & payments
├── license.html            # License management
│
├── admin.html              # Admin dashboard
│
├── privacy.html            # Privacy Policy
├── terms.html              # Terms & Conditions
├── refund.html             # Refund Policy
├── risk-disclaimer.html    # Risk Disclaimer
│
├── config.js               # ⭐ Central configuration file
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine robots file
└── README.md               # This file
```

## ⚙️ Configuration

All pricing, branding, and content settings are centralized in [`config.js`](./config.js).

### To update pricing:
Open `config.js` and change:
```js
monthlyPrice: "1,999",   // Change to your monthly price
lifetimePrice: "9,999",  // Change to your lifetime price
```

### To update contact info:
```js
supportEmail: "support@tradenexa.com",  // Your support email
```

### To update social links:
```js
social: {
  x: "https://x.com/YOUR_HANDLE",
  // etc.
}
```

## 🚀 Quick Start

1. **Open in browser**: Simply open `index.html` in any modern browser
2. **No build step required**: Pure HTML/CSS/JS — runs without Node.js or npm
3. **Customise**: Edit `config.js` for branding/pricing, edit individual `.html` files for content

## 🎨 Design System

| Variable | Value | Use |
|----------|-------|-----|
| `--bg-primary` | `#05070A` | Main background |
| `--bg-secondary` | `#0A0F14` | Section backgrounds |
| `--bg-card` | `#0E151C` | Card backgrounds |
| `--buy` | `#00E676` | BUY signals, primary CTA |
| `--sell` | `#FF4466` | SELL signals |
| `--accent` | `#22D3EE` | Cyan accent |
| `--text-primary` | `#F0F4F8` | Main text |
| `--text-secondary` | `#94A3B8` | Muted text |

Fonts: **Space Grotesk** (headings), **Manrope** (body), **JetBrains Mono** (code/labels)

## 💳 Payment Integration

The checkout UI is ready for backend integration. Connect either:

- **Razorpay** (recommended for India)
- **Stripe** (international)

> ⚠️ **NEVER put payment secret keys in frontend code.** All payment processing must be done server-side. The frontend only holds publishable/public keys.

### Backend requirements:
- User authentication (JWT recommended)
- Subscription management (Razorpay Subscriptions or Stripe Subscriptions)
- License key generation and validation
- TradingView invite-only script access management
- Webhook handling for payment events

## 🔐 Security Notes

- Payment keys: server-side only
- License validation: server-side API
- User sessions: JWT or server sessions
- Passwords: hashed (bcrypt) server-side
- Never store raw payment card data

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `> 1100px` | Full desktop layout |
| `900-1100px` | Tablet with adjusted grids |
| `700-900px` | Mobile with stacked layouts |
| `< 700px` | Hamburger nav, single column |

## ⚖️ Legal Compliance

The website includes:
- ✅ Risk disclaimer on every page footer
- ✅ No false profit claims
- ✅ All demo data clearly marked as "DEMONSTRATION DATA"
- ✅ Placeholder testimonials marked as placeholders
- ✅ Performance data placeholders (no invented statistics)
- ✅ Privacy Policy page
- ✅ Terms & Conditions page
- ✅ Refund Policy page
- ✅ Risk Disclaimer page

> **Important**: The legal pages contain reasonable placeholder content. Have them reviewed by a qualified legal professional before going live.

## 📊 Performance Stats

The performance section currently shows `--` placeholders for all statistics. **Only replace these with real, verified data.** Do not invent or estimate performance numbers.

## 🌐 SEO

- Semantic HTML structure
- Open Graph metadata
- Twitter Card metadata
- JSON-LD structured data on homepage
- XML sitemap
- robots.txt
- Canonical URL tags
- Keyword-optimised title and meta description

## 📋 Pages Checklist

| Page | Status |
|------|--------|
| Homepage | ✅ Complete |
| Features | ✅ Complete |
| How It Works | ✅ Complete |
| Signals | ✅ Complete |
| Pricing | ✅ Complete |
| FAQ | ✅ Complete |
| About | ✅ Complete |
| Contact | ✅ Complete |
| Login | ✅ Complete |
| Sign Up | ✅ Complete |
| Checkout | ✅ Complete |
| Payment Success | ✅ Complete |
| Dashboard | ✅ Complete |
| TradingView Access | ✅ Complete |
| Account Settings | ✅ Complete |
| Billing | ✅ Complete |
| License | ✅ Complete |
| Admin Dashboard | ✅ Complete |
| Privacy Policy | ✅ Complete |
| Terms & Conditions | ✅ Complete |
| Refund Policy | ✅ Complete |
| Risk Disclaimer | ✅ Complete |

## 🔗 Conversion Flow

```
LANDING PAGE
  → VIEW PRODUCT (features, signals, how-it-works)
    → PRICING PAGE
      → SIGN UP (create account)
        → CHECKOUT
          → PAYMENT SUCCESS
            → TRADINGVIEW ACCESS (install guide)
              → DASHBOARD
```

---

© 2026 TradeNexa. All rights reserved.  
TradeNexa is a TradingView indicator for technical analysis purposes only. Not financial advice.

