/* ===========================
   РУБАШКИ КОЛОД
   =========================== */
// DECK_IMAGES заполняется из images.js после загрузки
const DECK_IMAGES_KEYS = ['koloda1', 'koloda2', 'koloda3', 'koloda4', 'koloda5'];

function getDeckImage(index) {
  if (typeof CARD_IMAGES !== 'undefined') {
    return CARD_IMAGES[DECK_IMAGES_KEYS[index]] || '';
  }
  return 'koloda-' + (index + 1) + '.jpg';
}

/* ===========================
   ДАННЫЕ КОЛОД
   =========================== */
const DECKS = [
  {
    id: 1,
    title: 'Ситуация.<br>Что сейчас происходит',
    hint: 'Подумай, в какой сфере жизни тебе сейчас хотелось бы изменений. Нажми на карту — получишь вопрос.',
    cards: [
      'Что ты хочешь, чтобы в твоей жизни стало на 5–10% лучше.',
      'Дело, которое ты откладываешь, но хочешь наконец-то сделать легко и без напряжения.',
      'Отношения или общение, в которых тебе хочется больше тепла и ясности.',
      'Ситуация, в которой тебе хочется чувствовать себя увереннее и спокойнее.',
      'Трудность, с которой ты сейчас сталкиваешься, но замечаешь, что справляешься лучше, чем год назад.',
      'Область, в которой обстоятельства были против, но ты всё равно нашёл(ла) выход.',
      'Момент, когда ты разрешил(а) себе просто отдохнуть без чувства вины.',
      'Дело или занятие, которое даёт тебе энергию, и ты хочешь найти для него чуть больше места в жизни.'
    ]
  },
  {
    id: 2,
    title: 'Предпочитаемое будущее.<br>Как хочется',
    hint: 'Не про то, чего хочется избежать — а про то, как хочется, чтобы было.',
    hasScale: true,
    cards: [
      'Чего ты хочешь вместо этой ситуации? (короткой фразой)',
      'Если представить, что всё наладилось, что ты будешь делать по-другому в обычный день?',
      'Если представить, что всё наладилось, что заметят другие (без подробностей, 1–2 признака)?',
      'Если представить, что всё наладилось, что станет возможным?',
      'Если представить, что всё наладилось, что в этом желаемом для тебя самое ценное?',
      'Если представить, что всё налаживается, что ты точно не хочешь потерять по пути?',
      'Чего ты хочешь вместо этой ситуации? (короткой фразой)\n\nКакая одна маленькая часть желаемого будущего уже бывает иногда?',
      'Если представить, что всё наладилось, что ты заметил(а) в своём дне первым делом?'
    ]
  },
  {
    id: 3,
    title: 'Точка отсчёта.<br>Где я сейчас',
    hint: 'Что уже есть прямо сейчас — даже если кажется, что немного.',
    cards: [
      'Что помогает тебе держаться на этой отметке и не падать ниже?',
      'Кто/что помогает тебе оставаться на этом уровне?',
      'Что ты уже делаешь, что работает (пусть и чуть-чуть)?',
      'Почему не на балл ниже? Что уже помогает держаться на этом уровне?',
      'Что важно сохранить, даже если ситуация улучшится?',
      'Что для тебя будет «достаточно хорошо» (не идеально)?',
      'Если бы завтра стало на 1 пункт выше, что бы ты заметил(а) в поведении/дне?'
    ]
  },
  {
    id: 4,
    title: 'Светлые моменты.<br>Что уже получается',
    hint: 'Маленькое тоже считается.',
    cards: [
      'Вспомни момент, когда было хоть немного легче. Что тогда было по-другому?',
      'Что ты уже пробовал(а) делать, и это хоть чуть-чуть помогло?',
      'Когда бывает хоть немного легче/лучше? Что ты тогда делал(а) такого, что помогало?',
      'Как ты случайно/неосознанно уже создаёшь «исключения»?',
      'Что из прошлого опыта ты можешь перенести сюда?',
      'Вспомни похожую трудность из прошлого. Что тогда сработало?',
      'Что ты уже сделал(а) правильно, даже если результат пока не идеален?',
      'Если бы исключения стали случаться чаще, что бы ты делал(а) регулярно?'
    ]
  },
  {
    id: 5,
    title: 'Опора.<br>Что поддерживает',
    hint: 'Люди, привычки, места, состояния — всё считается.',
    cards: [
      'Как тебе удаётся справляться и не сдаваться, несмотря на трудности?',
      'Что помогает пережить сложный день, не проваливаясь окончательно?',
      'Если бы твой близкий был в такой ситуации, что бы ты ему пожелал(а)? Как ты можешь дать это себе на 1%?',
      'Что ты делаешь, чтобы не стало хуже?',
      'Что ты можешь себе сказать в момент, когда тяжело?',
      'Какой твой сильный навык обычно помогает в жизни — и где он тут применим?',
      'Какая маленькая поддержка от себя или других тебе сейчас доступна?',
      'Как ты уже проявляешь заботу о себе/о других в этой истории?'
    ]
  }
];

