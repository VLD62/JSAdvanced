function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
            this.repr = `Person (name: ${this.name}, email: ${this.email})`;

        }
        toString() {
            return this.repr;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
            this.repr = `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
        }

    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
            this.repr = `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}


