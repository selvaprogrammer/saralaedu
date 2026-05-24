import AppHeader from '@/components/templates/AppHeader'
import { Question1 } from '@/helpers/image'

export default function Questionone() {
    return (
        <div>
            <AppHeader label="Question" link="/question" title="Question Paper 1" />
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
