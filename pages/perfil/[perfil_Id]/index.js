import { Fragment } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';

import Head from 'next/head';
import Layout from '@/components/Layout';
import PerfilContent from '@/components/PerfilContent';

function Perfil() {
  const { currentUser } = useAuth();

  const token = currentUser?.accessToken;
  console.log('token', token);

  const [userData, setUserData] = useState('');

  useEffect(() => {
    const buscarDadosDoUsuario = async () => {
      try {
        if (currentUser) {
          const dadosDoUsuario = await getUserData(currentUser.uid);
          setUserData((userData) => dadosDoUsuario);
          console.log('userdata', userData);
        } else {
          setUserData(null);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error.message);
        setUserData(null);
      }
    };

    buscarDadosDoUsuario();
  }, []);

  const getUserData = async (uid) => {
    const db = getDatabase();
    const usuarioRef = ref(db, `cadastro/${uid}`);

    try {
      const snapshot = await get(usuarioRef);
      if (snapshot.exists()) {
        const dadosDoUsuario = snapshot.val();
        console.log('Dados do usuário:', dadosDoUsuario);
        return dadosDoUsuario;
      } else {
        console.log('Usuário não encontrado no banco de dados.');
        return null;
      }
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error.message);
      throw error;
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Perfil</title>
        <meta name='description' content='Meu caderno de receitas.' />
        <meta name='keywords' content='Receitas, Caderno, Culinária, Receita' />
      </Head>
      <Layout>
        {token ? (
          <PerfilContent
            userName={userData ? userData.userName : 'erro ao carregar dados'}
            userEmail={userData ? userData.email : 'erro ao carregar dados'}
          />
        ) : (
          <p>Nenhum usuário logado.</p>
        )}
      </Layout>
    </Fragment>
  );
}

export default Perfil;
