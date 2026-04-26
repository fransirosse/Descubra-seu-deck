import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Descubra seu Deck',
  description: 'Quiz para descobrir seu estilo de jogo e deck ideal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
