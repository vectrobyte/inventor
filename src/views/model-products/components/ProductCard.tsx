import React from 'react';

import { Model, Product } from '../../../@types';
import CrossButton from '../../../components/buttons/CrossButton';

type ProductCardProps = React.HTMLAttributes<HTMLElement> & {
  model: Model;
  product: Product;
  onUpdate(product: Product): void;
  onDelete(): void;
};

const ProductCard: React.FC<ProductCardProps> = ({ model, product, onDelete }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="bg-gray-800 py-4 md:px-6 lg:px-8 min-h-[56px] rounded-t-lg text-white flex items-center justify-between">
        <span>{`${model.title}-${product.data[model.title_field]}`}</span>
        <CrossButton onClick={onDelete} />
      </div>

      <form className="space-y-4 p-4 md:p-6 lg:p-8" action="#"></form>
    </div>
  );
};

export default ProductCard;
