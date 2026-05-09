import { LoaderImage } from "@/helpers/image";

export default function Loader() {
    return (
        <div style={{ height: '100vh' }} className='d-flex align-items-center justify-content-center'>
            <img src={LoaderImage} alt='loader' />
        </div>
    )
}
