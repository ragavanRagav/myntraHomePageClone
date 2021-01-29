import "./header.css"
import myntra from '../../assets/images/myntra.png';
import bag from '../../assets/images/bag.png';
import prof from '../../assets/images/prof.png';
import wishlist from '../../assets/images/wishlist.png';
export  const Header=()=>{
    return(
        <div className='header'>
            <div className='d-flex'>
                <div className='logo'>
                    <img className='logo' src={myntra} alt='header' />
                </div>
                <div className='navigation'>
                    <ul className='navigationUl'>
                        <li className='navigationLi'>men</li>
                        <li className='navigationLi'>women</li>
                        <li className='navigationLi'>kids</li>
                        <li className='navigationLi'>home&living</li>
                        <li className='navigationLi'>offers</li>
                    </ul>
                </div>
            </div>
            <div  className='d-flex paddingZ tAdjust'>
                <div className='search'>
                    <span className='searchButton'>
                        <img src='https://www.pngfind.com/pngs/m/54-545482_vector-search-icon-search-icon-vector-png-transparent.png' alt='log' />
                    </span>
                    <input className='searchInputBox' type='search' placeholder='Search for products, brands and more' />
                </div>
                <div className='navigation'>
                    <ul className='navigationUl'>
                        <li className='navigationLi paddingZ'>   
                            <img className='logos' src={prof} alt='header' />
                        </li>
                        <li className='navigationLi paddingZ'>   
                            <img className='logos' src={wishlist} alt='header' />
                        </li>
                        <li className='navigationLi paddingZ'>   
                            <img className='logos' src={bag} alt='header' />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}