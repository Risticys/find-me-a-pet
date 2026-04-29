🐾 Find Me a Pet – Smart Pet Matching Platform

## 📸 Screenshots

### 🏠 Home Page
![Home](docs/home.png)

### 📍 Pet Feed
![Find Match](docs/find-match.png)

### 🐶 Pet Details
![Forum](docs/forum.png)


A full-stack web application concept for connecting users with adoptable pets, featuring a smart matching system and a location-based community feed.

This repository currently contains the frontend and full backend architecture structure, but the backend logic is not implemented yet.

🚀 Project Status

⚠️ Important:

Backend is only scaffolded (Clean Architecture structure)
No business logic or API endpoints are fully implemented yet
Frontend is functional (UI + basic integration-ready structure)
🧩 Features (Planned)
🏠 Browse pets for adoption (filter + search)
🔐 JWT authentication (User/Admin roles)
🐕 Pet management (CRUD + image upload)
🧠 Smart pet matching system
📍 Location-based pet feed (no followers, local only)
💬 Likes and comments on posts
📷 Instagram-style feed with infinite scroll
📍 Location-Based Feed (Concept)
No global feed
No followers
Users only see posts:
From the same city OR
Within a defined radius (e.g. 20 km)

Example:

GET /api/posts?lat=...&lng=...&radius=20
🧱 Tech Stack

Backend (Planned)

ASP.NET Core (.NET 8)
Entity Framework Core
SQL Server
JWT Authentication

Frontend

Angular (latest)
Reactive Forms
HTTP Interceptors

Architecture

Clean Architecture (Domain, Application, Infrastructure, API)
📂 Project Structure
find-me-a-pet/
│
├── backend/              # Clean Architecture structure (not implemented)
│
├── frontend/
│   └── find-me-a-pet-ui/
│
├── docs/
│
└── README.md
⚙️ Getting Started
Frontend
cd frontend/find-me-a-pet-ui
npm install
ng serve

Runs on:

http://localhost:4200
🛠️ Backend (Planned)

The backend follows a Clean Architecture design, including:

Controllers layer
Services layer
Repository layer
DTOs
EF Core setup

Implementation is planned in a future version.

🚀 Future Work
Full API implementation
Database integration (SQL Server)
Authentication system
Matching algorithm
Location filtering (Haversine formula)
Deployment (Azure / Docker)