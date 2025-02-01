import logoImage from '../../assets/investment-calculator-logo.png'

function Header() {
    return (
        <header id="header">
            <img src={logoImage} alt="logoImage" />
            <h1>React Investment Calculator</h1>
        </header>
    )
}

export default Header;