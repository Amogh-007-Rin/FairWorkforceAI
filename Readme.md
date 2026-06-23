# FairWorkforceAI

**Sustainable Workforce Planning Using Fair AI** — Team 10

AI-powered workforce sustainability platform that analyzes hiring patterns, skills gaps, and potential biases to help organizations build a balanced, future-ready workforce using fair, unbiased data models.

---

## System Architecture

```mermaid
flowchart TB
    subgraph Client["Client Layer (React SPA)"]
        Landing["Landing Page<br/>(/)"]
        Dashboard["Command Center<br/>(/dashboard)"]
        Analysis["Deep Analysis<br/>(/analysis)"]
        Scenarios["Scenario Planner<br/>(/scenarios)"]
        Workforce["Workforce Intel<br/>(/workforce)"]
        Fairness["Ethics & Compliance<br/>(/fairness)"]
        Ingest["Data Ingestion<br/>(/ingest)"]
        UI["shadcn/ui Components<br/>55+ Radix Primitives"]
        Layout["Sidebar + AI Assistant<br/>Layout Shell"]
    end

    subgraph State["State & Data Layer"]
        QueryClient["TanStack Query<br/>Server State"]
        Hooks["Custom Hooks<br/> use-toast, use-mobile"]
        Lib["Utilities<br/>cn(), apiRequest()"]
    end

    subgraph Build["Build & Dev Tooling"]
        Vite["Vite 7<br/>Dev Server + Bundler"]
        TS["TypeScript 5.6<br/>Type Checking"]
        TW["Tailwind CSS v4<br/>@tailwindcss/vite"]
        ESBuild["esbuild<br/>Server Bundle"]
        ESLint["PostCSS + Autoprefixer"]
    end

    subgraph Server["Server Layer (Express + Node)"]
        Express["Express 4<br/>HTTP Server"]
        Routes["API Routes<br/>(/api/*)"]
        Storage["Data Storage<br/>IStorage Interface"]
        MemStorage["MemStorage<br/>(In-Memory DB)"]
        DB["PostgreSQL<br/>(via Drizzle ORM)"]
        Auth["Passport.js<br/>Local Auth"]
        ViteMW["Vite Middleware<br/>(Dev Mode)"]
        Static["Static Server<br/>(Production Mode)"]
    end

    subgraph Shared["Shared Layer"]
        Schema["Database Schema<br/>shared/schema.ts"]
        Zod["Zod Validation<br/>insertUserSchema"]
    end

    subgraph DataFlow["Data Flow"]
        CSV["CSV Upload<br/>PapaParse"]
        AI["AI Analysis Engine<br/>(Mock / ML)"]
        Insights["Insights &<br/>Recommendations"]
        Reports["Audit Reports<br/>Bias Detection"]
    end

    Client --> State
    Client --> Vite
    Vite --> TS
    Vite --> TW
    ViteMW --> Vite
    Vite --> ESBuild
    Routes --> Storage
    Storage --> MemStorage
    Storage --> DB
    Routes --> Auth
    Auth --> Storage
    Express --> ViteMW
    Express --> Static
    Express --> Routes
    Shared --> Routes
    Shared --> Client
    CSV --> Routes
    CSV --> AI
    AI --> Insights
    AI --> Reports
    Insights --> Client
    Reports --> Client
```

---

## Features

### Command Center (`/dashboard`)
Real-time metrics dashboard with key workforce KPIs: total headcount, skills readiness, attrition risk, and open positions. Includes a Skills Gap radar chart (current capabilities vs. future requirements), department-level Bias Risk scoring, and a live AI insights feed.

### Deep Analysis (`/analysis`)
Three-tab analysis view:
- **Skills Matrix** — Area chart projecting skill demand vs. internal supply; progress bars for critical skill deficits
- **Diversity Index** — Stacked horizontal bar chart showing demographic distribution across organizational hierarchy (Junior → Exec)
- **Hiring Pipeline** — Funnel-style bar chart tracking candidate conversion from Application to Hire, with pipeline health KPIs

### Scenario Planning (`/scenarios`)
Interactive simulation tool with sliders for External Hiring Rate, Upskilling Budget, and Expected Attrition. Projects headcount growth, skills gap closure, and budget impact with risk warnings and opportunity flags.

### Workforce Intelligence (`/workforce`)
Employee grid with real-time retention risk indicators (Low/Medium/High), AI Potential Scores, skills badges, and CSV export. Includes an "AI Analysis" button that simulates predictive model updates.

### Ethics & Compliance (`/fairness`)
Algorithmic auditing hub featuring:
- **Fairness Index** gauge (radial progress)
- **Active Mitigation Protocols** (blind screening, gender-neutral generation, promotion parity, salary equity)
- **Compensation Parity** scatter plot (experience vs. salary by gender)
- **Live Audit Stream** with real-time bias detection logs

