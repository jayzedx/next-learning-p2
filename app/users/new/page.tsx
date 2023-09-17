'use client'; // useRouter only works in Client Components

import { useRouter } from 'next/navigation'; // use navigation (v12) instead router (older v12)
import React from 'react';

const NewUserPage = () => {
  const router = useRouter();

  return (
    <button className="btn btn-primary" onClick={() => router.push('/users')}>
      Create
    </button>
  );
};

export default NewUserPage;
