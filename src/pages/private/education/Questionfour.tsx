import AppHeader from '@/components/templates/AppHeader'
import { Question4 } from '@/helpers/image'
import { LiaQuestionSolid } from 'react-icons/lia'

export default function Questionfour() {
  return (
    <div>
      <AppHeader label="Question" link="/question" title="Question Paper 4" />
      <div className='mt-3 border rounded-3 shadow w-100 vh-80'>
        <iframe
          src={Question4}
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
