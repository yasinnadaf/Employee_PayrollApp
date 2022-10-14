//UC4-A
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
})
/*ES6 features*/
/*Template literals are enclosed by the backtick (` `) character
    instead of double or single quotes.
 *  Template literals can contain placeholders. These are
    indicated by the dollar sign and curly braces 
*/
function createInnerHtml() {
    const headerHtml = `<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>
            <th>Salary</th><th>start Date</th><th>Actions</th></tr>`
    
    let innerHtml = `${headerHtml}`
    let empPayrollList = createEmployeePayrollJSON()
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
        <td><img src="${empPayrollData._profilePic}" class="profile" width="30px" alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img id="1" name="${empPayrollData._id}" onclick="remove(this)" alt="delete" width="30px" src="../Assets/icons/delete-black-18dp.svg">
            <img id="1" name="${empPayrollData._id}" onclick="update(this)" alt="edit" width="30px" src="../Assets/icons/create-black-18dp.svg  ">
        </td>
    </tr>`
    }
    document.querySelector('#display').innerHTML = innerHtml
}

//UC5 to view Employee Payroll details in a Tabular Format from JSON Object.

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
            _name: 'Savi patil',
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

//Display Employee Details from JSON Object including the Department
function getDeptHtml(deptList) {
    let deptHtml = ''
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml
}