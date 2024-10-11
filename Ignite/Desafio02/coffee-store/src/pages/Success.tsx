import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useStateContext } from "../context/StateContext";

export const Success = () => {
  const { createShipment, typePayment } = useStateContext();
  return (
    <div className="px-40 font-roboto font-[400] pt-20">
      <h1 className="text-yellow-dark font-[800] font-baloo text-[32px] leading-[42px] ">
        Uhu! Pedido confirmado
      </h1>
      <p className="text-[20px] leading-[26px] text-base-subtitle pt-1 pb-10">
        Agora é só aguentar que logo o café chegará até você
      </p>
      <div className="flex flex-wrap gap-10 justify-between">
        <div className="flex bg-gradient-to-r from-yellow to-purple rounded-tr-[36px] rounded-[8px] rounded-bl-[36px] rounded-2 p-[1px] min-w-[430px] w-full xl:max-w-[50%] justify-center break-normal">
          <div className="flex flex-col gap-8 bg-white w-full rounded-tr-[36px] rounded-[8px] rounded-bl-[36px] p-10">
            <div className="flex items-center gap-3 text-base-text text-[16px] font-[400]">
              <i className="bg-purple text-white rounded-full p-2">
                <MapPin size={16} weight="fill" />
              </i>
              <div>
                <p>
                  Entrega em{" "}
                  <span className="font-[700]">
                    {createShipment?.map((item) => {
                      return `${item.Rua}, ${item.Complemento} ${item.Numero}}`;
                    })}
                  </span>
                </p>
                <p>
                  {createShipment?.map((item) => {
                    return `${item.Cidade} - ${item.UF} `;
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-base-text text-[16px] font-[400]">
              <i className="bg-yellow text-white rounded-full p-2">
                <Timer size={16} weight="fill" />
              </i>
              <div>
                <p>Previsão de entrega</p>
                <p className="font-[700]"> "X" minutos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-base-text text-[16px] font-[400]">
              <i className="bg-yellow-dark text-white rounded-full p-2">
                <CurrencyDollar size={16} />
              </i>
              <div>
                <p>Pagamento na entrega</p>
                <p className="font-[700]">
                  {typePayment?.map((item) => {
                    if (item.booleanCred === true) {
                      return "Cartão de Crédito";
                    }
                    if (item.booleanDeb === true) {
                      return "Cartão de Débito";
                    }
                    if (item.booleanDin === true) {
                      return "Dinheiro";
                    }
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
          <img src="../../src/assets/Illustration.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
