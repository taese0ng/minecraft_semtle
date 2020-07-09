import React from 'react';
import '../scss/BackGround.scss';

function ContentsBody(props){
    return(
        <div id="ContentsBody">
            <props.page/>
        </div>
    )
}

export default ContentsBody;