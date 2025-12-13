// База данных задач по алгебре из предоставленных PDF-файлов
const problemsDatabase = {
    // 5 класс - из 5ademo.pdf (логика)
    5: [
        {
            question: "Какие из данных высказывиний истины: 1) 3 минуты = 180 секунд; 2) 1 сутки = 12 часов; 3) в июне 31 день; 4) в июле 31 день; 5) у треугольника три стороны; 6) у прямоугольника пять вершин?",
            solution: "1) 3 минуты = 180 секунд; истинное высказывание, ведь 1 минута = 60 секунд; 2) 1 сутки = 12 часов; ложное высказывание, 1 сутки = 24 часа; 3) в июне 31 день; ложное высказывание, в июне 30 дней; 4) в июле 31 день; истинное; 5) у треугольника три стороны; истинное; 6) у прямоугольника пять вершин; ложное. Истинные: 1, 4, 5.",
            answer: "1, 4, 5",
            answerVariants: ["1,4,5", "1 4 5", "1;4;5", "1 и 4 и 5", "145"],
            type: "text",
            topic: "Высказывания"
        },
        {
            question: "Коля, Саша и Боря нарисовали круг, квадрат и треугольник, каждый нарисовал одну из этих фигур. Коля говорит: 'Я нарисовал квадрат'. Саша: 'Я нарисовал круг'. Боря: 'Саша нарисовал квадрат'. Один из них сказал неправду. Кто что нарисовал?",
            solution: "1) Если Коля сказал правду (нарисовал квадрат), то Саша нарисовал круг, тогда Боря сказал неправду (Саша не квадрат).\n2) Если Коля соврал, то он не квадрат.\n3) Если Саша сказал правду (круг), то Коля соврал (не квадрат), а Боря соврал (Саша не квадрат). Два лжеца - противоречие условию.\n4) Если Боря сказал правду, то Саша нарисовал квадрат, тогда Саша соврал (не круг), Коля соврал (не квадрат). Два лжеца - противоречие.\n5) Значит, Коля сказал правду, Боря соврал, Саша сказал правду.\nОтвет: Коля - квадрат, Саша - круг, Боря - треугольник.",
            answer: "Коля - квадрат, Саша - круг, Боря - треугольник",
            answerVariants: [
                "Коля квадрат Саша круг Боря треугольник",
                "Коля: квадрат, Саша: круг, Боря: треугольник",
                "квадрат круг треугольник",
                "Квадрат, Круг, Треугольник"
            ],
            type: "text",
            topic: "Высказывания"
        },
        {
            question: "Составьте отрицание для высказывания: 'Сумма двух чисел меньше, чем 14'.",
            solution: "Отрицание может быть сформулировано тремя способами:\n1) Сумма двух чисел не меньше, чем 14.\n2) Неверно, что сумма двух чисел меньше, чем 14.\n3) Сумма двух чисел больше или равна 14.",
            answer: "Сумма двух чисел не меньше, чем 14",
            answerVariants: [
                "Неверно, что сумма двух чисел меньше, чем 14",
                "Сумма двух чисел больше или равна 14",
                "сумма двух чисел не меньше чем 14",
                "Сумма 2 чисел не меньше 14",
                "не меньше 14"
            ],
            type: "text",
            topic: "Отрицание"
        },
        {
            question: "Витя, Юра и Саша получили за контрольную работу разные оценки — 3, 4, 5. Мог ли Витя получить 3, если из трёх следующих высказываний только одно верное:\nВитя: 'Я получил не 3'.\nЮра: 'У меня 4'.\nСаша: 'Я получил 3'?",
            solution: "Допустим, Витя получил 3. Тогда:\nВитя: 'Я получил не 3' - ЛОЖЬ.\nЮра: 'У меня 4' - может быть истиной, если у Юры 4.\nСаша: 'Я получил 3' - ЛОЖЬ (3 у Вити).\nПолучается одно истинное высказывание (Юры).\nОтвет: да, мог получить 3.",
            answer: "да",
            answerVariants: ["Да", "yes", "ДА", "Da", "д"],
            type: "text",
            topic: "Отрицание"
        },
        {
            question: "Истинно или ложно высказывание: 'Три меньше пяти и три меньше двух'?",
            solution: "A: 'Три меньше пяти' - ИСТИНА.\nB: 'Три меньше двух' - ЛОЖЬ.\nA и B: 'Три меньше пяти и три меньше двух' - ЛОЖЬ (конъюнкция ложна, если хотя бы одно высказывание ложно).",
            answer: "ложно",
            answerVariants: ["ЛОЖНО", "ложно.", "false", "неверно", "Нет"],
            type: "text",
            topic: "Конъюнкция"
        }
    ],

    // 6 класс 
    6: [
        {
            question: "Задайте множество таких натуральных чисел, для которых все три утверждения верные:\n1) число не меньше, чем 5;\n2) число не больше, чем 12;\n3) число чётное.",
            solution: "1) число ≥ 5\n2) число ≤ 12\n3) число чётное\nПодходят: {6, 8, 10, 12}\nОтвет: {6; 8; 10; 12}",
            answer: "{6; 8; 10; 12}",
            answerVariants: [
                "{6,8,10,12}",
                "6 8 10 12",
                "6,8,10,12",
                "6; 8; 10; 12",
                "6, 8, 10, 12"
            ],
            type: "text",
            topic: "Элементы множества"
        },
        {
            question: "Даны множества: A = {2; 4; 6; 8}; B = {0; 2; 4; 8}; C — множество чётных натуральных чисел, меньших 10. Какое из данных множеств равно множеству А?",
            solution: "A = {2; 4; 6; 8}\nC = {2; 4; 6; 8} (чётные натуральные числа меньше 10)\nОтвет: C.",
            answer: "C",
            answerVariants: ["c", "С", "множество C", "c.", "си"],
            type: "text",
            topic: "Равные множества"
        },
        {
            question: "Сколько элементов в множестве треугольников, длины сторон которых равны 1 см, 3 см, 4 см?",
            solution: "Треугольник существует, если сумма любых двух сторон больше третьей.\n1 + 3 = 4, не больше 4.\nТреугольника не существует.\nМножество пустое: |∅| = 0\nОтвет: 0.",
            answer: "0",
            answerVariants: ["0.", "0 треугольников", "ноль", "zero", "нет"],
            type: "number",
            topic: "Мощность множества"
        },
        {
            question: "Сколько различных подмножеств имеет множество A = {1; 3; 5}?",
            solution: "Число подмножеств множества с n элементами: 2ⁿ\nn = 3 ⇒ 2³ = 8\nПодмножества: ∅, {1}, {3}, {5}, {1,3}, {1,5}, {3,5}, {1,3,5}\nОтвет: 8.",
            answer: "8",
            answerVariants: ["8.", "восемь", "eight", "08", "8 подмножеств"],
            type: "number",
            topic: "Подмножества"
        },
        {
            question: "Даны множества: A = {2; 5; 6; 7}; B = {1; 3; 5}; C = {3; 5; 6; 8}. Найдите A ∩ B ∩ C.",
            solution: "A ∩ B = {5}\nA ∩ B ∩ C = {5} (5 есть во всех трёх множествах)\nОтвет: {5}.",
            answer: "{5}",
            answerVariants: ["{5}.", "5", "пять", "five", "5, {5}"],
            type: "text",
            topic: "Пересечение множества"
        }
    ],

    // 7 класс 
    7: [
        {
            question: "Турист прошёл в первый день 3/8 всего маршрута, во второй день 2/5 остатка, после чего ему осталось пройти на 6,5 км больше, чем он прошёл во второй день. Каков весь маршрут туриста?",
            solution: "Пусть x (км) — весь маршрут.\nПервый день: 3/8x\nОстаток после первого дня: 5/8x\nВторой день: 2/5 * 5/8x = 2/8x = 1/4x\nОсталось пройти: 3/5 * 5/8x = 3/8x\nУравнение: 3/8x - 1/4x = 6,5\n1/8x = 6,5\nx = 52\nОтвет: 52 км.",
            answer: "52",
            answerVariants: ["52 км", "52км", "52.0", "052", "52.00"],
            type: "number",
            topic: "Движение по прямой"
        },
        {
            question: "Два велосипедиста одновременно стартовали по круговой дорожке. Первый делает полный круг за 12 минут, а второй – за 15 минут. Через сколько минут они в следующий раз окажутся вместе на старте?",
            solution: "Найти НОК(12, 15).\n12 = 2² × 3\n15 = 3 × 5\nНОК = 2² × 3 × 5 = 60\nЧерез 60 минут первый сделает 5 кругов, второй - 4 круга.\nОтвет: 60 минут.",
            answer: "60",
            answerVariants: ["60 мин", "60 минут", "60.0", "1 час", "шестьдесят"],
            type: "number",
            topic: "Движение по замкнутой трассе"
        },
        {
            question: "Расстояние между двумя пристанями катер проходит по течению за 2 часа, а против течения — за 3 часа. За сколько часов это расстояние преодолеет плот?",
            solution: "За 1 час по течению — 1/2 пути.\nЗа 1 час против течения — 1/3 пути.\nСкорость течения: (1/2 - 1/3) ÷ 2 = 1/12 пути в час.\nПлот проплывает всё расстояние за: 1 ÷ 1/12 = 12 часов.\nОтвет: 12 часов.",
            answer: "12",
            answerVariants: ["12 часов", "12ч", "12.0", "012", "двенадцать"],
            type: "number",
            topic: "Движение по реке"
        },
        {
            question: "Из пункта A в пункт B автомобиль ехал со скоростью 40 км/ч в течение 1 часа. Обратно автомобиль двигался со скоростью 60 км/ч. Найдите среднюю скорость автомобиля.",
            solution: "1) Расстояние AB: 40 × 1 = 40 км\n2) Время обратно: 40 ÷ 60 = 2/3 часа\n3) Весь путь: 40 + 40 = 80 км\n4) Всё время: 1 + 2/3 = 5/3 часа\n5) Средняя скорость: 80 ÷ 5/3 = 48 км/ч\nОтвет: 48 км/ч.",
            answer: "48",
            answerVariants: ["48 км/ч", "48км/ч", "48.0", "048", "сорок восемь"],
            type: "number",
            topic: "Средняя скорость"
        },
        {
            question: "Поезд, двигаясь равномерно со скоростью 27 км/ч, проезжает мимо пассажира, стоящего на платформе, за 28 секунд. Найдите длину поезда.",
            solution: "27 км/ч = 27000 м/ч = 7,5 м/с\nДлина поезда: 7,5 м/с × 28 с = 210 м\nОтвет: 210 м.",
            answer: "210",
            answerVariants: ["210 м", "210м", "210.0", "0210", "двести десять"],
            type: "number",
            topic: "Движение протяжённых тел"
        }
    ],

    // 8 класс 
    8: [
        {
            question: "Задайте множество всех четырёхзначных чисел, сумма цифр которых равна 10, а произведение цифр равно 27.",
            solution: "Пусть число abcd.\na+b+c+d = 10\na×b×c×d = 27 = 3³\nЦифры: 1, 3, 3, 3 (сумма 10)\nЧисла: 1333, 3133, 3313, 3331\nОтвет: {1333; 3133; 3313; 3331}.",
            answer: "{1333; 3133; 3313; 3331}",
            answerVariants: [
                "{1333,3133,3313,3331}",
                "1333 3133 3313 3331",
                "1333,3133,3313,3331",
                "1333;3133;3313;3331",
                "1333, 3133, 3313, 3331"
            ],
            type: "text",
            topic: "Элементы множества"
        },
        {
            question: "Сколько элементов содержит множество различных шестизначных натуральных чисел, у которых каждая следующая цифра на 1 меньше предыдущей?",
            solution: "Числа: 987654, 876543, 765432, 654321, 543210\nВсего 5 чисел.\nОтвет: 5.",
            answer: "5",
            answerVariants: ["5.", "пять", "five", "05", "5 чисел"],
            type: "number",
            topic: "Мощность множества"
        },
        {
            question: "Сколько различных подмножеств имеет множество A = {1; 2; 3; 4}?",
            solution: "Число подмножеств: 2⁴ = 16\nВсе подмножества: ∅; {1}; {2}; {3}; {4}; {1,2}; {1,3}; {1,4}; {2,3}; {2,4}; {3,4}; {1,2,3}; {1,2,4}; {1,3,4}; {2,3,4}; {1,2,3,4}\nОтвет: 16.",
            answer: "16",
            answerVariants: ["16.", "шестнадцать", "sixteen", "016", "16 подмножеств"],
            type: "number",
            topic: "Подмножества"
        },
        {
            question: "Даны множества: A = {1; 2; 3; 4}; B = {2; 3; 5; 6}; C = {3; 4; 6; 7}. Найдите A ∩ B и A ∩ B ∩ C.",
            solution: "A ∩ B = {2; 3}\nA ∩ B ∩ C = {3} (3 есть во всех трёх множествах)\nОтвет: A ∩ B = {2; 3}; A ∩ B ∩ C = {3}",
            answer: "A ∩ B = {2; 3}; A ∩ B ∩ C = {3}",
            answerVariants: [
                "A ∩ B = {2;3}; A ∩ B ∩ C = {3}",
                "A∩B={2;3}; A∩B∩C={3}",
                "2,3 и 3",
                "{2,3} и {3}",
                "2 3 и 3"
            ],
            type: "text",
            topic: "Пересечение множеств"
        },
        {
            question: "Сколько натуральных чисел, не больших 150, которые не делятся ни на 3, ни на 8?",
            solution: "1) 150 ÷ 3 = 50 чисел делятся на 3\n2) 150 ÷ 8 = 18 чисел делятся на 8\n3) 150 ÷ 24 = 6 чисел делятся и на 3, и на 8\n4) 50 + 18 - 6 = 62 чисел делятся на 3 или на 8\n5) 150 - 62 = 88 чисел не делятся ни на 3, ни на 8\nОтвет: 88.",
            answer: "88",
            answerVariants: ["88.", "восемьдесят восемь", "88 чисел", "088", "eighty eight"],
            type: "number",
            topic: "Задачи повышенной сложности"
        }
    ],

    // 9 класс - из 9ademo.pdf (логика с импликацией)
    9: [
        {
            question: "Для какого натурального числа x среди следующих неравенств три истинных и два ложных:\n1) 2x ≤ 11; 2) 3x ≥ 8; 3) 4x ≤ 33; 4) 5x < 47; 5) 6x < 69?",
            solution: "Решим неравенства:\n1) x ≤ 5,5\n2) x ≥ 8/3 ≈ 2,67\n3) x ≤ 8,25\n4) x < 9,4\n5) x < 11,5\nПри x = 9:\n1) 9 ≤ 5,5 - ЛОЖЬ\n2) 9 ≥ 2,67 - ИСТИНА\n3) 9 ≤ 8,25 - ЛОЖЬ\n4) 9 < 9,4 - ИСТИНА\n5) 9 < 11,5 - ИСТИНА\nТри истинных, два ложных.\nОтвет: 9.",
            answer: "9",
            answerVariants: ["девять", "Nine", "IX", "09", "9.0"],
            type: "number",
            topic: "Высказывания"
        },
        {
            question: "Какие из данных высказываний истинные:\n1) если 31 и 37 простые числа, то и 41 простое число;\n2) если 43 и 53 простые числа, то и 63 простое число;\n3) если 47 и 57 простые числа, то и 67 простое число;\n4) если 107 простое число, то и 147 простое число?",
            solution: "1) Условие истинно, заключение истинно ⇒ импликация истинна\n2) Условие истинно, заключение ложно ⇒ импликация ложна\n3) Условие ложно (57 не простое), заключение истинно ⇒ импликация истинна\n4) Условие истинно, заключение ложно (147 делится на 3) ⇒ импликация ложна\nИстинные: 1 и 3.\nОтвет: 1 и 3.",
            answer: "1 и 3",
            answerVariants: ["1,3", "1 3", "1;3", "первое и третье", "first and third"],
            type: "text",
            topic: "Импликация"
        },
        {
            question: "В стране три города: А, Б и В. Жители А всегда говорят правду, Б всегда лгут, а жители В строго попеременно лгут и говорят правду. Пожарным позвонили: 'У нас в городе пожар'! 'Где горит'? 'В городе В'. Пожарные уверены, что пожар есть. Куда им ехать?",
            solution: "1) Если звонили из В: первое утверждение должно быть противоположно второму (попеременно), но оба не могут быть одновременно истинными или ложными.\n2) Если звонили из А: там правда, значит пожар в В, тогда второе утверждение верно.\n3) Если звонили из Б: они лгут, значит пожара нет в Б и не в В, значит пожар в А.\nЗвонили из Б, пожар в А.\nОтвет: в город А.",
            answer: "в город А",
            answerVariants: [
                "в А",
                "А",
                "город А",
                "в город A",
                "to city A"
            ],
            type: "text",
            topic: "Логические задачи"
        },
        {
            question: "Даны числа: 37, 69, 57, 73. Для какого из данных чисел ложно высказывание: 'Число больше шестидесяти или число простое'?",
            solution: "37: >60? нет, простое? да ⇒ ИСТИНА\n69: >60? да ⇒ ИСТИНА\n57: >60? нет, простое? нет ⇒ ЛОЖЬ\n73: >60? да ⇒ ИСТИНА\nЛожно для числа 57.\nОтвет: 57.",
            answer: "57",
            answerVariants: ["57.", "пятьдесят семь", "fifty seven", "057", "57 число"],
            type: "number",
            topic: "Дизъюнкция"
        },
        {
            question: "Сколько учеников сказали правду, если:\nДима: 'Задачу решили трое — Ваня, Миша и Саша'.\nВаня: 'Задачу не решили трое — Дима, Миша и Саша'.\nМиша: 'Дима и Ваня солгали'.\nСаша: 'Дима, Ваня и Миша сказали правду'.",
            solution: "Дима и Ваня противоречат друг другу ⇒ Саша солгал.\nЕсли Миша сказал правду ⇒ Дима и Ваня солгали ⇒ правду сказал только Миша.\nЕсли Миша солгал ⇒ правду сказал или Дима, или Ваня.\nВ любом случае правду сказал только один ученик.\nОтвет: 1.",
            answer: "1",
            answerVariants: ["1.", "один", "one", "01", "1 ученик"],
            type: "number",
            topic: "Логические задачи"
        }
    ]
};

