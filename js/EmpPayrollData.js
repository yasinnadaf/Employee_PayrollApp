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
}