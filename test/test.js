import { select } from '../src/function.js';

const heroClosed = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },

    {
      id: 9,
      name: 'Тройной выстрел',
      icon: 'http://...',
    },

  ],
};

const heroOpen = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },

    {
      id: 9,
      name: 'Тройной выстрел',
      icon: 'http://...',
      description: 'Тройной выстрел наносит тройной урон',
    },

  ],
};

test('Открытое описание', () => {
  const expected = [
    { id: 8, icon: 'http://...', description: 'Двойной выстрел наносит двойной урон' },
    { id: 9, icon: 'http://...', description: 'Тройной выстрел наносит тройной урон' },
  ];
  const received = select(heroOpen);
  expect(received).toEqual(received);
});

test('Скрытое описание', () => {
  const expected = [
    { id: 8, icon: 'http://...', description: 'Двойной выстрел наносит двойной урон' },
    { id: 9, icon: 'http://...', description: 'Описание недоступно' },
  ];
  const received = select(heroClosed);
  expect(received).toEqual(received);
});
