// Function to handle adding items to the list and counting characters
function addItemToList() {
    // Get the text from the input field
    let newItemText = document.getElementById('itemInput').value.trim();

    // If the input field is not empty
    if (newItemText !== '') {
        // Create a new list item element
        let newItem = document.createElement('li');
        newItem.textContent = newItemText;

        // Add the new item to the list
        document.getElementById('itemList').appendChild(newItem);

        // Count the characters in the new item text
        let charCount = newItemText.length;

        // Display the character count
        let countDisplay = document.getElementById('charCountDisplay');
        let countItem = document.createElement('p');
        countItem.textContent = `Character count: ${charCount}`;
        countDisplay.appendChild(countItem);

        // Clear the input field
        document.getElementById('itemInput').value = '';
    } else {
        // Alert the user if the input field is empty
        alert('Please enter some text.');
    }
}

// Add event listener for the Add Item button click
document.getElementById('addItemBtn').addEventListener('click', addItemToList);
