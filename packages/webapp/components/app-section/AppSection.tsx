import React, {PropsWithChildren} from 'react';

export const AppSection: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <section className="px-5 md:px-20 py-4 bg-primary-light">
      {children}
    </section>
  );
};
