
//  Napravite SpaceX aplikaciju s navedenim view-ovima: HomeView, LaunchesView, RocketsView,
// ShipsView.
// Definišite rute u App.js.
// II.

// Napravite komponentu Navbar koja će sadržati logo i navigacione tabove.
// Dodajte logo iz /assets/SpaceX-Logo.svg u Navbar. Klikom na logo korisnik treba da bude
// preusmeren na HomeView.
// Navbar će sadržati podkomponentu NavTabs.
// NavTabs će imati podkomponente NavTabsItem kojima se prosleđuju vrednosti "Launches",
// "Rockets", "Ships".
// U NavTabsItem komponenti koristićemo Link komponentu za rutu koja se dobija iz props-a value.


// import logoSvg from '../../Space-LogoX.svg';
import {ReactComponent as Logo} from '../../assets/SpaceX-Logo.svg';
import { useNavigate } from 'react-router-dom';
import {NavTabs} from '.';


const Navbar = () => {
    const navigate = useNavigate();

    return <div className="navbar">
        <Logo fill='white' onClick={() => navigate('/')} style={{cursor: 'pointer'}} />
        <NavTabs />
    </div>
}

export default Navbar;