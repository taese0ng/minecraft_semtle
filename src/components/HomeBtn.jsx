import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import HomeBtnImage from '../assets/HomeBtn.png';

function HomeBtn(){
    return(
        <Link style={{ textDecoration:'none' }} to="/">
            <Button
            style={{zIndex:'999'}}
            variant="warning" 
            size="lg"
            className="position-absolute m-3 p-1 z4">
                <img src={HomeBtnImage} alt="HomeBtn" width="40" height="50"/>
            </Button>
        </Link>
    )
}

export default HomeBtn;