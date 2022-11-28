import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/navbar.css'
function Navbar(){
    let navigate = useNavigate();
    return(
        <div className='navbarContainer'>
            <button className='navbarButton' onClick={()=>navigate('/')}>
                View
            </button>
            <button className='navbarButton' onClick={()=>navigate('/add')}>
                Add
            </button>
        </div>
    )
}
export default Navbar;