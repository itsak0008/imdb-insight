# IMDb Insight Frontend

A modern React application for movie analysis and sentiment insights, built with Vite and Tailwind CSS.

## 🎬 Overview

This is the frontend component of the IMDb Insight Tool, a web application that allows users to search for movies by IMDb ID and receive detailed information along with AI-powered sentiment analysis of audience reviews.

## ✨ Features

- **Movie Search Interface**: Clean, intuitive search bar for IMDb IDs
- **Movie Details Display**: Comprehensive movie information with poster images
- **Sentiment Analysis Cards**: Visual representation of audience sentiment
- **Responsive Design**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Error Handling**: Graceful error states and loading indicators

## 🛠️ Tech Stack

- **React 19** - Latest React with modern hooks and features
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Declarative animations and transitions
- **Axios** - Promise-based HTTP client for API communication
- **React DOM** - React rendering library

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- Backend server running (see backend README)

## 🚀 Installation

1. **Clone the repository** (if not already done):

   ```bash
   git clone https://github.com/itsak0008/imdb-backend.git
   cd imdb-backend/imdb-insight
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:5000/api/v1/movie
   ```

## 🏃‍♂️ Running the Application

### Development Mode

```bash
npm run dev
```

Starts the development server on `http://localhost:5174`

### Production Build

```bash
npm run build
```

Creates an optimized production build in the `dist` folder

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing

## 📁 Project Structure

```
imdb-insight/
├── public/           # Static assets
├── src/
│   ├── api/          # API service functions
│   │   └── movieService.js
│   ├── components/   # Reusable UI components
│   │   ├── ui/       # Basic UI elements (Button, Input, etc.)
│   │   └── movie/    # Movie-specific components
│   ├── hooks/        # Custom React hooks
│   │   └── useMovie.js
│   ├── pages/        # Page components
│   │   └── Home.jsx
│   ├── index.css     # Global styles
│   ├── main.jsx      # Application entry point
│   └── App.jsx       # Main application component
├── index.html        # HTML template
├── vite.config.js    # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── package.json      # Dependencies and scripts
```

## 🎨 Components

### Core Components

- **SearchBar**: Input field for IMDb ID with validation
- **MovieCard**: Displays movie details and poster
- **SentimentCard**: Shows AI sentiment analysis results
- **Container**: Layout wrapper component
- **Button/Input/Loader**: Reusable UI elements

### Custom Hook

- **useMovie**: Manages movie data fetching and state

## 🔧 Configuration

### Vite Configuration

The `vite.config.js` includes:

- Tailwind CSS plugin
- Path aliases for cleaner imports
- Development server settings

### Tailwind CSS

Custom configuration in `tailwind.config.js` for:

- Custom color schemes
- Extended spacing and typography
- Responsive breakpoints

## 🌐 API Integration

The frontend communicates with the backend API through:

- **movieService.js**: Axios-based API client
- Environment variable for API base URL
- Error handling for network issues

## 🧪 Testing & Linting

### Linting

```bash
npm run lint
```

Runs ESLint to check code quality and style

### Development Tools

- **Hot Module Replacement**: Instant updates during development
- **ESLint Integration**: Real-time linting in the editor
- **Browser DevTools**: Debug React components and state

## 📱 Responsive Design

The application is fully responsive with:

- Mobile-first approach
- Flexible grid layouts
- Adaptive image sizing
- Touch-friendly interactions

## 🎭 Animations

Smooth animations powered by Framer Motion:

- Page transitions
- Component entrance animations
- Loading states
- Hover effects

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Static Hosting

The built files in `dist/` can be deployed to:

- Netlify
- Vercel
- GitHub Pages
- Any static web server

## 🤝 Contributing

1. Follow the existing code style
2. Use meaningful commit messages
3. Test your changes thoroughly
4. Update documentation as needed

## 📄 License

This project is part of the IMDb Insight Tool and follows the same license terms.

## 🔗 Related

- **Backend Repository**: [imdb-backend](https://github.com/itsak0008/imdb-backend)
- **Full Application**: See backend README for complete setup instructions

# Deployment

deployed on netlify:
https://imdb-insight.netlify.app/

also allow Insecure content to enable api call....
