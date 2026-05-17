import { Question1 } from '@/helpers/image'
import { LiaQuestionSolid } from 'react-icons/lia'

export default function Questionone() {
    return (
        <div>
            <div className="flex-between border-bottom text-brand-primary">
                <span className="font-size-20">Previous Year Question Paper</span>
                <LiaQuestionSolid />
            </div>
            <div className='mt-3 border rounded-3 shadow w-100 vh-80'>
                <iframe
                    src={Question1}
                    title="Ebook"
                    width="100%"
                    height="100%"
                    style={{ border: "none" }}
                    className='border rounded-3 shadow w-100 vh-85'
                />
            </div>
        </div>
    )
}
