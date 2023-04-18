import React from "react";
import { MapPinLine, CurrencyDollar } from "@phosphor-icons/react";
import { Input } from "../components/Input/Input";
import { ButtonCreditCard } from "../components/Button/ButtonCreditCard";
import { Button } from "../components/Button/Button";
import { CartProduct } from "../components/Card/CartProduct";
import { useStateContext } from "../context/StateContext";

export const Checkout = () => {
  const { itemsOnCart } = useStateContext();

  return (
    <form action="" className="flex px-40 font-roboto font-[400] gap-8">
      <div className="flex flex-col gap-3 w-full">
        <h4 className="font-[700] font-baloo text-[18px] leading-[23.4px] text-base-subtitle">
          Complete seu pedido
        </h4>
        <div className="bg-base-card rounded-[6px] p-10 flex flex-col gap-8">
          <div className="flex gap-2">
            <i>
              <MapPinLine size={22} className="text-yellow-dark" />
            </i>
            <div>
              <strong className="flex gap-2 text-base-subtitle text-[16px] font-[400]">
                Endereço de Entrega
              </strong>
              <p className="text-[14px] leading-[18.2px] text-base-text">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Input tipo="CEP" />
            <Input tipo="Rua" />
            <div className="flex gap-3">
              <Input tipo="Numero" />
              <Input tipo="Complemento" />
            </div>
            <div className="flex gap-3">
              <Input tipo="Bairro" />
              <Input tipo="Cidade" />
              <Input tipo="UF" />
            </div>
          </div>
        </div>
        <div className="bg-base-card rounded-[8px] p-10 flex flex-col gap-8">
          <div className="flex gap-2">
            <i>
              <CurrencyDollar size={22} className="text-purple" />
            </i>
            <div>
              <strong className="flex gap-2 text-base-subtitle text-[16px] font-[400]">
                Pagamento
              </strong>
              <p className="text-[14px] leading-[18.2px] text-base-text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="flex gap-3 justify-between">
            <ButtonCreditCard title="Cartão de Crédito" />
            <ButtonCreditCard title="Cartão de Débito" />
            <ButtonCreditCard title="Dinheiro" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 min-w-[448px]">
        <h4 className="font-[700] font-baloo text-[18px] leading-[23.4px] text-base-subtitle">
          Cafés selecionados
        </h4>
        <div className="bg-base-card rounded-[6px] rounded-tr-[44px] rounded-bl-[44px] p-10 flex flex-col gap-8">
          {itemsOnCart?.map((product) => {
            return (
              <CartProduct
                key={product.id}
                id={product.id}
                coffee={product.coffee}
                imgCoffee={product.imgCoffee}
                value={product.value}
              />
            );
          })}
          <div className="flex flex-col gap-3 ">
            <div className="flex justify-between text-[14px] text-base-text leading-[18px]">
              <p className="text-[14px] text-base-text">Total itens</p>
              <p className="text-[16px]">R$ 29,70</p>
            </div>
            <div className="flex justify-between text-[14px] text-base-text leading-[18px]">
              <p>Entrega</p>
              <p className="text-[16px]">R$ 3,50</p>
            </div>
            <div className="flex justify-between text-[20px] font-[700] text-base-subtitle leading-[26px]">
              <p>Total</p>
              <p className="text-[16px]">R$ 33,20</p>
            </div>
            <div className="pt-3">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
