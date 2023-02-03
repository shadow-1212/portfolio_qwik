import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <h1>this is an about section</h1>;
});

export const head: DocumentHead = {
  title: 'About',
  meta: [
    {
      name: 'description',
      content: 'Portfolio of a web developer',
    },
  ],
};