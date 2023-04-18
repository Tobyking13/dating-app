import colorLogo from '../images/color.png'
import minimalLogo from '../images/minimal.png'

const NavBar = ({ minimal, authToken, showModal, setShowModal }) => {

    const handleClick = () => {
        setShowModal(true)
    }

    return (
        <nav>
            <div className="logo-container">
                <img className='logo' src={minimal ? colorLogo : minimalLogo} alt=''></img>
            </div>
            {!authToken && !minimal && <button className='nav-button' onClick={handleClick} disabled={showModal}>
                Log In
            </button>}
        </nav>
    )
}

export default NavBar;