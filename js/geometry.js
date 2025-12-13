// База данных задач с ответами для проверки
const problemsDatabase = {
    // 5 класс
    5: [
        {
            question: "Можно ли построить восемь точек и четыре прямые так, чтобы на каждой прямой было по три данные точки (в ответ напишите да или нет)?",
            solution: "Да, например: можно расположить точки так, чтобы на каждой из четырёх прямых лежало по три точки.",
            answers: ["да", "д", "yes", "y", "да.", "д.", "ДА", "Д", "Да", "Yes"],
            type: "text",
            topic: "Прямые и отрезки",
            hintImage: "Геометрия подсказка 1 5.png"
        },
        {
            question: "Точки A, B, C и D лежат на одной прямой, B и D — крайние точки, точка A — между B и C. Длины отрезков: BC = 17 см, AD = 20 см, CD = 12 см. Найдите длину отрезка AB (в ответ напишите число).",
            solution: "Точки расположены на прямой в таком порядке: B, A, C, D.\n1) 20 – 12 = 8 (см) — длина отрезка AC;\n2) 17 – 8 = 9 (см) — длина отрезка AB.\nОтвет: 9 см.",
            answers: ["9", "9 см", "9см", "9.0", "9,0", "9.00", "9 cm"],
            type: "number",
            topic: "Прямые и отрезки",
            hintImage: "Геометрия подсказка 2 5.png"
        },
        {
            question: "Сколько треугольников можно найти на картинке (в ответ напишите число)?",
            solution: "Обозначим концы всех отрезков буквами: A, B, C, D, E, F, G, H.\nЧетыре треугольника из одной части: ABG, GBH, HBF, AGD.\nШесть треугольников из двух частей: ABD, DBE, EBC, ABH, GBF, AHE.\nДва треугольника из трёх частей: ABF, AFC.\nДва треугольника из четырёх частей: ABE, DBC.\nОдин треугольник из шести частей: ABC.\nИтого: 4 + 6 + 2 + 2 + 1 = 15 треугольников.\nОтвет: 15.",
            answers: ["15", "15 треугольников", "15 шт", "15 tri", "15.0", "15 треуголь"],
            type: "number",
            topic: "Треугольники",
            hintImage: "Геометрия подсказка 3 5.png",
            image: "Геометрия 3 5.png"
        },
        {
            question: "Периметр треугольника 23 см. Одна сторона треугольника в 2 раза меньше другой и на 3 см меньше третьей. Найдите большую сторону треугольника (в ответ напишите число).",
            solution: "Пусть x см первая сторона треугольника, тогда 2x см вторая сторона, (x + 3) см третья.\nx + 2x + (x + 3) = 23;\n4x + 3 = 23;\n4x = 20;\nx = 5;\n2x = 10; x + 3 = 8.\nБольшая сторона треугольника 10 см.\nОтвет: 10 см.",
            answers: ["10", "10 см", "10см", "10.0", "10,0", "10 cm", "10.00"],
            type: "number",
            topic: "Треугольники"
        },
        {
            question: "Сколько четырёхугольников можно найти на картинке (в ответ напишите число)?",
            solution: "Обозначим латинскими буквами вершины всех четырёхугольников.\nПять четырёхугольников из одной части: AENH, EBGN, MGCF, KMFD, HNMK.\nШесть четырёхугольников из двух частей: AEMK, EBGM, NGCF, HNFD, ABGH, KGCD.\nДва четырёхугольника из трёх частей: AEFD, EBCF.\nДва четырёхугольника из четырёх частей: ABGK, HGCD.\nОдин четырёхугольник из шести частей: ABCD.\nИтого: 5 + 6 + 2 + 2 + 1 = 16 четырёхугольников.\nОтвет: 16.",
            answers: ["16", "16 четырехугольников", "16 шт", "16 quad", "16.0", "16 4угол"],
            type: "number",
            topic: "Четырёхугольники",
            image: "Геометрия 5 5.png",
            hintImage: "Геометрия подсказка 5 5.png"
        }
    ],
    // 6 класс
    6: [
        {
            question: "Можно ли построить девять точек и три прямые так, чтобы на каждой прямой было по четыре данные точки?",
            solution: "Да, например: можно расположить точки так, чтобы на каждой из трёх прямых лежало по четыре точки.",
            answers: ["да", "д", "yes", "y", "да.", "д.", "ДА", "Д", "Да", "Yes"],
            type: "text",
            topic: "Прямые и отрезки",
            hintImage: "Геометрия подсказка 1 6.png",
        },
        {
            question: "Можно ли нарисовать на плоскости пять отрезков так, чтобы каждый пересекался ровно с тремя другими?",
            solution: "Допустим, возможно, тогда у каждого отрезка три точки пересечения, а всего пересечений 3 × 5 = 15. Каждое пересечение отрезков считается дважды, и их общее число должно быть чётным. 15 — нечётное число. Противоречиве, так нарисовать нельзя.\nОтвет: нет.",
            answers: ["нет", "н", "no", "n", "нет.", "н.", "НЕТ", "Н", "Нет", "No"],
            type: "text",
            topic: "Прямые и отрезки"
        },
        {
            question: "Сколько треугольников можно найти на картинке (в ответ напишите число)?",
            solution: "Обозначим концы всех отрезков буквами: A, B, C, D, E, F, G.\nШесть треугольников из одной части: ABE, BCE, CFE, FDE, DGE, AEG.\nТри треугольника из двух частей: ABC, AED, DEC.\nДва треугольника из трёх частей: ABD, BCD.\nОдин треугольник из четырёх частей: ACD.\nИтого: 6 + 3 + 2 + 1 = 12 треугольников.\nОтвет: 12.",
            answers: ["12", "12 треугольников", "12 шт", "12 tri", "12.0", "12 треуголь"],
            type: "number",
            topic: "Треугольники",
            hintImage: "Геометрия подсказка 3 6.png",
            image: "Геометрия 3 6.png"
        },
        {
            question: "Сколько прямоугольников можно найти на картинке (в ответ напишите число)?",
            solution: "Обозначим вершины всех прямоугольников латинскими буквами.\n8 прямоугольников из одной части: AEOI, IOFD, EGLK, KLPO, OPNM, MNHF, GBJP, PJCH.\n5 прямоугольников из двух частей: AEFD, EGPO, KLNM, OPHF, GBCH.\n6 прямоугольников из трёх частей: AGPI, EBJO, IPHD, OJCF, EGNM, KLHF.\n3 прямоугольника их четырёх частей: ABJI, IJCD, EGHF.\n2 прямоугольника из шести частей: AGHD, EBCF.\n1 прямоугольник из восьми частей: ABCD.\nИтого: 8 + 5 + 6 + 3 + 2 + 1 = 25 прямоугольников.\nОтвет: 25.",
            answers: ["25", "25 прямоугольников", "25 шт", "25 rect", "25.0", "25 прямоуг"],
            type: "number",
            topic: "Четырёхугольники",
            hintImage: "Геометрия подсказка 4 6.png",
            image: "Геометрия 4 6.png"
        },
        {
            question: "Ширина прямоугольника на 5 см меньше его длины. Если длину прямоугольника уменьшить на 4 см, а ширину увеличить на 3 см, то площадь прямоугольника уменьшится на 8 см². Найдите ширину данного прямоугольника (в ответ напишите число).",
            solution: "Пусть х см ширина данного прямоугольника, (x + 5) см длина прямоугольника.\nСоставим и решим уравнение:\nx(x + 5) - (x + 3)(x + 5 - 4) = 8;\nx² + 5x - x² - x - 3x - 3 = 8;\n5x - 4x - 3 = 8;\nx = 11.\nШирина данного прямоугольника 11 см.\nОтвет: 11 см.",
            answers: ["11", "11 см", "11см", "11.0", "11,0", "11 cm", "11.00"],
            type: "number",
            topic: "Четырёхугольники"
        }
    ],
    // 7 класс
    7: [
        {
            question: "Можно ли построить 9 точек и 9 прямые так, чтобы на каждой прямой было по 3 данные точки?",
            solution: "Да, например: можно расположить точки и прямые так, чтобы на каждой прямой лежало по три точки.",
            answers: ["да", "д", "yes", "y", "да.", "д.", "ДА", "Д", "Да", "Yes"],
            type: "text",
            topic: "Прямые и отрезки",
            hintImage: "Геометрия подсказка 1 7.png",
        },
        {
            question: "Один из углов треугольника равен 70°. Какие углы образуют при пересечении биссектрисы двух других углов этого треугольника?",
            solution: "Пусть ∠A = 70°, градусные меры двух других углов 2x и 2y.\n70° + 2x + 2y = 180°;\n2x + 2y = 110°;\nx + y = 55°.\n∠BDC = 180° - x - y = 180° - 55° = 125°;\n∠BDE = 180° - 125° = 55°.\nБиссектрисы образуют углы: 55°; 125°; 55°; 125°.\nОтвет: 55°; 125°; 55°; 125°.",
            answers: ["55, 125, 55, 125", "55° 125° 55° 125°", "55;125;55;125",
                "55 125 55 125", "55°, 125°, 55°, 125°", "55 125", "125 55"],
            type: "text",
            topic: "Треугольники",
            hintImage: "Геометрия подсказка 2 7.png",
        },
        {
            question: "Можно ли прямоугольник со сторонами 23 см и 35 см разрезать на прямоугольники со сторонами 5 см и 7 см?",
            solution: "Сторону длиной 23 см должны составлять несколько отрезков длиной 5 см и 7 см. Уравнение 5x + 7y = 23 не имеет решений в натуральных числах. Можно проверить перебором.\nОтвет: нет.",
            answers: ["нет", "н", "no", "n", "нет.", "н.", "НЕТ", "Н", "Нет", "No"],
            type: "text",
            topic: "Четырёхугольники"
        },
        {
            question: "На двух параллельных прямых отметили девять точек: четыре на одной и пять на другой. Сколько различных четырёхугольников с вершинами в этих точки (в ответ напишите число)?",
            solution: "Четырёхугольник образуется 4 точками, две из которых лежат на одной прямой, а две на другой.\nДля выбора двух точек первой прямой 6 вариантов.\nДля выбора двух точек второй прямой 10 вариантов.\nВсего: 6 × 10 = 60 четырёхугольников.\nОтвет: 60.",
            answers: ["60", "60 четырехугольников", "60 шт", "60 quad", "60.0", "60 4угол"],
            type: "number",
            topic: "Четырёхугольники"
        },
        {
            question: "Построено несколько шестиугольников и семиугольников. Всего у них 44 вершины. Сколько шестиугольников (в ответ напишите число)?",
            solution: "Пусть x шестиугольников, y семиугольников.\nУравнение 6x + 7y = 44 имеет единственное решение в натуральных числах: x = 5; y = 2.\n5 шестиугольников и 2 семиугольника.\nОтвет: 5.",
            answers: ["5", "5 шестиугольников", "5 шт", "5 hex", "5.0", "5 шестиуг"],
            type: "number",
            topic: "Многоугольники"
        }
    ],
    // 8 класс
    8: [
        {
            question: "Можно ли построить 10 точек и 5 прямых так, чтобы на каждой прямой было по 4 данные точки?",
            solution: "Да, можно.\nКаждая из пяти прямых должна пересекаться с четырьмя другими прямыми.\nОдна точка пересечения для двух прямых.\nОтвет: да.",
            answers: ["да", "д", "yes", "y", "да.", "д.", "ДА", "Д", "Да", "Yes"],
            type: "text",
            topic: "Прямые и отрезки",
            hintImage: "Геометрия подсказка 1 8.png"
        },
        {
            question: "В треугольнике ABC AB = 12 см, BC = 18 см, высота, проведённая к стороне AB, равна 9 см. Найдите высоту, проведённую к стороне BC (в ответ напишите число).",
            solution: "Пусть x (см) — высота, проведённая к стороне BC.\nПлощадь треугольника — половина произведения основания на высоту.\nS = AB × CD : 2 = BC × AE : 2;\n12 × 9 : 2 = 18 × x : 2;\n12 × 9 = 18 × x;\nx = 12 × 9 : 18;\nx = 6.\nОтвет: 6 см.",
            answers: ["6", "6 см", "6см", "6.0", "6,0", "6 cm", "6.00"],
            type: "number",
            topic: "Треугольники",
            hintImage: "Геометрия подсказка 2 8.png"
        },
        {
            question: "Каждую сторону прямоугольника уменьшили на 20%. На сколько процентов уменьшилась площадь прямоугольника (в ответ напишите число)?",
            solution: "Пусть a и b — стороны первого прямоугольника,\nтогда 0,8a и 0,8b — стороны второго прямоугольника\nПлощадь первого прямоугольника: ab.\nПлощадь второго прямоугольника: 0,8a × 0,8b = 0,64ab.\nab – 0,64ab = 0,36ab.\nПлощадь уменьшилась на 36%.\nОтвет: на 36%.",
            answers: ["36", "36%", "36 процентов", "36 проц", "36.0", "36%", "36 percent"],
            type: "number",
            topic: "Четырёхугольники",
        },
        {
            question: "Построено несколько семиугольников и восьмиугольников. Всего у них 46 вершин. Сколько семиугольников (в ответ напишите число)?",
            solution: "Пусть x семиугольников, y восьмиугольников.\nУравнение 7x + 8y = 46 имеет единственное решение в натуральных числах: x = 2; y = 4.\nОтвет: два семиугольника.",
            answers: ["2", "2 семиугольника", "2 шт", "2 hept", "2.0", "2 семиуг"],
            type: "number",
            topic: "Многоугольники"
        },
        {
            question: "Можно ли расположить 6 точек на плоскости так, чтобы любые три из них были вершинами равнобедренного треугольника?",
            solution: "Да. Надо разделить окружность на 5 равных частей пятью точками.\nПять точек на окружности и её центр и будут искомыми шестью точками.\nОтвет: да.",
            answers: ["да", "д", "yes", "y", "да.", "д.", "ДА", "Д", "Да", "Yes"],
            type: "text",
            topic: "Окружность и круг",
            hintImage: "Геометрия подсказка 5 8.png"
        }
    ],
    // 9 класс
    9: [
        {
            question: "Можно ли с помощью циркуля и линейки разделить угол 54° на три равные части?",
            solution: "54° : 3 = 18°; надо построить угол 18°.\nТри раза отложить угол 54°, а затем вычесть полученный угол из развёрнутого:\n54° × 3 = 162°;\n180° - 162° = 18°.\nМожно построить угол в 18°, затем разделить угол 54° на три равные части.\nОтвет: да.",
            answers: ["да", "д", "yes", "y", "да.", "д.", "ДА", "Д", "Да", "Yes"],
            type: "text",
            topic: "Прямые и отрезки"
        },
        {
            question: "В треугольнике ABC проведены медиана BM и высота BH. Известно, что AC = 24 см, CH = 6 см и ∠ACB = 35°. Найдите угол ∠AMB (в ответ напишите число).",
            solution: "BM — медиана, AM = MC = AC : 2 = 24 : 2 = 12 (см).\nMH = MC – CH = 12 – 6 = 6 (см); CH = MH = 6 (см).\nBH в треугольнике BCM — медиана и высота, тогда треугольник BCM равнобедренный с основанием CM.\nВ равнобедренном треугольнике BH — высота, медиана, биссектриса,\n∠BCM = ∠BMC = 35°,\n∠AMB и ∠BMC — смежные, в сумме составляют 180°.\n∠AMB = 180° – 35° = 145°.\nОтвет: 145°.",
            answers: ["145", "145°", "145 градусов", "145 град", "145.0", "145 deg", "145°"],
            type: "number",
            topic: "Треугольники",
            hintImage: "Геометрия подсказка 2 9.png"
        },
        {
            question: "Биссектриса угла A параллелограмма ABCD пересекает сторону BC в точке K. Найдите периметр параллелограмма, если BK = 6 см, CK = 10 см (в ответ напишите число).",
            solution: "∠BKA = ∠KAD (накрест лежащие углы при параллельных прямых),\n∠BAK = ∠BKA (AK — биссектриса);\nтреугольник ABK — равнобедренный, AB = BK = 6 (см).\nПротивоположные стороны параллелограмма равны.\nПериметр параллелограмма:\nP = 2(BC + AB) = 2(6 + 6 + 10) = 44 (см).\nОтвет: 44 см.",
            answers: ["44", "44 см", "44см", "44.0", "44,0", "44 cm", "44.00"],
            type: "number",
            topic: "Четырёхугольники",
            hintImage: "Геометрия подсказка 3 9.png"
        },
        {
            question: "Сколько диагоналей у выпуклого 30-угольника (в ответ напишите число)?",
            solution: "У выпуклого n-угольника n вершин, и из каждой вершины выходит (n – 3) диагонали.\nЧтобы узнать число всех диагоналей, надо произведение n(n – 3) разделить на два.\nЧисло диагоналей у выпуклого 30-угольника:\n30 × (30 - 3) : 2 = 405.\nОтвет: 405 диагоналей.",
            answers: ["405", "405 диагоналей", "405 diag", "405.0", "405 д", "405 diag"],
            type: "number",
            topic: "Многоугольники"
        },
        {
            question: "Найдите радиус окружности, вписанной в равносторонний треугольник со стороной 16 см (дробь пишется без пробелов y/x).",
            solution: "Центр вписанной окружности — точка пересечения биссектрис треугольника.\nBD — биссектриса, медиана и высота данного треугольника:\nBD = √(16² - 8²) = √(256 - 64) = √192 = 8√3 (см).\nТочка пересечения медиан делит каждую медиану в отношении 2 : 1.\nРадиус вписанной окружности: (8√3)/3 (см).\nОтвет: (8√3)/3 см.",
            answers: ["8√3/3", "8√3/3 см", "(8√3)/3", "8sqrt3/3", "8√3/3см", "8*√3/3", "8 корень из 3/3"],
            type: "text",
            topic: "Окружность и круг",
            hintImage: "Геометрия подсказка 5 9.png"
        }
    ]
};

