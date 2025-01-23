import logoImage from '../assets/investment-calculator-logo.png'

function Header(){
    return (
    <div id="header">
        <header>
            <img src={logoImage} alt="logoImage" />
            <h1>React Investment Calculator</h1>
        </header>
    </div>
    )}

export default Header;