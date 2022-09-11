import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Model } from '../../@types';
import { uid } from '../../common/helpers';
import GridView, { GridItem } from '../../components/GridView';
import { generateDefaultProductFields } from '../../hooks/data/useModelProducts';
import { useModels } from '../../hooks/data/useModels';
import ProductCard from '../model-products/components/product-card/ProductCard';
import AddProductDropdown from './components/AddProductDropdown';

type HomeProps = React.HTMLAttributes<HTMLElement>;

const Home: React.FC<HomeProps> = () => {
  const { allProducts, models, updateModel } = useModels();

  const properModels = useMemo(
    () => models.filter((model) => model.title && model.fields.length),
    [models]
  );

  const handleSelectModel = (model: Model) => {
    updateModel({
      ...model,
      products: [
        ...model.products,
        {
          id: uid(),
          formData: generateDefaultProductFields(model),
          created_at: Date.now(),
        },
      ],
    });
  };

  return (
    <div className="home-page w-full mb-40">
      {!properModels || !properModels.length ? (
        <div className="my-20 text-center">
          <h5 className="text-lg font-semibold mb-1">No models available!</h5>

          <p className="text-gray-600 text-sm">
            Please create models from{' '}
            <Link to="/model-builder" className="text-purple-700 hover:underline">
              Model Builder
            </Link>{' '}
            first.
            <br />
            Note: A model needs to have a name and a field(s) before creating new products.
          </p>
        </div>
      ) : (
        <GridView>
          {allProducts.map(
            ({ model, ...product }, key) =>
              model && (
                <GridItem key={`${product.id}-${key}`}>
                  <ProductCard model={model} product={product} />
                </GridItem>
              )
          )}
          <GridItem>
            <AddProductDropdown models={properModels} onSelect={handleSelectModel} />
          </GridItem>
        </GridView>
      )}
    </div>
  );
};

export default Home;
