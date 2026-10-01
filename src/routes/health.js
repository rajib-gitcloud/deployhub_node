const express = require('express');
const router = express.Router();

const healthHandler = (req, res) => {
  res.status(200).json({
    status: 'healthy',
    service: 'deployhub_node',
    framework: 'Express 4.x',
    node_version: process.version,
    uptime_seconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
};

router.get('/', healthHandler);
router.get('/api/health', healthHandler);

module.exports = router;
