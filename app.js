const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Name:- Praveen ; En no. :- 21162101021 ; SUB :- EADC');
  });
  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});