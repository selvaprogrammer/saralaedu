import MetaTag from '@/components/templates/MetaTag'
import { Dashimg } from '@/helpers/image'
import React, { Fragment } from 'react'
import { MdOutlineDashboardCustomize } from 'react-icons/md'

export default function Dashboard() {
    return (
        <Fragment>
            <MetaTag title="Dashboard" />
            <div className='p-2'>
                <div className="flex-between border-bottom text-brand-primary">
                    <span className="font-size-20">Dashboard</span>
                    <MdOutlineDashboardCustomize size={20} />
                </div>
                <img src={Dashimg} className='vh-85 w-100'/>
            </div>
        </Fragment>
    )
}
