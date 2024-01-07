const person = {
  name: "Umar Khan",
  phone: "03162047654",
  info: () => person.name + person.phone,
};
//why this.name is undefined
console.log(person.info());
