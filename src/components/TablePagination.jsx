import React, {useState, useEffect} from 'react';
import {Pagination} from 'react-bootstrap';
import '../scss/TablePagination.scss';

function TablePagination(props){
    const [items, setItems] = useState([]);

    useEffect(()=>{
        const pagiNum = parseInt(props.num/10);
        const active = 2;
        setItems([]);
        for(let i=1; i<=pagiNum && i<=10; i++){
            setItems(items=>[...items,
                <Pagination.Item key={i} active={i===active}>
                    {i}
                </Pagination.Item>
            ])
        };
    },[props]);

    return(
        <Pagination className="my-auto">
            <Pagination.First/>
            <Pagination.Prev/>
            {items}
            <Pagination.Next/>
            <Pagination.Last/>
        </Pagination>
    )
}

export default TablePagination;