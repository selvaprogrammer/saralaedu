import AppHeader from '@/components/templates/AppHeader'
import { Zoology_English } from '@/helpers/image'

export default function Bookfour() {
    return (
        <div>
            <AppHeader label="Ebook" link="/ebook" title="Zoology English Book" />
            <div className='mt-3 border rounded-3 shadow w-100 vh-80'>
                <iframe
                    src={Zoology_English}
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
