import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Uid } from '../../@types';
import AddButton from '../../components/buttons/AddButton';
import { useModels } from '../../hooks/data/useModels';
import { useProducts } from '../../hooks/data/useProducts';
import ProductCard from './components/ProductCard';

type ModelProducts = React.HTMLAttributes<HTMLElement>;

const ModelProducts: React.FC<ModelProducts> = () => {
  const navigate = useNavigate();
  const { modelIds, getModelById } = useModels();

  const params = useParams<{ modelId: Uid }>();

  const model = getModelById(params.modelId as string);

  const { products, addNewProduct } = useProducts(model);

  if (!modelIds.includes(params.modelId as string)) {
    navigate('/home');

    return <></>;
  }

  return (
    <div className="model-builder-page w-full mb-40">
      <div className="-mx-8 flex flex-wrap">
        {products.map((product, key) => (
          <div key={`${product.id}-${key}`} className="p-8 w-[450px]">
            <ProductCard model={model} product={product} />
          </div>
        ))}
      </div>

      <AddButton onClick={addNewProduct} />
    </div>
  );
};

export default ModelProducts;
