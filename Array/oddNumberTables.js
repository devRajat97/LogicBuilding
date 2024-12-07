let arr = [1, 2, 4, 3, 6, 8, 9, 4];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) { // Check if the number is odd
        let table = ""; // Initialize the table inside the loop
        for (let j = 1; j <= 10; j++) {
            table += `${arr[i] * j} `; // Generate the multiplication table
        }
        console.log(`Table for ${arr[i]}: ${table}`); // Display the table
    }
}
