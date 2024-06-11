const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.bar');

    bars.forEach(bar => {
        bar.addEventListener('mouseover', (event) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = event.target.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);

            const rect = event.target.getBoundingClientRect();
            tooltip.style.position = 'absolute';
            tooltip.style.left = `${rect.left + window.scrollX + (rect.width / 2)}px`;
            tooltip.style.top = `${rect.top + window.scrollY - 30}px`; // Adjust as needed
            tooltip.style.transform = 'translateX(-50%)';
            tooltip.style.backgroundColor = '#333';
            tooltip.style.fontFamily = 'Arial'
            tooltip.style.color = '#fff';
            tooltip.style.padding = '5px 10px';
            tooltip.style.borderRadius = '5px';
            tooltip.style.whiteSpace = 'nowrap';
            tooltip.style.fontSize = '14px';
            tooltip.style.zIndex = '1000';

            bar.addEventListener('mousemove', (event) => {
                tooltip.style.left = `${event.pageX}px`;
                tooltip.style.top = `${event.pageY - 30}px`; // Adjust as needed
            });

            bar.addEventListener('mouseout', () => {
                document.body.removeChild(tooltip);
            });
        });
    });
});

function formatMailto(form) {
    const name = form['Contact-Name'].value;
    const subject = form['Contact-Email'].value;
    const message = form['Contact-Message'].value;

    const emailBody = `From ${name},\n\n${message}`;
    form.action = `mailto:ulysse_rules@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
}

document.querySelectorAll('nav a, .nav-bar-container a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Empêche le comportement par défaut du lien
        const targetID = this.getAttribute('href').substring(1);  // Récupère l'ID de l'élément cible
        const targetElement = document.getElementById(targetID);  // Trouve l'élément cible dans le DOM
        
        if (targetElement) {
            // Si l'élément cible existe, scrolle vers cet élément de manière fluide
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.warn(`Element with ID ${targetID} not found.`);  // Affiche un avertissement si l'élément cible n'existe pas
        }
    });
});

