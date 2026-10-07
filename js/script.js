function togglePassword() {
    const passwordInput = document.getElementById('password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

// Placeholders distintos en mobile y por query
const mq = window.matchMedia('(max-width: 768px)');
const inputs = document.querySelectorAll('[data-mobile-placeholder]');
inputs.forEach(i => i.dataset.desktopPlaceholder = i.placeholder);
function updatePlaceholders() {
    inputs.forEach(i => {
        i.placeholder = mq.matches ? i.dataset.mobilePlaceholder : i.dataset.desktopPlaceholder;
    });
}
mq.addEventListener('change', updatePlaceholders);
updatePlaceholders();
