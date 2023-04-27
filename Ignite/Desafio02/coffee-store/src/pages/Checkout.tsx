import React, { useState } from "react";
import { MapPinLine, CurrencyDollar } from "@phosphor-icons/react";
import { Input } from "../components/Input/Input";
import { ButtonCreditCard } from "../components/Button/ButtonCreditCard";
import { Button } from "../components/Button/Button";
import { CartProduct } from "../components/Card/CartProduct";
import { useStateContext } from "../context/StateContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom"

type CreateUseFormData = z.infer<typeof createUseFormSchema>;

const createUseFormSchema = z.object({
  CEP: z
    .string()
    .nonempty("Obrigatório o preenchimento do campo 'CEP'")
    .min(8, "O CEP precisa ter 8 dígitos")
    .max(8, "O CEP precisa ter 8 dígitos"),
  Rua: z.string().nonempty("Obrigatório o preenchimento do campo 'Rua'"),
  Numero: z.string().nonempty("Obrigatório o preenchimento do campo 'Numero'"), //ONLY NUMBER
  Complemento: z
    .string()
    .nonempty("Obrigatório o preenchimento do campo 'Complemento'"),
  Bairro: z.string().nonempty("Obrigatório o preenchimento do campo 'Bairro'"),
  Cidade: z.string().nonempty("Obrigatório o preenchimento do campo 'Cidade'"),
  UF: z
    .string()
    .nonempty("Obrigatório o preenchimento do campo 'UF'")
    .max(2, "Máximo de 2 dígitos nesse campo"),
});

export const Checkout = () => {
  const [output, setOutput] = useState("");
  const { itemsOnCart, typePayment, setTypePayment } = useStateContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUseFormData>({
    resolver: zodResolver(createUseFormSchema),
  });

  const navigate = useNavigate()
 
  function totalItemsPrice() {
    const priceByItem: number[] = itemsOnCart.map((item) => {
      return item.quantityAddOnCart * item.value;
    });
    let soma = 0;

    if (priceByItem !== undefined) {
      for (var i = 0; i < priceByItem.length; i++) {
        var n = priceByItem[i];
        soma += n;
      }
    }
    return soma;
  }

  function createdOrder(data: any) {
    setOutput(JSON.stringify(data, null, 2));
    console.log(data);
    navigate("/success")
  }

  const totalItems = totalItemsPrice();
  const delivery = 35.8;
  const total: number = delivery + totalItems;

  return (
    <form
      action=""
      onSubmit={handleSubmit(createdOrder)}
      className="flex px-40 font-roboto font-[400] gap-8"
    >
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
            <input
              type="CEP"
              maxLength={8}
              placeholder="CEP"
              className="bg-base-input text-base-label p-3 max-w-[200px] outline-none rounded-[4px]"
              {...register("CEP")}
            />
            {errors.CEP && (
              <span className="text-sm text-red-900">{errors.CEP.message}</span>
            )}

            <input
              type="Rua"
              placeholder="Rua"
              className="bg-base-input text-base-label p-3 w-full outline-none rounded-[4px]"
              {...register("Rua")}
            />
            {errors.Rua && (
              <span className="text-sm text-red-900">{errors.Rua.message}</span>
            )}

            <div className="flex gap-3 items-center">
              <input
                type="Numero"
                placeholder="Numero"
                maxLength={8}
                className="bg-base-input text-base-label p-3 max-w-[200px] outline-none rounded-[4px]"
                {...register("Numero")}
              />
              {errors.Numero && (
                <span className="text-sm text-red-900">
                  {errors.Numero.message}
                </span>
              )}

              <input
                type="Complemento"
                placeholder="Complemento"
                maxLength={8}
                className="bg-base-input text-base-label p-3 w-full outline-none rounded-[4px]"
                {...register("Complemento")}
              />
              {errors.Complemento && (
                <span className="text-sm text-red-900">
                  {errors.Complemento.message}
                </span>
              )}
            </div>
            <div className="flex gap-3">
              <input
                type="Bairro"
                placeholder="Bairro"
                maxLength={8}
                className="bg-base-input text-base-label p-3 max-w-[200px] outline-none rounded-[4px]"
                {...register("Bairro")}
              />
              {errors.Bairro && (
                <span className="text-sm text-red-900">
                  {errors.Bairro.message}
                </span>
              )}
              <input
                type="Cidade"
                placeholder="Cidade"
                maxLength={8}
                className="bg-base-input text-base-label p-3 w-full outline-none rounded-[4px]"
                {...register("Cidade")}
              />
              {errors.Cidade && (
                <span className="text-sm text-red-900">
                  {errors.Cidade.message}
                </span>
              )}
              <input
                type="UF"
                placeholder="UF"
                maxLength={2}
                className="bg-base-input text-base-label p-3 min-w-[72px] outline-none rounded-[4px]"
                {...register("UF")}
              />
              {errors.UF && (
                <span className="text-sm text-red-900">
                  {errors.UF.message}
                </span>
              )}
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
                key={product?.id}
                id={product?.id}
                coffee={product?.coffee}
                imgCoffee={product?.imgCoffee}
                value={product?.value}
              />
            );
          })}
          <div className="flex flex-col gap-3 ">
            <div className="flex justify-between text-[14px] text-base-text leading-[18px]">
              <p className="text-[14px] text-base-text">Total itens</p>
              <p className="text-[16px]">
                R$ {totalItems.toFixed(2).replace(".", ",")}
              </p>
            </div>
            <div className="flex justify-between text-[14px] text-base-text leading-[18px]">
              <p>Entrega</p>
              <p className="text-[16px]">
                R$ {delivery.toFixed(2).replace(".", ",")}
              </p>
            </div>
            <div className="flex justify-between text-[20px] font-[700] text-base-subtitle leading-[26px]">
              <p>Total</p>
              <p className="text-[16px]">
                R$ {total.toFixed(2).replace(".", ",")}
              </p>
            </div>
            <div className="pt-3">
              <button
                type="submit"
                className="bg-yellow hover:bg-yellow-dark text-white min-w-[132px] w-full px-3 py-2 rounded-[6px] items-center justify-center font-roboto font-[700] text-[14px] transition ease-in-out duration-200"
              >
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
