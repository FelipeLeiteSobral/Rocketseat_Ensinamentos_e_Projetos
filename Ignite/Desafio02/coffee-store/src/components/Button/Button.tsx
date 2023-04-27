import React from "react";
import { Link } from "react-router-dom";

type TypeButton = {
  onSubmit?:any
}
export const Button = ({onSubmit}:TypeButton) => {
  return (
    <Link to={"/success"}>
      <button type="submit"  
      className="bg-yellow hover:bg-yellow-dark text-white min-w-[132px] w-full px-3 py-2 rounded-[6px] items-center justify-center font-roboto font-[700] text-[14px] transition ease-in-out duration-200">
          COMPRAR
      </button>
    </Link>
  );
};
