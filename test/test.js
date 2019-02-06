import { select } from '../src/function.js';

const hero = {
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

test('Открытое описание', () => {
  const expected = ['Двойной выстрел', 'http://...', 'Двойной выстрел наносит двойной урон'];
  const received = select(hero, 8);
  expect(received).toEqual(received);
});

test('Скрытое описание', () => {
  const expected = ['Тройной выстрел', 'http://...', 'Undefined'];
  const received = select(hero, 9);
  expect(received).toEqual(received);
});