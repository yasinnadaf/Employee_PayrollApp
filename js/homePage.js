//UC6 to view Employee Payroll details from Local Storage.  
//the innerHTML is populated by attaching a Listener to DOMContentLoaded event.

let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}
/*ES6 features*/
/*Template literals are enclosed by the backtick (` `) character
    instead of double or single quotes.
 *  Template literals can contain placeholders. These are
    indicated by the dollar sign and curly braces 
*/
const createInnerHtml = () => {
    const headerHtml = `<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>
        <th>Salary</th><th>start Date</th><th>Actions</th></tr>`
    if (empPayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
        <td><img class ="profile" src="${empPayrollData._profilePic}" alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${StringifyDate(empPayrollData._startDate)}</td>
        <td>
            <img id="${empPayrollData._id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg">
            <img id="${empPayrollData._id}" onclick="update(this)"  src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml
}

//UC5 to view Employee Payroll details in a Tabular Format from JSON Object.
/*
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Aviv Samson',
            _gender: 'male',
            _department: [
                'Sales', 'Hr'
            ],
            _salary: '300000',
            _startDate: '21 May 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -9.png'
        },
        {
            _profilePic: '../assets/profile-images/Ellipse -4.png',
            _name: 'Rani Dhumma',
            _gender: 'female',
            _department: [
                'Hr', 'Engineering'
            ],
            _salary: '400000',
            _startDate: '20 Feb 2020',
            _note: '',
            _id: new Date().getTime(),
        }
    ]
    return empPayrollListLocal
}
*/

//Display Employee Details from JSON Object including the Department
function getDeptHtml(deptList) {
    let deptHtml = ''
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml
}