### Data Ingestion (`/ingest`)
CSV drag-and-drop upload terminal with simulated AI processing animation (PII anonymization → skill vectorization → bias detection → sustainability report). Auto-generates analysis summary with skills gap detection, bias pattern alerts, and a comprehensive audit report dialog.

### AI Assistant
Persistent floating chat assistant that provides per-page contextual insights. Updates dynamically as users navigate between sections. Displays system recommendations, anomaly alerts, and forecast data.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, TypeScript 5.6, Vite 7 |
| **Routing** | Wouter (lightweight React router) |
| **State** | TanStack Query v5 |
| **Styling** | Tailwind CSS v4, Framer Motion |
| **UI Library** | shadcn/ui (55+ Radix primitives) |
| **Charts** | Recharts 2 |
| **Backend** | Express 4, Node.js |
| **Database** | PostgreSQL (Drizzle ORM) |
| **Auth** | Passport.js (local strategy) |
| **CSV** | PapaParse |
| **Icons** | Lucide React |
| **Forms** | react-hook-form, zod |
| **Build** | esbuild (server), Vite (client) |

---

## Project Structure

```
FairWorkforceAI/
├── client/                        # React SPA (Vite root)
│   ├── index.html                 # HTML entry point
│   ├── public/                    # Static assets
│   └── src/
│       ├── main.tsx               # React entry
│       ├── App.tsx                # Router + providers
│       ├── index.css              # Tailwind v4 + theme
│       ├── components/
│       │   ├── dashboard/         # StatsCard, SkillsGapChart, BiasRiskCard
│       │   ├── layout/            # Sidebar, AiAssistant
│       │   └── ui/                # 55 shadcn/ui components
│       ├── hooks/                 # use-toast, use-mobile
│       ├── lib/                   # utils (cn), queryClient
│       └── pages/                 # 8 route pages
├── server/                        # Express backend
│   ├── index.ts                   # Server entry point
│   ├── routes.ts                  # API route registration
│   ├── storage.ts                 # IStorage + MemStorage
│   ├── static.ts                  # Production static serving
│   └── vite.ts                    # Vite dev middleware
├── shared/                        # Shared types and schemas
│   └── schema.ts                  # Drizzle schema + Zod validation
├── script/
│   └── build.ts                   # Production build script
├── Problem-statement/             # Original hackathon problem
├── attached_assets/               # Static images and assets
├── drizzle.config.ts              # Drizzle ORM config
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript config
├── components.json                # shadcn/ui config
└── package.json
```

---

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Landing | Hero page with background, branding, feature cards |
| `/dashboard` | Command Center | KPI metrics, skills radar, bias risk, AI insights |
| `/analysis` | Deep Analysis | Skills matrix, diversity index, hiring pipeline |
| `/scenarios` | Scenario Planning | Simulation with sliders and projections |
| `/workforce` | Workforce Intel | Employee grid with risk scores, CSV export |
| `/fairness` | Ethics & Compliance | Fairness index, audit stream, compensation parity |
| `/ingest` | Data Ingestion | CSV upload with AI processing and reports |

---

## Setup

### Prerequisites
- Node.js 20+
- PostgreSQL (optional, for production)
- npm

### Installation

```bash
git clone <repo-url>
cd FairWorkforceAI
npm install
```

### Environment

Copy `.env.example` to `.env` and configure:

```env
DATABASE_URL=postgres://username:password@localhost:5432/database_name
```

### Development

```bash
# Start full-stack dev server (Express + Vite HMR)
npm run dev

# Or start frontend only (standalone Vite on port 5000)
npm run dev:client
```

The app is served at `http://localhost:3000` (Express) by default.

### Production Build

```bash
npm run build   # Builds client + bundles server
npm start       # Runs production server on port 3000
```

### Database

```bash
npm run db:push  # Push schema to PostgreSQL
```

### Type Checking

```bash
npm run check    # tsc --noEmit
```

---

## API

API routes are prefixed with `/api`. Current implementation uses in-memory storage (`MemStorage`) with a PostgreSQL-ready interface (`IStorage`). To add routes, edit `server/routes.ts`:

```typescript
import { storage } from "./storage";

// Example:
app.get("/api/users", async (_req, res) => {
  const users = await storage.getUsers();
  res.json(users);
});
```

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes and run `npm run check`
4. Submit a pull request

---

## Future Roadmap

- [ ] Real ML model integration for skills gap prediction and bias detection
- [ ] PostgreSQL persistence with Drizzle migrations
- [ ] User authentication and multi-tenant support
- [ ] WebSocket-based real-time audit streaming
- [ ] PDF report export for compliance audits
- [ ] OAuth / SSO integration
- [ ] Dark/light theme toggle
- [ ] Internationalization (i18n)

---

## License

MIT
