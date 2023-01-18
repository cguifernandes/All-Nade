/* eslint-disable @next/next/no-page-custom-font */
import Cadastro from '@/components/Cadastro/cadastro';
import Header from '@/components/Header/header'
import Head from 'next/head'
import { useState } from 'react';

export default function Home() {
  const [activeForm, setActiveForm] = useState(false);

  return (
    <>
      <Head>
        <title>All Nade</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Header setActiveForm={setActiveForm}/>
      {
        activeForm &&
        <Cadastro setActiveForm={setActiveForm} />
      }
    </>
  )
}
