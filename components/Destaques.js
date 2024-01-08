import Link from 'next/link';

import Card from './util/card';
import classes from '../styles/Destaques.module.css';

const dataMock = [
  {
    id: 'r01',
    titulo: 'Panquecas de banana',
    imagem:
      'https://blog.gsuplementos.com.br/wp-content/uploads/2022/12/panqueca-de-banana.jpg',
    descricao: 'Foto da receita',
  },
  {
    id: 'r02',
    titulo: 'Crepe salgado',
    imagem:
      'https://img.cybercook.com.br/receitas/63/massa-para-crepe-no-palito-2.jpeg',
    descricao: 'Foto da receita',
  },
  {
    id: 'r3',
    titulo: 'Feijoada',
    imagem:
      'https://blog.biglar.com.br/wp-content/uploads/2021/10/typical-brazilian-dish-called-feijoada-made-with-black-beans-pork-sausage.jpg',
    descricao: 'Foto da receita',
  },
  {
    id: 'r4',
    titulo: 'Bolo de laranja',
    imagem:
      'https://imagens-revista.vivadecora.com.br/uploads/2021/08/Como-fazer-bolo-de-laranja-com-calda-Foto-Istock.jpg',
    descricao: 'Foto da receita',
  },
  {
    id: 'r5',
    titulo: 'Pão de queijo',
    imagem:
      'https://static.itdg.com.br/images/auto-auto/c191b11438b416fedce2c6edf6e74e3b/receitas-com-3-ingredientes.jpg',
    descricao: 'Foto da receita',
  },
  {
    id: 'r6',
    titulo: 'Escondidinho de carne seca',
    imagem:
      'https://img.nsctotal.com.br/wp-content/uploads/2022/10/shutterstock_1948419406-1-1.jpg',
    descricao: 'Foto da receita',
  },
];

function Destaques() {
  return (
    <>
      <section className={classes.destaques}>
        <h2>Compartilhadas</h2>
        <div className={classes.receitas}>
          {dataMock.map((receita) => (
            <Card
              key={receita.id}
              titulo={receita.titulo}
              imagem={receita.imagem}
              desc={receita.descricao}
            />
          ))}
        </div>

        <Link href={'#'}>Ver mais</Link>
      </section>
    </>
  );
}

export default Destaques;
