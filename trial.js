function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function addEmployee() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const department = document.getElementById('department').value;
    // Add employee to the system
    alert(`Employee ${name} added successfully.`);
    document.getElementById('addEmployeeForm').reset();
}

function removeEmployee() {
    const employeeId = document.getElementById('employeeIdRemove').value;
    // Remove employee from the system
    alert(`Employee with ID ${employeeId} removed successfully.`);
    document.getElementById('removeEmployeeForm').reset();
}

function assignTask() {
    const employeeId = document.getElementById('employeeIdAssign').value;
    const taskDescription = document.getElementById('taskDescription').value;
    // Assign task to employee
    alert(`Task assigned to employee ID ${employeeId} successfully.`);
    document.getElementById('assignTaskForm').reset();
}

function approveSelectedTenders() {
    // Approve selected tenders
    alert('Selected tenders approved successfully.');
}

// Example data population functions (to be replaced with actual data fetching logic)
function populateEmployeeTable() {
    const employeeTable = document.getElementById('employeeTable');
    employeeTable.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
        </tr>
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Manager</td>
            <td>Finance</td>
        </tr>
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Manager</td>
            <td>Finance</td>
        </tr>
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Manager</td>
            <td>Finance</td>
        </tr>
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Manager</td>
            <td>Finance</td>
        </tr>
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Manager</td>
            <td>Finance</td>
        </tr>
        <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Manager</td>
            <td>Finance</td>
        </tr>
        <!-- Add more rows as needed -->
    `;
}

function populateTenderTable() {
    const tenderTable = document.getElementById('tenderTable');
    tenderTable.innerHTML = `
        <tr>
            <th>Select</th>
            <th>Tender ID</th>
            <th>Description</th>
            <th>Status</th>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td>101</td>
            <td>Road Construction</td>
            <td>Pending</td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td>101</td>
            <td>Road Construction</td>
            <td>Pending</td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td>101</td>
            <td>Road Construction</td>
            <td>Pending</td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td>101</td>
            <td>Road Construction</td>
            <td>Pending</td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td>101</td>
            <td>Road Construction</td>
            <td>Pending</td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td>101</td>
            <td>Road Construction</td>
            <td>Pending</td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td>101</td>
            <td>Road Construction</td>
            <td>Pending</td>
        </tr>
        <!-- Add more rows as needed -->
    `;
}

function populateTaskStatusTable() {
    const taskStatusTable = document.getElementById('taskStatusTable');
    taskStatusTable.innerHTML = `
        <tr>
            <th>Task ID</th>
            <th>Employee ID</th>
            <th>Description</th>
            <th>Status</th>
        </tr>
        <tr>
            <td>501</td>
            <td>1</td>
            <td>Prepare Financial Report</td>
            <td>In Progress</td>
        </tr>
        <tr>
            <td>501</td>
            <td>1</td>
            <td>Prepare Financial Report</td>
            <td>In Progress</td>
        </tr>
        <tr>
            <td>501</td>
            <td>1</td>
            <td>Prepare Financial Report</td>
            <td>In Progress</td>
        </tr>
        <tr>
            <td>501</td>
            <td>1</td>
            <td>Prepare Financial Report</td>
            <td>In Progress</td>
        </tr>
        <tr>
            <td>501</td>
            <td>1</td>
            <td>Prepare Financial Report</td>
            <td>In Progress</td>
        </tr>
        <!-- Add more rows as needed -->
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    populateEmployeeTable();
    populateTenderTable();
    populateTaskStatusTable();
});
