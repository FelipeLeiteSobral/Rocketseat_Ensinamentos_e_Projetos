import React from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import { useStateContext } from "../../context/StateContext";

type ButtonSelectQuantityProps = {
  productId: string;
};

export const ButtonSelectQuantity = ({
  productId,
}: ButtonSelectQuantityProps) => {
  const { dataCoffee, setDataCoffee } = useStateContext();

  function increaseQuantity() {
    setDataCoffee(
      dataCoffee.map((product) => {
        if (product.id !== productId) {
          return product;
        } else {
          return {
            ...product,
            quantityToAddOnCart: product.quantityToAddOnCart + 1,
          };
        }
      })
    );
  }

  function decreaseQuantity() {
    setDataCoffee(
      dataCoffee.map((product) => {
        if (product.id !== productId) {
          return product;
        } else {
          return {
            ...product,
            quantityToAddOnCart:
              product.quantityToAddOnCart <= 1
                ? 1
                : product.quantityToAddOnCart - 1,
          };
        }
      })
    );
  }

  return (
    <button className="bg-base-button flex items-center justify-center p-2 h-8 rounded-[6px] font-roboto font-[400] text-[16px] transition-all ease-in-out duration-200 relative gap-2">
      <i onClick={decreaseQuantity}>
        <Minus size={14} className="text-purple hover:text-purple-dark" />
      </i>
      <div className="text-base-title">
        {
          dataCoffee.find((product: any) => product.id === productId)
            ?.quantityToAddOnCart
        }
      </div>
      <i onClick={increaseQuantity}>
        <Plus size={14} className="text-purple hover:text-purple-dark" />
      </i>
    </button>
  );
};
