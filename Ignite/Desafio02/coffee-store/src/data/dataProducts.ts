import React from "react";

export type DataCoffeeProps = {
  id: string;
  coffee: string;
  description: string;
  imgCoffee: string;
  quantityToAddOnCart: number;
  quantityAddOnCart: number;
  value: number;
  typeTags: string[];
};

export const dataProducts: DataCoffeeProps[] = [
  {
    id: "1",
    coffee: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    imgCoffee: "../../src/assets/Arabe.svg",
    quantityToAddOnCart: 5,
    quantityAddOnCart: 0,
    value: 9.59,
    typeTags: ["Especial"],
  },
  {
    id: "2",
    coffee: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    imgCoffee: "../../src/assets/CafeComLeite.svg",
    quantityToAddOnCart: 1,
    quantityAddOnCart: 0,
    value: 6.49,
    typeTags: ["Tradicional", "Com Leite"],
  },
  {
    id: "3",
    coffee: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    imgCoffee: "../../src/assets/Mocaccino.svg",
    quantityToAddOnCart: 1,
    quantityAddOnCart: 0,
    value: 8.49,
    typeTags: ["Tradicional", "Gelado"],
  },
  {
    id: "4",
    coffee: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    imgCoffee: "../../src/assets/Capuccino.svg",
    quantityToAddOnCart: 1,
    quantityAddOnCart: 0,
    value: 5.99,
    typeTags: ["Tradicional", "Com Leite"],
  },
  {
    id: "5",
    coffee: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    imgCoffee: "../../src/assets/ChocolateQuente.svg",
    quantityToAddOnCart: 1,
    quantityAddOnCart: 0,
    value: 7.49,
    typeTags: ["Especial", "Com Leite"],
  },
  {
    id: "6",
    coffee: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    imgCoffee: "../../src/assets/Cubano.svg",
    quantityToAddOnCart: 1,
    quantityAddOnCart: 0,
    value: 9.59,
    typeTags: ["Especial", "Gelado", "Alcoólico"],
  },
  {
    id: "7",
    coffee: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    imgCoffee: "../../src/assets/ExpressoTradicional.svg",
    quantityToAddOnCart: 1,
    quantityAddOnCart: 0,
    value: 3.49,
    typeTags: ["Tradicional"],
  },
  {
    id: "8",
    coffee: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    imgCoffee: "../../src/assets/ExpressoAmericano.svg",
    quantityToAddOnCart: 1,
    quantityAddOnCart: 0,
    value: 4.49,
    typeTags: ["Tradicional"],
  },
  {
    id: "9",
    coffee: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    imgCoffee: "../../src/assets/ExpressoCremoso.svg",
    quantityToAddOnCart: 1,
    quantityAddOnCart: 0,
    value: 4.99,
    typeTags: ["Tradicional"],
  },
  {
    id: "10",
    coffee: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    imgCoffee: "../../src/assets/ExpressoGelado.svg",
    quantityToAddOnCart: 1,
    quantityAddOnCart: 0,
    value: 4.99,
    typeTags: ["Tradicional", "Gelado"],
  },
  {
    id: "11",
    coffee: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    imgCoffee: "../../src/assets/Latte.svg",
    quantityToAddOnCart: 1,
    quantityAddOnCart: 0,
    value: 6.49,
    typeTags: ["Tradicional", "Com Leite"],
  },
  {
    id: "12",
    coffee: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    imgCoffee: "../../src/assets/Macchiato.svg",
    quantityToAddOnCart: 1,
    quantityAddOnCart: 0,
    value: 6.99,
    typeTags: ["Tradicional", "Com Leite"],
  },
  {
    id: "13",
    coffee: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    imgCoffee: "../../src/assets/Havaiano.svg",
    quantityToAddOnCart: 1,
    quantityAddOnCart: 0,
    value: 7.49,
    typeTags: ["Especial"],
  },
  {
    id: "14",
    coffee: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    imgCoffee: "../../src/assets/Irlandes.svg",
    quantityToAddOnCart: 1,
    quantityAddOnCart: 0,
    value: 8.99,
    typeTags: ["Especial"],
  },
];
