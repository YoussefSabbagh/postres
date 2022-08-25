import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './userValidations';

import { toast } from 'react-toastify';

import { getError } from '../../utils/errors';
import Layout from '../../components/Layout';

export default function LoginScreen() {
  const [isError, setIsError] = useState('');

  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  const intialValues = {
    email: '',
    password: '',
  };

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: intialValues,
    mode: 'all',
  });

  const onSubmit = async ({ email, password }) => {
    console.log(email, password);
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Login">
      <section className="bg-fixed text-myBlack bg-login-pattern bg-cover bg-center relative flex flex-col justify-center items-center min-h-[calc(100vh_-_var(--header-height))]">
        <article className="bg-myPink/70 h-[600px] w-[420px] max-w-full p-4 rounded-xl flex flex-col justify-center items-center ">
          <h2 className="text-3xl font-title">Gracias por volver</h2>

          <form
            className="mx-auto max-w-screen-md "
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="mb-4 text-2xl text-center ">Login</h1>
            <div className="mb-4">
              <label htmlFor="email" className="font-bold">
                Email
              </label>
              <input
                type="email"
                placeholder="jonh@correo.com"
                autoFocus
                {...register('email')}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="font-bold">
                Clave
              </label>
              <input
                type="password"
                placeholder="clave"
                autoFocus
                {...register('password')}
              />
              {errors.password && (
                <div className="text-red-500 text-xs ">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="mb-4 text-center">
              <button className="btn py-4 px-16 border-none rounded-none bg-myRose hover:bg-transparense hover:text-myRose">
                Ingresar
              </button>
            </div>
            <div className="mb-4 ">
              ¿No esta registrado? &nbsp;
              <Link href={`/register?redirect=${redirect || '/'}`}>
                <span className="text-myRose">Registarse</span>
              </Link>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  );
}
