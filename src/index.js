import React from 'react';
import { createRoot } from 'react-dom/client';
import { generateUniqueCode } from './utils.js';
import App from './app.js';
import Store from './store.js';

const store = new Store({
  list: [
    { code: generateUniqueCode(), title: 'Название элемента', selectedCount: 0 },
    { code: generateUniqueCode(), title: 'Некий объект', selectedCount: 0 },
    { code: generateUniqueCode(), title: 'Заголовок', selectedCount: 0 },
    {
      code: generateUniqueCode(),
      title: 'Очень длинное название элемента из семи слов',
      selectedCount: 0,
    },
    { code: generateUniqueCode(), title: 'Запись', selectedCount: 0 },
    { code: generateUniqueCode(), title: 'Шестая запись', selectedCount: 0 },
    { code: generateUniqueCode(), title: 'Седьмая запись', selectedCount: 0 },
  ],
});

const root = createRoot(document.getElementById('root'));

store.subscribe(() => {
  root.render(<App store={store} />);
});

// Первый рендер приложения
root.render(<App store={store} />);
