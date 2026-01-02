# bucko-web

An Astro-based web application for bucko-web, containerized with Docker.

## 🚀 Project Overview

This project is a web application built with the Astro web framework. It is designed for easy development and deployment using Docker containers.

### Current Status
- ✅ Basic Astro project setup
- ✅ Docker containerization with Docker Compose
- ✅ Ready for development and deployment

## 🛠 Technology Stack

- **Web Framework**: Astro
- **Containerization**: Docker & Docker Compose

## 📁 Project Structure

```
bucko-web/
├── README.md              # This file
├── Dockerfile             # Docker container configuration
├── compose.yaml           # Docker Compose setup
├── package.json           # Node.js dependencies
├── astro.config.mjs       # Astro configuration
├── .gitignore             # Git ignore patterns
└── src/
    ├── components/        # Astro components
    ├── layouts/           # Astro layouts
    └── pages/             # Astro pages
```

## 🔧 Setup & Installation

### Prerequisites
- Docker and Docker Compose
- Node.js and npm (for local development without Docker)

### Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd bucko-web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run with Docker Compose**:
   ```bash
   docker compose up
   ```

4. **Access the application**:
   - Open your browser to `http://localhost:4321`

### Local Development without Docker

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Access the application**:
   - Open your browser to `http://localhost:4321`

## 🐳 Docker Configuration

### Dockerfile
- Based on `node:20-alpine`
- Multi-stage build for production
- Exposes port 4321

### Docker Compose (`compose.yaml`)
- Maps port 4321:4321
- Mounts the project directory

## 🚀 Future Development

This foundation is ready for expansion. Future plans include:

- Adding more pages and content
- Integrating with a CMS
- Adding authentication and user accounts

## 📝 Contributing

1. Create a feature branch: `git checkout -b feature-name`
2. Make changes and commit: `git commit -m "Add feature"`
3. Push to the branch: `git push origin feature-name`
4. Create a Pull Request on GitHub

## 📄 License

This project is available for development and educational purposes.