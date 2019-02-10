import select from './function';

const hero = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
    },
    { id: 9, name: 'Тройной выстрел', icon: 'http://...' },
  ],
};

console.log(select(hero));
