# DeployHub Node.js Backend

[![DeployHub Compatible](https://img.shields.io/badge/DeployHub-Ready-brightgreen.svg)](https://deployhub.dev)
[![Framework](https://img.shields.io/badge/Framework-Express%204.x-lightgrey.svg)](https://expressjs.com)
[![Runtime](https://img.shields.io/badge/Runtime-Node.js%2020+-green.svg)](https://nodejs.org)
[![Security](https://img.shields.io/badge/Security-Helmet%20%2B%20CORS-blue.svg)]()

Production-ready Node.js REST API starter template built with Express, Helmet security, Morgan logging, and graceful shutdown.

---

## 🚀 Quick Reference

- **Language / Runtime**: JavaScript / Node.js 20+
- **Framework**: Express.js
- **Default Port**: `3000`
- **Health Check**: `GET /api/health`

---

## 📁 Project Structure

```text
deployhub_node/
├── src/
│   ├── routes/
│   │   ├── api.js           # REST CRUD routes & info endpoint
│   │   └── health.js        # Health status probes
│   └── server.js            # Express app configuration & server
├── deployhub.json           # DeployHub deployment manifest
├── DEPLOYMENT.md            # Cloud deployment guide
├── Dockerfile               # Multi-stage lightweight Node container
├── package.json
├── .env.example
└── README.md
```

---

## 🛠 Local Setup & Running

```bash
# 1. Install dependencies
npm install

# 2. Run in development mode
npm run dev

# 3. Or start in production mode
npm start
```

---

## 🐳 Docker Execution

```bash
# Build container image
docker build -t deployhub-node:latest .

# Run container
docker run -d -p 3000:3000 --name node_backend deployhub-node:latest
```

Test endpoint: `curl http://localhost:3000/api/health`
