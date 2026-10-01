# Deployment Guide: Node.js on DeployHub

This guide details configuring and launching `deployhub_node` on DeployHub.

## ⚙️ Configuration Manifest

```json
{
  "name": "deployhub_node",
  "framework": "Express",
  "runtime": "nodejs",
  "port": 3000,
  "buildCommand": "npm install --production",
  "startCommand": "node src/server.js",
  "healthCheck": {
    "path": "/api/health",
    "expectedStatus": 200,
    "timeoutSeconds": 10
  }
}
```

## 🔐 Environment Variables

| Variable | Required | Default | Description |
| :--- | :-: | :--- | :--- |
| `PORT` | No | `3000` | HTTP listening port |
| `NODE_ENV` | No | `production` | Node environment flag |
