import React, { useContext, useState } from 'react'
import { ApiContext } from '../context/ApiContext';

function Sor(props) {
    const { deleteAdat, setList } = useContext(ApiContext);
    const [statusz, setStatusz] = useState(false);
    console.log(props)
    
    function handleStatusz() {
        if (!statusz) {
            setStatusz(true)
        }
    }

    return (
        <div className='kartya'>
            <div>
                {props.tev.tev_nev}
            </div>

            <button className='btn' onClick={handleStatusz}>✔</button>

            <button className='btn' onClick={() => { deleteAdat(`http://localhost:8000/api/tevekenysegs/${props.tev.id}`, setList) }}>❌</button>

        </div>
    )
}

export default Sor