import { useEffect, useState } from 'react';
import EmailData from './EmailData'
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { CommonAction } from '@/store/action/public';
import { config } from '@helpers/configuration';
import NarrativeData from '../coding/NarrativeData';
import NarrativeForm from '../coding/NarrativeForm';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { Appdispatch } from '@/store/service';
import { RESET } from '@/store/type/public';

export default function EmailsView() {
    const dispatch = useDispatch<AppDispatch>();
    const [comment, setComment] = useState(null);
    useEffect(() => { return () => { dispatch(Appdispatch(RESET)); console.log('unmount'); } }, [])
    return (
        <div className='p-2 row'>
            <div className="flex-between border-bottom text-brand-primary">
                <span className="font-size-20 ">Emails Intake</span>
                <MdOutlineMarkEmailRead size={20} />
            </div>
            <div className='col-3'>
                <EmailData onmail={(e) => { setComment(e.comment) }} />
            </div>
            <div className='col-9'>
                <NarrativeForm comment={comment} onSubmit={(e) => {dispatch(CommonAction('narrative', config.imdrf, e, 'post'));}} />
                <NarrativeData />
            </div>
        </div>
    )
}
