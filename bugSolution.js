const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    // Input validation
    if (!userId || isNaN(parseInt(userId))) {
      return res.status(400).send('Invalid user ID');
    }
    const user = users.find(user => user.id === parseInt(userId));
    if (!user) {
      return res.status(404).send('User not found');
    } else {
      res.send(user);
    }
  } catch (error) {
    console.error('Error handling user request:', error);
    res.status(500).send('Internal server error');
  }
});
// ... rest of the code