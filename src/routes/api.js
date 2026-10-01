const express = require('express');
const router = express.Router();

let items = [
  { id: 1, title: 'Setup Node.js Backend', status: 'Completed' },
  { id: 2, title: 'Configure DeployHub Manifest', status: 'Completed' },
  { id: 3, title: 'Deploy Containerized Service', status: 'Ready' }
];

router.get('/info', (req, res) => {
  res.json({
    app_name: 'DeployHub Node.js Backend',
    version: '1.0.0',
    description: 'Robust Express.js backend with Helmet security, CORS, and structured routing.',
    endpoints: [
      { path: '/', method: 'GET', desc: 'Root health status' },
      { path: '/api/health', method: 'GET', desc: 'Detailed health check' },
      { path: '/api/info', method: 'GET', desc: 'API metadata' },
      { path: '/api/items', method: 'GET', desc: 'List sample items' },
      { path: '/api/items', method: 'POST', desc: 'Create a new item' }
    ]
  });
});

router.get('/items', (req, res) => {
  res.json({ items, count: items.length });
});

router.post('/items', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newItem = {
    id: items.length + 1,
    title,
    status: 'Pending'
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

module.exports = router;
