import React from "react";
import { ButtonRemove } from "../Button/ButtonRemove";
import { useStateContext } from "../../context/StateContext";
import { ButtonSelectQuantityInCart } from "../Button/ButtonSelectQuantityInCart";

type CartProductProps = {
  coffee: string;
  value: number;
  imgCoffee: string;
  id: string;
};

export const CartProduct = ({
  coffee,
  value,
  imgCoffee,
  id,
}: CartProductProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-5">
        <img src={imgCoffee} className="w-16 h-16" alt="" />
        <div className="flex-col w-full">
          <div className="flex gap-[50px] justify-between w-full pb-2">
            <strong className="flex gap-2 text-base-subtitle text-[16px] font-[400]">
              {coffee}
            </strong>
            <strong className="flex gap-1 text-base-text font-[700] text-[16px]">
              R$ <p>{value}</p>
            </strong>
          </div>
          <div className="flex gap-2">
            <ButtonSelectQuantityInCart productId={id} />
            <ButtonRemove productId={id} />
          </div>
        </div>
      </div>
      <div className="w-full h-0 border-[1px] border-base-button mt-6"></div>
    </div>
  );
};
