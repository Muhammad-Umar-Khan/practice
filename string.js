function findCombinationsFromText(inputText, products) {
  // Extract tags from the input text
  const sanitizedInput = inputText
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/^-|-$/g, "");
  const tags = sanitizedInput.split(",").map((tag) => tag.trim());

  // Split tags into groups, categories, subcategories, makes, models, and diagrams
  const groups = tags.filter((tag) => tag.startsWith("Group_"));
  const categories = tags.filter((tag) => tag.startsWith("Category_"));
  const subcategories = tags.filter((tag) => tag.startsWith("Subcategory_"));
  const makes = tags.filter((tag) => tag.startsWith("Make_"));
  const models = tags.filter((tag) => tag.startsWith("Model_"));
  const diagrams = tags.filter((tag) => tag.startsWith("Diagram_"));

  // Validate prefixes and generate combinations enforcing the hierarchy
  const tagCombinations = [];
  for (let r = 1; r <= groups.length; r++) {
    const groupCombinations = getCombinations(groups, r);

    for (let i = 1; i <= categories.length; i++) {
      const categoryCombinations = getCombinations(categories, i);

      for (let j = 0; j <= subcategories.length; j++) {
        const subcategoryCombinations = getCombinations(subcategories, j);

        for (let k = 0; k <= makes.length; k++) {
          const makeCombinations = getCombinations(makes, k);

          for (let l = 0; l <= models.length; l++) {
            const modelCombinations = getCombinations(models, l);

            for (let m = 0; m <= diagrams.length; m++) {
              const diagramCombinations = getCombinations(diagrams, m);

              // Combine combinations enforcing the hierarchy and validating prefixes
              for (const groupCombination of groupCombinations) {
                for (const categoryCombination of categoryCombinations) {
                  for (const subcategoryCombination of subcategoryCombinations) {
                    for (const makeCombination of makeCombinations) {
                      for (const modelCombination of modelCombinations) {
                        for (const diagramCombination of diagramCombinations) {
                          const combination = [
                            ...groupCombination,
                            ...categoryCombination,
                            ...subcategoryCombination,
                            ...makeCombination,
                            ...modelCombination,
                            ...diagramCombination,
                          ];

                          // Check if the combination follows the hierarchy and has valid prefixes
                          if (isValidCombination(combination)) {
                            tagCombinations.push(combination);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // Filter products based on the generated tag combinations
  const filteredProducts = products.filter((product) => {
    const productTags = product.tags;
    return tagCombinations.some((combination) => {
      return combination.every((tag) => productTags.includes(tag));
    });
  });

  return filteredProducts;
}

function getCombinations(arr, r) {
  const combinations = [];
  const generate = (start, combination) => {
    if (combination.length === r) {
      combinations.push([...combination]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      combination.push(arr[i]);
      generate(i + 1, combination);
      combination.pop();
    }
  };

  generate(0, []);

  return combinations;
}

// Rest of the code remains the same...

// Example usage
const products = [
  {
    name: "Product1",
    tags: ["Group_Electric-Pallet-Jack-Parts", "Make_BT-Prime-Mover"],
  },
  {
    name: "Product2",
    tags: ["Group_Electric-Pallet-Jack-Parts", "Make_Another-Brand"],
  },
  {
    name: "Product3",
    tags: ["Group_Some-Other-Group", "Make_BT-Prime-Mover"],
  },
  // Add more products as needed
];
const inputText =
  "Group_Tools-Hardware-Category_Roll-Pin-Make_Atlas-WrongPrefix_Test";

const filteredProducts = findCombinationsFromText(inputText, products);

// Output the filtered products
console.log(filteredProducts);
