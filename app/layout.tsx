import type { Metadata } from 'next';
import Base from '@/layouts/base.layout';

import '@/styles/index.scss';

export const metadata: Metadata = {
  title: 'next starter'
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>
        <Base>{children}</Base>
      </body>
    </html>
  );
}
