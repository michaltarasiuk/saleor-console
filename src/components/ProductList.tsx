import type {ComponentProps} from "react";

import {cn} from "../utils/cn";
import {ProductThumbnail} from "./ProductThumbnail";
import {Text} from "./Text";

export function ProductList() {
  return (
    <ul className={cn("gap-base flex flex-col")}>
      {Products.map((product, i) => (
        <li key={i}>
          <Product {...product} />
        </li>
      ))}
    </ul>
  );
}

interface ProductProps extends ComponentProps<typeof ProductThumbnail> {
  title: string;
  description: string;
  price: string;
}

export function Product({title, description, price, ...props}: ProductProps) {
  return (
    <article className={cn("flex w-full items-center justify-between")}>
      <div className={cn("gap-base flex")}>
        <ProductThumbnail {...props} />
        <div className={cn("flex flex-col justify-center")}>
          <Text>{title}</Text>
          <Text appearance="subdued">{description}</Text>
        </div>
      </div>
      <Text>{price}</Text>
    </article>
  );
}

const Products: ProductProps[] = [
  {
    title: "Fiddle Leaf Fig",
    description: "Ceramic pot",
    price: "$118.00",
    src: "/products/product-1.png",
    badge: 1,
  },
  {
    title: "Snake Plant",
    description: "Terracotta pot",
    price: "$39.00",
    src: "/products/product-2.png",
    badge: 1,
  },
  {
    title: "Peace Lily",
    description: "Plastic pot",
    price: "$39.00",
    src: "/products/product-3.png",
    badge: 1,
  },
];
