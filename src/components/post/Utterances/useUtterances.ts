import { useLayoutEffect, useState, useRef } from 'react';
import { useCreateElement } from 'hooks/useCreateElement/useCreateElement';

type Status = 'pending' | 'failed' | 'success';

const SCRIPT_ATTRIBUTES = {
  src: 'https://utteranc.es/client.js',
  repo: process.env.GATSBY_REPOSITORY as string,
  'issue-term': 'pathname',
  theme: 'github-light',
  crossorigin: 'anonymous',
  async: 'true',
};

const INITIAL_STATUS = 'pending';
const SUCCESS_STATUS = 'success';
const ERROR_STATUS = 'failed';

const useUtterances = () => {
  const [status, setStatus] = useState<Status>(INITIAL_STATUS);

  const isLoading = status === INITIAL_STATUS;
  const isSuccess = status === SUCCESS_STATUS;

  const containerRef = useRef<HTMLDivElement>(null);

  const script = useCreateElement({
    tagName: 'script',
    handlers: {
      load: {
        listener: () => {
          setStatus(SUCCESS_STATUS);
        },
      },
      error: {
        listener: () => {
          setStatus(ERROR_STATUS);
        },
      },
    },
    attributes: SCRIPT_ATTRIBUTES,
  });

  useLayoutEffect(() => {
    if (typeof script !== 'undefined') {
      containerRef.current?.appendChild(script);
    }
  }, []);

  return {
    isLoading,
    isSuccess,
    containerRef,
  };
};

export { useUtterances };
