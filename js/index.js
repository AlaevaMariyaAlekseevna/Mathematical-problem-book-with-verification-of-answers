 var messageElement = document.querySelector('.cookie-notification');
        // Если нет cookies, то показываем плашку
        if (!Cookies.get('agreement')) {
            showMessage();
        } else {
            initCounter();
        }
        // Загружаем сам код счетчика сразу
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym')
        // Функция добавляет класс к DOM-элементу. Вы можете использовать библиотеку jQuery или другой фреймворк
        function addClass (o, c) {
            var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
            if (!o || re.test(o.className)) {
                return;
            }
            o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
        }
        // Функция удаляет класс из DOM-элемента. Вы можете использовать библиотеку jQuery или другой фреймворк
        function removeClass (o, c) {
            var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
            if (!o) {
                return;
            }
            o.className = o.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
        }
        // Функция, которая прячет предупреждение
        function hideMessage () {
            addClass(messageElement, 'cookie-notification_hidden_yes');
        }
        // Функция, которая показывает предупреждение
        function showMessage () {
            removeClass(messageElement, 'cookie-notification_hidden_yes');
        }
        function saveAnswer () {
            // Прячем предупреждение
            hideMessage();

            // Ставим cookies
            Cookies.set('agreement', '1');
        }
        function initCounter () {
            ym(XXXX, 'init', {});
            saveAnswer();
        }
        // Нажатие кнопки "Я согласен"
        document.querySelector('#yes').addEventListener('click', function () {
            initCounter();
        });


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
