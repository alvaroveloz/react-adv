
export interface Props {
  product: Product;
  children: React.ReactElement | React.ReactElement[];
}

export interface Product {
  id: string;
  title: string;
  img: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}