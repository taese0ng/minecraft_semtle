import React, {useState, useEffect} from 'react';
import {Pagination} from 'react-bootstrap';
import '../scss/TablePagination.scss';

function TablePagination(props){
    const [items, setItems] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        let division = 10;
        if (width >= 700){
            division = 10;
        }
        else{
            division=5;
        }
        const pagiNum = Math.ceil(props.num/10);
        let startNum = parseInt(props.activePage/division);
        setItems([]);
        for(let i=(startNum*division), cnt=0;
         i<pagiNum && cnt!==division; i++){
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
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[props,width]);

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
        <Pagination className="my-auto justify-content-center">
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