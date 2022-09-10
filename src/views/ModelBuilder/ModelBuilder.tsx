import React from 'react';

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
      </div>

      <button
        type="button"
        className="fixed bottom-10 right-10 text-white h-20 w-20 rounded-full bg-gray-700 hover:bg-gray-800 focus:bg-gray-700 font-light rounded text-5xl flex items-center justify-center"
        onClick={handleAddNewModel}
      >
        <span className="relative bottom-1">+</span>
      </button>
    </div>
  );
};

export default ModelBuilder;
