import React, { useState } from 'react'
import './HeaderTabs.css'
import Divider from '@mui/material/Divider';

const HeaderTabs = () => {
    const [selected, setSelected] = useState(true)
    return (
        <div className='headerTabs'>
            <div className='headerTabs__container'>
                <div className={`${selected == true ? 'selected' : 'headerTabs__subContainer'}`}>
                    <div>
                        <h4>5</h4>
                        <span>Recommend</span>

                    </div>
                    <div>
                        <Divider orientation="vertical" />

                    </div>

                </div>
                <div className='headerTabs__subContainer'>
                    <div>
                        <h4>3</h4>
                        <span>Shortlisted</span>

                    </div>

                    <div>
                        <Divider orientation="vertical" />

                    </div>

                </div>
                <div className='headerTabs__subContainer'>
                    <div>
                        <h4>1</h4>
                        <span>Offer</span>
                        <Divider orientation="vertical" />

                    </div>


                </div>
                <div className='headerTabs__subContainer'>
                    <div>
                        <h4>0</h4>
                        <span>Hired</span>
                        <Divider orientation="vertical" />

                    </div>


                </div>

            </div>
            <Divider sx={{ width: '100%' }} />

        </div>
    )
}

export default HeaderTabs