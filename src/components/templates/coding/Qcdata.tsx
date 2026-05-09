import { Empty } from '@/helpers/image'
import { Fragment } from 'react'
import { Placeholder } from 'rsuite'
import { AppAccordion } from '../Accordin'
import type { RootState } from '@/store/reducer';
import { useSelector } from 'react-redux';

export default function Qcdata() {
    const { qcLoading, qcData } = useSelector((state: RootState) => state.public);
    return (
        <Fragment>
            {
                qcLoading ?
                    Array.from({ length: 7 }, (_, i) => (<Placeholder.Paragraph key={i} className="mt-2 mb-2" active />)) :
                    <Fragment>
                        <AppAccordion title={'Qc Data'} isOpen onClick={() => { }}>
                            {qcData && Object.entries(qcData)?.length ?
                                Object.keys(qcData)?.map((a, b) => {
                                    return (
                                        <div key={b} className={`row align-items-center py-2 ${b != Object.keys(qcData)?.length-1 ? 'border-bottom' : null} `}>
                                            <div className="col-2 d-flex align-items-center gap-2">
                                                <span className='text-truncate font-size-13'>Code :
                                                    {a}
                                                </span>
                                            </div>
                                            <div className="col-2 text-truncate">
                                                <span className='text-truncate font-size-13'>Score : {qcData[a].score}</span>
                                            </div>
                                            <div className="col-8 text-truncate">
                                                <span className='text-truncate font-size-13'>Reason : {qcData[a].reason}</span>
                                            </div>
                                        </div>)
                                }) :
                                <span className="d-flex align-item-center justify-content-center"><img src={Empty} className="w-50" /></span>}
                        </AppAccordion>
                    </Fragment>
            }
        </Fragment>
    )
}
