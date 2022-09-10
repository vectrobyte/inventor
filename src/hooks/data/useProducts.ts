import { useMemo } from 'react';

import { Model, Product } from '../../@types';
import { uid } from '../../common/helpers';
import { useModels } from './useModels';

export const useProducts = (model: Model) => {
  const { updateModel } = useModels();

  const products = useMemo(() => (model && model.products) || [], [model]);

  const setProducts = (updatedProducts: Product[]) => {
    updateModel({
      ...model,
      products: updatedProducts,
    });
  };

  const addNewProduct = () => {
    setProducts([
      ...products,
      {
        id: uid(),
        data: {},
      },
    ]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(
      products.map((product) => (updatedProduct.id === product.id ? updatedProduct : product))
    );
  };

  const dropProduct = (modelToDelete: Product) => {
    setProducts(products.filter((product) => modelToDelete.id !== product.id));
  };

  return {
    model,
    products,
    addNewProduct,
    updateProduct,
    dropProduct,
  };
};
