const form = document.getElementById('quote-form');
const thankYouPopup = document.getElementById('thank-you');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    thankYouPopup.style.display = 'block';
    setTimeout(() => {
        thankYouPopup.style.display = 'none';
    }, 2000);
});
