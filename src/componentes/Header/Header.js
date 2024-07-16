import './Header.css';

function Header(){
    return <header className='header'>
        <img src="/img/Header.png" alt='logo'/>
        <div>
            <button className='home'>Home</button>
            <button className='newVideo'>Nuevo Proyecto</button>
        </div>
    </header>

}

export default Header