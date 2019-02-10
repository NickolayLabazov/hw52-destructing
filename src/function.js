export default function select(obj) {
  const special = [];
  for (const element of obj.special) {
    const { id, icon, description = 'Описание недоступно' } = element;
    const result = { id, icon, description };
    special.push(result);
  }
  return special;
}
