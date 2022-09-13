import React from 'react';

type GridItemProps = React.HTMLAttributes<HTMLElement>;

export const GridItem: React.FC<GridItemProps> = ({ children }) => {
  return <div className="p-4 md:p-6 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">{children}</div>;
};

type GridViewProps = React.HTMLAttributes<HTMLElement>;

const GridView: React.FC<GridViewProps> = ({ children }) => {
  return <div className="py-2 md:py-3 flex flex-wrap">{children}</div>;
};

export default GridView;
