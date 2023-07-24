let estudiantes = [
  {nombre: 'John', promedio: 8.5, aprobado: true},
  {nombre: 'Jane', promedio: 7, aprobado: true},
  {nombre: 'June', promedio: 3, aprobado: false}
];

let aprobados = estudiantes.filter(estudiante => estudiante.aprobado);
let desaprobados = estudiantes.filter(estudiante => !estudiante.aprobado);

console.log('Aprobados:', aprobados);
console.log('Desaprobados:', desaprobados);
