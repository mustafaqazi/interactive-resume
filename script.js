document.addEventListener('DOMContentLoaded', function () {
    var navButtons = document.querySelectorAll('.nav-btn');
    var sections = document.querySelectorAll('.section-content');
    // Navigation functionality
    navButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var targetId = button.dataset.target;
            if (targetId) {
                // Hide all sections
                sections.forEach(function (section) {
                    section.classList.remove('active');
                });
                // Show target section
                var targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
                // Update active button
                navButtons.forEach(function (btn) { return btn.classList.remove('active'); });
                button.classList.add('active');
            }
        });
    });
    // Skill hover effect
    var skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            var skill = item.dataset.skill;
            if (skill) {
                item.innerHTML += "<div class=\"skill-tooltip\">".concat(skill, "</div>");
            }
        });
        item.addEventListener('mouseleave', function () {
            var tooltip = item.querySelector('.skill-tooltip');
            if (tooltip) {
                item.removeChild(tooltip);
            }
        });
    });
    // Animate sections on scroll
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(function (section) {
        observer.observe(section);
    });
});
