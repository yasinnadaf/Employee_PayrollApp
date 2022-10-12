 uc10_emp_payrolldata_validation
class EmpPayrollData {

    //getter and setter method
    get id() {
        return this._id = id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect';
    }
    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get department() {
        return this._deparment;
    }
    set department(department) {
        this._deparment = department;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }
    get note() {
        return this._note;
    }
    set note(note) {
        this._note = note;
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        let currentDate = new Date();
        if (startDate > currentDate) {
            throw "start date is a future date";
        }
        var diff = Math.abs(currentDate.getTime - startDate.getTime());
        if (diff / (1000 * 60 * 60 * 24) > 30) {
            throw 'start date is beyond 30 days'
        }
        this._startDate = startDate;
    }

class EmpPayrollData{
    constructor(name,gender,department,salary,startDate,note){
        this.name=name;
        this.gender=gender;
        this.department=department;
        this.salary=salary;
        this.startDate=startDate;
        this.note=note;
    }
    set name(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }

    set gender(gender){
        this._gender=gender;
    }

    get gender(){
        return this._gender;
    }

    set department(department){
        this._department=department;
    }

    get department(){
        return this._department;
    }

    set salary(salary){
        this._salary=salary;
    }

    get salary(){
        return this._salary;
    }

    set startDate(startDate){
        this._startDate=startDate;
    }

    get startDate(){
        return this._startDate;
    }

    set note(note){
        this._note=note;
    }

    get note(){
        return this._note;
    }

    toString(){
        return(
            "{"
            +" Name = "+this.name
            +", Gender = "+this.gender
            +", Department = "+this.department
            +", Salary = "+this.salary
            +", Start Date = "+this.startDate
            +", Notes = "+this.note
            +" }"
        )
    }

}

function save(){
    let employeePayrollData = new EmployeePayrollData(
        document.querySelector('#name').value,
        document.querySelector('input[name="gender"]:checked').value,
        document.querySelector('input[type="checkbox"]:checked').value,
        document.querySelector('#salary').value,
        document.getElementById("start-date").value,
        document.querySelector('#notes').value
    );
    alert('form submitted \n'+employeePayrollData);
}