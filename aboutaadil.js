// Get the radio buttons and text content elements
const radioButtons = document.getElementsByName('textOption');
const textContents = document.querySelectorAll('.text-content');

// Function to show the selected text content
function showSelectedText() {
    for (const content of textContents) {
        content.style.display = 'none';
    }
    const selectedValue = document.querySelector('input[name="textOption"]:checked').value;
    const selectedTextContent = document.getElementById(selectedValue);
    selectedTextContent.style.display = 'block';
}

// Attach an event listener to the radio buttons to trigger the function when changed
for (const radioButton of radioButtons) {
    radioButton.addEventListener('change', showSelectedText);
}

// Show the initially selected text
showSelectedText();
// JavaScript Document// JavaScript Document