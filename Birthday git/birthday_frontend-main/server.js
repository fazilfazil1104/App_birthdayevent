const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Mock database path
const dbPath = path.join(__dirname, 'db.json');

// Handle payment processing
app.post('/payments', (req, res) => {
  const { cardNumber, cardExpiry, cardCvc, amount } = req.body;

  // Simulate payment processing
  if (cardNumber && cardExpiry && cardCvc && amount) {
    // Read the current payments from db.json
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to read database' });
      }

      const db = JSON.parse(data);
      const newPayment = {
        id: Date.now().toString(),
        cardNumber,
        cardExpiry,
        cardCvc,
        amount
      };

      db.payments.push(newPayment);

      // Write the updated payments back to db.json
      fs.writeFile(dbPath, JSON.stringify(db, null, 2), (err) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to write to database' });
        }
        res.status(201).json({ success: true, payment: newPayment });
      });
    });
  } else {
    res.status(400).json({ error: 'Invalid payment data' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
