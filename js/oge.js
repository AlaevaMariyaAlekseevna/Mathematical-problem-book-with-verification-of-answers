// База данных задач ОГЭ
const worksDatabase = {
    1: [
        {n:1, q:"Для объектов, указанных в таблице, определите, какими цифрами они обозначены на плане квартиры.<br><strong>Объекты|коридор|кладовая|санузел|гостиная</strong><br><br><strong>Цыфры</br></strong><img src='img/oge/1-plan.jpg' class='img-fluid mb-3' onclick='openImage(this.src)'>", a:"2316", type:"seq", topic:"Работа с планом"},
        {n:2, q:"Паркетная доска 20×80 см, в упаковке 12 шт. Сколько упаковок нужно для пола в коридоре?", a:"11", type:"num", topic:"Практические задачи"},
        {n:3, q:"Найдите значение выражения 12.5 × 2 - 0.04", a:"24.96", type:"num", topic:"Арифметика"},
        {n:4, q:"В амфитеатре 24 ряда, причём в каждом следующем ряду на одно и то же число мест больше, чем в предыдущем. В пятом ряду 27 мест, а в седьмом ряду 31 место. Сколько мест в последнем ряду?", a:"53", type:"num", topic:"Арифметическая прогрессия"},
        {n:5, q:"Автомобиль проехал 500 км. Первые 200 км он ехал со скоростью 80 км/ч, а остальной путь — со скоростью 100 км/ч. Найдите среднюю скорость автомобиля на всём пути.", a:"90", type:"num", topic:"Средняя скорость"},
        {n:6, q:"Решите уравнение: 3x² - 5x - 2 = 0", a:"2; -1/3", type:"text", topic:"Квадратные уравнения"},
        {n:7, q:"На координатной прямой точки 𝐴, 𝐵, 𝐶 и 𝐷 соответствуют числам 0,1032;−0,031; −0,01 и −0,104.<br><img src='img/oge/1координат.jpg' class='img-fluid mb-3' onclick='openImage(this.src)'>", a:"1", type:"num", topic:"Работа с графиками"},
        {n:8, q:"В коробке лежат 20 карточек с числами от 1 до 20. Какова вероятность вытащить карточку с числом, кратным 3?", a:"0.3", type:"num", topic:"Вероятность"},
        {n:9, q:"Площадь прямоугольника равна 48 см², а одна из его сторон на 2 см больше другой. Найдите периметр прямоугольника.", a:"28", type:"num", topic:"Геометрия"},
    ],
    2: [
        {n:1, q:"Дачный участок. Какие цифры соответствуют: яблони теплица сарай жилой дом<br><img src='img/oge/2-plan.jpg' class='img-fluid mb-3' onclick='openImage(this.src)'>", a:"3517", type:"seq", topic:"Работа с планом"},
        {n:2, q:"Плитка 1×1 м, в упаковке 8 шт. Сколько упаковок на все дорожки и площадку между гаражом и сараем?", a:"9", type:"num", topic:"Практические задачи"},
        {n:3, q:"Решите уравнение: 2x - 7 = 3", a:"5", type:"num", topic:"Линейные уравнения"},
        {n:4, q:"В геометрической прогрессии b₁ = 3, q = 2. Найдите b₅.", a:"48", type:"num", topic:"Геометрическая прогрессия"},
        {n:5, q:"Сколько различных трёхзначных чисел можно составить из цифр 1, 2, 3, 4 без повторений?", a:"24", type:"num", topic:"Комбинаторика"},
        {n:6, q:"Найдите корни уравнения: x² - 9 = 0", a:"-3; 3", type:"text", topic:"Квадратные уравнения"},
        {n:7, q:"На графике показана скорость автомобиля. Определите путь за первые 4 часа.<br><img src='img/oge/2-graph.jpg' class='img-fluid mb-3' onclick='openImage(this.src)'>", a:"120", type:"num", topic:"Работа с графиками"},
        {n:8, q:"В урне 5 белых и 3 чёрных шара. Какова вероятность вытащить белый шар?", a:"5/8", type:"text", topic:"Вероятность"},
        {n:9, q:"Диагональ прямоугольника равна 10 см, а одна из сторон 6 см. Найдите площадь.", a:"48", type:"num", topic:"Геометрия"},
    ]
};

