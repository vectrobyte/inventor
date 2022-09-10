import { useCallback, useMemo } from 'react';

import { Model, Uid } from '../../@types';
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

  const setModels = (updatedModels: Model[]) => {
    dispatch({ type: STORE_ACTIONS.setModels, payload: updatedModels });
    setCachedModels(updatedModels);
  };

  const addNewModel = () => {
    setModels([
      ...models,
      {
        id: uid(),
        title: '',
        title_field: 'TEXT',
        fields: [
          {
            id: uid(),
            name: 'Title',
            type: 'TEXT',
          },
        ],
        products: [],
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
    addNewModel,
    updateModel,
    dropModel,
  };
};
