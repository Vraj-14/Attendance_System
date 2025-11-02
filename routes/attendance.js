// // routes/attendance.js

// const express = require('express');
// const router = express.Router();
// const db = require('../db/db');

// // POST /api/attendance/submit
// // POST /api/attendance/submit
// router.post('/submit', (req, res) => {
//     const { student_name, date, time, status } = req.body;

//     const sql = 'INSERT INTO attendance_1 (student_name, date, time, status) VALUES (?, ?, ?, ?)';
//     console.log('Executing SQL:', sql, [student_name, date, time, status]); // Debug log
//     db.query(sql, [student_name, date, time, status], (err, result) => {
//         if (err) {
//             console.error('Error inserting data:', err);
//             return res.status(500).json({ message: 'Failed to submit attendance', error: err.message });
//         }
//         res.status(200).json({ message: 'Attendance submitted successfully' });
//     });
// });

// // GET /api/attendance/records
// // GET /api/attendance/records
// router.get('/records', (req, res) => {
//     const sql = 'SELECT * FROM attendance_1';
//     db.query(sql, (err, results) => {
//         if (err) {
//             console.error('Error fetching data:', err);
//             return res.status(500).json({ message: 'Failed to retrieve records' });
//         }
//         res.status(200).json(results);
//     });
// });

// module.exports = router;

// routes/attendance.js

// routes/attendance.js

const express = require('express');
const router = express.Router();
const db = require('../db/db');

// POST /api/attendance/submit
router.post('/submit', (req, res) => {
    const { student_name, date, time, status } = req.body;

    const sql = 'INSERT INTO attendance_1 (student_name, date, time, status) VALUES (?, ?, ?, ?)';
    console.log('Executing SQL:', sql, [student_name, date, time, status]); // Debug log
    db.query(sql, [student_name, date, time, status], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: 'Failed to submit attendance', error: err.message });
        }
        res.status(200).json({ message: 'Attendance submitted successfully' });
    });
});

// GET /api/attendance/records
router.get('/records', (req, res) => {
    const sql = 'SELECT * FROM attendance_1';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ message: 'Failed to retrieve records' });
        }
        res.status(200).json(results);
    });
});

// PUT /api/attendance/update/:id
router.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { student_name, date, time, status } = req.body;

    const sql = 'UPDATE attendance_1 SET student_name = ?, date = ?, time = ?, status = ? WHERE id = ?';
    db.query(sql, [student_name, date, time, status, id], (err, result) => {
        if (err) {
            console.error('Error updating attendance:', err);
            return res.status(500).json({ message: 'Failed to update attendance' });
        }
        res.status(200).json({ message: 'Attendance updated successfully' });
    });
});

// DELETE /api/attendance/delete/:id
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM attendance_1 WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting attendance:', err);
            return res.status(500).json({ message: 'Failed to delete attendance' });
        }
        res.status(200).json({ message: 'Attendance deleted successfully' });
    });
});


module.exports = router;






