/* eslint-disable @next/next/no-page-custom-font */
import Cadastro from '@/components/Cadastro/cadastro';
import Header from '@/components/Header/header'
import Head from 'next/head'
import Login from '../components/Login/login';
import { useState } from 'react';
import Main from '@/components/Main/main';

export default function Home() {
  const [activeCadastro, setActiveCadastro] = useState(false);
  const [activeLogin, setActiveLogin] = useState(false);

  return (
    <>
      <Head>
        <title>All Nade</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Header setActiveCadastro={setActiveCadastro}/>
      {
        activeCadastro &&
          <Cadastro setActiveLogin={setActiveLogin} setActiveCadastro={setActiveCadastro} />        
      }
      {
        activeLogin &&
          <Login setActiveLogin={setActiveLogin} setActiveCadastro={setActiveCadastro} />        
      }
      <Main />
    </>
  )
}
