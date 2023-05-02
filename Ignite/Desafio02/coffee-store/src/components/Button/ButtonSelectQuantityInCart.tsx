import React from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import { useStateContext } from "../../context/StateContext";

type ButtonSelectQuantityInCartProps = {
  productId: string;
};

export const ButtonSelectQuantityInCart = ({
  productId,
}: ButtonSelectQuantityInCartProps) => {
  const { itemsOnCart, setItemsOnCart } = useStateContext();

  function increaseQuantity() {
    setItemsOnCart(
      itemsOnCart.map((product) => {
        if (product.id !== productId) {
          return product;
        } else {
          return {
            ...product,
            quantityAddOnCart: product.quantityAddOnCart + 1,
          };
        }
      })
    );
  }

  function decreaseQuantity() {
    setItemsOnCart(
      itemsOnCart.map((product) => {
        if (product.id !== productId) {
          return product;
        } else {
          return {
            ...product,
            quantityAddOnCart:
              product.quantityAddOnCart <= 1
                ? 1
                : product.quantityAddOnCart - 1,
          };
        }
      })
    );
  }

  return (
    <div className="bg-base-button flex items-center justify-center p-2 h-8 rounded-[6px] font-roboto font-[400] text-[16px] transition-all ease-in-out duration-200 relative gap-2">
      <i onClick={decreaseQuantity}>
        <Minus size={14} className="text-purple hover:text-purple-dark cursor-pointer" />
      </i>
      <div className="text-base-title">
        {
          itemsOnCart.find((product: any) => product.id === productId)
            ?.quantityAddOnCart
        }
      </div>
      <i onClick={increaseQuantity}>
        <Plus size={14} className="text-purple hover:text-purple-dark cursor-pointer" />
      </i>
    </div>
  );
};
