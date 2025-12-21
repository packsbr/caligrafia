// FAQ Toggle
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.classList.toggle('active');
    });
});

// CTA Buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        console.log('CTA clicked');
    });
});

// Smooth scroll
document.querySelectorAll('a[href="#pricing"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const pricing = document.getElementById('pricing');
        if (pricing) {
            pricing.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log('Site carregado com sucesso!');
