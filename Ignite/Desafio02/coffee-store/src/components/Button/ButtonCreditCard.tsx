import React, { useEffect, useState } from "react";
import { CreditCard } from "@phosphor-icons/react";
import { useStateContext } from "../../context/StateContext";
import { TypePaymentProps } from "../../data/dataPayment";

interface ButtonCreditCardProps {
  title: string;
}

export const ButtonCreditCard = ({ title }: ButtonCreditCardProps) => {
  const { typePayment, setTypePayment } = useStateContext();
  const [selectedPayment, setSelectedPayment] = useState(false);

  function changePaymentMethod() {
    const updateTypePayment = typePayment.map((payment) => {
      if ("Cartão de Crédito" === title) {
        setSelectedPayment(payment.booleanCred);
        return {
          ...payment,
          booleanCred: true,
          booleanDeb: false,
          booleanDin: false,
        };
      } else if ("Cartão de Débito" === title) {
        setSelectedPayment(payment.booleanDeb);
        return {
          ...payment,
          booleanCred: false,
          booleanDeb: true,
          booleanDin: false,
        };
      } else if ("Dinheiro" === title) {
        setSelectedPayment(payment.booleanDin);
        return {
          ...payment,
          booleanCred: false,
          booleanDeb: false,
          booleanDin: true,
        };
      } else {
        return payment;
      }
    });
    return updateTypePayment;
  }

  function handleOnClick() {
    const updateCss = changePaymentMethod();
    setTypePayment(updateCss);
    console.log(updateCss);
  }

  return (
    <button
      data-border={
        typePayment.some((object) => {
          if (object.booleanCred === true && "Cartão de Crédito" === title) {
            return true;
          } else if (
            object.booleanDeb === true &&
            "Cartão de Débito" === title
          ) {
            return true;
          } else if (object.booleanDin === true && "Dinheiro" === title) {
            return true;
          } else {
            return false;
          }
        }) === true
          ? "checked"
          : ""
      }
      onClick={handleOnClick}
      type="button"
      className={`bg-base-button hover:bg-base-hover text-base-text data-[border=checked]:border-purple hover:text-base-subtitle flex items-center justify-center w-full max-w-[284px] p-4 rounded-[6px] font-roboto font-[400] text-[12px] transition ease-in-out duration-200 gap-2 border-2`}
    >
      <i>
        <CreditCard size={16} className="text-purple-dark" />
      </i>
      {title}
    </button>
  );
};
