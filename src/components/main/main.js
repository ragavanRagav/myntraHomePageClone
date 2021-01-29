import './main.css';
import {categories} from '../../assets/images';

export const Main =()=>{
    console.log(categories);
    return(
        <div>
            {
                categories.map((element,index) =>{
                    return(
                        <div key={index}>
                        <h4 className="dealHeading">{element.Heading}</h4>
                        {/* <h4 className="dealSubHeading"></h4> */}
                        <div className="productBlock">
                            <div className="productInnerBlock">
                            {
                                element.url.map((e,index) =>{
                                    return(
                                        <img key={index} className='product-cards' src={e} alt="product" />
                                    )
                                })
                            }
                            </div>
                            <div className="flatOfferBlock">
                                <div className="flatOfferArrow"></div>
                                <div className="flatOfferText">flat &#8377; 300 off</div>
                            </div>
                        </div>
                        </div>
                    );
                })
            }
        </div>
    );
}