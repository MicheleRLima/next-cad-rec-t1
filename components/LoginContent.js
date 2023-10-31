import Link from 'next/link';

function LoginContent() {
  return (
    <form>
      <div>
        <label nhtmlFor='email'>E-mail</label>
        <input id='email'></input>
      </div>
      <div>
        <label htmlFor='password'>Senha</label>
        <input id='password'></input>
      </div>
      <div>
        <button>Entrar</button>
      </div>
      <div>
        <Link href={'/'}>Esqueci minha senha</Link>
        <Link href={'/'}>Quero me cadastrar</Link>
      </div>
    </form>
  );
}

export default LoginContent;