// Заполняем недостающие варианты 3-10
for (let i = 3; i <= 10; i++) {
    if (!worksDatabase[i]) worksDatabase[i] = [];
    // Копируем задачи из варианта 2 для демонстрации
    while (worksDatabase[i].length < 25) {
        const origTask = worksDatabase[2][worksDatabase[i].length] || {n: worksDatabase[i].length + 1, q:"Задание в разработке", a:"?", type:"text", topic:"Тема"};
        worksDatabase[i].push({
            ...origTask,
            n: worksDatabase[i].length + 1,
            q: origTask.q.replace('вариант 2', `вариант ${i}`)
        });
    }
}

// === Состояние пользователя ===
let userState = {
    solved: {},        // {workId: {taskId: true/false}}
    currentWork: 1
};

// === Инициализация приложения ===
document.addEventListener('DOMContentLoaded', () => {
    initUserState();
    createWorkFilter();
    loadWork(userState.currentWork);
    updateStats();
    setupEventListeners();
});

// Инициализация состояния пользователя
function initUserState() {
    try {
        const saved = localStorage.getItem('oge2025_state');
        if (saved) {
            userState = JSON.parse(saved);
        }
        if (!userState.solved) {
            userState.solved = {};
        }
        console.log('User state loaded:', userState);
    } catch (e) {
        console.error('Error loading user state:', e);
        userState = { solved: {}, currentWork: 1 };
    }
}

// Сохранение состояния пользователя
function saveUserState() {
    try {
        localStorage.setItem('oge2025_state', JSON.stringify(userState));
        console.log('User state saved:', userState);
    } catch (e) {
        console.error('Error saving user state:', e);
    }
}

// Создание фильтра работ
function createWorkFilter() {
    const container = document.getElementById('work-filter');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 1; i <= 10; i++) {
        const btn = document.createElement('button');
        btn.className = 'oge-filter-btn';
        if (i === userState.currentWork) {
            btn.classList.add('active');
        }
        btn.innerHTML = `
            <i class="bi bi-journal-text"></i>
            <span>Вариант ${i}</span>
        `;
        btn.dataset.work = i;
        btn.addEventListener('click', () => loadWork(i));
        container.appendChild(btn);
    }
}

// Загрузка конкретной работы
function loadWork(workId) {
    userState.currentWork = workId;
    saveUserState();
    
    // Обновляем активную кнопку
    document.querySelectorAll('.oge-filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.work) === workId) {
            btn.classList.add('active');
        }
    });
    
    // Обновляем информацию о работе
    updateWorkInfo(workId);
    
    // Загружаем задачи
    const container = document.getElementById('work-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const tasks = worksDatabase[workId] || [];
    tasks.forEach(task => {
        const taskCard = createTaskCard(workId, task);
        container.appendChild(taskCard);
    });
    
    // Обновляем статистику
    updateStats();
    
    console.log(`Work ${workId} loaded with ${tasks.length} tasks`);
}

// Обновление информации о работе
function updateWorkInfo(workId) {
    const workInfo = document.getElementById('work-info');
    if (workInfo) {
        workInfo.innerHTML = `
            <h3>Вариант ${workId}</h3>
            <p>25 заданий • Время выполнения: 235 минут</p>
        `;
    }
}

