export type TypePaymentProps = {
  cartaoDeCredito: string;
  cartaoDeDebito: string;
  dinheiro: string;
  booleanCred: boolean;
  booleanDeb: boolean;
  booleanDin: boolean;
};

export const dataPayment: TypePaymentProps[] = [
  {
    cartaoDeCredito: "Cartão de Crédito",
    cartaoDeDebito: "Cartão de Débito",
    dinheiro: "Dinheiro",
    booleanCred: false,
    booleanDeb: false,
    booleanDin: false,
  },
];
