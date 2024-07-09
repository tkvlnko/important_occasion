const questions = [
    {
        question: "Сколько лет тебе исполняется сегодня?",
        answers: [
            { text: '38', correct: false },
            { text: '39', correct: false },
            { text: '40', correct: true },
            { text: '41', correct: false }
        ]
    },
    {
        question: "Выбери правильный вариант",
        answers: [
            { text: 'Нолик', correct: false },
            { text: 'Завиток', correct: false },
            { text: 'Кустик', correct: true },
            { text: 'Боб', correct: false },
            { text: 'Май Тай', correct: false }
        ]
    },
    {
        question: "Какую книгу ты читал своей жене, когда она была беременная?",
        answers: [
            { text: 'Анна Каренина', correct: false },
            { text: 'Зеркала', correct: true },
            { text: 'Джейн Эйр', correct: false },
            { text: 'Властелин Колец', correct: false }
        ]
    },
    {
        question: "Шуточки",
        answers: [
            { text: 'за 5', correct: false },
            { text: 'за 100', correct: false },
            { text: 'за 200', correct: false },
            { text: 'за 300', correct: true }
        ]
    },
    {
        question: "Любимые цветы жены",
        answers: [
            { text: 'Розы', correct: false },
            { text: 'Пионы', correct: false },
            { text: 'Эустома', correct: false },
            { text: 'Каллы', correct: true }
        ]
    },
    {
        question: "Сколько у тебя племянников?",
        answers: [
            { text: '3', correct: false },
            { text: '4', correct: true },
            { text: '5', correct: false },
            { text: '6', correct: false }
        ]
    },
    {
        question: "В каком году мы первый раз поехали в Тайланд?",
        answers: [
            { text: '2010', correct: false },
            { text: '2011', correct: false },
            { text: '2012', correct: true },
            { text: '2013', correct: false }
        ]
    },
    {
        question: "Что ты приготовил жене на первый романтический ужин?",
        answers: [
            { text: 'Картошку пюре и курицу', correct: true },
            { text: 'Макароны и котлеты', correct: false },
            { text: 'Суси', correct: false },
            { text: 'Стейк', correct: false }
        ]
    },
    {
        question: "В каком году у нас появился куст?",
        answers: [
            { text: '2012', correct: false },
            { text: '2013', correct: true },
            { text: '2014', correct: false },
            { text: '2015', correct: false }
        ]
    },
    {
        question: "Когда у нас появился Бандос?",
        answers: [
            { text: 'Апрель 2010', correct: true },
            { text: 'Май 2010', correct: false },
            { text: 'Апрель 2011', correct: false },
            { text: 'Май 2011', correct: false }
        ]
    },
    {
        question: "Сколько раз мы были в Тайланде?",
        answers: [
            { text: '5', correct: false },
            { text: '6', correct: false },
            { text: '7', correct: true },
            { text: '8', correct: false }
        ]
    }
];

