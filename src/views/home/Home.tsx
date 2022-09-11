import React from 'react';

import { Model } from '../../@types';
import { uid } from '../../common/helpers';
import { useModels } from '../../hooks/data/useModels';
import { generateDefaultProductFields } from '../../hooks/data/useProducts';
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
    <div className="model-builder-page w-full mb-40">
      <div className="-mx-8 flex flex-wrap">
        {allProducts.map(
          ({ model, ...product }, key) =>
            model && (
              <div key={`${product.id}-${key}`} className="p-8 w-[450px]">
                <ProductCard model={model} product={product} />
              </div>
            )
        )}

        <div className="p-8 w-[450px]">
          <AddProductDropdown models={models} onSelect={handleSelectModel} />
        </div>
      </div>
    </div>
  );
};

export default Home;
