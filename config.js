/**
 * TradeNexa — Central Configuration File
 * Update this file to change pricing, branding, and contact info
 * across the entire website without editing multiple files.
 */

const TradeNexa_CONFIG = {
  // Brand
  brandName: "TradeNexa",
  tagline: "TRADE WITH CLARITY.",
  subTagline: "Clearer Signals. Smarter Decisions.",
  platform: "TradingView",
  launchYear: 2026,

  // Pricing (update these values with real prices)
  currency: "₹",
  currencyCode: "INR",
  monthlyPrice: "1,999",
  lifetimePrice: "9,999",
  monthlyPriceRaw: 1999,
  lifetimePriceRaw: 9999,

  // Contact
  supportEmail: "support@tradenexa.com",
  contactEmail: "hello@tradenexa.com",

  // Social links
  social: {
    x: "https://x.com/tradenexa",
    instagram: "https://instagram.com/tradenexa",
    youtube: "https://youtube.com/@tradenexa",
    telegram: "https://t.me/tradenexa",
    discord: "https://discord.gg/tradenexa",
  },

  // Colors (CSS variables — also update tailwind config if changed)
  colors: {
    primary: "#05070A",
    surface: "#0B1117",
    card: "#101820",
    border: "rgba(255,255,255,0.08)",
    text: "#FFFFFF",
    muted: "#94A3B8",
    buy: "#00E676",    // Electric green
    sell: "#FF4444",   // Professional red
    accent: "#22D3EE", // Cyan
    accentBlue: "#3B82F6",
  },

  // Performance stats — USE ONLY VERIFIED DATA
  // These are PLACEHOLDER values. Replace with real backtested/live data.
  performance: {
    isPlaceholder: true,
    winRate: "--",
    profitFactor: "--",
    totalSignals: "--",
    maxDrawdown: "--",
    avgRiskReward: "--",
    backtestPeriod: "-- to --",
    disclaimer: "Past performance and backtested results are not indicative of future performance. Performance data shown is for demonstration purposes only until verified results are published.",
  },

  // Features list
  features: [
    { id: "buy", title: "BUY SIGNALS", desc: "Clearly display potential bullish opportunities directly on the chart." },
    { id: "sell", title: "SELL SIGNALS", desc: "Clearly display potential bearish opportunities on the chart." },
    { id: "tv", title: "TRADINGVIEW", desc: "Designed exclusively for use within the TradingView platform." },
    { id: "rt", title: "REAL-TIME SIGNALS", desc: "Display signals as supported market conditions develop." },
    { id: "mtf", title: "MULTI-TIMEFRAME", desc: "Analyze multiple supported timeframes with a single indicator." },
    { id: "alerts", title: "ALERTS", desc: "Configure TradingView alerts where supported by the indicator." },
    { id: "clean", title: "CLEAN INTERFACE", desc: "Focus on important information without unnecessary chart clutter." },
    { id: "easy", title: "EASY TO USE", desc: "Designed for both newer and experienced traders." },
  ],

  // FAQ items
  faq: [
    {
      q: "What is TradeNexa?",
      a: "TradeNexa is a TradingView trading indicator designed to display potential BUY and SELL signals and assist traders with technical market analysis.",
    },
    {
      q: "Does TradeNexa work with TradingView?",
      a: "Yes. TradeNexa is designed exclusively for TradingView. You will need an active TradingView account to use it.",
    },
    {
      q: "What markets can I use TradeNexa on?",
      a: "TradeNexa supports a range of markets available through TradingView including crypto, forex, indices, and commodities. Specific supported markets will be detailed in your dashboard after purchase.",
    },
    {
      q: "Does TradeNexa guarantee profits?",
      a: "No. No trading indicator can guarantee profits. TradeNexa is a decision-support and technical-analysis tool. Always use appropriate risk management.",
    },
    {
      q: "How accurate is TradeNexa?",
      a: "Signal accuracy varies by market, timeframe, and market conditions. Only verified historical or backtested statistics are published. Past results are not indicative of future performance.",
    },
    {
      q: "How do I install TradeNexa?",
      a: "After purchasing, follow the TradingView Access instructions in your dashboard. We provide a step-by-step guide to get you set up quickly.",
    },
    {
      q: "What is the difference between Monthly and Lifetime?",
      a: "Monthly provides ongoing access through a recurring subscription. Lifetime provides access for a single one-time payment with no recurring charges, subject to the applicable terms and conditions.",
    },
    {
      q: "Do I receive future updates?",
      a: "Both Monthly and Lifetime plans include access to future indicator updates as they are released during your active subscription or license period.",
    },
    {
      q: "Do I need a TradingView account?",
      a: "Yes. TradeNexa is a TradingView indicator, so an active TradingView account is required. A free TradingView account may be sufficient depending on the distribution method — details are provided after purchase.",
    },
  ],

  // SEO
  seo: {
    title: "TradeNexa — TradingView Buy & Sell Indicator",
    description: "TradeNexa is a professional TradingView indicator designed to help traders identify potential BUY and SELL opportunities with clear visual signals.",
    keywords: "TradeNexa, TradingView indicator, buy sell indicator, trading signals, TradingView buy sell signals, trading indicator",
    ogImage: "/og-image.png",
    twitterHandle: "@tradenexa",
    canonicalBase: "https://tradenexa.com",
  },

  // Risk disclaimer (full text)
  riskDisclaimer: "Trading financial markets involves substantial risk and may not be suitable for all investors. TradeNexa is a technical analysis and decision-support tool and does not provide financial advice or guarantee profits. Past performance, hypothetical results, and backtested results are not indicative of future performance. Traders should conduct their own research and use appropriate risk management strategies. Never trade with money you cannot afford to lose.",
};

// Make available globally
if (typeof module !== 'undefined') module.exports = TradeNexa_CONFIG;

