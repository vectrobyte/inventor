import React from 'react';

import AddButton from '../../components/buttons/AddButton';
import { useModels } from '../../hooks/data/useModels';
import ModelCard from './components/ModelCard';

type ModelBuilderProps = React.HTMLAttributes<HTMLElement>;

const ModelBuilder: React.FC<ModelBuilderProps> = () => {
  const { models, updateModel, dropModel, addNewModel } = useModels();

  const handleAddNewModel = () => {
    addNewModel();
  };

  return (
    <div className="model-builder-page w-full mb-40">
      <div className="-mx-8 flex flex-wrap">
        {models.map((model, key) => (
          <div key={`${model.id}-${key}`} className="p-8 w-[450px]">
            <ModelCard model={model} onUpdate={updateModel} onDelete={dropModel} />
          </div>
        ))}
        <div className="p-8">
          <pre className="p-2 bg-gray-100">{JSON.stringify(models, null, 2)}</pre>
        </div>
      </div>

      <AddButton onClick={handleAddNewModel} />
    </div>
  );
};

export default ModelBuilder;
