import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <main className='Missing'>
            <h2>Strony nie znaleziono</h2>
            <p>Cóż trochę szkoda no ale trudno</p>
            <p>
                <Link to='/'>Odwiedź nasz Homepage</Link>
            </p>
        </main>
    )
}

export default Missing