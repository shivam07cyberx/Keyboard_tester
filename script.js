// Function to update key information
function updateKeyInfo(key, keyCode) {
    document.getElementById('key').textContent = `Key: ${key}`;
    document.getElementById('keyCode').textContent = `Key Code: ${keyCode}`;
}

// Function to handle key presses and clicks
function handleKeyPress(key, keyCode) {
    // Update key information
    updateKeyInfo(key, keyCode);

    // Add 'correct' class to the appropriate button
    const button = document.querySelector(`.key[data-key="${key}"]`);
    if (button) {
        button.classList.add('correct');
    }
}

// Handle physical key presses
document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    handleKeyPress(key, keyCode);
});

// Handle on-screen keyboard clicks
document.querySelectorAll('.key').forEach(button => {
    button.addEventListener('click', function() {
        const key = this.getAttribute('data-key').toUpperCase();
        const keyCode = key === ' ' ? 32 : key.charCodeAt(0);
        handleKeyPress(key, keyCode);
    });
});

// Reset function to clear all highlighted keys
document.getElementById('reset-button').addEventListener('click', function() {
    document.querySelectorAll('.key').forEach(button => {
        button.classList.remove('clicked');
        button.classList.remove('correct');
    });

    updateKeyInfo('-', '-');
});