// Создание карточки задачи
function createTaskCard(workId, task) {
    const taskId = `${workId}-${task.n}`;
    const isSolved = userState.solved[workId]?.[task.n];
    
    const taskCard = document.createElement('div');
    taskCard.className = 'oge-task-card';
    taskCard.id = `task-${taskId}`;
    
    taskCard.innerHTML = `
        <div class="oge-task-header">
            <div class="oge-task-topic">${task.topic || 'Общее'}</div>
            <div class="oge-task-number">Задание ${task.n}</div>
            ${isSolved ? '<div class="oge-solved-badge"><i class="bi bi-check-circle-fill"></i> Решено</div>' : ''}
        </div>
        
        <div class="oge-task-question">
            ${task.q}
        </div>
        
        <div class="oge-answer-container">
            <div class="oge-answer-section">
                <input type="${task.type === 'num' ? 'number' : 'text'}" 
                       class="oge-answer-input" 
                       id="answer-${taskId}" 
                       placeholder="Введите ваш ответ">
                <button class="oge-check-btn" data-task="${taskId}">
                    <i class="bi bi-check-circle"></i> Проверить
                </button>
            </div>
        </div>
        
        <div class="oge-task-actions" style="display: none;" id="actions-${taskId}">
            <button class="oge-hint-btn" data-task="${taskId}">
                <i class="bi bi-lightbulb"></i> Подсказка
            </button>
            <button class="oge-solution-btn" data-task="${taskId}">
                <i class="bi bi-journal-text"></i> Решение
            </button>
            <button class="oge-answer-btn" data-task="${taskId}">
                <i class="bi bi-eye"></i> Ответ
            </button>
        </div>
        
        <div class="oge-feedback" id="feedback-${taskId}"></div>
        
        <div class="oge-solution" id="solution-${taskId}">
            <h4><i class="bi bi-pencil-square"></i> Решение задания ${task.n}:</h4>
            <div class="solution-content">
                <p>Подробное решение будет добавлено в следующем обновлении.</p>
                <div class="alert alert-info">
                    <i class="bi bi-info-circle"></i> Для этого задания пока нет подробного решения.
                </div>
            </div>
        </div>
    `;
    
    return taskCard;
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Глобальный обработчик для кнопки сброса прогресса
    const resetBtn = document.querySelector('.oge-reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetProgress);
    }
    
    // Делегирование событий для динамических элементов
    document.addEventListener('click', (e) => {
        const target = e.target;
        
        // Кнопка проверки
        if (target.closest('.oge-check-btn')) {
            const taskId = target.closest('.oge-check-btn').dataset.task;
            checkAnswer(taskId);
        }
        
        // Кнопка подсказки
        if (target.closest('.oge-hint-btn')) {
            const taskId = target.closest('.oge-hint-btn').dataset.task;
            showHint(taskId);
        }
        
        // Кнопка решения
        if (target.closest('.oge-solution-btn')) {
            const taskId = target.closest('.oge-solution-btn').dataset.task;
            toggleSolution(taskId);
        }
        
        // Кнопка ответа
        if (target.closest('.oge-answer-btn')) {
            const taskId = target.closest('.oge-answer-btn').dataset.task;
            showAnswer(taskId);
        }
        
        // Изображения с обработчиком открытия
        if (target.tagName === 'IMG' && target.onclick) {
            openImage(target.src);
        }
    });
    
    // Enter в поле ввода
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.target.classList.contains('oge-answer-input')) {
            const taskId = e.target.id.replace('answer-', '');
            checkAnswer(taskId);
        }
    });
}

