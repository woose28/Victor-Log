import { useEffect } from 'react';
import { INTERSECTING_CLASS_NAME } from './TOC';

const READ_HEADING_OFFSET = 10;
const SCROLL_OFFSET = 100;

const useTOC = () => {
  useEffect(() => {
    const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    const isReachedToBottom = () => {
      const { scrollHeight, offsetHeight } = document.documentElement;

      return scrollHeight < offsetHeight + window.scrollY + SCROLL_OFFSET;
    };

    const checkReadHeading = () => {
      const currentScrollY = window.scrollY;

      headingElements.forEach((headingElement) => {
        const tocItem = document.querySelector(`a[href*='${headingElement.id}']`);

        if (isReachedToBottom()) {
          tocItem?.classList.add(INTERSECTING_CLASS_NAME);
          return;
        }

        const { top } = headingElement.getBoundingClientRect();

        if (currentScrollY > currentScrollY + top - READ_HEADING_OFFSET) {
          tocItem?.classList.add(INTERSECTING_CLASS_NAME);
        } else {
          tocItem?.classList.remove(INTERSECTING_CLASS_NAME);
        }
      });
    };

    const onScroll = () => window.requestAnimationFrame(checkReadHeading);

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
};

export { useTOC };
