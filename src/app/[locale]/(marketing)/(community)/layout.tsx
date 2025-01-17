import React from 'react';

export default function CommunityLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <div>
      <h1>Community Layout</h1>
      {children}
    </div>
  );
}
