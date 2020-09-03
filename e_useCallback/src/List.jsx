import React, {useState} from 'react';

import './App.css';
import { useEffect } from 'react';

function List({getItems}) {
    const [items, setItems] = useState([])
    useEffect(() => {
        // console.log('Hello');
        setItems(getItems())
    }, [getItems])

    return (
        <ul>
            {items.map(item => <li key={item}>{item}</li>)}
        </ul>
    );
}

export default List;