// Информация о классах
const gradeInfo = {
    5: {
        title: "Геометрия 5 класс",
        description: "Основные темы: прямые и отрезки, треугольники, четырёхугольники, окружность и круг, куб"
    },
    6: {
        title: "Геометрия 6 класс",
        description: "Основные темы: прямые и отрезки, треугольники, четырёхугольники, многоугольники, окружность и круг, куб"
    },
    7: {
        title: "Геометрия 7 класс",
        description: "Основные темы: точки, прямые, отрезки, лучи, углы, треугольники, четырёхугольники, многоугольники, окружность и круг"
    },
    8: {
        title: "Геометрия 8 класс",
        description: "Основные темы: точки, прямые, отрезки, лучи, углы, треугольники, четырёхугольники, многоугольники, окружность и круг"
    },
    9: {
        title: "Геометрия 9 класс",
        description: "Основные темы: точки, прямые, отрезки, лучи, углы, треугольники, четырёхугольники, многоугольники, окружность и круг"
    }
};

// Управление приложением
class GeometryProblemsApp {
    constructor() {
        console.log('GeometryProblemsApp constructor called');

        // Очищаем старый прогресс из localStorage
        try {
            localStorage.removeItem('geometryProgress');
            console.log('Old progress cleared from localStorage');
        } catch (e) {
            console.error('Error clearing localStorage:', e);
        }

        this.solvedProblems = this.loadProgress();
        this.currentGrade = '5';
        this.initializeApp();
    }

