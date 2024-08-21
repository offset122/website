// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('.event-register').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for registering! We will send you further details soon.');
    });
});

document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('You have successfully subscribed to the newsletter!');
});
document.querySelector('.dropbtn').addEventListener('click', function() {
    const dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});
