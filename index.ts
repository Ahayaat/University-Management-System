class Person{
    name: string;
    ID: number;

    constructor(name: string, ID: number){
        this.name = name;
        this.ID = ID
    }

    getName() {
        return this.name
    }
}

class Student extends Person {
    rollNumber: string;
    courses: course[] = [];

    constructor(name: string, ID: number, rollNumber: string) {
        super(name, ID);
        this.rollNumber = rollNumber
    }

    rigesterForCources(course: course){
        this.courses.push(course)
    }
}

class Instructor extends Person {
    salary: number;
    courses: course[] = []

    constructor(name: string, ID: number, salary: number) {
        super(name, ID);
        this.salary = salary;
    }

    assignCourse(course: course) {
        this.courses.push(course)
    }
}

class course {
    id: string;
    name: string;
    students: Student[] = [];
    instructor!: Instructor;

    constructor (id: string, name: string) {
        this.id = id;
        this.name = name
    }

    addStudent(student: Student){
        this.students.push(student)
        student.rigesterForCources(this)
    }
    setInstructor(instructor:Instructor){
        this.instructor = instructor;
        instructor.assignCourse(this)
    }
}

class Department {
    name: string;
    courses: course[] = []

    constructor(name:string) {
        this.name = name
    }

    addCourse(course: course){
        this.courses.push(course)
    }
}


const student1 = new Student("Ali", 22, "student1")

// student1.rigesterForcources("Metaverse")
// student1.rigesterForcources("BCC")

// console.log(student1.courses)

const student2 = new Student("Aliya", 24, "student2")

// console.log(student2)
const Instructor1 = new Instructor("Amir", 26, 20000)
// Instructor1.assignCourse("Metaverse")
// Instructor1.assignCourse("BCC")
// Instructor1.assignCourse("CNC")

// console.log(Instructor1.courses)
const Instructor2 = new Instructor("Anus", 26, 10000)
// console.log(Instructor2.courses)
const course1 = new course("course1", "Metaverse")

// course1.addStudent(student1)
// course1.addStudent(student2)
// course1.setInstructor(Instructor1)


const course2 = new course("course1", "Blockchain")

const Department1 = new Department("Computer Science")
Department1.addCourse(course1)
Department1.addCourse(course2)

console.log(Department1)

// console.log(course1.instructor)

