interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key:string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// Function that prints teacher

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
function printTeacher(firstName: string, lastName: string) {
  return(`${firstName.charAt(0)}. ${lastName}`);
}

// Class that contains student

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor {
  (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}