import React from 'react';

import Button from '../../components/buttons/Button';
import { useModels } from '../../hooks/data/useModels';
import ModelCard from './components/ModelCard';

type ModelBuilderProps = React.HTMLAttributes<HTMLElement>;

const ModelBuilder: React.FC<ModelBuilderProps> = () => {
  const { models, dropModel, addNewModel } = useModels();

  return (
    <div className="model-builder-page w-full mb-40">
      <div className="-mx-8 flex flex-wrap">
        {models.map((model, key) => (
          <div key={`${model.id}-${key}`} className="p-8 w-[450px]">
            <ModelCard model={model} onDelete={dropModel} />
          </div>
        ))}

        <div className="p-8 w-[450px]">
          <Button onClick={addNewModel}>Add New Model</Button>
        </div>
      </div>
    </div>
  );
};

export default ModelBuilder;
