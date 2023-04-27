import React from "react";
import { Trash } from "@phosphor-icons/react";
import { useStateContext } from "../../context/StateContext";

type ButtonRemoveProps = {
  productId: string;
};

export const ButtonRemove = ({ productId }: ButtonRemoveProps) => {
  const { itemsOnCart, setItemsOnCart } = useStateContext();

  function handleDeleteProductOnCart() {
    const deleteItemOnCart = itemsOnCart.filter((product) => {
      return productId !== product.id;
    });
    setItemsOnCart(deleteItemOnCart);
    console.log(itemsOnCart);
  }

  return (
    <button
      onClick={handleDeleteProductOnCart}
      className="bg-base-button hover:bg-base-hover text-base-subtitle min-w-[91px] h-8 px-2 rounded-[6px] items-center justify-center font-roboto font-[400] text-[12px] transition ease-in-out duration-200 flex gap-1"
    >
      <i>
        <Trash size={16} className="text-purple-dark" />
      </i>
      REMOVE
    </button>
  );
};