// Проверка ответа
function checkAnswer(taskId) {
    const [workId, taskNum] = taskId.split('-').map(Number);
    const input = document.getElementById(`answer-${taskId}`);
    const feedback = document.getElementById(`feedback-${taskId}`);
    const actions = document.getElementById(`actions-${taskId}`);
    const taskCard = document.getElementById(`task-${taskId}`);
    
    if (!input || !feedback) return;
    
    let userAnswer = input.value.trim();
    const task = worksDatabase[workId]?.[taskNum - 1];
    if (!task) {
        feedback.innerHTML = '<div class="incorrect-feedback">❌ Задача не найдена</div>';
        feedback.className = 'oge-feedback incorrect';
        return;
    }
    
    const correctAnswer = task.a.toString();
    
    // Нормализация ответов
    const normalize = (ans) => {
        return ans.toLowerCase()
            .replace(/\s+/g, '')
            .replace(/,/g, '.')
            .replace(/;/g, ',')
            .replace(/[()]/g, '')
            .trim();
    };
    
    const normalizedUser = normalize(userAnswer);
    const normalizedCorrect = normalize(correctAnswer);
    
    let isCorrect = false;
    
    // Проверка совпадения
    if (normalizedUser === normalizedCorrect) {
        isCorrect = true;
    } else {
        // Попытка численного сравнения
        try {
            const userNum = parseFloat(normalizedUser.replace(',', '.'));
            const correctNum = parseFloat(normalizedCorrect.replace(',', '.'));
            if (!isNaN(userNum) && !isNaN(correctNum)) {
                isCorrect = Math.abs(userNum - correctNum) < 0.001;
            }
        } catch (e) {
            console.log('Не удалось сравнить численно');
        }
    }
    
    if (isCorrect) {
        feedback.innerHTML = `
            <div class="correct-feedback">
                <i class="bi bi-check-circle-fill"></i>
                <strong>Правильно!</strong> Отличная работа!
                ${correctAnswer !== userAnswer ? `<br><small>(Ваш ответ: ${userAnswer}, правильный: ${correctAnswer})</small>` : ''}
            </div>
        `;
        feedback.className = 'oge-feedback correct';
        
        // Помечаем как решенное
        markAsSolved(workId, taskNum, true);
        
        // Обновляем бейдж
        if (taskCard) {
            const header = taskCard.querySelector('.oge-task-header');
            const oldBadge = header.querySelector('.oge-solved-badge');
            if (oldBadge) oldBadge.remove();
            
            const solvedDiv = document.createElement('div');
            solvedDiv.className = 'oge-solved-badge';
            solvedDiv.innerHTML = '<i class="bi bi-check-circle-fill"></i> Решено';
            header.appendChild(solvedDiv);
            
            // Скрываем кнопки действий
            if (actions) actions.style.display = 'none';
            
            // Добавляем анимацию
            taskCard.style.animation = 'ogePulse 0.5s ease';
            setTimeout(() => {
                taskCard.style.animation = '';
            }, 500);
        }
        
        // Автоматически показываем решение
        setTimeout(() => {
            toggleSolution(taskId, true);
        }, 500);
        
        // ОБНОВЛЕНИЕ: Убрано показ поздравления
        
    } else {
        feedback.innerHTML = `
            <div class="incorrect-feedback">
                <i class="bi bi-x-circle-fill"></i>
                <strong>Неправильно.</strong> Попробуйте ещё раз!
                <div class="hint-suggestion mt-2">
                    <small><i class="bi bi-lightbulb"></i> Воспользуйтесь подсказкой или посмотрите решение</small>
                </div>
            </div>
        `;
        feedback.className = 'oge-feedback incorrect';
        
        // Показываем кнопки действий
        if (actions) {
            actions.style.display = 'flex';
            actions.style.animation = 'ogeFadeIn 0.5s ease';
        }
        
        markAsSolved(workId, taskNum, false);
    }
    
    updateStats();
}

// Отметить задачу как решенную
function markAsSolved(workId, taskNum, correct) {
    if (!userState.solved[workId]) userState.solved[workId] = {};
    userState.solved[workId][taskNum] = correct;
    saveUserState();
}