const congratulationsMessages = [

    { text: "Серёжа, с Днём рождения ! Желаю тебе замечательных успехов в бодибилдинге, а также оригинальных и профитных идей в трейдинге ! Ну, и конечно же, любви и здоровья !", 
        img: "./assets/kostya.jpeg",
        person: "Костя" },

    { text: "Сережа, поздравляю тебя с Днем рождения! Желаю тебе всегда оставаться таким же позитивным и жизнерадостным, всегда сохранять интерес к жизни, находить в повседневности удивительное и чтобы тебя всегда окружали счастливые глаза и улыбки твоей семьи!", 
        img: "./assets/masha.jpeg",
        person: "Маша" },

    
    { text: "С днем рождения, дражайший и обожаемый брат. У тебя круглый юбилей и по этому случаю я желаю тебе отменного здоровья, личного счастья и всегда держать нос по ветру, а удачу поймать за хвост.Еще желаю мирного неба над головой и исполнения желаний! Ибо луй-ли. Воистину!", 
        img: "./assets/jura.jpeg",
        person: "Юра" },

    { text: "Дорогой мой Серёженька, с Днём Рождения, с Юбилеем! Живи в радости и благополучии ещё столько и полстолько! \"Дожить до 100 лет без болезней!!!\" - так говорил Деда Вася. Успехов тебе во всем, счастья всей семье!", 
        img: "./assets/tzh.jpeg",
        person: "Тетя Женя" },


    { text: "Мой любимый сынок! Поздравляю тебя с твоим чудесным днём, днём рождения. Ты родился в замечательное время - летом. Судьба послала тебе прекрасную семью, и я желаю, чтобы ты всегда был здоров, счастлив, удачен, обеспечен, и чтобы исполнялись все твои желания.", 
        img: "./assets/bbs.jpeg",
        person: "Мама" },

    { text: "Серёжа, дорогой! Поздравляю тебя с днём рождения! Ты - классный, мы тебя любим! Рада, что ты с нами, что ты наша семья! Счастья тебе, успехов, хорошего настроения! Пусть исполняются твои желания! Жена и дети не огорчают! Дружите, смейтесь, отдыхайте! Главное - вместе!", 
        img: "./assets/bbl.jpeg",
        person: "Люда" },

    { text: "Серёжа, с днём рождения! Хочу пожелать тебе найти мечту, ради которой стоит трудиться, жить, творить! Если достиг вершины, найди новую! И это восхождение никогда не кончится! Наверно, это и есть - счастье! Пусть оно у тебя будет!", 
        img: "./assets/ddl.jpeg",
        person: "Рашид" },

    { text: "С днём рождения Сережа! Я тебе желаю здоровья счастья и веселья. И ещё я тебе желаю много конфет и ещё здоровья", 
        img: "./assets/roma.jpeg", 
        person: "Рома" },

    { text: "С днём рождения Сережа. Я так рада, что у тебя наступил день рождения. Желаю тебе здоровья счастья успехов в личной жизни, много подарков и денег. А самое главное, хорошее настроение. Желаю удачи в твой день рождения", 
        img: "./assets/vika.jpeg",
        person: "Вика" },
    
    { text: "В день рождения желаю, чтобы все было на отлично! Чтоб если карьера - то успешная, если зарплата - то приличная, если коньяк - то с выдержкой, если друзья - то лучшие, если семья - то самая крепкая и счастливая!", 
        img: "./assets/albina.jpeg",
        person: "Альбина" },

    { text: "Серёня, желаю тебе много всего интересного и чтобы поставленные задачи были выполнены, чтобы нолики и единички, написанные тобой, превратились в купюры в кошельке) ну и по классике: счастья, здоровья, любви🤣 С днем рождения бро!!!", 
        img: "./assets/tim.jpeg",
        person: "Тим" },

    { text: "Сережа, мы от всей души поздравляем тебя С ДНЁМ РОЖДЕНИЯ🥳! К этой красивой круглой дате ты добился очень многого, реализовался во всех сферах и это вызывает колоссальное уважение! Ты - наш герой и пример! А в первую очередь, конечно, для ваших замечательных детей! Желаем тебе приумножить достигнутое и не забывать об отдыхе🌅. Крепкого тебе здоровья и радости в каждом дне: интересных путешествий, ярких впечатлений, приятных мелочей и только положительных эмоций🎁! 🎂🍾🥂", 
        img: "./assets/apm.png",
        person: "Алла, Паша, Маша" },

    { text: "Дорогой мой папа, поздравляю тебя с днём рождения! Желаю тебе счастья и здоровья! Что бы каждый твой день начинался с улыбки, чтобы рядом с тобой были самые близкие люди, друзья и родные. Исполнения всех твоих желаний!! С днём рождения!!❤️", 
        img: "./assets/bandos.jpeg",
        person: "Бандос" },


    { text: "С днем рождения пап, ты у нас самый крутой, хоть чуть чуть и бешеный, желаю тебе накачать 300кг мыщц, заработать 1000000млрд долларов, чтобы в холодильнике всегда был творог, в зале всегда поднимались самые большие веса, чтобы спина не болела, чтобы дети не бесили и чтобы у вас с мамой появился дом в тайланде", 
        img: "./assets/taya.png",
        person: "Дочь" },
    
    { text: "Любимый мой, май лу. Сегодня твой день и я поздравляю тебя с днём рождения. Ты самое лучшее, что случилось со мной в этой жизни и дети) Будь счастлив и здоров, мой любимчик. Обнимаю тебя сильнейше.", 
        img: "./assets/maman.jpeg",
        person: "Жена" },

    { text: ";jadfksbhdnvkopfeir9u843qbr  a k ka.s cm .aksf v.", 
        img: "./assets/kust.jpeg",
        person: "Куст" },

    { text: "gaf gaf gaf gaf gaf gaf gaf gaf gaf gaf gaf lizka lizka lizka shupka shupka shupka gaf", 
        img: "./assets/bob.png",
        person: "Боб" }

];

const victoryMessageElement = document.getElementById('victory-message');

const questionContainerElement = document.getElementById('question-container');
const quizContainerElement = document.getElementById('quiz-container');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const progressBar = document.getElementById('progress');
const turnOnBtn = document.getElementById('turn-on');
const lamp = document.querySelector('.lamp');
const beats = document.querySelector('.beats');
const banner = document.querySelector('.banner');
const cake = document.querySelector('.cake-cover');
const balloons = document.querySelectorAll('.balloon');
const leftButton = document.querySelector('.carousel-btn.left');
const rightButton = document.querySelector('.carousel-btn.right');

let currentQuestionIndex, shuffledQuestions;
let correctAnswers = 0; 
let clickCount = 0;
let currentSlide = 0;


