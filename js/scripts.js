document.addEventListener('DOMContentLoaded', () => {
    const facebookIcon = document.getElementById('facebook-icon');
    if (facebookIcon) {
        facebookIcon.addEventListener('click', () => {
            window.location.href = 'https://www.facebook.com/nika11keshelava';
        });
    }
});
document.querySelectorAll('.faq h3').forEach((faqHeader) => {
    faqHeader.addEventListener('click', () => {
        const faqContent = faqHeader.nextElementSibling;
        faqContent.style.display = faqContent.style.display === 'block' ? 'none' : 'block';
    });
});