// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button
const backToTop = document.createElement('button');
backToTop.innerText = "↑ Top";
backToTop.classList.add('back-to-top');
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});