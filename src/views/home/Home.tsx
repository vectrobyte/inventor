import React from 'react';

import { Model } from '../../@types';
import { uid } from '../../common/helpers';
import GridView, { GridItem } from '../../components/GridView';
import { generateDefaultProductFields } from '../../hooks/data/useModelProducts';
import { useModels } from '../../hooks/data/useModels';
import ProductCard from '../model-products/components/ProductCard';
import AddProductDropdown from './components/AddProductDropdown';

type HomeProps = React.HTMLAttributes<HTMLElement>;

const Home: React.FC<HomeProps> = () => {
  const { allProducts, models, updateModel } = useModels();

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
          <AddProductDropdown models={models} onSelect={handleSelectModel} />
        </GridItem>
      </GridView>
    </div>
  );
};

export default Home;
