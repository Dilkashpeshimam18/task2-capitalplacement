import React from 'react'
import './HeaderTop.css'
import { LocationOn } from '@mui/icons-material'
const HeaderTop = () => {
    return (
        <div className='headerTop'>
            <div className='headerTop__container'>
                <h5 style={{ fontWeight: '700' }}>Marketing and Business Develeopement Intern</h5>
                <div style={{ display: 'flex', marginLeft: '30px' }}>
                    <p style={{ fontSize: '14px', padding: '5px', textDecoration: 'underline' }}>SaasLeads</p>
                    <p style={{ fontSize: '14px', padding: '5px', marginLeft: '30px' }}><LocationOn sx={{ fontSize: '11px', marginRight: '3px' }} />Lodon,UK</p>
                    <p style={{ fontSize: '14px', padding: '5px', marginLeft: '30px' }}>View job description</p>
                </div>

            </div>
        </div>
    )
}

export default HeaderTop