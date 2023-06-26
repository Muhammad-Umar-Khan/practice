function mostActive(customers) {
  let AlphaCount = 0;
  let BetaCount = 0;
  let OmegaCount = 0;
  let output = [];
  for (let i = 0; i < customers.length; i++) {
    if (customers[i] === "Alpha") {
      AlphaCount += 1;
    } else if (customers[i] === "Omega") {
      OmegaCount += 1;
    } else {
      BetaCount += 1;
    }
  }

  if ((AlphaCount * 100) / customers.length >= 5) {
    output.push("Alpha");
  }
  if ((BetaCount * 100) / customers.length >= 5) {
    output.push("Beta");
  }
  if ((OmegaCount * 100) / customers.length >= 5) {
    output.push("Omega");
  }

  return output;
}

console.log(
  mostActive([
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Beta",
  ])
);
