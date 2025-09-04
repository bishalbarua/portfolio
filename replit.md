# Overview

This is a professional portfolio website for Bishal Barua, an AI-driven marketing expert and project manager. The application showcases his professional experience, skills, services, and achievements while providing a contact form for potential clients. Built as a full-stack application with a modern React frontend and Express backend, it serves as both a portfolio showcase and lead generation platform.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript for type safety and component-based architecture
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives for consistent, accessible design
- **Styling**: Tailwind CSS with CSS custom properties for theming and responsive design
- **State Management**: TanStack Query for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript for RESTful API endpoints
- **Database Integration**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Data Storage**: In-memory storage implementation for development with interface for database migration
- **API Design**: RESTful endpoints for contact submissions and achievements data
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Layer
- **Schema Management**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Database Tables**: 
  - Contact submissions for lead capture
  - Achievements for dynamic content display
  - User management structure for future authentication needs
- **Validation**: Zod schemas for runtime type validation and API request/response safety
- **Migration Strategy**: Drizzle Kit for database schema migrations and version control

## Component Architecture
- **Layout Structure**: Single-page application with smooth scrolling navigation between sections
- **Section Components**: Modular sections for hero, about, skills, experience, services, achievements, resources, and contact
- **Responsive Design**: Mobile-first approach with adaptive layouts using Tailwind breakpoints
- **Accessibility**: WCAG-compliant components with proper ARIA labels and keyboard navigation support

## Development Workflow
- **Development Server**: Vite development server with hot module replacement
- **Production Build**: Static asset generation with Express server for API endpoints
- **TypeScript Configuration**: Strict type checking with path mapping for clean imports
- **Code Organization**: Clear separation of concerns with shared types between frontend and backend

# External Dependencies

## UI and Styling
- **shadcn/ui**: Complete UI component library with customizable themes
- **Radix UI**: Headless UI primitives for accessibility and behavior
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets for brand icons and specialized graphics

## Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definitions
- **Drizzle ORM**: Type-safe database operations and migrations

## Database and Hosting
- **PostgreSQL**: Primary database configured through Drizzle
- **Neon Database**: Serverless PostgreSQL provider for scalable hosting
- **Environment Variables**: Database connection and configuration management

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast bundling for production builds
- **Replit Integration**: Development environment plugins for cloud-based coding

## Communication Features
- **Contact Form**: Lead capture with validation and email notification capabilities
- **Professional Profiles**: Integration with LinkedIn, Behance, Fiverr, and Upwork for external presence
- **Portfolio Display**: Dynamic content management for achievements and services