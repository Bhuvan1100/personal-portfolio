# Portfolio Application

## Overview

This is a full-stack portfolio application for Bhuvan Bhaskar Deo, showcasing development skills and projects. The application is built with a modern tech stack featuring React on the frontend, Express.js on the backend, and PostgreSQL as the database. It's currently set up as a personal portfolio website with sections for Home, About, Projects, and Resume.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: React Router for client-side navigation
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Comprehensive set of shadcn/ui components built on Radix UI primitives
- **State Management**: React Context for theme management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Module System**: ES Modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for bundling server code

### Database Architecture
- **Database**: PostgreSQL 16
- **ORM**: Drizzle ORM with Zod schema validation
- **Connection**: Neon Database serverless connection
- **Migrations**: Managed through drizzle-kit

## Key Components

### Database Schema
- **Users Table**: Basic user structure with id, username, and password fields
- **Schema Location**: `shared/schema.ts` for shared type definitions
- **Validation**: Zod schemas for runtime type checking

### Storage Layer
- **Interface**: IStorage interface defining CRUD operations
- **Implementation**: MemStorage class for in-memory storage (development)
- **Methods**: getUser, getUserByUsername, createUser

### UI Component System
- **Base**: shadcn/ui component library with Radix UI primitives
- **Theme**: Dark/light mode support with CSS custom properties
- **Components**: Comprehensive set including forms, navigation, cards, etc.
- **Styling**: Tailwind CSS with custom design tokens

### Development Features
- **Hot Reload**: Vite HMR for fast development iteration
- **Error Handling**: Runtime error overlay for development
- **Type Safety**: Full TypeScript coverage across frontend and backend

## Data Flow

1. **Client Request**: React Router handles navigation and renders appropriate page components
2. **API Calls**: Frontend makes requests to Express backend via `/api` routes
3. **Data Processing**: Backend processes requests using storage interface
4. **Database Operations**: Drizzle ORM handles database interactions
5. **Response**: JSON responses sent back to frontend for UI updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management (setup but not actively used)

### UI Dependencies
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component styles

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundler for production builds

## Deployment Strategy

### Platform
- **Environment**: Replit with autoscale deployment
- **Runtime**: Node.js with PostgreSQL module

### Build Process
1. **Development**: `npm run dev` starts Vite dev server with Express backend
2. **Production Build**: 
   - Frontend: Vite builds React app to `dist/public`
   - Backend: esbuild bundles server code to `dist/index.js`
3. **Production Start**: `npm run start` runs bundled server

### Configuration
- **Port**: Internal port 5000, external port 80
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Static Files**: Served from `dist/public` in production

## Changelog

```
Changelog:
- June 20, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```