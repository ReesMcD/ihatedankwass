'use client';

import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    console.log('mounted');
  });

  return (
    <div>
      <h2>I Hate Dan Kwass and His Wife</h2>
    </div>
  );
}
