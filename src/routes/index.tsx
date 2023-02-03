import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>Welcome to Qwik</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to my portfolio',
  meta: [
    {
      name: 'description',
      content: 'Portfolio of a web developer',
    },
  ],
};
