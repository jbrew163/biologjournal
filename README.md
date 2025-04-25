# Biolog Journal

A comprehensive biological journaling application built with Next.js that helps researchers and scientists track their experiments, metrics, and daily observations.

## Features

- 📝 Journal Entries
  - Daily research notes and observations
  - Mood, focus, and energy level tracking
  - Date-based organization
  - Rich text editing support

- 🧪 Experiments
  - Track ongoing experiments
  - Record methodology and results
  - Timeline visualization
  - Status tracking

- 📊 Metrics Dashboard
  - Customizable metrics tracking
  - Data visualization
  - Progress monitoring
  - Export capabilities

- 👤 User Management
  - Secure authentication
  - Personal profiles
  - Data privacy
  - Role-based access control

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL with Prisma
- **UI Components**: shadcn/ui
- **State Management**: React Query
- **Charts**: Recharts or Chart.js
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Initialize the database:
   ```bash
   npx prisma db push
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure 