// Функция для загрузки и вставки шаблонов
async function loadTemplate(templateName, targetElementId) {
    try {
        console.log(`Загрузка шаблона: ${templateName}`);
        const response = await fetch(`templates/${templateName}.html`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        console.log(`Шаблон ${templateName} загружен успешно`);
        
        const targetElement = document.getElementById(targetElementId);
        if (targetElement) {
            targetElement.innerHTML = html;
            console.log(`Шаблон ${templateName} вставлен в #${targetElementId}`);
            
            // Добавляем класс active для текущей страницы (только для header)
            if (templateName === 'header') {
                updateActiveNavLink();
            }
            
            // Инициализируем обработчики событий
            initializeTemplateEvents();
        } else {
            console.error(`Элемент #${targetElementId} не найден`);
        }
    } catch (error) {
        console.error(`Ошибка загрузки шаблона ${templateName}:`, error);
        showTemplateError(templateName, targetElementId);
    }
}

// Показывает сообщение об ошибке, если шаблон не загрузился
function showTemplateError(templateName, targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (!targetElement) return;
    
    if (templateName === 'header') {
        targetElement.innerHTML = `
            <div class="header-nav" style="background: white; padding: 15px 0;">
                <div class="nav-container" style="max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                    <img src="img/логотип.svg" alt="Обучайка" class="logo-small" onclick="window.location.href='index.html'" style="max-width: 120px; cursor: pointer;">
                    <div class="main-nav" style="display: flex; gap: 15px; flex-wrap: wrap;">
                        <a href="index.html" class="nav-link ${window.location.pathname.includes('index.html') ? 'active' : ''}">Главная</a>
                        <a href="algebra.html" class="nav-link ${window.location.pathname.includes('algebra.html') ? 'active' : ''}">Алгебра</a>
                        <a href="geometry.html" class="nav-link ${window.location.pathname.includes('geometry.html') ? 'active' : ''}">Геометрия</a>
                        <a href="oge.html" class="nav-link ${window.location.pathname.includes('oge.html') ? 'active' : ''}">ОГЭ</a>
                    </div>
                </div>
            </div>
        `;
    } else if (templateName === 'footer') {
        targetElement.innerHTML = `
            <footer class="footer">
                <div class="footer-content">
                    <img src="img/логотип.svg" alt="Обучайка" class="logo-small">
                    <p class="footer-text">
                        Образовательная платформа "Обучайка" создана для того, чтобы сделать обучение 
                        математике доступным, интересным и эффективным для каждого ученика.
                    </p>
                    <p class="footer-text" style="margin-top: 30px; font-size: 0.9rem;">
                        © 2025 Обучайка. Все права защищены.
                    </p>
                </div>
            </footer>
        `;
    }
}

// Обновление активной ссылки в навигации
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    console.log('Текущая страница:', currentPage);
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        console.log(`Ссылка: ${linkHref}, текущая: ${currentPage}`);
        
        if (linkHref === currentPage) {
            link.classList.add('active');
            console.log(`Активная ссылка: ${linkHref}`);
        } else {
            link.classList.remove('active');
        }
    });
}

// Инициализация обработчиков событий для шаблонов
function initializeTemplateEvents() {
    // Обработчики для кнопок навигации
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Логотип - переход на главную
    document.querySelectorAll('.logo-small').forEach(logo => {
        logo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    });
}

// Функция инициализации всех шаблонов
async function initTemplates() {
    console.log('Инициализация шаблонов...');
    
    // Создаем контейнеры для шаблонов, если они не существуют
    if (!document.getElementById('header-container')) {
        const headerContainer = document.createElement('div');
        headerContainer.id = 'header-container';
        document.body.insertBefore(headerContainer, document.body.firstChild);
        console.log('Создан контейнер для шапки');
    }
    
    if (!document.getElementById('footer-container')) {
        const footerContainer = document.createElement('div');
        footerContainer.id = 'footer-container';
        document.body.appendChild(footerContainer);
        console.log('Создан контейнер для подвала');
    }
    
    // Загружаем шаблоны параллельно
    await Promise.all([
        loadTemplate('header', 'header-container'),
        loadTemplate('footer', 'footer-container')
    ]);
    
    console.log('Шаблоны загружены');
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM загружен, начинаем загрузку шаблонов');
    initTemplates().catch(error => {
        console.error('Ошибка инициализации шаблонов:', error);
    });
});