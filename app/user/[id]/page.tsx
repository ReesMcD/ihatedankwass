'use client';

import { use, useEffect } from 'react';

export default function User({ params }: PageProps<'/user/[id]'>) {
  const id = decodeURIComponent(use(params).id);

  useEffect(() => {
    console.log('mounted');
  });

  return (
    <div>
      <h2>User: {id}</h2>
    </div>
  );
}
