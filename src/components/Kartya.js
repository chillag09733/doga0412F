import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { ApiContext } from '../context/ApiContext';

function Kartya() {
    const { list, getAdat } = useContext(ApiContext)

    return (
        <>
            {list.map((tev) => {
                return <Card style={{ width: '18rem' }} tev={tev} key={tev.id}>
                    <Card.Body>
                        <Card.Title>{tev.kat_id}</Card.Title>
                        
                    </Card.Body>
                </Card>
            })}

        </>

    )
}

export default Kartya