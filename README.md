# 🚀 MERN Stack Task Manager - Deployment & DevOps

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20App-success?style=for-the-badge&logo=vercel)](https://development-classroom-deployment-and-devops-essentia-pg1hy1ekw.vercel.app)

A full-stack task management application built with MongoDB, Express.js, React, and Node.js, featuring automated CI/CD pipelines and cloud deployment.

## 📱 Live Application

- **Frontend (Vercel)**: https://development-classroom-deployment-and-devops-essentia-pg1hy1ekw.vercel.app
- **Backend API (Render)**: https://development-classroom-deployment-and.onrender.com
- **API Health Check**: https://development-classroom-deployment-and.onrender.com/health

> 🚀 **App is LIVE!** Click the links above to see the deployed application.

## 🎯 Project Overview

This project demonstrates a complete MERN stack application with:

- ✅ Production-ready backend API with Express.js
- ✅ Interactive React frontend with modern UI
- ✅ MongoDB Atlas cloud database
- ✅ Automated CI/CD pipelines with GitHub Actions
- ✅ Cloud deployment (Render + Vercel)
- ✅ Security best practices and error handling
- ✅ Monitoring and health check endpoints

## 🏗️ Architecture

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│   React App     │─────▶│   Express API   │─────▶│  MongoDB Atlas  │
│   (Vercel)      │      │   (Render)      │      │   (Cloud DB)    │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

## 📂 Project Structure

```
deployment-and-devops-essentials-Magwaza51/
├── backend/                    # Express.js API
│   ├── models/                 # MongoDB models
│   │   └── Task.js            # Task schema
│   ├── routes/                 # API routes
│   │   └── tasks.js           # Task CRUD endpoints
│   ├── tests/                  # API tests
│   │   └── api.test.js
│   ├── server.js              # Main server file
│   ├── package.json           # Backend dependencies
│   └── .env.example           # Environment template
├── frontend/                   # React application
│   ├── src/
│   │   ├── App.js             # Main component
│   │   ├── App.css            # Styling
│   │   └── index.js           # Entry point
│   ├── public/
│   │   └── index.html
│   ├── package.json           # Frontend dependencies
│   └── .env.example           # Environment template
├── .github/workflows/          # CI/CD pipelines
│   ├── backend-ci.yml         # Backend testing
│   ├── backend-cd.yml         # Backend deployment
│   ├── frontend-ci.yml        # Frontend testing
│   └── frontend-cd.yml        # Frontend deployment
└── deployment/                 # Deployment guides
    ├── DEPLOYMENT_GUIDE.md    # Complete guide
    ├── mongodb-atlas-setup.md
    ├── render-backend-config.md
    └── vercel-frontend-config.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git
- MongoDB Atlas account (free tier)
- Render account (free tier)
- Vercel account (free tier)

### Local Development Setup

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd deployment-and-devops-essentials-Magwaza51
   ```
2. **Set up Backend**

   ```bash
   cd backend
   npm install

   # Create .env file
   cp .env.example .env
   # Edit .env with your MongoDB connection string

   # Start development server
   npm run dev
   ```

   Backend runs on: http://localhost:5000
3. **Set up Frontend**

   ```bash
   cd frontend
   npm install

   # Create .env file
   cp .env.example .env
   # Edit .env with your API URL

   # Start development server
   npm start
   ```

   Frontend runs on: http://localhost:3000

## 🔧 Technologies Used

### Backend

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger
- **Compression** - Response compression
- **Express Rate Limit** - API rate limiting
- **Jest & Supertest** - Testing

### Frontend

- **React 18.2.0** - UI library
- **Vite 5.0.8** - Build tool and dev server
- **Axios** - HTTP client
- **CSS3** - Styling with gradients and animations

### DevOps

- **GitHub Actions** - CI/CD pipelines
- **Render** - Backend hosting
- **Vercel** - Frontend hosting
- **MongoDB Atlas** - Database hosting

## 🌐 Deployment

### Quick Deployment Guide

For complete step-by-step instructions, see [DEPLOYMENT_GUIDE.md](deployment/DEPLOYMENT_GUIDE.md)

**Summary:**

1. **Database**: Set up MongoDB Atlas cluster
2. **Backend**: Deploy to Render with environment variables
3. **Frontend**: Deploy to Vercel with API URL
4. **CI/CD**: Configure GitHub Actions secrets

### Environment Variables

**Backend (.env)**

```
NODE_ENV=production
PORT=5000
MONGODB_URI=your_mongodb_connection_string
FRONTEND_URL=https://your-frontend.vercel.app
```

**Frontend (.env)**

```
VITE_API_URL=https://your-backend.onrender.com/api
```

## 🔄 CI/CD Pipeline

### Automated Workflows

- **Backend CI**: Runs tests and linting on every push
- **Frontend CI**: Builds and tests React app
- **Backend CD**: Auto-deploys to Render on main branch
- **Frontend CD**: Auto-deploys to Vercel on main branch

### Workflow Status

![Backend CI](https://github.com/your-username/your-repo/workflows/Backend%20CI/badge.svg)
![Frontend CI](https://github.com/your-username/your-repo/workflows/Frontend%20CI/badge.svg)

## 🧪 Testing

**Backend Tests**

```bash
cd backend
npm test              # Run tests
npm run lint          # Run linter
```

**Frontend Tests**

```bash
cd frontend
npm test              # Run tests
npm run build         # Production build
```

## 📊 API Documentation

### Base URL

```
Production: https://your-backend.onrender.com/api
Development: http://localhost:5000/api
```

### Endpoints

#### Health Check

```http
GET /health
```

Returns server health status

#### Tasks

**Get All Tasks**

```http
GET /api/tasks
Query Parameters: ?status=pending&priority=high
```

**Get Single Task**

```http
GET /api/tasks/:id
```

**Create Task**

```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Task title",
  "description": "Task description",
  "priority": "high",
  "status": "pending"
}
```

**Update Task**

```http
PUT /api/tasks/:id
Content-Type: application/json

{
  "status": "completed"
}
```

**Delete Task**

```http
DELETE /api/tasks/:id
```

## 🛡️ Security Features

- ✅ Helmet.js for security headers
- ✅ CORS protection
- ✅ Rate limiting on API routes
- ✅ Environment variable protection
- ✅ Input validation with Mongoose
- ✅ Secure MongoDB connection
- ✅ HTTPS enforcement in production

## 📈 Monitoring

- **Health Endpoint**: `/health` for uptime monitoring
- **Render Logs**: Real-time application logs
- **MongoDB Atlas**: Database performance metrics
- **Vercel Analytics**: Frontend performance tracking

## 🐛 Troubleshooting

**Backend won't connect to database**

- Check MongoDB Atlas IP whitelist
- Verify connection string in environment variables
- Ensure database user has correct permissions

**Frontend can't reach backend**

- Verify CORS settings in backend
- Check `REACT_APP_API_URL` environment variable
- Ensure backend is deployed and running

**CI/CD pipeline failing**

- Check GitHub Actions logs
- Verify secrets are properly set
- Ensure tests pass locally first

## 📝 Assignment Completion Checklist

- [X] Backend API created with Express.js
- [X] Frontend created with React (migrated to Vite)
- [X] MongoDB Atlas database configured
- [X] CI/CD pipelines set up with GitHub Actions
- [X] Backend deployed to Render
- [X] Frontend deployed to Vercel
- [X] Environment variables configured (production & development)
- [X] Health check endpoint implemented
- [X] Error handling and retry logic implemented
- [X] Security middleware added (Helmet, CORS, Rate Limiting)
- [X] MongoDB connection with retry logic
- [X] HTTPS enabled on both frontend and backend
- [X] Documentation completed
- [X] Deployment URLs added to README
- [X] Live application tested and verified working

## 📸 Screenshots

[Add screenshots of your deployed application here]

## 🤝 Contributing

This is an assignment project, but feedback is welcome!

## 📄 License

This project is created for educational purposes as part of the PLP MERN Stack Development course.

## 👨‍💻 Author

**Mlungisi Magwaza**

- Repository: [development-classroom-deployment-and-devops-essentials](https://github.com/Magwaza51/development-classroom-deployment-and-devops-essentials-week7)

## 🎓 Course Information

**Program**: PLP MERN Stack Development
**Week**: 7 - Deployment and DevOps Essentials
**Assignment**: Full-Stack Application Deployment

---

⭐ **Note**: Remember to add your actual deployment URLs after deploying the application!
