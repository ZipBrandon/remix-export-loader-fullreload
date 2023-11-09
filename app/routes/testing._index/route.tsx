import React from 'react';
import { useLoaderData } from 'react-router';
import { useFetcher } from '@remix-run/react';

export { loader } from './loader.ts';
export const TestingIndexRouteRoute: any = () => {
  const data = useLoaderData();

  const { data: fetcherData, load } = useFetcher();
  return (
    <div>
      <div>Loader data: {data.data}</div>
      <div>
        Fetcher data from api.helloWorld: <span>{fetcherData?.data}</span>{' '}
      </div>
      <div>
        Fetcher data from api.helloWorldNamed: <span>{fetcherData?.data}</span>{' '}
      </div>

      <button
        onClick={(e) => {
          load('/api/helloWorld');
        }}
      >
        fetch from api.helloWorld
      </button>

      <button
        onClick={(e) => {
          load('/api/helloWorldNamed');
        }}
      >
        fetch from api.helloWorldNamed
      </button>
    </div>
  );
};

export default TestingIndexRouteRoute;
