import React, {useState, useEffect} from 'react';
import {Pagination} from 'react-bootstrap';
import '../scss/TablePagination.scss';

function TablePagination(props){
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const pagiNum = Math.ceil(props.num/10);
        let startNum = parseInt(props.activePage/10);

        setItems([]);
        for(let i=(startNum*10), cnt=0;
         i<pagiNum && cnt!==10; i++){
            cnt++;
            setItems(items=>[...items,
                <Pagination.Item 
                onClick={()=>props.changePage(i)}
                key={i} 
                active={i===parseInt(props.activePage)}>
                    {i+1}
                </Pagination.Item>
            ])
        };
    },[props]);

    function nextPagi(){
        let nowPage = parseInt(props.activePage);
        let maxPage = Math.ceil(props.num/10);
        if(maxPage-1>nowPage){
            props.changePage(nowPage+1);
        }
    }

    function prevPagi(){
        let nowPage = parseInt(props.activePage);
        if(nowPage>0){
            props.changePage(nowPage-1);
        }
    }

    function prevFirst(){
        props.changePage(0);
    }

    function nextLast(){
        props.changePage(Math.ceil(props.num/10)-1);
    }

    return(
        <Pagination className="my-auto">
            <Pagination.First
            onClick={prevFirst}/>
            <Pagination.Prev
            onClick={prevPagi}/>
                {items}
            <Pagination.Next
            onClick={nextPagi}/>
            <Pagination.Last
            onClick={nextLast}/>
        </Pagination>
    )
}

export default TablePagination;