/* eslint-disable @next/next/no-page-custom-font */
import Cadastro from '@/components/Cadastro/cadastro';
import Header from '@/components/Header/header'
import Head from 'next/head'
import Login from '../components/Login/login';
import { useState } from 'react';
import Main from '@/components/Main/main';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Bar } from '@/styles/favoritesStyles';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  const [activeCadastro, setActiveCadastro] = useState(false);
  const [activeLogin, setActiveLogin] = useState(false);
  const [favorites, setFavorites] = useState(false);

  return (
    <>
      <SkeletonTheme baseColor='#474747' highlightColor='#585858'>
        <Head>
          <title>All Nade</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <Header favorites={favorites} setFavorites={setFavorites} setActiveCadastro={setActiveCadastro}/>
        <div><Toaster/></div>
        {
          activeCadastro &&
            <Cadastro setActiveLogin={setActiveLogin} setActiveCadastro={setActiveCadastro} />        
        }
        {
          activeLogin &&
            <Login setActiveLogin={setActiveLogin} setActiveCadastro={setActiveCadastro} />        
        }
          <Bar className={favorites ? "active" : ""}>
            <p>oi</p>
          </Bar>
        <Main />
      </SkeletonTheme>
    </>
  )
}
