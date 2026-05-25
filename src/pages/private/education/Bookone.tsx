import AppHeader from '@/components/templates/AppHeader'
import { Biology_Tamil } from '@/helpers/image'

export default function Bookone() {
  return (
    <div >
      <AppHeader label="Ebook" link="/ebook" title="XI STD Biology - Tamil Medium" />
      <div className='mt-3 border rounded-3 shadow w-100 vh-80'>
        <iframe
          src={Biology_Tamil}
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
