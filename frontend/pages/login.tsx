import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Input from '../components/UI/Input';

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submit = () => {
    console.log({ email, password });
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Navbar />
      <div className="w-full my-2 mt-8">
        <div className="container mx-auto flex justify-center">
          <div className="inline-flex flex-col gap-4">
            <div className="text-2xl font-bold text-center mb-4">Login</div>
            <div className="flex flex-col gap-0.5">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onInput={setEmail}
                id="email"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onInput={setPassword}
                id="password"
              />
            </div>
            <div className="flex">
              <button
                className="w-full px-2 py-1 bg-violet-500 text-white font-semibold rounded"
                onClick={submit}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
