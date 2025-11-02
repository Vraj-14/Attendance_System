// app.js

// const express = require('express');
// const cors = require('cors'); 
// const app = express();
// const attendanceRoutes = require('./routes/attendance');

// require('dotenv').config(); // Load environment variables

// app.use(cors()); // Enable CORS
// app.use(express.json()); // Parse incoming JSON
// app.use('/api/attendance', attendanceRoutes); // Routes prefix

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(` Server running on http://localhost:${PORT}`);
// });


// console.log('Attendance routes loaded');

// console.log('PUT /update route registered');
// /* {
//   "student_name": "Vraj Patel",
//   "date": "2025-04-19",
//   "time": "10:30:00",
//   "status": "Present"
// }*/

// app.js

const express = require('express');
const cors = require('cors'); 
const path = require('path'); // <-- required to resolve file paths
const app = express();
const attendanceRoutes = require('./routes/attendance');

require('dotenv').config(); // Load environment variables

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON

// Serve static frontend files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Route to serve index.html on root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API Routes
app.use('/api/attendance', attendanceRoutes); // Routes prefix

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('🚀 Server running on http://localhost:${PORT}');
});

// Logs for dev debugging
console.log('Attendance routes loaded');
console.log('PUT /update route registered');

/* Example JSON:
{
  "student_name": "Vraj Patel",
  "date": "2025-04-19",
  "time": "10:30:00",
  "status": "Present"
}
*/