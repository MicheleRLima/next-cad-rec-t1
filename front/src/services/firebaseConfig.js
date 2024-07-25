import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyADJG5iaXqpkwsupcTkqsdNCciUyA8bZFE',
  authDomain: 'caderno-receitas.firebaseapp.com',
  databaseURL: 'https://caderno-receitas-default-rtdb.firebaseio.com',
  projectId: 'caderno-receitas',
  storageBucket: 'caderno-receitas.appspot.com',
  messagingSenderId: '882313484536',
  appId: '1:882313484536:web:7cd86d23984546b7cf830d',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export default app;
export { auth, db };
