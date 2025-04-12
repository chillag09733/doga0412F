import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext';
import Sor from './Sor';
import Card from 'react-bootstrap/Card';

function Kartya() {
    const { list } = useContext(ApiContext)
    console.log(list)
    return (
        <Card style={{ width: '25rem' }}>
            {list.map((tev) => {
                return <Sor tev={tev} key={tev.id} />;
            })}
        </Card>

    )
}

export default Kartya