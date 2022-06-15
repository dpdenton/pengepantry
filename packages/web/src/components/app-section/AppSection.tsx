import React from 'react';

export const AppSection: React.FC = ({children}) => {
  return (
    <section className="px-5 md:px-20 bg-primary-light">{children}</section>
  );
};