    initializeApp() {
        console.log('Initializing app...');
        this.renderAllProblems();
        this.bindEvents();
        this.updateStats();
        this.updateGradeInfo();
        console.log('App initialized successfully');
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

        // Кнопка получения сертификата
        const getCertBtn = document.getElementById('get-certificate');
        if (getCertBtn) {
            getCertBtn.addEventListener('click', () => {
                this.generateCertificate();
            });
        }

        console.log('Events bound successfully');
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
            gradeInfoElement.className = 'grade-info geometry';
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
                    problemCard.className = 'problem-card geometry';
                    problemCard.id = `problem-card-${problemId}`;

                    // Добавляем изображение задачи, если оно есть
                    let imageHTML = '';
                    if (problem.image) {
                        imageHTML = `
                            <div class="problem-image">
                                <img src="img/${problem.image}" alt="Иллюстрация к задаче" 
                                     class="problem-img">
                                <div class="image-caption">
                                    Нажмите на изображение для увеличения
                                </div>
                            </div>`;
                    }

                    problemCard.innerHTML = `
                    <div class="problem-header">
                        <div class="problem-topic geometry">${problem.topic}</div>
                        <div class="problem-question">
                            <strong>Задача ${index + 1}:</strong> ${problem.question}
                            ${isSolved ? ' <span class="solved-indicator">✅</span>' : ''}
                        </div>
                    </div>
                    ${imageHTML}
                    <div class="answer-section-container geometry">
                        <div class="answer-section">
                            <input type="${problem.type === 'number' ? 'number' : 'text'}" 
                                class="answer-input geometry" 
                                id="answer-${problemId}" 
                                placeholder="Введите ваш ответ">
                            <button class="btn btn-check quick-check" 
                                    data-problem="${problemId}">
                                <i class="bi bi-check-circle"></i> Проверить ответ
                            </button>
                        </div>
                    </div>
                    
                    <!-- Скрываем кнопки подсказки и решения по умолчанию -->
                    <div class="problem-actions" style="display: none;" id="problem-actions-${problemId}">
                        <button class="btn btn-hint geometry" data-problem="${problemId}">
                            <i class="bi bi-lightbulb"></i> Подсказка
                        </button>
                        <button class="btn btn-solution" data-problem="${problemId}">
                            <i class="bi bi-journal-text"></i> Решение
                        </button>
                    </div>
                    
                    <div class="feedback" id="feedback-${problemId}"></div>
                    
                    <div class="solution geometry" id="solution-${problemId}" style="display: none;">
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

        // Добавляем обработчики для изображений
        this.bindImageEvents();
        console.log('Problem buttons bound successfully');
    }

    bindImageEvents() {
        // Обработчики для увеличения изображений
        document.querySelectorAll('.problem-img').forEach(img => {
            img.addEventListener('click', function () {
                if (this.classList.contains('enlarged')) {
                    this.classList.remove('enlarged');
                    const overlay = document.querySelector('.image-overlay');
                    if (overlay) {
                        document.body.removeChild(overlay);
                    }
                } else {
                    this.classList.add('enlarged');
                    const overlay = document.createElement('div');
                    overlay.className = 'image-overlay';
                    overlay.addEventListener('click', () => {
                        this.classList.remove('enlarged');
                        document.body.removeChild(overlay);
                    });
                    document.body.appendChild(overlay);
                }
            });
        });
    }

    // УПРОЩЕННЫЙ МЕТОД ДЛЯ ПОКАЗА ПОДСКАЗОК БЕЗ МОДАЛЬНЫХ ОКОН
    showHint(problemId) {
        console.log('Showing hint for problem:', problemId);

        const [grade, index] = problemId.split('-');
        const problem = problemsDatabase[grade][index];

        const feedback = document.getElementById(`feedback-${problemId}`);
        if (!feedback) return;

        // Получаем оба типа изображений
        const hintImage = problem.hintImage;
        const problemImage = problem.image;

        let hintContent = '';

        // Если есть изображение подсказки или задачи
        if (hintImage || problemImage) {
            hintContent = `<div style="text-align: left; margin: 10px 0;">`;

            if (hintImage) {
                hintContent += `
                    <div style="margin-bottom: 15px;">
                        <h5 style="color: #86D2F4; margin-bottom: 10px; font-size: 16px;">Подсказка к решению:</h5>
                        <img src="img/${hintImage}" alt="Подсказка" 
                             class="hint-image" 
                             style="max-width: 100%; border-radius: 10px; border: 2px solid #86D2F4; cursor: pointer;">
                    </div>`;
            }

            if (problemImage) {
                hintContent += `
                    <div style="margin-top: ${hintImage ? '15px' : '0'};">
                        <h5 style="color: #8780FF; margin-bottom: 10px; font-size: 16px;">Иллюстрация к задаче:</h5>
                        <img src="img/${problemImage}" alt="Иллюстрация задачи" 
                             class="hint-image" 
                             style="max-width: 100%; border-radius: 10px; border: 2px solid #8780FF; cursor: pointer;">
                    </div>`;
            }

            hintContent += `
                <div style="color: #666; margin-top: 10px; font-size: 12px; font-style: italic;">
                    Нажмите на изображение для увеличения
                </div>
            </div>`;
        } else {
            // Если нет изображений, показываем текстовую подсказку
            const hints = [
                "Внимательно прочитайте условие задачи несколько раз",
                "Выпишите все известные данные из условия",
                "Попробуйте разбить задачу на несколько простых шагов",
                "Сделайте чертёж к задаче, если его нет",
                "Подумайте, какие геометрические свойства можно применить",
                "Проверьте свои вычисления на арифметические ошибки",
                "Попробуйте решить задачу другим способом",
                "Обратите внимание на единицы измерения"
            ];
            const randomHint = hints[Math.floor(Math.random() * hints.length)];
            hintContent = `
                <div style="text-align: left; color: #333; padding: 10px; background: rgba(134, 210, 244, 0.1); border-radius: 10px; border-left: 4px solid #86D2F4; margin-top: 10px;">
                    <h5 style="color: #86D2F4; margin-bottom: 5px; font-size: 16px;">Подсказка:</h5>
                    <p style="font-size: 14px; margin: 0;">
                        ${randomHint}
                    </p>
                </div>
            `;
        }

        // Показываем подсказку в блоке обратной связи
        feedback.innerHTML = `<div class="hint-content">${hintContent}</div>`;
        feedback.className = 'feedback hint';

        // Добавляем обработчик для увеличения изображений в подсказке
        setTimeout(() => {
            const hintImages = feedback.querySelectorAll('.hint-image');
            hintImages.forEach(img => {
                img.addEventListener('click', function () {
                    if (this.classList.contains('enlarged')) {
                        this.classList.remove('enlarged');
                        this.style.maxWidth = '100%';
                        this.style.position = 'relative';
                        this.style.zIndex = '1';
                        this.style.top = '';
                        this.style.left = '';
                        this.style.transform = '';
                        const overlay = document.querySelector('.hint-image-overlay');
                        if (overlay) {
                            document.body.removeChild(overlay);
                        }
                    } else {
                        this.classList.add('enlarged');
                        this.style.maxWidth = '90vw';
                        this.style.maxHeight = '80vh';
                        this.style.position = 'fixed';
                        this.style.zIndex = '1000';
                        this.style.top = '50%';
                        this.style.left = '50%';
                        this.style.transform = 'translate(-50%, -50%)';

                        const overlay = document.createElement('div');
                        overlay.className = 'hint-image-overlay';
                        overlay.style.cssText = `
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0,0,0,0.8);
                            z-index: 999;
                        `;
                        overlay.addEventListener('click', () => {
                            this.classList.remove('enlarged');
                            this.style.maxWidth = '100%';
                            this.style.position = 'relative';
                            this.style.zIndex = '1';
                            this.style.top = '';
                            this.style.left = '';
                            this.style.transform = '';
                            document.body.removeChild(overlay);
                        });
                        document.body.appendChild(overlay);
                    }
                });
            });
        }, 100);
    }

    // МЕТОД: Проверка ответа с поддержкой нескольких вариантов
    checkAnswer(problemId) {
        console.log('Checking answer for problem:', problemId);
        const [grade, index] = problemId.split('-');

        

        const problem = problemsDatabase[grade][index];
        const userAnswer = document.getElementById(`answer-${problemId}`).value.trim();
        const feedback = document.getElementById(`feedback-${problemId}`);
        const problemActions = document.getElementById(`problem-actions-${problemId}`);

        console.log('User answer:', userAnswer);
        console.log('Correct answers:', problem.answers || [problem.answer]);

        // Получаем все правильные ответы
        let correctAnswers = [];
        if (problem.answers && Array.isArray(problem.answers)) {
            // Если есть несколько вариантов ответов
            correctAnswers = problem.answers;
        } else if (problem.answer) {
            // Если один ответ, создаем массив из него
            correctAnswers = [problem.answer];
        }

        console.log('All acceptable answers:', correctAnswers);

        // Проверяем ответ с помощью нового метода
        const isCorrect = this.normalizeAndCheckAnswer(userAnswer, correctAnswers);

        if (isCorrect) {
            feedback.textContent = 'Правильно! Отличная работа!';
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

        } else {
            feedback.textContent = 'Неправильно. Попробуйте еще раз!';
            feedback.className = 'feedback incorrect';

            // ПОКАЗЫВАЕМ кнопки "Подсказка" и "Решение" после неправильного ответа
            if (problemActions) {
                problemActions.style.display = 'flex';
                problemActions.style.animation = 'fadeIn 0.5s ease';
            }

            // Добавляем дополнительные советы
            setTimeout(() => {
                this.addHintSuggestions(problemId);
            }, 1000);
        }
    }

    // МЕТОД ДЛЯ НОРМАЛИЗАЦИИ И ПРОВЕРКИ ОТВЕТОВ
    normalizeAndCheckAnswer(userAnswer, correctAnswers) {
        if (!correctAnswers || !Array.isArray(correctAnswers)) {
            // Если только один правильный ответ
            correctAnswers = [correctAnswers];
        }

        // Нормализуем ответ пользователя
        const normalizedUserAnswer = this.normalizeString(userAnswer);
        console.log('Normalized user answer:', normalizedUserAnswer);

        // Проверяем каждый вариант правильного ответа
        for (let correctAnswer of correctAnswers) {
            const normalizedCorrectAnswer = this.normalizeString(correctAnswer);
            console.log('Normalized correct answer:', normalizedCorrectAnswer);

            // Прямое сравнение нормализованных строк
            if (normalizedUserAnswer === normalizedCorrectAnswer) {
                console.log('Exact match found');
                return true;
            }

            // Проверка числовых значений
            const userValue = this.evaluateExpression(normalizedUserAnswer);
            const correctValue = this.evaluateExpression(normalizedCorrectAnswer);

            if (userValue !== null && correctValue !== null) {
                if (Math.abs(userValue - correctValue) < 0.0001) {
                    console.log('Numeric match found:', userValue, correctValue);
                    return true;
                }
            }

            // Проверка для ответов с математическими выражениями
            if (this.compareMathematicalExpressions(normalizedUserAnswer, normalizedCorrectAnswer)) {
                console.log('Mathematical expression match found');
                return true;
            }
        }

        console.log('No match found');
        return false;
    }

    // НОВЫЙ МЕТОД: Нормализация строки (удаление лишних символов)
    normalizeString(str) {
        if (!str || typeof str !== 'string') {
            str = String(str || '');
        }

        return str
            // Приводим к нижнему регистру
            .toLowerCase()
            // Удаляем пробелы в начале и конце
            .trim()
            // Заменяем несколько пробелов на один
            .replace(/\s+/g, ' ')
            // Заменяем запятые на точки для десятичных дробей
            .replace(/,/g, '.')
            // Удаляем лишние знаки пунктуации в конце
            .replace(/[.,;:!?…]*$/g, '')
            // Удаляем "в", "на" в начале
            .replace(/^(в|на)\s+/g, '')
            // Удаляем "раз", "раза" в конце
            .replace(/\s+(раз|раза)$/g, '')
            // Удаляем единицы измерения
            .replace(/\s*(см|мм|м|дм|км|кг|г|л|мл|см²|м²|см³|м³|°|градус|градусов|градуса|процент|процентов|%|\^2|\^3)\s*$/g, '')
            // Удаляем скобки
            .replace(/[\(\)\[\]\{\}]/g, '')
            // Нормализуем математические выражения
            .replace(/sqrt/g, '√')
            .replace(/pi/g, 'π')
            .replace(/корень/g, '√')
            .replace(/пи/g, 'π')
            // Удаляем пробелы вокруг математических операторов
            .replace(/\s*([\+\-\*\/\^√π])\s*/g, '$1')
            // Убираем лишние пробелы
            .replace(/\s+/g, '')
            .trim();
    }

    // МЕТОД: Сравнение математических выражений
    compareMathematicalExpressions(expr1, expr2) {
        try {
            // Упрощенные математические выражения
            const simplified1 = expr1.replace(/√(\d+)/g, 'Math.sqrt($1)')
                .replace(/π/g, 'Math.PI')
                .replace(/(\d+)\/(\d+)/g, '($1/$2)');

            const simplified2 = expr2.replace(/√(\d+)/g, 'Math.sqrt($1)')
                .replace(/π/g, 'Math.PI')
                .replace(/(\d+)\/(\d+)/g, '($1/$2)');

            // Пробуем вычислить
            const value1 = eval(simplified1);
            const value2 = eval(simplified2);

            if (typeof value1 === 'number' && typeof value2 === 'number') {
                return Math.abs(value1 - value2) < 0.0001;
            }
        } catch (e) {
            // Если вычисление не удалось, сравниваем как строки
            return expr1.replace(/\s/g, '') === expr2.replace(/\s/g, '');
        }
        return false;
    }

    // МЕТОД: Вычисление выражения
    evaluateExpression(expr) {
        try {
            // Упрощенная оценка выражений
            expr = expr.replace(/√/g, 'Math.sqrt').replace(/π/g, 'Math.PI');

            // Заменяем дроби
            expr = expr.replace(/(\d+)\/(\d+)/g, '($1/$2)');

            // Безопасная оценка
            const result = eval(expr);
            return typeof result === 'number' ? result : null;
        } catch (e) {
            return null;
        }
    }

    // Новый метод для прямого показа решения
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

    // Метод для добавления дополнительных советов
    addHintSuggestions(problemId) {
        const problemCard = document.getElementById(`problem-card-${problemId}`);
        if (!problemCard) return;

        const feedback = problemCard.querySelector(`#feedback-${problemId}`);
        if (!feedback) return;

