export const addItemTocart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(item => item.name === itemToAdd.name);

  if (existingItem) {
    return cartItems.map(item =>
      item.name === itemToAdd.name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
