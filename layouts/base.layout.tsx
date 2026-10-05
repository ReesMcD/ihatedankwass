import type { ReactNode } from 'react';

const Base = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header />
      <main>{children}</main>
      <footer />
    </div>
  );
};

export default Base;
