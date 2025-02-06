import { RefObject, useEffect } from "react";

type Handler = (event: MouseEvent) => void;

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: Handler,
  ignoreRefs?: RefObject<HTMLElement>[]
) => {
  useEffect(() => {
    const { current } = ref;

    const listener = (event: MouseEvent) => {
      const { target } = event;
      const isNested =
        current &&
        parseInt(window.getComputedStyle(target as Element).zIndex) >
          parseInt(window.getComputedStyle(current).zIndex);

      if (
        !current ||
        current.contains(target as Node) ||
        isNested ||
        ignoreRefs?.some((r) => r?.current?.contains(target as Node))
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener("click", listener, true);

    return () => {
      document.removeEventListener("click", listener, true);
    };
  }, [ref, handler]);
};

export default useClickOutside;
