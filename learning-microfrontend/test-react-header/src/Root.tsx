import { Link, BrowserRouter } from 'react-router-dom';

export default function Root({ name }) {
  return (
    <BrowserRouter>
      <header>
        <h1>{name}</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/test-1'>Single</Link>
            </li>
            <li>
              <Link to='/test-2'>Router</Link>
            </li>
            <li>
              <Link to='/test-3'>Parcel</Link>
            </li>
            <li>
              <Link to='/test-4'>Lazy</Link>
            </li>
          </ul>
        </nav>
      </header>
    </BrowserRouter>
  )
}