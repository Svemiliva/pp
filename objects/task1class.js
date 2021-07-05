class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

}


class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    getData() {
        return this.name + ", " + this.surname + ", " + this.salary
    }
    getSalary() {
        console.log(this.salary);
    }
    increaseSalary() {
        this.salary += this.salary / 100 * 10;
    }
}


class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }

    getSpecialization() {
        console.log(this.specialization);
    }

}


class Manager extends Developer {
    constructor(name, surname, job, salary, specialization, department) {
        super(name, surname, job, salary, specialization);
        this.department = department;
    }


    getDepartment() {
        console.log(this.department);
    }
    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }

}


var employee1 = new Employee("Pera", "Peric", "Programmer", 1000)

//console.log(employee1.increaseSalary());

employee1.increaseSalary()
console.log(employee1.salary);