        // Добавляем дополнительные советы через 1 секунду
        setTimeout(() => {
            if (feedback.textContent.includes('Неправильно')) {
                const tips = [
                    "Проверьте единицы измерения",
                    "Перечитайте условие задачи",
                    "Попробуйте сделать чертеж",
                    "Разбейте задачу на части",
                    "Проверьте арифметические вычисления",
                    "Вернитесь к определению геометрических понятий",
                    "Попробуйте другой подход к решению",
                    "Используйте подсказку или решение для помощи"
                ];
                const randomTip = tips[Math.floor(Math.random() * tips.length)];
                feedback.innerHTML += `<br><small style="color: #666; font-style: italic;">💡 Совет: ${randomTip}</small>`;
            }
        }, 1000);
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

        // Считаем только для текущего класса
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
        const certificateSection = document.getElementById('certificate-section');

        if (totalElement) totalElement.textContent = totalProblems;
        if (solvedElement) solvedElement.textContent = solvedCount;
        if (progressElement) progressElement.textContent = `${progressPercent}%`;
        if (progressBar) {
            progressBar.style.width = `${progressPercent}%`;
            progressBar.setAttribute('aria-valuenow', progressPercent);
        }

        // Анимируем изменение прогресса
        if (progressElement) {
            progressElement.style.transform = 'scale(1.2)';
            setTimeout(() => {
                progressElement.style.transform = 'scale(1)';
            }, 300);
        }

