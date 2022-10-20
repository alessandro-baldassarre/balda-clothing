import { FC } from "react";
import { CartItem } from "../../store/cart/cart.types";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

type CartItemProp = {
  cartItem: CartItem;
};

const CartItem: FC<CartItemProp> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x {price}€
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
