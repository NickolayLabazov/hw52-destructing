export const select = (obj, id) => {
    for (const element of obj.special) {
      if (element.id == id) {
        const {
          it, name, icon, description,
        } = element;
        const result = [name, icon, description];
        return result;
      }
    }
  };