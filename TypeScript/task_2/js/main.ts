interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }
  getCoffeeBreak() {
    return 'Cannot have a break';
  }
  workTeacherTasks() {
    return 'Getting to work';
  }
}

export function createEmployee(salary: (string | number)): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else { return new Director(); }
}

export function isDirector(employee: (Teacher | Director)){
  // type predicate
  return employee instanceof Director;
}

export function executeWork(employee: (Teacher | Director)){
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  }
  else {return (employee as Teacher).workTeacherTasks();}
}
