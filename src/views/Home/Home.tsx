import React from 'react';

type HomeProps = React.HTMLAttributes<HTMLElement>;

const Home: React.FC<HomeProps> = () => {

  return (
    <div className="">
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;
