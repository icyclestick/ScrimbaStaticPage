import reactLogo from '../assets/react.svg'

export default function NavBar() {
    return (
        <header className='header'>
            <nav className='nav'>
                <img className='react-logo' src={reactLogo} alt='react-logo' />
                <h1>React Facts</h1>
            </nav>
        </header>
    )
}