// Показать подсказку
function showHint(taskId) {
    const [workId, taskNum] = taskId.split('-');
    const hints = [
        "Внимательно прочитайте условие задачи",
        "Выпишите все известные данные",
        "Сделайте чертёж или схему",
        "Разбейте задачу на несколько простых шагов",
        "Проверьте единицы измерения",
        "Вспомните формулу по теме",
        "Попробуйте решить задачу от обратного",
        "Проверьте вычисления на арифметические ошибки"
    ];
    
    const randomHint = hints[Math.floor(Math.random() * hints.length)];
    
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'oge-hint-modal';
    modal.innerHTML = `
        <div class="oge-hint-overlay" onclick="this.parentElement.remove()"></div>
        <div class="oge-hint-content">
            <div class="oge-hint-header">
                <h4><i class="bi bi-lightbulb-fill"></i> Подсказка к заданию ${taskNum}</h4>
                <button class="oge-close-hint" onclick="this.closest('.oge-hint-modal').remove()">×</button>
            </div>
            <div class="oge-hint-body">
                <div class="oge-hint-icon">
                    <i class="bi bi-lightbulb"></i>
                </div>
                <p class="oge-hint-text">${randomHint}</p>
                <div class="oge-hint-topic">
                    <small>Тема: ${worksDatabase[workId][taskNum-1]?.topic || 'Общая'}</small>
                </div>
            </div>
            <div class="oge-hint-footer">
                <button class="oge-understand-btn" onclick="this.closest('.oge-hint-modal').remove()">
                    Понятно
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Стили для элементов модального окна
    const style = document.createElement('style');
    style.textContent = `
        .oge-hint-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(5px);
        }
        .oge-understand-btn {
            background: linear-gradient(135deg, #86D2F4, #8780FF);
            color: white;
            border: none;
            padding: 10px 30px;
            border-radius: 20px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .oge-understand-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(134, 210, 244, 0.3);
        }
    `;
    document.head.appendChild(style);
}

// Переключить отображение решения
function toggleSolution(taskId, showOnly = false) {
    const solution = document.getElementById(`solution-${taskId}`);
    if (!solution) return;
    
    const btn = document.querySelector(`[data-task="${taskId}"].oge-solution-btn`);
    
    if (showOnly || solution.style.display === 'none' || !solution.style.display) {
        solution.style.display = 'block';
        solution.classList.add('show');
        if (btn) {
            btn.innerHTML = '<i class="bi bi-chevron-up"></i> Скрыть решение';
        }
    } else if (!showOnly) {
        solution.style.display = 'none';
        solution.classList.remove('show');
        if (btn) {
            btn.innerHTML = '<i class="bi bi-journal-text"></i> Решение';
        }
    }
}

// Показать ответ
function showAnswer(taskId) {
    const [workId, taskNum] = taskId.split('-');
    const task = worksDatabase[workId]?.[taskNum - 1];
    if (!task) return;
    
    const feedback = document.getElementById(`feedback-${taskId}`);
    if (!feedback) return;
    
    feedback.innerHTML = `
        <div class="answer-feedback">
            <i class="bi bi-eye-fill"></i>
            <strong>Правильный ответ:</strong> ${task.a}
        </div>
    `;
    feedback.className = 'oge-feedback info';
}

// ОБНОВЛЕНИЕ: Убрана функция showCongratulations

// Обновление статистики
function updateStats() {
    let total = 0, solved = 0;
    
    // Считаем решенные задачи
    Object.keys(userState.solved).forEach(workId => {
        Object.keys(userState.solved[workId]).forEach(taskId => {
            total++;
            if (userState.solved[workId][taskId] === true) {
                solved++;
            }
        });
    });
    
    // Общее количество задач: 10 вариантов × 25 задач
    const totalTasks = 10 * 25;
    const percent = totalTasks > 0 ? Math.round((solved / totalTasks) * 100) : 0;
    
    // Обновляем элементы
    const solvedElement = document.getElementById('solved-count');
    const totalElement = document.getElementById('total-count');
    const progressElement = document.getElementById('progress-percent');
    
    if (solvedElement) solvedElement.textContent = solved;
    if (totalElement) totalElement.textContent = totalTasks;
    if (progressElement) progressElement.textContent = `${percent}%`;
}

// Сброс прогресса
function resetProgress() {
    if (confirm('Вы уверены, что хотите сбросить весь прогресс по ОГЭ? Все ваши ответы будут удалены.')) {
        userState.solved = {};
        userState.currentWork = 1;
        saveUserState();
        
        // Обновляем UI
        createWorkFilter();
        loadWork(1);
        updateStats();
        
        // Показываем сообщение
        showAlert('Прогресс сброшен! Все ответы удалены.', 'info');
    }
}

// Показать алерт
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `oge-alert oge-alert-${type}`;
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 15px;
        color: white;
        font-weight: bold;
        z-index: 9999;
        animation: ogeSlideInRight 0.5s ease, ogeFadeOut 0.5s ease 2.5s forwards;
    `;
    
    const bgColor = type === 'info' ? '#17a2b8' : type === 'success' ? '#28a745' : '#dc3545';
    alertDiv.style.background = bgColor;
    
    alertDiv.innerHTML = `
        <i class="bi bi-info-circle me-2"></i>
        ${message}
    `;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        if (alertDiv.parentNode) {
            document.body.removeChild(alertDiv);
        }
    }, 3000);
}

// Открыть изображение
function openImage(src) {
    const modalImg = document.getElementById('modalImg');
    if (modalImg) {
        modalImg.src = src;
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
    }
}