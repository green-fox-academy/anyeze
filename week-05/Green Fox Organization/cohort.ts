import { Mentor } from "./mentor";
import { Student} from "./student";
import { Person } from "./person";

'use strict'

class Cohort {

    protected nameCohort: string;
    protected students: Student[];
    protected mentors: Mentor[];


    constructor(nameCohort: string) {

        this.nameCohort = nameCohort;
        this.students = [];
        this.mentors = [];

    }

    addStudent(student: Student) {

        this.students.push(student);

    }
    addMentor(mentor: Mentor) {

        this.mentors.push(mentor);

    }

    info() {

        console.log(`The ${this.nameCohort} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
    
    }
}

export { Cohort };