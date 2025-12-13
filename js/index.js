document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для CTA кнопки
    const ctaButton = document.querySelector('.hero-cta');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const featuresSection = document.querySelector('#features');
            if (featuresSection) {
                featuresSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Анимация статистики
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const finalValue = stat.textContent;
                    stat.textContent = '0';
                    
                    let counter = 0;
                    const increment = parseInt(finalValue) / 50;
                    
                    const updateCounter = () => {
                        if (counter < parseInt(finalValue)) {
                            counter += increment;
                            stat.textContent = Math.round(counter) + (finalValue.includes('%') ? '%' : '+');
                            setTimeout(updateCounter, 30);
                        } else {
                            stat.textContent = finalValue;
                        }
                    };
                    
                    updateCounter();
                });
            }
        });
    }, observerOptions);
    
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
});