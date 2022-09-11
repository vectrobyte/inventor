import { useCallback, useMemo } from 'react';

import { Model, Product, Uid } from '../../@types';
import { uid } from '../../common/helpers';
import { STORE_ACTIONS } from '../../context/store';
import { useLocalStorage } from '../useLocalStorage';
import { useStore } from '../useStore';

export const useModels = () => {
  const [{ models }, dispatch] = useStore();
  const [, setCachedModels] = useLocalStorage<Model[]>('models', []);

  const modelIds = useMemo(() => models.map((model) => model.id), [models]);

  const getModelById = useCallback(
    (modelId: Uid) => {
      const model = models.find(({ id }) => id === modelId);

      if (!model) {
        throw new Error('Product not found!');
      }

      return model;
    },
    [models]
  );

  const allProducts = useMemo(() => {
    const modelProductArr = models.map((model) =>
      model.products.map((product) => ({ ...product, model }))
    );

    return ([] as Product[]).concat(...modelProductArr).sort((a, b) => a.created_at - b.created_at);
  }, [models]);

  const setModels = (updatedModels: Model[]) => {
    dispatch({ type: STORE_ACTIONS.setModels, payload: updatedModels });
    setCachedModels(updatedModels);
  };

  const addNewModel = () => {
    const titleUid = uid();

    setModels([
      ...models,
      {
        id: uid(),
        title: '',
        title_field: titleUid,
        fields: [
          {
            id: titleUid,
            name: 'Title',
            type: 'TEXT',
          },
        ],
        products: [],
        created_at: Date.now(),
      },
    ]);
  };

  const updateModel = (updatedModel: Model) => {
    setModels(models.map((model) => (updatedModel.id === model.id ? updatedModel : model)));
  };

  const dropModel = (modelToDelete: Model) => {
    setModels(models.filter((model) => modelToDelete.id !== model.id));
  };

  return {
    models,
    modelIds,
    getModelById,
    allProducts,
    addNewModel,
    updateModel,
    dropModel,
  };
};
