# OctoFit Tracker

A modern multi-tier fitness tracking application built with GitHub Copilot Agent Mode.

## Architecture

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Port**: 5173
- **Features**: 
  - Fast development with HMR (Hot Module Replacement)
  - Modern component-based UI

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Language**: TypeScript
- **Port**: 8000
- **Database**: MongoDB (Mongoose ODM)
- **Features**:
  - RESTful API
  - Type-safe development
  - CORS enabled

### Database
- **Type**: MongoDB
- **Port**: 27017
- **Default Database**: octofit-tracker

## Project Structure

```
octofit-tracker/
├── frontend/                 # React 19 + Vite application
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── ...
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── backend/                  # Node.js + Express + TypeScript API
    ├── src/
    │   ├── index.ts          # Main server entry point
    │   ├── models/
    │   │   ├── User.ts       # User model
    │   │   └── Workout.ts    # Workout model
    │   └── ...
    ├── package.json
    ├── tsconfig.json
    └── .env.example
```

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB running on port 27017

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
cp .env.example .env
npm run dev
```

The backend API will be available at `http://localhost:8000`

### MongoDB Setup

Ensure MongoDB is running:
```bash
# Using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Or using local MongoDB installation
mongod --port 27017
```

## Available Endpoints

- `GET /health` - Health check endpoint
- `GET /api` - API info endpoint

## Development

### Frontend Development
- Hot Module Replacement enabled
- Edit files in `frontend/src/` to see changes instantly
- Build production version: `npm run build`

### Backend Development
- Type checking enabled with TypeScript
- Edit files in `backend/src/` for automatic reload (with ts-node)
- Build production version: `npm run build`

## Technologies

**Frontend:**
- React 19
- Vite 5
- ES Modules

**Backend:**
- Express 4
- TypeScript 5
- Mongoose 8
- Node.js (ES Modules)

**Database:**
- MongoDB
- Mongoose ODM for data modeling

## Ports Configuration

- Frontend: `5173` (Vite dev server)
- Backend API: `8000`
- MongoDB: `27017`

## Features

### Phase 1 (Current)
- ✅ Multi-tier application structure
- ✅ React 19 frontend with Vite
- ✅ Node.js + Express backend with TypeScript
- ✅ MongoDB integration with Mongoose
- ✅ Health check and API endpoints
- ✅ User and Workout models

### Future Features
- User authentication
- Workout logging and tracking
- Fitness statistics and analytics
- Social features
- Mobile app support
