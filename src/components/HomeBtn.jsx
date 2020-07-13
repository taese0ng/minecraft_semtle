import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function HomeBtn(){
    return(
        <Link style={{ textDecoration:'none'}} to="/">
            <Button 
            variant="success" 
            size="lg" 
            className="position-absolute m-3 z-index-3">
                <span role="img" aria-label="home">
                    🏠
                </span>
            </Button>
        </Link>
    )
}

export default HomeBtn;