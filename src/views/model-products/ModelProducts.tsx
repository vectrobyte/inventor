import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Model, Uid } from '../../@types';
import Button from '../../components/buttons/Button';
import GridView, { GridItem } from '../../components/GridView';
import WarningToast, {
  WARNING_TOAST_OPTIONS,
} from '../../components/toasts/WarningToast/WarningToast';
import { useModelProducts } from '../../hooks/data/useModelProducts';
import { useModels } from '../../hooks/data/useModels';
import ProductCard from './components/ProductCard';

type ModelProducts = React.HTMLAttributes<HTMLElement>;

const ModelProducts: React.FC<ModelProducts> = () => {
  const navigate = useNavigate();
  const { modelIds, getModelById } = useModels();
  const { modelId } = useParams<{ modelId: Uid }>();
  const [model, setModel] = useState<Model>({ id: modelId } as Model);

  const { products, addNewProduct } = useModelProducts(model);

  useEffect(() => {
    if (!modelId || !modelIds.includes(modelId)) {
      toast(<WarningToast>Invalid Model ID Provided!</WarningToast>, WARNING_TOAST_OPTIONS);
      navigate('/home');
      return;
    }

    const targetModel = getModelById(modelId as string);

    if (!targetModel) {
      navigate('/home');
      toast(<WarningToast>Model not found!</WarningToast>, WARNING_TOAST_OPTIONS);
      return;
    }

    setModel(targetModel);
  }, [getModelById, navigate, modelId, modelIds]);

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
