import "./header.css"
import navBar from '../../assets/images/navBar.png';
export  const Header=()=>{
    return(
        <div className='header'>
            <img src={navBar} alt='header' />
        </div>
    );
}