const actions = [
    {
        text: 'Включить свет',
        func: () => {
            document.body.classList.add('bg');
            setTimeout(() => {
                document.body.classList.add('gradbg')
                document.body.classList.remove('bg')
            }, 500)
            lamp.classList.remove('hide')
        }
    },
    {
        text: 'Включить музыку',
        func: () => {
            document.querySelector('.song').play();
            beats.classList.remove('hide')
        }
    },
    {
        text: 'Добавить декорации',
        func: () => {
            banner.classList.remove('hide');
        }
    },
    {
        text: 'Запустить шарики',
        func: () => {
            document.querySelector('.balloon-container').classList.remove('hide')
            balloons.forEach((balloon, index) => {
                animateBalloon(balloon, index);
            });
        }
    },
    {
        text: 'Принести торт',
        func: () => {
            cake.classList.remove('hide');
        }
    },
    {
        text: 'Мини диско',
        func: () => {
            document.body.classList.remove('bg')
            document.body.classList.remove('gradbg')
            document.body.classList.add('disco-background');
        }
    },
    {
        text: 'Пройти квиз',
        func: () => {
            document.body.classList.add('bg');
            setTimeout(() => {
                document.body.classList.add('gradbg')
                document.body.classList.remove('bg')
            }, 500)

            document.body.classList.remove('disco-background');
            document.querySelector('.balloon-container').classList.add('hide')
            banner.classList.add('hide');
            cake.classList.add('hide');
            document.querySelector('.container').classList.remove('hide');
        }
    },
    {
        text: 'Прочитать поздравления',
        func: () => {
            if (correctAnswers === questions.length) {
                document.querySelector('.container').classList.add('hide');
                document.getElementById('congratulations-carousel').classList.remove('hide');
                document.getElementById('congratulations-carousel').style.display = "flex";
                btns = document.querySelectorAll('.carousel-btn')
                document.body.classList.remove('gradbg')
                document.body.classList.remove('bg')

                btns.forEach((btn) => {
                    btn.classList.remove("hide");
                    btn.style.display = "flex";
                })
                beats.classList.add('hide')
                // populateCarousel();
                updateCarousel();
            } else {
                alert("Надо пройти квиз")
                clickCount--;
            } 
    }
    },
    {
        text: 'Конец',
        func: () => {
            alert("С днем рождения!!! Ожидайте начала кризиса 40 лет")
            window.location.reload();
        }
    },
];

// populateCarousel();
// updateCarousel();

function animateBalloon(balloon, index) {
    console.log("here")
    const duration = Math.random() * 5 + 5; 
    const delay = Math.random() * 2; 
    const trajectory = Math.random() * 100 - 50; 

    balloon.style.transition = `all ${duration}s ease-in-out ${delay}s`;
    balloon.style.transform = `translate(${trajectory}vw, -100vh)`;
    balloon.style.opacity = 1;

    setTimeout(() => {
        balloon.remove();
    }, (duration + delay) * 1000);
}


turnOnBtn.addEventListener('click', () => {
    // if (clickCount === 8) {
    //     alert("You have")
    //     window.location.reload();
    // };
    const action = actions[clickCount % actions.length];
    action.func();
    clickCount++;
    const nextAction = actions[clickCount % actions.length];
    turnOnBtn.textContent = nextAction.text;
});


function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    nextButton.innerText = 'Next';
    nextButton.classList.add('hide');
    victoryMessageElement.classList.remove('show');
    updateProgressBar();
    setNextQuestion();
}

function showVictoryMessage() {
    victoryMessageElement.classList.add('show');
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);

    if (correct) {
        correctAnswers++;
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
        nextButton.addEventListener('click', () => {
            currentQuestionIndex++;
            updateProgressBar();
            setNextQuestion();
        }, { once: true });
    } else {
        if (correctAnswers === questions.length) {
            progressBar.style.width = `${100}%`;
            window.setTimeout(() => {
                showVictoryMessage();
                quizContainerElement.classList.add('hide')
            }, 800);
            
        } else {
            nextButton.innerText = 'Restart';
            nextButton.classList.remove('hide');
            nextButton.addEventListener('click', startQuiz, { once: true });
        }
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function updateProgressBar() {
    const progressPercentage = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

startQuiz();



function updateCarousel() {
    const carouselTrack = document.querySelector('#congratulations-carousel');
    carouselTrack.innerHTML = `
        <img src="${congratulationsMessages[currentSlide].img}" class="carousel-img">
        <p>${congratulationsMessages[currentSlide].text}.   <span>${congratulationsMessages[currentSlide].person}</span></p>
    `;
}

leftButton.addEventListener('click', () => {
    if (currentSlide === 0) {
        currentSlide = congratulationsMessages.length - 1
    } else {
        currentSlide =  currentSlide - 1
    }
    updateCarousel();
});

rightButton.addEventListener('click', () => {
    currentSlide = (currentSlide+1) % (congratulationsMessages.length)
    updateCarousel();
});


