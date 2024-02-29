import  './style.css';
import NavTabsItem from '';
import *as routes from ''


const NavTabs = () => {

    return <div className='navtavs-wrapper'>
      
      {Object.values(routes).map(route => <NavTabsItem value={route} />)}
      
       {/* <NavTabsItem value='Launches' />
       <NavTabsItem value='Launches' />
       <NavTabsItem value='Launches' /> */}
    </div>
}

export default NavTabs;