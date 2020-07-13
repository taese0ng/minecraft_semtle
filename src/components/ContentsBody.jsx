import React from 'react';
import '../scss/BackGround.scss';
import HomeBtn from './HomeBtn.jsx';

function ContentsBody(props){
    return(
        <div id="ContentsBody">
            <HomeBtn/>
            <props.page/>
        </div>
    )
}

export default ContentsBody;