// Информация о классах
const gradeInfo = {
    5: {
        title: "Алгебра 5 класс",
        description: "Логические задачи: высказывания, отрицание, конъюнкция, дизъюнкция",
        achievements: [
            "Освоены основы логики: высказывания, отрицание",
            "Изучены логические операции: конъюнкция и дизъюнкция",
            "Развиты навыки решения логических задач",
            "Сформировано логическое мышление"
        ]
    },
    6: {
        title: "Алгебра 6 класс",
        description: "Теория множеств: элементы, равенство, мощность, подмножества, пересечение",
        achievements: [
            "Освоена теория множеств",
            "Изучены операции над множествами",
            "Развиты навыки работы с подмножествами",
            "Сформировано системное мышление"
        ]
    },
    7: {
        title: "Алгебра 7 класс",
        description: "Задачи на движение: по прямой, по кругу, по реке, средняя скорость",
        achievements: [
            "Освоены задачи на движение",
            "Изучены различные типы движения",
            "Развиты навыки решения текстовых задач",
            "Сформировано пространственное мышление"
        ]
    },
    8: {
        title: "Алгебра 8 класс",
        description: "Теория множеств: сложные задачи, множества чисел, комбинаторика",
        achievements: [
            "Освоены сложные задачи по теории множеств",
            "Изучены комбинаторные задачи",
            "Развиты навыки работы с числовыми множествами",
            "Сформировано аналитическое мышление"
        ]
    },
    9: {
        title: "Алгебра 9 класс",
        description: "Логика: импликация, сложные логические задачи, доказательства",
        achievements: [
            "Освоена логика с импликацией",
            "Изучены сложные логические конструкции",
            "Развиты навыки доказательства утверждений",
            "Сформировано критическое мышление"
        ]
    }
};