const MICROSTEP_CARDS = [
  'Обрати внимание на то, что в этой теме уже работает хорошо и что ты точно хочешь сохранить.',
  'В конце дня задай себе один вопрос: «Что сегодня удалось хотя бы на 1% лучше, чем вчера?»',
  'Сделай завтра один самый маленький, почти незаметный шаг, чтобы подняться по своей шкале всего на 0,5 балла.',
  'Завтра, когда будешь смотреть в зеркало, скажи себе вслух или мысленно: «Со мной всё в порядке, даже когда не всё получается».',
  'Выбери из подаренных тебе сегодня карточек обратной связи ту, что греет больше всего. Положи её на видное место на ближайшие три дня.',
  'Когда почувствуешь, что застреваешь, сделай что-то абсолютно нелогичное: встань на одну ногу, выпей стакан воды левой рукой или спой куплет песни.',
  'Вспомни самое классное качество, которое в тебе сегодня заметила группа. Найди завтра один повод проявить его осознанно.'
];

/* ===========================
   СОСТОЯНИЕ ИГРЫ
   =========================== */
let state = {
  currentDeckIndex: 0,  // 0–4 для колод 1–5
  drawnCardIndex: -1,
  anotherCardCount: 0,
  drawnCardIndices: [],
  answers: ['', '', '', '', ''],  // ответы на колоды 1–5
  scaleValue: 5,
  giftsAnswer: '',
  microstepAnswer: '',
  drawnHintIndices: [],
  previousScreen: null
};

/* ===========================
   НАВИГАЦИЯ
   =========================== */
function showScreen(id) {
  const current = document.querySelector('.screen.active');
  const next = document.getElementById(id);
  if (!next || next === current) return;

  if (current) {
    current.classList.add('exiting');
    setTimeout(() => {
      current.classList.remove('active', 'exiting');
      current.style.display = '';
    }, 400);
  }

  // Force reflow
  next.style.display = 'flex';
  next.offsetHeight;
  next.classList.add('active');
}

function goBack(targetId) {
  showScreen(targetId);
}

function showRules() {
  state.previousScreen = 'screen-welcome';
  showScreen('screen-rules');
}

function showRulesFromGame() {
  state.previousScreen = 'screen-deck';
  // Исправляем кнопку назад в экране правил — возвращаемся на текущий шаг
  const rulesBackBtn = document.querySelector('#screen-rules .btn-back');
  if (rulesBackBtn) {
    rulesBackBtn.onclick = () => showScreen('screen-deck');
  }
  showScreen('screen-rules');
}

/* ===========================
   СТАРТ ИГРЫ
   =========================== */
function startGame() {
  resetGame();
  goToDeck(0);
}

function resetGame() {
  state.currentDeckIndex = 0;
  state.drawnCardIndex = -1;
  state.anotherCardCount = 0;
  state.drawnCardIndices = [];
  state.answers = ['', '', '', '', ''];
  state.scaleValue = 5;
  state.giftsAnswer = '';
  state.microstepAnswer = '';
  state.drawnHintIndices = [];
}

