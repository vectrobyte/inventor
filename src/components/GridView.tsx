import React from 'react';

type GridItemProps = React.HTMLAttributes<HTMLElement>;

export const GridItem: React.FC<GridItemProps> = ({ children }) => {
  return <div className="p-8 w-full md:w-1/2 lg:w-[450px]">{children}</div>;
};

type GridViewProps = React.HTMLAttributes<HTMLElement>;

const GridView: React.FC<GridViewProps> = ({ children }) => {
  return <div className="md:-mx-8 flex flex-wrap">{children}</div>;
};

export default GridView;
