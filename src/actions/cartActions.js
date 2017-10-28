"use strict"

//ADD TO CART
export const addToCart = (book) => {
  return{
    type: "ADD_TO_CART",
    payload: book
  }
}

//UPDATE CART
export const updateCart = (_id, unit) => {
  return{
    type: "UPDATE_CART",
    _id: _id,
    unit: unit
  }
}

//DELETE FROM CART
export const deleteCartItem = (cart) => {
  return{
    type: "DELETE_CART_ITEM",
    payload: cart
  }
}

