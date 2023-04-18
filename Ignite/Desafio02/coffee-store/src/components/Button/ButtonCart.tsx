import React from "react";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { DataCoffeeProps, useStateContext } from "../../context/StateContext";

type ButtonCartProps = {
  productId: string;
};

export const ButtonCart = ({ productId }: ButtonCartProps) => {
  const { itemsOnCart, dataCoffee, setItemsOnCart, setDataCoffee } =
    useStateContext();

  function handleAddItemOnCart() {
    const foundProduct = dataCoffee.find((product) => product.id === productId);

    console.log(itemsOnCart);

    if (!foundProduct) {
      return;
    }

    const itemAlreadyOnCart = itemsOnCart.find(
      (item) => item.id === foundProduct.id
    );

    if (itemAlreadyOnCart) {
      const updatedCart = itemsOnCart.map((product) => {
        if (product.id !== foundProduct.id) {
          return product;
        }
        return {
          ...itemAlreadyOnCart,
          quantityAddOnCart:
            itemAlreadyOnCart.quantityAddOnCart +
            foundProduct.quantityToAddOnCart,
        };
      });
      setItemsOnCart(updatedCart);
      return;
    }

    setItemsOnCart((items: []) => [
      ...items,
      { ...foundProduct, quantityAddOnCart: foundProduct.quantityToAddOnCart },
    ]);
  }

  return (
    <button
      onClick={handleAddItemOnCart}
      className="bg-purple-dark hover:bg-purple text-base-white flex justify-center items-center p-2 h-8 rounded-[6px] font-roboto font-[400] text-[12px] transition ease-in-out duration-200"
    >
      <i>
        <ShoppingCartSimple size={20} weight="fill" className="text-white" />
      </i>
    </button>
  );
};
