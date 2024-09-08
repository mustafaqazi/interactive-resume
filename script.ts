document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section-content');

    // Navigation functionality
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = (button as HTMLElement).dataset.target;
            if (targetId) {
                // Hide all sections
                sections.forEach(section => {
                    section.classList.remove('active');
                });

                // Show target section
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }

                // Update active button
                navButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            }
        });
    });

    // Skill hover effect
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const skill = (item as HTMLElement).dataset.skill;
            if (skill) {
                item.innerHTML += `<div class="skill-tooltip">${skill}</div>`;
            }
        });

        item.addEventListener('mouseleave', () => {
            const tooltip = item.querySelector('.skill-tooltip');
            if (tooltip) {
                item.removeChild(tooltip);
            }
        });
    });

    // Animate sections on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});