/////////// Телефонна книга ///////////////

// class Abonent {
//     constructor(options) {
//         this.name = options.name;
//         this.telNumber = options.telNumber;
//     }

//     firstName = "";
//     lastName = "";
//     telNumber = Number;

//     set name(newName) {
//         const nameRow = newName.split(" ");
//         this.firstName = nameRow[0];
//         this.lastName = nameRow[1];
//         this.telNumber = Number;
//     }

//     get name() {
//         return ` First name : ${this.firstName}
//         last name : ${this.lastName}
//         telephone number : ${this.telNumber} `;
//     }
// }

// const Sergo = new Abonent({
//     name: "Serg Hordon",
//     telNumber: 500200300,
// });

// const Toni = new Abonent({
//     name: "Toni Stark",
//     telNumber: 111365800,
// });

// const Angela = new Abonent({
//     name: "Angela Devis",
//     telNumber: 333555777,
// });

// console.group("Phone book");
// console.log(Sergo);
// console.log(Toni);
// console.log(Angela);
// console.groupEnd();

//////// Не стандартизовано, але ж красиво ) ////////

// console.group("Phone book");
// console.table(Sergo);
// console.table(Toni);
// console.table(Angela);
// console.groupEnd();
