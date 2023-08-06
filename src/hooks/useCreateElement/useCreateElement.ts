import { useMemo, useEffect } from 'react';

type Attributes = {
  [key: string]: string;
};
type EventHandlerMap<TagName extends keyof HTMLElementTagNameMap> = {
  [key in keyof HTMLElementEventMap]?: {
    listener: <EventName extends keyof HTMLElementEventMap>(
      this: HTMLElementTagNameMap[TagName],
      ev: HTMLElementEventMap[EventName]
    ) => any;
    options?: boolean | AddEventListenerOptions;
  };
};

type UseCreateElementProps<TagName extends keyof HTMLElementTagNameMap> = {
  tagName: TagName;
  attributes?: Attributes;
  handlers?: EventHandlerMap<TagName>;
};

const useCreateElement = <TagName extends keyof HTMLElementTagNameMap>({
  tagName,
  attributes,
  handlers,
}: UseCreateElementProps<TagName>) => {
  const element = useMemo(() => document.createElement<typeof tagName>(tagName), []);

  useEffect(() => {
    if (typeof handlers !== 'undefined') {
      Object.entries(handlers).forEach(([eventName, { listener, options }]) => {
        element.addEventListener(eventName, listener, options);
      });
    }

    if (typeof attributes !== 'undefined') {
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }

    return () => {
      if (typeof handlers !== 'undefined') {
        Object.entries(handlers).forEach(([eventName, { listener, options }]) => {
          element.removeEventListener(eventName, listener, options);
        });
      }
    };
  }, []);

  return element;
};

export { useCreateElement };
