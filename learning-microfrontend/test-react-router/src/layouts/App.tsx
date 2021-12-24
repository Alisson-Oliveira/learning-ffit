import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type AppProps = {
  children: ReactNode
}

export function App({ children }: AppProps) {
  return (
    <main>
      <h1>@ffit/test-react-router</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  )
}