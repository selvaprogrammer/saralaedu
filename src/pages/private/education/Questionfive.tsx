import AppHeader from '@/components/templates/AppHeader'
import { Question5 } from '@/helpers/image'

export default function Questionfive() {
  return (
     <div>
      <AppHeader label="Question" link="/question" title="Question Paper 5" />
      <div className='mt-3 border rounded-3 shadow w-100 vh-80'>
        <iframe
          src={Question5}
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
