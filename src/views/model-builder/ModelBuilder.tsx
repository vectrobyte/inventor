import React from 'react';

import Button from '../../components/buttons/Button';
import GridView, { GridItem } from '../../components/GridView';
import { useModels } from '../../hooks/data/useModels';
import ModelCard from './components/model-card/ModelCard';

type ModelBuilderProps = React.HTMLAttributes<HTMLElement>;

const ModelBuilder: React.FC<ModelBuilderProps> = () => {
  const { models, dropModel, addNewModel } = useModels();

  return (
    <div className="model-builder-page w-full mb-40">
      <GridView>
        {models.map((model, key) => (
          <GridItem key={`${model.id}-${key}`}>
            <ModelCard model={model} onDelete={dropModel} />
          </GridItem>
        ))}

        <GridItem>
          <Button onClick={addNewModel}>Add New Model</Button>
        </GridItem>
      </GridView>
    </div>
  );
};

export default ModelBuilder;
