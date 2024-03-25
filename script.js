let form = document.getElementsByTagName('form')[0];
let fontColor = document.getElementById('fontcolor');
let fontSize = document.getElementById('fontsize');

form.addEventListener('submit',(e)=>{
    e.preventDefault(); // Prevent form submission
    let color = fontColor.value;
    let size = fontSize.value;

    // Store color and size in cookies
    document.cookie = `color=${color}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
    document.cookie = `size=${size}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;

    // Update CSS variables
    document.documentElement.style.setProperty('--fontcolor', color);
    document.documentElement.style.setProperty('--fontsize', size);
});

// Function to get cookie value by name
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Retrieve font color and size from cookies and update form inputs
window.addEventListener('load', () => {
    const color = getCookie('color');
    const size = getCookie('size');
    if (color) {
        fontColor.value = color;
        document.documentElement.style.setProperty('--font-color', color);
    }
    if (size) {
        fontSize.value = size;
        document.documentElement.style.setProperty('--font-size', size);
    }
});
