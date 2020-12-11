import React from 'react';
import App from './components/App.jsx';
import ReactDOM from 'react-dom';

const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

ReactDOM.render(<App />, document.getElementById('app'));