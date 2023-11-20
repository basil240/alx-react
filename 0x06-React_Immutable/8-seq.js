// 8-print-best-students.js
import { Seq } from 'immutable';

export function printBestStudents(grades) {
  // Use Seq to filter and transform the grades object
  const filteredGrades = Seq(grades)
    .filter(student => student.score >= 70)
    .map(student => ({
      ...student,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }))
    .toObject();

  // Print the result to the console
  console.log(filteredGrades);
}

const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
  2: {
    score: 60,
    firstName: 'john',
    lastName: 'doe',
  },
};

printBestStudents(grades);
