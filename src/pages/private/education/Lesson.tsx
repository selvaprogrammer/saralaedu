import MetaTag from '@/components/templates/MetaTag'
import AppButton from "@/components/organisams/AppButton";
import { FaArrowRight } from "react-icons/fa6";
import { Fragment } from 'react/jsx-runtime';
import { useNavigate } from 'react-router-dom';

const lessons = [
  { name: "சுவாசம் / Respiration", link: "/respiration" },
  { name: "உடல்திரவங்கள் மற்றும் சுற்றோட்டம் / Body Fluids and Circulation", link: "/bodyfluids" }
]
export default function Lesson() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <MetaTag title="Lesson" />
      <div className="container">
        <div className="flex-column-center vh-100">
          <h4>Lessons</h4>
          {lessons.map((e, i) => {
            return (
              <div key={i} className="w-100 shadow p-2 rounded-3 flex-between">
                <span>{e.name}</span>
                <AppButton
                  label='View'
                  endIcon={<FaArrowRight />}
                  className="bg-primary-gradient text-white"
                  onClick={() => { navigate(e.link); }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </Fragment>
  )
}
