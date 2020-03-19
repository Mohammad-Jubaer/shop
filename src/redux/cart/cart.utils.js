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
export const removeItem = (cartItems, item) =>
  cartItems.filter(cartItem => cartItem.name !== item.name);

export const decreaseItem = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(item => item.name === itemToAdd.name);

  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.name !== itemToAdd.name);
  } else {
    return cartItems.map(item =>
      item.name === itemToAdd.name
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};