        // Показываем секцию сертификата при 100% с анимацией
        if (progressPercent === 100 && certificateSection) {
            setTimeout(() => {
                this.showCertificateSection(certificateSection, grade);
            }, 500);
        } else if (certificateSection) {
            certificateSection.style.display = 'none';
            certificateSection.classList.remove('show');
        }

        console.log('Stats updated:', { totalProblems, solvedCount, progressPercent });
    }

    // Новый метод для показа секции сертификата
    showCertificateSection(certificateSection, grade) {
        certificateSection.classList.add('scroll-target');
        certificateSection.style.display = 'block';

        // Используем requestAnimationFrame для анимации
        requestAnimationFrame(() => {
            certificateSection.classList.add('show');

            // Изменяем текст в зависимости от класса
            const className = {
                '5': 'пятого',
                '6': 'шестого',
                '7': 'седьмого',
                '8': 'восьмого',
                '9': 'девятого'
            }[grade] || grade + '-го';

            const certTitle = certificateSection.querySelector('h3');
            if (certTitle) {
                certTitle.innerHTML = `
                    Поздравляем! Вы полностью освоили геометрию ${className} класса!
                `;
            }

            // Обновляем кнопку получения сертификата
            if (getCertBtn) {
                getCertBtn.onclick = () => this.generateCertificate();

                // Добавляем анимацию привлечения внимания
                setTimeout(() => {
                    getCertBtn.classList.add('attention');
                }, 1000);
            }

            // Показываем уведомление о доступности сертификата
            this.showCertificateNotification(grade);

            // Плавная прокрутка к сертификату через 1 секунду
            setTimeout(() => {
                this.scrollToCertificate();
            }, 1500);
        });
    }

    // Метод для плавной прокрутки к сертификату
    scrollToCertificate() {
        const certificateSection = document.getElementById('certificate-section');
        if (!certificateSection) return;

        const getCertBtn = document.getElementById('get-certificate');
        if (getCertBtn) {
            getCertBtn.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        } else {
            certificateSection.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }

        // Добавляем индикатор прокрутки
        this.showScrollIndicator();
    }

    // Метод для показа индикатора прокрутки
    showScrollIndicator() {
        // Удаляем старый индикатор, если есть
        const oldIndicator = document.querySelector('.scroll-indicator');
        if (oldIndicator) {
            oldIndicator.remove();
        }

        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        indicator.innerHTML = `
            <i class="bi bi-chevron-double-down"></i>
            <div style="font-size: 14px; margin-top: 5px;">Сертификат доступен!</div>
        `;

        const certificateSection = document.getElementById('certificate-section');
        if (certificateSection) {
            certificateSection.appendChild(indicator);

            // Показываем индикатор с задержкой
            setTimeout(() => {
                indicator.classList.add('show');
            }, 500);

            // Убираем индикатор через 5 секунд
            setTimeout(() => {
                indicator.classList.remove('show');
                setTimeout(() => {
                    if (indicator.parentNode) {
                        indicator.remove();
                    }
                }, 300);
            }, 5000);
        }
    }

    // Метод для показа уведомления о сертификате
    showCertificateNotification(grade) {
        const className = {
            '5': 'пятом',
            '6': 'шестом',
            '7': 'седьмом',
            '8': 'восьмом',
            '9': 'девятом'
        }[grade] || grade + '-м';

        const notification = document.createElement('div');
        notification.className = 'certificate-notification';
        notification.innerHTML = `
            <div class="icon">🏆</div>
            <div>
                <strong>Поздравляем!</strong><br>
                <small>Вы завершили курс геометрии ${className} класса! Нажмите, чтобы получить сертификат.</small>
            </div>
        `;

        notification.addEventListener('click', () => {
            this.scrollToCertificate();
            notification.remove();
        });

        document.body.appendChild(notification);

        // Автоматическое удаление через 5 секунд
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // МЕТОД: Генерация сертификата (БЕЗ БЛОКИРУЮЩЕГО ОКНА)
    generateCertificate() {
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
        const achievements = this.getAchievementsForGrade(grade);

        const date = new Date();
        const formattedDate = date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        // Запрашиваем имя пользователя с опцией отмены
        const userName = prompt('Введите ваше имя для сертификата:', 'Ученик');
        if (userName === null) {
            // Пользователь нажал отмену - выходим из функции
            console.log('User cancelled certificate generation');
            return;
        }

        const displayName = (userName && userName.trim()) ? userName.trim().toUpperCase() : 'УЧЕНИК';

        // Создаем содержимое сертификата
        const certificateHTML = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="UTF-8">
                    <title>Сертификат - Геометрия ${grade} класс</title>
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
                                <h2 class="certificate-subtitle">о достижениях в изучении геометрии</h2>
                            </div>

                            <div class="certificate-body">
                                <div class="certificate-text">
                                    Настоящим удостоверяется, что
                                </div>

                                <div class="certificate-name">${displayName}</div>

                                <div class="certificate-text">
                                    успешно завершил(а) полный курс геометрии
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
                                    <div class="achievement-item">Решены все ${totalProblems} задач по геометрии</div>
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

            // Фокусируем окно с сертификатом
            certificateWindow.focus();

        } else {
            alert('Пожалуйста, разрешите всплывающие окна для генерации сертификата.');
        }
    }

    // Метод: Получение достижений для класса
    getAchievementsForGrade(grade) {
        const achievements = {
            5: [
                "Освоены основы геометрии: точки, прямые, отрезки",
                "Изучены свойства треугольников и четырёхугольников",
                "Познакомились с окружностью и кругом",
                "Развито пространственное воображение"
            ],
            6: [
                "Углублены знания о геометрических фигурах",
                "Изучены свойства многоугольников",
                "Освоены задачи на построение",
                "Развито логическое геометрическое мышление"
            ],
            7: [
                "Освоены более сложные геометрические концепции",
                "Изучены углы и их свойства",
                "Развиты навыки доказательства теорем",
                "Сформировано аналитическое мышление"
            ],
            8: [
                "Углублены знания о треугольниках и четырёхугольниках",
                "Изучены подобие и пропорциональность",
                "Освоены задачи на вычисление площадей",
                "Развиты навыки решения сложных геометрических задач"
            ],
            9: [
                "Освоена геометрия окружностей",
                "Изучены правильные многоугольники",
                "Развиты навыки решения олимпиадных задач",
                "Сформировано комплексное геометрическое мышление"
            ]
        };

        return achievements[grade] || [
            "Показаны отличные знания и умения в области геометрии",
            "Достигнут максимальный результат в обучении",
            "Проявлены упорство и настойчивость в решении задач"
        ];
    }

    loadProgress() {
        // Всегда возвращаем пустой объект, чтобы прогресс не сохранялся
        console.log('Progress loading disabled - returning empty object');
        return {};
    }

    resetProgress() {
        if (confirm('Вы уверены, что хотите сбросить весь прогресс? Все решенные задачи будут отмечены как нерешенные.')) {
            this.solvedProblems = {};
            this.renderAllProblems();
            this.updateStats();
            alert('Прогресс сброшен!');
        }
    }
}
// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, initializing geometry app...');
    window.geometryApp = new GeometryProblemsApp();
    console.log('Geometry app initialized successfully. Available as window.geometryApp');
});