function restartGame() {
  startGame();
}

/* ===========================
   КОЛОДЫ (ШАГИ 1–5)
   =========================== */
function goToDeck(index) {
  state.currentDeckIndex = index;
  state.drawnCardIndex = -1;
  state.anotherCardCount = 0;
  state.drawnCardIndices = [];

  const deck = DECKS[index];
  const stepNum = index + 1;
  const totalSteps = 7;
  const progress = (stepNum / totalSteps) * 100;

  // Обновляем содержимое
  document.getElementById('deck-step-label').textContent = `Шаг ${stepNum} из ${totalSteps}`;
  document.getElementById('deck-title').innerHTML = deck.title;
  document.getElementById('deck-hint').textContent = deck.hint;
  document.getElementById('progress-bar').style.width = progress + '%';

  // Меняем рубашку карты
  const cardBackImg = document.getElementById('card-back-image');
  if (cardBackImg) {
    cardBackImg.src = getDeckImage(index);
  }

  // Сбрасываем подсказку
  const tapHintEl = document.getElementById('deck-tap-hint');
  if (tapHintEl) tapHintEl.classList.remove('hidden');

  // Сбрасываем карту
  const cardInner = document.getElementById('card-inner');
  cardInner.classList.remove('flipped');

  document.getElementById('card-text').textContent = '';
  document.getElementById('card').style.cursor = 'pointer';

  // Скрываем поля
  document.getElementById('answer-area').style.display = 'none';
  document.getElementById('btn-another-card').style.display = 'none';
  document.getElementById('scale-area').style.display = 'none';

  // Восстанавливаем сохранённый ответ
  const answerInput = document.getElementById('answer-input');
  answerInput.value = state.answers[index] || '';

  // Кнопка назад
  const backBtn = document.getElementById('deck-back-btn');
  if (index === 0) {
    backBtn.onclick = () => showScreen('screen-welcome');
  } else {
    backBtn.onclick = () => goToDeck(index - 1);
  }

  // Кнопка Дальше
  const btnNext = document.getElementById('btn-next');
  btnNext.disabled = true;

  // Если есть сохранённый ответ — показываем поля сразу
  if (state.answers[index]) {
    // Покажем карту как перевёрнутую (нет, просто поля)
    document.getElementById('answer-area').style.display = 'flex';
    checkAnswer();
    if (deck.hasScale) {
      showScaleArea();
    }
  }

  showScreen('screen-deck');
}

function drawCard() {
  const deck = DECKS[state.currentDeckIndex];
  const cardInner = document.getElementById('card-inner');

  if (cardInner.classList.contains('flipped')) return;

  // Выбираем случайную карту (не повторяя)
  let available = deck.cards.map((_, i) => i).filter(i => !state.drawnCardIndices.includes(i));
  if (available.length === 0) available = deck.cards.map((_, i) => i);

  const randomIndex = available[Math.floor(Math.random() * available.length)];
  state.drawnCardIndex = randomIndex;
  state.drawnCardIndices.push(randomIndex);

  document.getElementById('card-text').textContent = deck.cards[randomIndex];

  // Скрываем подсказку
  const tapHint = document.getElementById('deck-tap-hint');
  if (tapHint) tapHint.classList.add('hidden');

  // Анимация переворота
  cardInner.classList.add('flipped');

  // Показываем поле ответа
  setTimeout(() => {
    document.getElementById('answer-area').style.display = 'flex';
    document.getElementById('answer-area').scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Кнопка "Другая карта"
    if (state.anotherCardCount < 2) {
      const btn = document.getElementById('btn-another-card');
      btn.style.display = 'inline-flex';
      updateAnotherCardBtn();
    }

    checkAnswer();
  }, 350);
}

