import React, { useMemo } from 'react';

import { Field, Model, Product } from '../../../../@types';
import CrossButton from '../../../../components/buttons/CrossButton';
import {
  generateDefaultProductFields,
  useModelProducts,
} from '../../../../hooks/data/useModelProducts';
import InputRenderer from './components/InputRenderer';

type ProductCardProps = React.HTMLAttributes<HTMLElement> & {
  model: Model;
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ model, product }) => {
  const { updateProduct, dropProduct } = useModelProducts(model);

  const formData = useMemo(() => {
    return {
      ...generateDefaultProductFields(model),
      ...product.formData,
    };
  }, [model, product.formData]);

  const handleUpdateField = (key: Field['id'], value: any) => {
    updateProduct({
      ...product,
      formData: {
        ...product.formData,
        [key]: value,
      },
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="bg-gray-800 py-4 px-8 min-h-[56px] rounded-t-lg text-white flex items-center justify-between">
        <span>{`${model.title || model.id} - ${formData[model.title_field] || 'No Title'}`}</span>
        <CrossButton onClick={() => dropProduct(product)} />
      </div>

      <form className="space-y-4 p-8" action="#">
        {Object.keys(formData).map((fieldKey, key) => (
          <InputRenderer
            key={`${fieldKey}-${key}`}
            fields={model.fields}
            fieldKey={fieldKey}
            value={formData[fieldKey]}
            onChange={(val) => handleUpdateField(fieldKey, val)}
          />
        ))}
      </form>
    </div>
  );
};

export default ProductCard;
