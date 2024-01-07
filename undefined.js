const person = {
  name: "Umar Khan",
  phone: "03162047654",
  info: () => this.name + person.phone,
};

console.log(person.info());
