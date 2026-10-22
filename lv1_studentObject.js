// 1. Create a student object
// Create an object named student with the properties name, age, and major. Display each property
// in the console.

const students = [
  {
    name: 'Regith Rayabi',
    age: 19,
    major: 'Informatics Engineering'
  },
  {
    name: 'Uzumaki Bayu',
    age: 20,
    major: 'Ilmu Komunikasi'
  },
  {
    name: 'Uchiwa Meong',
    age: 18,
    major: 'Ilmu Hitam'
  }
];

for (const student of students) {
  console.log(`Nama: ${student.name}`);
  console.log(`Umur: ${student.age}`);
  console.log(`Jurusan: ${student.major}`);
  console.log('---');
}
