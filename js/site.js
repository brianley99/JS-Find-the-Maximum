// Controller
function handleUserInput() {

    // Get raw input from the user
    let inputValue = document.getElementById('user-input').value;

    // Filter the input, keeping only numeric characters, commas, and periods
    let filteredInput = inputValue.replace(/[^0-9,.]/g, '');

    // Convert filtered input into an array
    let filteredInputArray = filteredInput.split(',');

    // Convert the array elements into numbers, keeping only integers
    let numericArray = [];
    filteredInputArray.forEach(numberValue => {

        let number = Number.parseInt(numberValue);

        // Add to the numeric array only if it is an integer
        if (Number.isInteger(number)) {
            numericArray.push(number);
        }
    });

    // Validate the number of elements in the numeric array
    if (numericArray.length > 150) {

        // Display an informative error message using SweetAlert2 if the condition is met
        Swal.fire({
            icon: "error",
            title: "Oops...",
            html: `Please enter up to 150 numbers.<br>
               You entered ${numericArray.length} numbers.`,
        });
    }


    // Calculate the maximum value
    let maximum = getMaximum(numericArray);

    // Display the calculated maximum value
    displayResults(maximum);
}

// Logic
function getMaximum(numericArray) {

    // Initialize the maximum value with the first number in the array
    let maximum = numericArray[0];

    // Iterate through each number in the array
    for (let i = 0; i < numericArray.length; i++) {

        const currentNumber = numericArray[i];

        // If the current number is greater than the current maximum, update the maximum
        if (currentNumber > maximum) {
            maximum = currentNumber;
        }
    }

    // Return the calculated maximum value
    return maximum;
}

// View
function displayResults(maximum) {

    // Format the result as HTML
    let formattedResults = `<span class="text-muted mb-3">Maximum</span>
                            <h1 class="text-primary">${maximum}</h1>`;

    // Display the formatted result on the DOM
    document.getElementById('results').innerHTML = formattedResults;
    document.getElementById('resultsContainer').classList.remove('d-none');
}
