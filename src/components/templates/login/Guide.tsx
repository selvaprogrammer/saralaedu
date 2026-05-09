import { iGuide } from '@/helpers/image'
import About from "@assets/image/about.png"
export default function Guide() {
    return (
        <div className='container'>
            <div className='row d-flex align-items-center vh-100'>
                <div className='col-8'>
                    <img src={iGuide} className='w-100' />
                </div>
                <div className='col-4 border p-2  rounded-3'>
                    <div className='border-top p-2 shadow rounded-top-3 text-center'>
                        <span className="text-brand-primary">Guide's Profile</span>
                    </div>
                    <div className='flex-row-between'>
                        <img src={About} className='vh-25' />
                        <div>
                            <p className='font-size-14'>Prof.. Name</p>
                            <p className='font-size-14'>Prof.. Position</p>
                            <p className='font-size-14'>Prof.. University</p>
                            <p className='font-size-14'>Prof. Address</p>
                        </div>
                    </div>
                     <div className='border-top p-2 shadow rounded-top-3 text-center'>
                        <span className="text-brand-primary">About Guide</span>
                    </div>
                    <span className='font-size-14'>Guide details Goes Here...</span>
                </div>
            </div>
        </div>
    )
}
