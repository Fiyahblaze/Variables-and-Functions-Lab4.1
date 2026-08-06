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

// Test
console.log(calculateTotalCost(10, 2, 0.07));
console.log(calculateTotalCost("10", 2, 0.07));


// Task 3
function checkEligibility(age, isEmployed) {
  if (age > 18 && isEmployed) {
    return "Eligible";
  } else if (age > 18 && !isEmployed) {
    return "Conditionally eligible";
  } else {
    return "Not eligible";
  }
}


// Test
console.log(checkEligibility(25, true));
console.log(checkEligibility(17, true));
console.log(checkEligibility(25, false));

// Task 4
function calculateTotalCost(price, quantity, taxRate, discount = 0) {
  if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    typeof taxRate !== "number" ||
    typeof discount !== "number"
  ) {
    return "Invalid input.";
  }

  let subtotal = (price * quantity) - discount;
  let totalCost = subtotal * (1 + taxRate);

  return totalCost;
}

// Test
console.log(checkEligibility(25, true));
console.log(checkEligibility(25, false));
console.log(checkEligibility(18, true));

// Task 4
function calculateTotalCost(price, quantity, taxRate, discount = 0) {
  if (
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    typeof taxRate !== "number" ||
    typeof discount !== "number"
  ) {
    return "Invalid input.";
  }

   let subtotal = (price * quantity) - discount;
  let totalCost = subtotal * (1 + taxRate);

  return totalCost;
}

// Test
console.log(calculateTotalCost(10, 2, 0.07));
console.log(calculateTotalCost(10, 2, 0.07, 5));