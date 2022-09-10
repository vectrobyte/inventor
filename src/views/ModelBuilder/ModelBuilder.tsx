import React from 'react';

import { useModels } from '../../hooks/data/useModels';
import ModelCard from './components/ModelCard';

type ModelBuilderProps = React.HTMLAttributes<HTMLElement>;

const ModelBuilder: React.FC<ModelBuilderProps> = () => {
  const { models, updateModel, dropModel } = useModels();

  return (
    <div className="model-builder-page w-full">
      <div className="-mx-4 flex">
        {models.map((model, key) => (
          <div key={`${model.id}-${key}`} className="p-4 w-[400px]">
            <ModelCard model={model} onUpdate={updateModel} onDelete={dropModel} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelBuilder;
