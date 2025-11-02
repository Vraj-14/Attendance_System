const form = document.getElementById('attendanceForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        student_name: document.getElementById('student_name').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        status: document.getElementById('status').value
    };

    try {
        const response = await fetch('http://localhost:3000/api/attendance/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        alert(result.message);

        form.reset(); // clear form after submit
    } catch (err) {
        console.error('Error submitting attendance:', err);
        alert('Error submitting attendance.');
    }
});

// Fetch and display records
async function fetchAttendance() {
    try {
        const response = await fetch('http://localhost:3000/api/attendance/records');
        const records = await response.json();

        const tbody = document.querySelector('#recordsTable tbody');
        tbody.innerHTML = ''; // Clear previous data

        records.forEach(record => {
            const row = `<tr>
                <td>${record.id}</td>
                <td>${record.student_name}</td>
                <td>${record.date}</td>
                <td>${record.time}</td>
                <td>${record.status}</td>
            </tr>`;
            tbody.insertAdjacentHTML('beforeend', row);
        });
    } catch (err) {
        console.error('Error fetching records:', err);
        alert('Failed to load records.');
    }
}

// 🔁 Update Attendance
function updateAttendance() {
    const id = document.getElementById("update-id").value;
    const name = document.getElementById("update-name").value;
    const date = document.getElementById("update-date").value;
    const time = document.getElementById("update-time").value;
    const status = document.getElementById("update-status").value;

    fetch(`http://localhost:3000/api/attendance/update/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            student_name: name,
            date: date,
            time: time,
            status: status
        })
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => alert("Error updating attendance."));
}

// ❌ Delete Attendance
function deleteAttendance() {
    const id = document.getElementById("delete-id").value;

    fetch(`http://localhost:3000/api/attendance/delete/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => alert("Error deleting attendance."));
}
