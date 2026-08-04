// Task 1
function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input.";
  }
  firstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

  lastName =
    lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  return `${lastName}, ${firstName}`;
}

// Test
console.log(formatFullName("john", "doe"));
console.log(formatFullName("", "doe"));

// Task 2
function calculateTotalCost(price, quantity, taxRate) {
  if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    typeof taxRate !== "number"
  ) {
    return "Invalid input.";
  }

  let totalCost = (price * quantity) * (1 + taxRate);

  return totalCost;
}

