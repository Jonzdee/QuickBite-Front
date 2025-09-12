#QuickBite Frontend

A multi-vendor food delivery platform connecting customers, vendors, riders, and admins in real time. This is the frontend app, built with React.
-------------------------------------------
Tech Stack
React (JSX) – Core framework
shadcn/ui – Prebuilt, accessible UI components
Framer Motion – Animations & transitions
React Router – Client-side routing
Redux Toolkit – State management (auth, cart, orders)
Axios – API requests
Google Sheets (Drive) – Lightweight data tracking & operations (early phase)

Features
-----------------------------------------------
Core (MVP)
Customer ordering flow (browse → cart → checkout)
Vendor dashboard (manage menu & orders)
Rider tracking (live location & active deliveries)
Admin panel (analytics & user management)
-----------------------------------------------
Stretch (Nice-to-Have)
Promo codes
Customer reviews
AI-based meal recommendations

Folder Structure
-----------------------------------------------
src/
├── components/     # Shared UI (Navbar, Button, MapTracker)
├── pages/          # Role-based pages (Customer, Vendor, Rider, Admin)
├── hooks/          # Custom hooks (useAuth, useCart, useWebSocket)
├── store/          # Redux slices
├── services/       # API layer
├── assets/         # Images & styles
├── utils/          # Helpers (formatCurrency, calculateETA)
├── App.jsx         # App entry
└── index.js        # ReactDOM entry

External Resources
-----------------------------------------------
shadcn ui
Framer Motion
Google Sheets
 (used for data operations & tracking)