// ekta array te onno arrey er value dhukanor jnno use kora hoy, array er vitor ... use kore add korte hoy

// exmpl:

let person_one = [ 'sajid', 'mojid'];

//let person_two = ['goni', 'moni'];  ==> second array

// ekhn ei 2ta array theke second array te first array spread operator diye value input korbo

let person_two = [...person_one, 'goni','moni'];
//console.log (person_two);

// ekhon 2ta array k ekta array te input korar try kori

let person_three = [...person_one, ...person_two];
console.log (person_three);