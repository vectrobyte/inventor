import { Model } from '../../@types';
import { STORE_ACTIONS } from '../../context/store';
import { useStore } from '../useStore';

export const useModels = () => {
  const [{ models }, dispatch] = useStore();

  const setModels = (updatedModels: Model[]) => {
    dispatch({ type: STORE_ACTIONS.setModels, payload: updatedModels });
  };

  const addModel = (model: Model) => {
    setModels([...models, model]);
  };

  const updateModel = (updatedModel: Model) => {
    setModels(models.map((model) => (updatedModel.id === model.id ? updatedModel : model)));
  };

  const dropModel = (modelToDelete: Model) => {
    setModels(models.filter((model) => modelToDelete.id !== model.id));
  };

  return {
    models,
    addModel,
    updateModel,
    dropModel,
  };
};
