import React from 'react';
import { connect } from 'react-redux';
import {
  removeItem,
  decrementItem,
  addItem
} from '../../redux/cart/cart-actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItem, decrementItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decrementItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  decrementItem: item => dispatch(decrementItem(item)),
  addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
