import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Uid } from '../../@types';
import Button from '../../components/buttons/Button';
import GridView, { GridItem } from '../../components/GridView';
import { useModelProducts } from '../../hooks/data/useModelProducts';
import { useModels } from '../../hooks/data/useModels';
import ProductCard from './components/ProductCard';

type ModelProducts = React.HTMLAttributes<HTMLElement>;

const ModelProducts: React.FC<ModelProducts> = () => {
  const navigate = useNavigate();
  const { modelIds, getModelById } = useModels();

  const params = useParams<{ modelId: Uid }>();

  const model = getModelById(params.modelId as string);

  const { products, addNewProduct } = useModelProducts(model);

  if (!modelIds.includes(params.modelId as string)) {
    navigate('/home');

    return <></>;
  }

  return (
    <div className="model-products-page w-full mb-40">
      <GridView>
        {products.map((product, key) => (
          <GridItem key={`${product.id}-${key}`}>
            <ProductCard model={model} product={product} />
          </GridItem>
        ))}
        <GridItem>
          <Button onClick={addNewProduct}>Add New {model.title || 'Product'}</Button>
        </GridItem>
      </GridView>
    </div>
  );
};

export default ModelProducts;
