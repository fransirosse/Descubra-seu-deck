import QuizContainer from '@/components/Quiz/QuizContainer';

export const metadata = {
  title: 'Descubra seu Deck',
  description: 'Não é você que escolhe o deck. É o deck que escolhe você.',
};

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <QuizContainer />
    </main>
  );
}