// Основной класс приложения
class AlgebraProblemsApp {
    constructor() {
        console.log('AlgebraProblemsApp constructor called');

        // Очищаем старый прогресс из localStorage
        try {
            localStorage.removeItem('algebraProgress');
            console.log('Old progress cleared from localStorage');
        } catch (e) {
            console.error('Error clearing localStorage:', e);
        }

        this.solvedProblems = {};
        this.currentGrade = '5';
        this.certificateUserName = null; // Добавляем свойство для хранения имени
        this.initializeApp();
    }

    initializeApp() {
        console.log('Initializing algebra app...');
        this.renderAllProblems();
        this.bindEvents();
        this.updateStats();
        this.updateGradeInfo();
        console.log('Algebra app initialized successfully');
    }

    bindEvents() {
        console.log('Binding events...');

        // Фильтр по классам
        document.querySelectorAll('.grade-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                console.log('Grade button clicked:', e.target.dataset.grade);
                this.switchGrade(e.target.dataset.grade);
            });
        });

        // Кнопка сброса прогресса
        const resetBtn = document.getElementById('reset-progress');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.resetProgress();
            });
        }

        // Кнопка получения сертификата - назначаем один раз
        const getCertBtn = document.getElementById('get-certificate');
        if (getCertBtn) {
            // Удаляем старый обработчик, если он есть
            getCertBtn.removeEventListener('click', this.handleCertificateClick);
            
            // Создаем привязанный обработчик
            this.handleCertificateClick = (e) => {
                console.log('Get certificate button clicked');
                this.generateCertificate();
            };
            
            // Назначаем обработчик
            getCertBtn.addEventListener('click', this.handleCertificateClick);
        }

        console.log('Events bound successfully');
    }

    // Проверка завершения класса
    isGradeCompleted(grade) {
        const gradeProblems = problemsDatabase[grade];
        if (!gradeProblems) return false;
        
        let solvedCount = 0;
        for (let i = 0; i < gradeProblems.length; i++) {
            const problemId = `${grade}-${i}`;
            if (this.solvedProblems[problemId]) {
                solvedCount++;
            }
        }

        return solvedCount === gradeProblems.length;
    }

    switchGrade(grade) {
        console.log('Switching to grade:', grade);

        // Обновляем активную кнопку
        document.querySelectorAll('.grade-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const gradeBtn = document.querySelector(`[data-grade="${grade}"]`);
        if (gradeBtn) {
            gradeBtn.classList.add('active');
        }

        // Показываем соответствующую секцию
        document.querySelectorAll('.grade-section').forEach(section => {
            section.classList.remove('active');
        });
        const gradeSection = document.getElementById(`grade-${grade}`);
        if (gradeSection) {
            gradeSection.classList.add('active');
        }

        this.currentGrade = grade;
        this.updateGradeInfo();
        this.renderAllProblems();
        console.log('Grade switched to:', grade);
    }

    updateGradeInfo() {
        const info = gradeInfo[this.currentGrade];
        const gradeInfoElement = document.getElementById('grade-info');
        if (info && gradeInfoElement) {
            gradeInfoElement.innerHTML = `
                <h3>${info.title}</h3>
                <p>${info.description}</p>
            `;
            gradeInfoElement.className = 'grade-info algebra';
            console.log('Grade info updated for grade:', this.currentGrade);
        }
    }

    renderAllProblems() {
        // Отображаем все задачи для выбранного класса
        for (let grade = 5; grade <= 9; grade++) {
            const container = document.getElementById(`grade-${grade}-problems`);
            if (!container) continue;

            if (grade.toString() === this.currentGrade) {
                console.log(`Rendering ${problemsDatabase[grade].length} problems for grade: ${grade}`);
                container.innerHTML = '';

                problemsDatabase[grade].forEach((problem, index) => {
                    const problemId = `${grade}-${index}`;
                    const isSolved = this.solvedProblems[problemId];
                    const problemCard = document.createElement('div');
                    problemCard.className = 'problem-card algebra';
                    problemCard.id = `problem-card-${problemId}`;

                    problemCard.innerHTML = `
                    <div class="problem-header">
                        <div class="problem-topic algebra">${problem.topic}</div>
                        <div class="problem-question">
                            <strong>Задача ${index + 1}:</strong> ${problem.question}
                            ${isSolved ? ' <span class="solved-indicator">✅</span>' : ''}
                        </div>
                    </div>
                    
                    <div class="answer-section-container algebra">
                        <div class="answer-section">
                            <input type="${problem.type === 'number' ? 'number' : 'text'}" 
                                class="answer-input algebra"
                                id="answer-${problemId}" 
                                placeholder="Введите ваш ответ">
                            <button class="btn btn-check quick-check" 
                                    data-problem="${problemId}">
                                <i class="bi bi-check-circle"></i> Проверить ответ
                            </button>
                        </div>
                    </div>
                    
                    <div class="problem-actions" style="display: none;" id="problem-actions-${problemId}">
                        <button class="btn btn-hint algebra" data-problem="${problemId}">
                            <i class="bi bi-lightbulb"></i> Подсказка
                        </button>
                        <button class="btn btn-solution" data-problem="${problemId}">
                            <i class="bi bi-journal-text"></i> Решение
                        </button>
                    </div>
                    
                    <div class="feedback" id="feedback-${problemId}"></div>
                    
                    <div class="solution algebra" id="solution-${problemId}" style="display: none;">
                        <h4>Решение:</h4>
                        <div class="solution-steps">${problem.solution.replace(/\n/g, '<br>')}</div>
                    </div>
                    `;

                    container.appendChild(problemCard);
                });
            } else {
                container.innerHTML = '';
            }
        }

        // Добавляем обработчики для кнопок
        this.bindProblemButtons();
        this.updateStats();
        console.log('Problems rendered successfully');
    }

    bindProblemButtons() {
        console.log('Binding problem buttons...');

        // Обработчики для кнопок проверки
        document.querySelectorAll('.btn-check, .quick-check').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const problemId = e.target.dataset.problem ||
                    e.target.closest('.btn-check')?.dataset.problem;
                console.log('Check button clicked for problem:', problemId);
                this.checkAnswer(problemId);
            });
        });

        // Обработчики для кнопок решений
        document.querySelectorAll('.btn-solution').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const problemId = e.target.dataset.problem;
                console.log('Solution button clicked for problem:', problemId);
                this.toggleSolution(problemId);
            });
        });

        // Обработчики для кнопок подсказок
        document.querySelectorAll('.btn-hint').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const problemId = e.target.dataset.problem;
                console.log('Hint button clicked for problem:', problemId);
                this.showHint(problemId);
            });
        });

        // Обработчики для полей ввода (проверка при нажатии Enter)
        document.querySelectorAll('.answer-input').forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const problemId = e.target.id.replace('answer-', '');
                    console.log('Enter pressed for problem:', problemId);
                    this.checkAnswer(problemId);
                }
            });
        });

        console.log('Problem buttons bound successfully');
    }

    checkAnswer(problemId) {
        console.log('Checking answer for problem:', problemId);
        const [grade, index] = problemId.split('-');

        if (!problemsDatabase[grade] || !problemsDatabase[grade][index]) {
            console.error('Problem not found:', problemId);
            const feedback = document.getElementById(`feedback-${problemId}`);
            if (feedback) {
                feedback.textContent = '❌ Ошибка: задача не найдена';
                feedback.className = 'feedback incorrect';
            }
            return;
        }

        const problem = problemsDatabase[grade][index];
        let userAnswer = document.getElementById(`answer-${problemId}`).value.trim();
        const feedback = document.getElementById(`feedback-${problemId}`);
        const problemActions = document.getElementById(`problem-actions-${problemId}`);

        console.log('User answer:', userAnswer);

        // Нормализуем ответ пользователя
        const normalizedUserAnswer = this.normalizeString(userAnswer);

        // Получаем все возможные правильные ответы
        const correctAnswers = this.getAllCorrectAnswers(problem);
        console.log('Correct answers:', correctAnswers);

        // Проверяем ответ
        const isCorrect = this.checkIfAnswerIsCorrect(normalizedUserAnswer, correctAnswers);

        if (isCorrect) {
            feedback.innerHTML = '✅ <strong>Правильно!</strong> Отличная работа!';
            feedback.className = 'feedback correct';

            this.markAsSolved(problemId);

            // Скрываем кнопки подсказки и решения при правильном ответе
            if (problemActions) {
                problemActions.style.display = 'none';
            }

            // Автоматически показываем решение при правильном ответе
            setTimeout(() => {
                this.showSolutionDirectly(problemId);
            }, 500);
            
            // Проверяем, не пора ли показывать сертификат
            setTimeout(() => {
                this.checkAndShowCertificate();
            }, 1000);
        } else {
            // Формируем сообщение об ошибке
            let feedbackMessage = '❌ <strong>Неправильно.</strong> Попробуйте еще раз!';

            feedback.innerHTML = feedbackMessage;
            feedback.className = 'feedback incorrect';

            // ПОКАЗЫВАЕМ кнопки "Подсказка" и "Решение" после неправильного ответа
            if (problemActions) {
                problemActions.style.display = 'flex';
                problemActions.style.animation = 'fadeIn 0.5s ease';
            }
        }
    }

    // Метод для получения всех правильных ответов
    getAllCorrectAnswers(problem) {
        const answers = new Set();

        // Добавляем основной ответ
        if (problem.answer) {
            answers.add(this.normalizeString(problem.answer));
        }

        // Добавляем варианты ответов
        if (problem.answerVariants && Array.isArray(problem.answerVariants)) {
            problem.answerVariants.forEach(variant => {
                answers.add(this.normalizeString(variant));
            });
        }

        return Array.from(answers);
    }

    // Метод для нормализации строки
    normalizeString(str) {
        if (!str || typeof str !== 'string') {
            str = String(str || '');
        }

        return str
            .toLowerCase()
            .trim()
            .replace(/\s+/g, ' ')
            .replace(/,/g, '.')
            .replace(/[.,;:!?…]*$/g, '')
            .replace(/^(в|на)\s+/g, '')
            .replace(/\s+(раз|раза)$/g, '')
            .replace(/\s*(см|мм|м|дм|км|кг|г|л|мл|см²|м²|см³|м³|°|градус|градусов|градуса|процент|процентов|%|\^2|\^3)\s*$/g, '')
            .replace(/[\(\)\[\]\{\}]/g, '')
            .replace(/sqrt/g, '√')
            .replace(/pi/g, 'π')
            .replace(/корень/g, '√')
            .replace(/пи/g, 'π')
            .replace(/\s*([\+\-\*\/\^√π])\s*/g, '$1')
            .replace(/\s+/g, '')
            .trim();
    }

    // Метод для проверки правильности ответа
    checkIfAnswerIsCorrect(userAnswer, correctAnswers) {
        for (let correctAnswer of correctAnswers) {
            if (userAnswer === correctAnswer) {
                return true;
            }

            // Проверка числовых значений
            const userValue = this.evaluateExpression(userAnswer);
            const correctValue = this.evaluateExpression(correctAnswer);

            if (userValue !== null && correctValue !== null) {
                if (Math.abs(userValue - correctValue) < 0.0001) {
                    return true;
                }
            }

            // Проверка для математических выражений
            if (this.compareMathematicalExpressions(userAnswer, correctAnswer)) {
                return true;
            }
        }
        return false;
    }

    // Метод для сравнения математических выражений
    compareMathematicalExpressions(expr1, expr2) {
        try {
            const simplified1 = expr1.replace(/√(\d+)/g, 'Math.sqrt($1)')
                .replace(/π/g, 'Math.PI')
                .replace(/(\d+)\/(\d+)/g, '($1/$2)');

            const simplified2 = expr2.replace(/√(\d+)/g, 'Math.sqrt($1)')
                .replace(/π/g, 'Math.PI')
                .replace(/(\d+)\/(\d+)/g, '($1/$2)');

            const value1 = eval(simplified1);
            const value2 = eval(simplified2);

            if (typeof value1 === 'number' && typeof value2 === 'number') {
                return Math.abs(value1 - value2) < 0.0001;
            }
        } catch (e) {
            return expr1.replace(/\s/g, '') === expr2.replace(/\s/g, '');
        }
        return false;
    }

    evaluateExpression(expr) {
        try {
            expr = expr.replace(/√/g, 'Math.sqrt').replace(/π/g, 'Math.PI');
            expr = expr.replace(/(\d+)\/(\d+)/g, '($1/$2)');
            const result = eval(expr);
            return typeof result === 'number' ? result : null;
        } catch (e) {
            return null;
        }
    }

    showHint(problemId) {
        console.log('Showing hint for problem:', problemId);

        const [grade, index] = problemId.split('-');
        const problem = problemsDatabase[grade][index];

        const feedback = document.getElementById(`feedback-${problemId}`);
        if (!feedback) return;

        const hints = [
            "Внимательно прочитайте условие задачи несколько раз",
            "Выпишите все известные данные из условия",
            "Попробуйте разбить задачу на несколько простых шагов",
            "Вспомните определение основных понятий",
            "Проверьте свои вычисления на арифметические ошибки",
            "Попробуйте решить задачу другим способом",
            "Обратите внимание на единицы измерения",
            "Сделайте чертёж или схему, если это возможно"
        ];

        const randomHint = hints[Math.floor(Math.random() * hints.length)];

        const hintContent = `
            <div style="text-align: left; color: #333; padding: 10px; background: rgba(134, 210, 244, 0.1); border-radius: 10px; border-left: 4px solid #86D2F4; margin-top: 10px;">
                <h5 style="color: #86D2F4; margin-bottom: 5px; font-size: 16px;">Подсказка:</h5>
                <p style="font-size: 14px; margin: 0;">
                    ${randomHint}
                </p>
            </div>
        `;

        // Показываем подсказку в блоке обратной связи
        feedback.innerHTML = `<div class="hint-content">${hintContent}</div>`;
        feedback.className = 'feedback hint';
    }

    // Метод для прямого показа решения
    showSolutionDirectly(problemId) {
        const solution = document.getElementById(`solution-${problemId}`);
        if (solution) {
            solution.style.display = 'block';
            solution.classList.add('show');

            // Меняем текст кнопки
            const btn = document.querySelector(`[data-problem="${problemId}"].btn-solution`);
            if (btn) {
                btn.innerHTML = '<i class="bi bi-eye-slash"></i> Скрыть решение';
            }
        }
    }

    toggleSolution(problemId) {
        console.log('Toggling solution for problem:', problemId);
        const solution = document.getElementById(`solution-${problemId}`);
        if (solution) {
            if (solution.style.display === 'none' || !solution.style.display) {
                solution.style.display = 'block';
                solution.classList.add('show');
                // Меняем текст кнопки
                const btn = document.querySelector(`[data-problem="${problemId}"].btn-solution`);
                if (btn) {
                    btn.innerHTML = '<i class="bi bi-eye-slash"></i> Скрыть решение';
                }
            } else {
                solution.style.display = 'none';
                solution.classList.remove('show');
                // Меняем текст кнопки
                const btn = document.querySelector(`[data-problem="${problemId}"].btn-solution`);
                if (btn) {
                    btn.innerHTML = '<i class="bi bi-journal-text"></i> Решение';
                }
            }
        }
    }

    markAsSolved(problemId) {
        if (!this.solvedProblems[problemId]) {
            this.solvedProblems[problemId] = true;
            this.updateStats();

            // Обновляем отображение
            const card = document.getElementById(`problem-card-${problemId}`);
            if (card) {
                const questionElement = card.querySelector('.problem-question');
                if (questionElement && !questionElement.innerHTML.includes('✅')) {
                    const solvedSpan = document.createElement('span');
                    solvedSpan.className = 'solved-indicator';
                    solvedSpan.textContent = ' ✅';
                    questionElement.appendChild(solvedSpan);
                }
            }
            console.log('Problem marked as solved:', problemId);
        }
    }

    updateStats() {
        let totalProblems = 0;
        let solvedCount = 0;

        const grade = this.currentGrade;
        const gradeProblems = problemsDatabase[grade];

        if (gradeProblems) {
            totalProblems = gradeProblems.length;
            for (let i = 0; i < gradeProblems.length; i++) {
                if (this.solvedProblems[`${grade}-${i}`]) {
                    solvedCount++;
                }
            }
        }

        const progressPercent = totalProblems > 0 ? Math.round((solvedCount / totalProblems) * 100) : 0;

        const totalElement = document.getElementById('total-problems');
        const solvedElement = document.getElementById('solved-count');
        const progressElement = document.getElementById('progress-percent');
        const progressBar = document.getElementById('progress-bar');

        if (totalElement) totalElement.textContent = totalProblems;
        if (solvedElement) solvedElement.textContent = solvedCount;
        if (progressElement) progressElement.textContent = `${progressPercent}%`;
        if (progressBar) {
            progressBar.style.width = `${progressPercent}%`;
            progressBar.setAttribute('aria-valuenow', progressPercent);
        }

        // Анимация прогресса
        if (progressElement) {
            progressElement.style.transform = 'scale(1.2)';
            setTimeout(() => {
                progressElement.style.transform = 'scale(1)';
            }, 300);
        }

        // Проверяем, не пора ли показывать сертификат
        if (progressPercent === 100) {
            setTimeout(() => {
                this.showCertificateSection();
            }, 500);
        }

        console.log('Stats updated:', {totalProblems, solvedCount, progressPercent});
    }

    // Новый метод: проверка и отображение сертификата
    checkAndShowCertificate() {
        const grade = this.currentGrade;
        const isCompleted = this.isGradeCompleted(grade);
        
        if (isCompleted) {
            setTimeout(() => {
                this.showCertificateSection();
            }, 500);
        }
    }

    // Показ секции сертификата
    showCertificateSection() {
        const certificateSection = document.getElementById('certificate-section');
        if (!certificateSection) {
            console.error('Certificate section not found');
            return;
        }
        
        const grade = this.currentGrade;
        console.log('Showing certificate section for grade:', grade);
        
        // Показываем секцию
        certificateSection.style.display = 'block';
        
        // Используем requestAnimationFrame для анимации
        requestAnimationFrame(() => {
            certificateSection.classList.add('show');
            
            // Обновляем текст в зависимости от класса
            const className = {
                '5': 'пятого',
                '6': 'шестого',
                '7': 'седьмого',
                '8': 'восьмого',
                '9': 'девятого'
            }[grade] || grade + '-го';
            
            const certTitle = certificateSection.querySelector('h3');
            if (certTitle) {
                certTitle.textContent = `Поздравляем! Вы полностью освоили алгебру ${className} класса!`;
            }
            
            const certDescription = certificateSection.querySelector('p');
            if (certDescription) {
                certDescription.textContent = 'Вы решили все задачи и достигли 100% прогресса. Получите сертификат об успешном завершении курса.';
            }
            
            // Просто добавляем анимацию кнопке
            const getCertBtn = document.getElementById('get-certificate');
            if (getCertBtn) {
                setTimeout(() => {
                    getCertBtn.classList.add('attention');
                }, 1000);
            }
            
            // Плавная прокрутка к сертификату
            setTimeout(() => {
                this.scrollToCertificate();
            }, 1000);
        });
    }

    // Метод для плавной прокрутки к сертификату
    scrollToCertificate() {
        const certificateSection = document.getElementById('certificate-section');
        if (!certificateSection || certificateSection.style.display === 'none') return;

        certificateSection.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    resetProgress() {
        if (confirm('Вы уверены, что хотите сбросить весь прогресс? Все решенные задачи будут отмечены как нерешенные.')) {
            this.solvedProblems = {};
            this.certificateUserName = null; // Сбрасываем сохраненное имя
            this.renderAllProblems();
            this.updateStats();
            
            // Скрываем сертификат
            const certificateSection = document.getElementById('certificate-section');
            if (certificateSection) {
                certificateSection.style.display = 'none';
                certificateSection.classList.remove('show');
            }
            
            alert('Прогресс сброшен!');
        }
    }

    // Генерация сертификата
    generateCertificate() {
        // Проверяем, не запрашивали ли уже имя
        if (this.certificateUserName) {
            const useSavedName = confirm(`Использовать ранее введенное имя "${this.certificateUserName}" для сертификата?\nНажмите "Отмена", чтобы ввести новое имя.`);
            
            if (useSavedName) {
                // Используем сохраненное имя
                this.createCertificateWithName(this.certificateUserName);
                return;
            }
        }
        
        // Запрашиваем новое имя
        const userName = prompt('Введите ваше имя для сертификата:', this.certificateUserName || 'Ученик');
        if (userName === null) {
            console.log('User cancelled certificate generation');
            return;
        }
        
        const displayName = (userName && userName.trim()) ? userName.trim().toUpperCase() : 'УЧЕНИК';

        const trimmedName = userName.trim();
        if (!trimmedName) {
            alert('Имя не может быть пустым. Попробуйте еще раз.');
            return;
        }
        
        this.certificateUserName = trimmedName;
        this.createCertificateWithName(trimmedName);
    }

    // Создание сертификата с указанным именем
    createCertificateWithName(userName) {
        const grade = this.currentGrade;

        const classNumber = {
            '5': '5-го',
            '6': '6-го',
            '7': '7-го',
            '8': '8-го',
            '9': '9-го'
        }[grade] || grade;

        // Получаем количество задач для этого класса
        const totalProblems = problemsDatabase[grade]?.length || 0;

        // Получаем достижения в зависимости от класса
        const achievements = gradeInfo[grade]?.achievements || [
            "Показаны отличные знания и умения в области алгебры",
            "Достигнут максимальный результат в обучении",
            "Проявлены упорство и настойчивость в решении задач"
        ];

        const date = new Date();
        const formattedDate = date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        const displayName = userName.toUpperCase();

        // Создаем содержимое сертификата
        const certificateHTML = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="UTF-8">
                    <title>Сертификат - Алгебра ${grade} класс</title>
                    <link href="css/certificate.css" rel="stylesheet">    
                </head>
                <body>
                    <div class="certificate-container">
                        <div class="certificate">
                            <div class="certificate-border"></div>

                            <div class="decoration-left">✧</div>
                            <div class="decoration-right">✧</div>

                            <div class="certificate-header">
                                <h1 class="certificate-title">СЕРТИФИКАТ</h1>
                                <h2 class="certificate-subtitle">о достижениях в изучении алгебры</h2>
                            </div>

                            <div class="certificate-body">
                                <div class="certificate-text">
                                    Настоящим удостоверяется, что
                                </div>

                                <div class="certificate-name">${displayName}</div>

                                <div class="certificate-text">
                                    успешно завершил(а) полный курс алгебры
                                </div>

                                <div class="certificate-class">
                                    ${classNumber} КЛАССА
                                </div>

                                <div class="certificate-text">
                                    и показал(а) отличные результаты:
                                </div>

                                <div class="certificate-achievements">
                                    ${achievements.map(achievement =>
                                        `<div class="achievement-item">${achievement}</div>`
                                    ).join('')}
                                    <div class="achievement-item">Решены все ${totalProblems} задач по алгебре</div>
                                    <div class="achievement-item">Достигнут максимальный прогресс - 100%</div>
                                </div>
                            </div>

                            <div class="certificate-footer">
                                <div class="certificate-date">
                                    Дата выдачи:<br>
                                    <strong>${formattedDate}</strong>
                                </div>

                                <div class="certificate-stamp">
                                    <div class="stamp-circle">
                                        <div class="stamp-text">
                                            Школьная<br>
                                            печать<br>
                                            и подпись
                                        </div>
                                    </div>
                                </div>

                                <div class="certificate-number">
                                    Сертификат №: ALG${grade}-${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button class="print-button" onclick="window.print()">
                        Распечатать сертификат
                    </button>

                    <script>
                        // Автоматически фокусируем окно
                        window.focus();
                    </script>
                </body>
            </html>
        `;

        // Открываем сертификат в новом окне
        const certificateWindow = window.open('', '_blank');
        if (certificateWindow) {
            certificateWindow.document.write(certificateHTML);
            certificateWindow.document.close();
            certificateWindow.focus();
        } else {
            alert('Пожалуйста, разрешите всплывающие окна для генерации сертификата.');
        }
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, initializing algebra app...');
    window.algebraApp = new AlgebraProblemsApp();
    console.log('Algebra app initialized successfully. Available as window.algebraApp');
});