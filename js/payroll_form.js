//UC2_day44
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error')
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = '';
            return;
        }

        try {
            (new EmpPayrollData()).name = name.value;
            textError.textContent = '';
        } catch (e) {
            textError.textContent = e;
        }
    })

    function getSalary() {
        output.textContent = salary.value;
    }
    /* UC8 set event listener on salary range*/
    const salary = document.querySelector('#salary')
    const output = document.querySelector('.salary-output')
    output.textContent = salary.value
    salary.addEventListener('input', getSalary)

});
// uc4_day44
const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    } catch (e) {
        return;
    }
}

//UC4 to save the Employee Payroll Object to Local Storage.
const createAndUpdateStorage = function (employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
        employeePayrollList = employeePayrollList.push(employeePayrollData)
    } else {
        employeePayrollList = [employeePayrollData] 
    }
    alert(employeePayrollList.toString())
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmpPayrollData(); //creation of object
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e)
        throw e;
    }

    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop()
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop()
    employeePayrollData.department = getSelectedValues('[name=department]')
    employeePayrollData.salary = getInputValueById('#salary')
    employeePayrollData.note = getInputValueById('#notes')
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;

}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach((item) => {
        if (item.checked) {
            selItems.push(item.value)
        }
    })
    return selItems;
}

/*
*1: querySelector is newer feature.
*2: the querySelector method can be used when selecting by element name, nesting, or class name
*3: querySelector lets you find elements with rules that cant be expressed with getElementById
*/
const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

/*1: getElementID is better supported than quaryselector in older versions of the browsers
2: the thing with getElementID is that is only allows to select an select element bu its ID.
*/

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

const resetForm = () => {
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#note','');
    setValue('#day','1');
    setValue('#month','january');
    setValue('#year',2020);
  }
  
  const unsetSelectedValues = (propertValue) => {
    let allItems = document.querySelectorAll(propertValue);
    allItems.forEach(item => {
        item.checked = false;
    });
  }
  
  const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
  }
  
  const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
    
  }