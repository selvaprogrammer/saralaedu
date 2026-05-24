import AppHeader from "@/components/templates/AppHeader";
import { Question3 } from "@/helpers/image";
import { LiaQuestionSolid } from "react-icons/lia";

export default function Questionthree() {
  return (
    <div>
      <AppHeader label="Question" link="/question" title="Question Paper 3" />
      <div className='mt-3 border rounded-3 shadow w-100 vh-80'>
        <iframe
          src={Question3}
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
