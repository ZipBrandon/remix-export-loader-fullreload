import type { MetaFunction } from "@remix-run/node";
import { redirect, useLoaderData } from 'react-router';
import { Link, useFetcher } from '@remix-run/react';
import React from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader(data) {
  throw redirect('/testing')
}

export default function Index() {
  return (
    <div>
        <Link to={'/testing'}>Go to testing</Link>
    </div>
  );
}
