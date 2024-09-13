const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

/**
 * Генерация уникального кода
 * @returns {Number} Уникальный код
 */
export function generateUniqueCode() {
  return (Date.now() + Math.floor(Math.random() * 1000)).toString().slice(-5);
}

/**
 * Форматирует количество выбранных элементов для отображения.
 * @param count {number} Количество выборов.
 * @returns {string} Форматированная строка, если count > 0; в противном случае — пустая строка.
 */
export function formatSelectionCount(count) {
  if (count > 0) {
    return ` | Выделяли ${count} ${pluralize(count, 'раз', 'раза')}`;
  }
  return ''; // Пустая строка для count = 0
}

/**
 * Возвращает форму множественного числа слова на основе количества.
 * @param count {number} Количество элементов.
 * @param singular {string} Форма единственного числа слова.
 * @param plural {string} Форма множественного числа слова.
 * @returns {string} Форма множественного числа слова.
 */
// Функция для выбора правильного склонения

export function pluralize(count, singular, plural) {
  if (count === 1 || (count % 10 === 1 && count % 100 !== 11)) {
    return singular; // "раз" для чисел 1, 21, 31, 101 и т.д.
  } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    return plural; // "раза" для чисел 2-4, 22-24, 32-34 и т.д.
  } else {
    return singular; // "раз" для чисел 5 и выше, а также для 11-14
  }
}
