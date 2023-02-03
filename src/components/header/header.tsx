import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <header>
      <div class="logo">
        <a href="#" title="logo">
          Logo {/*TODO*/}
        </a>
      </div>
      <ul>
        <li>
          <a href="#" >
            About
          </a>
        </li>
        <li>
          <a href="#">
            Projects
          </a>
        </li>
        <li>
          <a href="#">
            Skills
          </a>
        </li>
        <li>
          <a href="#" >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
});
