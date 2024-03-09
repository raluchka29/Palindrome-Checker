function palindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value.trim();
    const resultElement = document.getElementById('result');

    if (inputText === '') {
        alert('Please input a value');
    } else {
        const isPalindrome = palindrome(inputText);
        resultElement.textContent = isPalindrome ? inputText + ' is a palindrome' : inputText + ' is not a palindrome';
    }
});

