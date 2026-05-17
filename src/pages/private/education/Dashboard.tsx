import MetaTag from '@/components/templates/MetaTag'
import { Dashimg } from '@/helpers/image'
import React, { Fragment } from 'react'

export default function Dashboard() {
    return (
        <Fragment>
            <MetaTag title="Dashboard" />
            <div className='p-2'>
                <img src={Dashimg} className='vh-90 w-100'/>
            </div>
        </Fragment>
    )
}