function drawAnotherCard() {
  if (state.anotherCardCount >= 2) return;
  state.anotherCardCount++;

  const deck = DECKS[state.currentDeckIndex];
  let available = deck.cards.map((_, i) => i).filter(i => !state.drawnCardIndices.includes(i));
  if (available.length === 0) available = deck.cards.map((_, i) => i);

  const randomIndex = available[Math.floor(Math.random() * available.length)];
  state.drawnCardIndex = randomIndex;
  state.drawnCardIndices.push(randomIndex);

  // Флип назад, потом обратно
  const cardInner = document.getElementById('card-inner');
  cardInner.classList.remove('flipped');

  setTimeout(() => {
    document.getElementById('card-text').textContent = deck.cards[randomIndex];
    cardInner.classList.add('flipped');
  }, 300);

  updateAnotherCardBtn();
}

function updateAnotherCardBtn() {
  const remaining = 2 - state.anotherCardCount;
  const btn = document.getElementById('btn-another-card');
  const count = document.getElementById('another-card-count');

  if (remaining <= 0) {
    btn.style.display = 'none';
  } else {
    count.textContent = `(ещё ${remaining})`;
  }
}

function checkAnswer() {
  const val = document.getElementById('answer-input').value.trim();
  state.answers[state.currentDeckIndex] = val;

  const deck = DECKS[state.currentDeckIndex];
  const btnNext = document.getElementById('btn-next');

  if (deck.hasScale) {
    // Показываем шкалу только когда есть ответ
    if (val.length > 0) {
      showScaleArea();
    }
    btnNext.disabled = val.length === 0;
  } else {
    btnNext.disabled = val.length === 0;
  }
}

