# Project Development Plan: Biolog Journal

This document outlines the detailed development plan for the Biolog Journal application, including technical specifications, implementation phases, and design guidelines.

## Core Features Implementation

### 1. Authentication System
- [ ] Email/password authentication using NextAuth.js
- [ ] OAuth integration (Google, GitHub)
- [ ] Protected route middleware
- [ ] User profile management system
  - Profile editing
  - Preferences management
  - Account settings

### 2. Journal Entries Module
- [ ] CRUD operations for entries
- [ ] TipTap or ProseMirror rich text editor
- [ ] Date-based organization system
- [ ] Tracking components:
  - Mood scale (1-10)
  - Focus level tracker
  - Energy level indicator
- [ ] Search functionality with filters
- [ ] Tagging system and categories

### 3. Experiments Tracking
- [ ] Experiment management system
  - Title and description
  - Methodology documentation
  - Results recording
- [ ] Status workflow:
  ```typescript
  enum ExperimentStatus {
    PLANNING = 'planning',
    IN_PROGRESS = 'in_progress',
    COMPLETED = 'completed',
    ON_HOLD = 'on_hold'
  }
  ```
- [ ] Timeline visualization using Recharts
- [ ] File attachment system
- [ ] Collaboration features:
  - Sharing
  - Comments
  - Activity log

### 4. Metrics Dashboard
- [ ] Custom metric creation
- [ ] Data visualization components:
  - Line charts
  - Bar charts
  - Progress indicators
  - Summary statistics
- [ ] CSV/PDF export functionality
- [ ] Date range filtering
- [ ] Metric categories and grouping

### 5. User Interface Components
- [ ] Layout components:
  - Responsive sidebar
  - Header with navigation
  - Content area
- [ ] Dark/light mode implementation
- [ ] Loading states and skeletons
- [ ] Toast notification system
- [ ] Animations using Framer Motion

## Technical Architecture

### Database Schema

\`\`\`prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  password      String
  journals      Journal[]
  experiments   Experiment[]
  metrics       Metric[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Journal {
  id            String    @id @default(cuid())
  title         String
  content       Json      // For rich text storage
  mood          Int?
  focus         Int?
  energy        Int?
  tags          String[]
  userId        String
  user          User      @relation(fields: [userId], references: [id])
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Experiment {
  id            String    @id @default(cuid())
  title         String
  description   String
  methodology   String
  status        String
  results       String?
  attachments   Json?     // For file metadata
  userId        String
  user          User      @relation(fields: [userId], references: [id])
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Metric {
  id            String    @id @default(cuid())
  name          String
  type          String    // numeric, boolean, scale
  value         Json      // For flexible value storage
  userId        String
  user          User      @relation(fields: [userId], references: [id])
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}
\`\`\`

### API Routes Structure

\`\`\`
/api
├── auth/
│   ├── [...nextauth]
│   ├── register
│   └── profile
├── journals/
│   ├── index (GET, POST)
│   ├── [id] (GET, PUT, DELETE)
│   └── search
├── experiments/
│   ├── index (GET, POST)
│   ├── [id] (GET, PUT, DELETE)
│   └── attachments
└── metrics/
    ├── index (GET, POST)
    ├── [id] (GET, PUT, DELETE)
    └── export
\`\`\`

## Development Phases

### Phase 1: Setup & Authentication (Week 1-2)
- [ ] Project initialization with Next.js
- [ ] Prisma setup and initial migrations
- [ ] NextAuth.js implementation
- [ ] Basic layout components
- [ ] Navigation setup

### Phase 2: Journal Entries (Week 3-4)
- [ ] Journal CRUD operations
- [ ] Rich text editor integration
- [ ] Search and filter implementation
- [ ] Tags system
- [ ] Journal list and detail views

### Phase 3: Experiments (Week 5-6)
- [ ] Experiment management system
- [ ] Timeline visualization
- [ ] File upload integration
- [ ] Status management
- [ ] Collaboration features

### Phase 4: Metrics (Week 7-8)
- [ ] Dashboard layout
- [ ] Charts and visualizations
- [ ] Custom metrics system
- [ ] Export functionality
- [ ] Date filtering

### Phase 5: Polish & Deploy (Week 9-10)
- [ ] UI/UX refinement
- [ ] Performance optimization
- [ ] Testing implementation
- [ ] Documentation
- [ ] Deployment setup

## Design System

### Colors
```typescript
const colors = {
  primary: '#2563eb',    // Blue
  secondary: '#16a34a',  // Green
  accent: '#9333ea',     // Purple
  light: {
    background: '#ffffff',
    text: '#0f172a',
    border: '#e2e8f0'
  },
  dark: {
    background: '#0f172a',
    text: '#f8fafc',
    border: '#334155'
  }
}
```

### Typography
```typescript
const typography = {
  fontFamily: {
    sans: 'Inter, system-ui, sans-serif',
    mono: 'JetBrains Mono, monospace'
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem'
  }
}
```

## Testing Strategy

### Unit Tests
- Components using React Testing Library
- Utility functions using Jest
- API route handlers

### Integration Tests
- API endpoints
- Authentication flows
- Data persistence

### E2E Tests
- User journeys using Cypress
- Critical paths:
  - Authentication
  - Journal creation
  - Experiment management
  - Metrics tracking

## Security Measures

- [ ] Input validation using Zod
- [ ] CSRF protection
- [ ] Rate limiting on API routes
- [ ] Data encryption at rest
- [ ] Secure session management
- [ ] XSS prevention
- [ ] SQL injection protection

## Performance Optimization

- [ ] Image optimization using Next.js Image
- [ ] Code splitting and lazy loading
- [ ] API response caching
- [ ] Static page generation where applicable
- [ ] Bundle size optimization
- [ ] Database query optimization

## Accessibility Requirements

- [ ] ARIA labels implementation
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] Color contrast compliance
- [ ] Focus management
- [ ] Skip links
- [ ] Form accessibility 