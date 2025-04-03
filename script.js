// script.js
function encrypt(text, shift) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        if ((code >= 65 && code <= 90)) {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
        if ((code >= 97 && code <= 122)) {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        return char;
    }).join('');
}

function decrypt(text, shift) {
    return encrypt(text, 26 - shift);
}

function encryptText() {
    const text = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shiftValue').value) || 3;
    document.getElementById('result').textContent = encrypt(text, shift);
}

function decryptText() {
    const text = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shiftValue').value) || 3;
    document.getElementById('result').textContent = decrypt(text, shift);
}

function openTab(evt, tabName) {
    const tabcontents = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablink");
    
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active");
    }
    
    for (let tablink of tablinks) {
        tablink.classList.remove("active");
    }
    
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}