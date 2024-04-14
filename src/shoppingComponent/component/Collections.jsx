import React from 'react';
import { Link } from 'react-router-dom';

const Collections = (props) => {
    const { title, image1, image2, image3, image4, image5 } = props.photo;

    return (
        <div className="collection-section">
            <div className="allimages">
                <Link to='/Hats'>
                    <img src={image1} alt={title}/>
                </Link>

                <Link to='/Jackets'>
                    <img src={image2} alt={title}/>
                </Link>

                <Link to='/Shoes'>
                    <img src={image4} alt={title} />
                </Link>
            </div>
            <div className="category">
                <Link to='/Men'>
                    <img src={image3} alt={title} />
                </Link>

                <Link to='/Women'>
                    <img src={image5} alt={title} />
                </Link>
            </div>
        </div>
    );
}

export default Collections;
