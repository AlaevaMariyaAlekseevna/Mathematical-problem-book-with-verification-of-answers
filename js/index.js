// Проверяем, доступна ли библиотека Cookies
if (typeof Cookies === 'undefined') {
    console.error('Библиотека js-cookie не загружена');
} else {
    var messageElement = document.querySelector('.cookie-notification');
    
    // Если нет cookies, то показываем плашку
    if (!Cookies.get('agreement')) {
        showMessage();
    } else {
        initCounter();
    }
}

// Загружаем сам код счетчика сразу
(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){
        (m[i].a=m[i].a||[]).push(arguments);
    };
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) { return; }
    }
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

// Функция добавляет класс к DOM-элементу
function addClass (o, c) {
    if (!o) return;
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
    if (!re.test(o.className)) {
        o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
    }
}

// Функция удаляет класс из DOM-элемента
function removeClass (o, c) {
    if (!o) return;
    var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
    o.className = o.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
}

// Функция, которая прячет предупреждение
function hideMessage () {
    if (messageElement) {
        addClass(messageElement, 'cookie-notification_hidden_yes');
    }
}

// Функция, которая показывает предупреждение
function showMessage () {
    if (messageElement) {
        removeClass(messageElement, 'cookie-notification_hidden_yes');
    }
}

function saveAnswer () {
    // Прячем предупреждение
    hideMessage();

    // Ставим cookies на 365 дней
    Cookies.set('agreement', '1', { expires: 365 });
}

function initCounter () {
    // ЗАМЕНИТЕ XXXX на ваш реальный ID Яндекс.Метрики
    if (typeof ym !== 'undefined') {
        ym(106605326, 'init', {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
        });
    }
    saveAnswer();
}

// Нажатие кнопки "Я согласен"
document.addEventListener('DOMContentLoaded', function() {
    const agreeButton = document.querySelector('#yes');
    if (agreeButton) {
        agreeButton.addEventListener('click', function() {
            initCounter();
        });
    }
    
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
    
    // Анимация статистики (если есть такая секция)
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
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
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
    
    // Обработка увеличения изображений
    document.querySelectorAll('.problem-img, .hint-image').forEach(img => {
        img.addEventListener('click', function() {
            if (this.classList.contains('enlarged')) {
                // Убираем увеличение
                this.classList.remove('enlarged');
                document.querySelectorAll('.image-overlay').forEach(overlay => overlay.remove());
            } else {
                // Добавляем увеличение
                this.classList.add('enlarged');
                
                // Создаем оверлей
                const overlay = document.createElement('div');
                overlay.className = 'image-overlay';
                overlay.addEventListener('click', function() {
                    img.classList.remove('enlarged');
                    this.remove();
                });
                document.body.appendChild(overlay);
            }
        });
    });
    
    // Закрытие подсказок по клику на оверлей
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('hint-modal')) {
            e.target.remove();
        }
    });
});