function showScaleArea() {
  const scaleArea = document.getElementById('scale-area');
  if (scaleArea.style.display === 'none' || scaleArea.style.display === '') {
    scaleArea.style.display = 'flex';
    document.getElementById('scale-slider').value = state.scaleValue;
    document.getElementById('scale-value-display').textContent = state.scaleValue;
    setTimeout(() => {
      scaleArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }
}

function updateScale(value) {
  state.scaleValue = parseInt(value);
  document.getElementById('scale-value-display').textContent = value;
}

function nextStep() {
  const currentIndex = state.currentDeckIndex;
  state.answers[currentIndex] = document.getElementById('answer-input').value.trim();

  if (currentIndex < 4) {
    goToDeck(currentIndex + 1);
  } else {
    // После колоды 5 — переход к Подаркам
    showGifts();
  }
}

/* ===========================
   ПОДАРКИ (ШАГ 6)
   =========================== */
function showGifts() {
  const giftsInput = document.getElementById('gifts-input');
  giftsInput.value = state.giftsAnswer || '';
  checkGifts();
  showScreen('screen-gifts');
}

function checkGifts() {
  const val = document.getElementById('gifts-input').value.trim();
  state.giftsAnswer = val;
  document.getElementById('btn-gifts-next').disabled = val.length === 0;
}

/* ===========================
   СВОДКА + МИКРО-ШАГ (ШАГ 7)
   =========================== */
function showSummary() {
  state.giftsAnswer = document.getElementById('gifts-input').value.trim();

  // Строим сводку
  const summaryBlock = document.getElementById('summary-block');
  summaryBlock.innerHTML = buildSummaryHTML();

  // Восстанавливаем микро-шаг
  document.getElementById('microstep-input').value = state.microstepAnswer || '';
  checkMicrostep();

  // Скрываем карту подсказки
  document.getElementById('hint-card').style.display = 'none';

  showScreen('screen-summary');
}

function buildSummaryHTML() {
  const labels = [
    'Что сейчас происходит',
    'Как хочется, чтобы было',
    'Точка отсчёта',
    'Что уже получается',
    'Что поддерживает',
    'Что во мне ценного'
  ];

  const answers = [
    ...state.answers,
    state.giftsAnswer
  ];

  let html = '';
  answers.forEach((ans, i) => {
    if (!ans) return;
    html += `<div class="summary-item">`;
    html += `<span class="summary-item-label">${labels[i]}</span>`;

    // Для шага 2 (индекс 1) показываем шкалу
    if (i === 1) {
      html += `<div class="summary-item-scale">
        <span class="summary-item-scale-num">${state.scaleValue}</span>
        <span class="summary-item-scale-label">из 10</span>
      </div>`;
    }

    html += `<p class="summary-item-text">${escapeHtml(ans)}</p>`;
    html += `</div>`;
  });

  return html;
}

function drawHintCard() {
  let available = MICROSTEP_CARDS.map((_, i) => i).filter(i => !state.drawnHintIndices.includes(i));
  if (available.length === 0) {
    state.drawnHintIndices = [];
    available = MICROSTEP_CARDS.map((_, i) => i);
  }

  const randomIndex = available[Math.floor(Math.random() * available.length)];
  state.drawnHintIndices.push(randomIndex);

  const hintCard = document.getElementById('hint-card');
  document.getElementById('hint-card-text').textContent = MICROSTEP_CARDS[randomIndex];
  hintCard.style.display = 'block';

  hintCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function checkMicrostep() {
  const val = document.getElementById('microstep-input').value.trim();
  state.microstepAnswer = val;
  document.getElementById('btn-microstep-next').disabled = val.length === 0;
}

/* ===========================
   ФИНАЛЬНЫЙ ЭКРАН
   =========================== */
function showFinal() {
  state.microstepAnswer = document.getElementById('microstep-input').value.trim();
  document.getElementById('final-microstep-text').textContent = state.microstepAnswer;
  showScreen('screen-final');
}

/* ===========================
   СОХРАНЕНИЕ ОТВЕТОВ
   =========================== */
function saveAnswers() {
  const labels = [
    '1. Что сейчас происходит',
    '2. Как хочется, чтобы было',
    '3. Точка отсчёта (шкала: ' + state.scaleValue + '/10)',
    '4. Что уже получается',
    '5. Что поддерживает',
    '6. Что во мне ценного',
    '7. Мой микро-шаг'
  ];

  const answers = [
    ...state.answers,
    state.giftsAnswer,
    state.microstepAnswer
  ];

  let text = '🌟 Игра «С тобой всё в порядке»\n\n';
  answers.forEach((ans, i) => {
    if (ans) text += labels[i] + '\n' + ans + '\n\n';
  });

  // Сначала показываем экран — всегда, мгновенно
  showSavedScreen();

  // Фоном отправляем в Лидтех (не блокирует экран)
  const userId = new URLSearchParams(window.location.search).get('user_id');
  if (userId) {
    setTimeout(function() {
      fetch('https://app.leadteh.ru/api/v1/bots/856640/contacts/' + userId + '/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Token': 'THk9lhwlGbXPhkQNZFB9GGDzECLQNCmCGgShZ6VmHOzoy6tF98aTsl4XTirX'
        },
        body: JSON.stringify({ text: text })
      }).catch(function(e) { console.log('Leadteh error:', e); });
    }, 300);
  }
}

function showSavedScreen() {
  const savedBlock = document.getElementById('saved-block');
  savedBlock.innerHTML = buildSummaryHTML();

  // Добавляем микро-шаг
  savedBlock.innerHTML += `
    <div class="summary-item">
      <span class="summary-item-label">Мой микро-шаг</span>
      <p class="summary-item-text">${escapeHtml(state.microstepAnswer)}</p>
    </div>
  `;

  showScreen('screen-saved');
}

/* ===========================
   УТИЛИТЫ
   =========================== */
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

/* ===========================
   ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ
   =========================== */
document.addEventListener('DOMContentLoaded', function() {
  const cardBackImg = document.getElementById('card-back-image');
  if (cardBackImg) {
    cardBackImg.src = getDeckImage(0);
  }
});

/* ===========================
   TELEGRAM MINI APP INIT
   =========================== */
if (window.Telegram && window.Telegram.WebApp) {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();

  // Применяем тему Telegram
  if (tg.colorScheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
