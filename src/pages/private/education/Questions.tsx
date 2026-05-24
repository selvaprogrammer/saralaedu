import AppButton from '@/components/organisams/AppButton'
import MetaTag from '@/components/templates/MetaTag'
import { Fragment } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
const ques = [
  { name: "Question Paper 1", link: "/que1" },
  { name: "Question Paper 2", link: "/que2" },
  { name: "Question Paper 3", link: "/que3" },
  { name: "Question Paper 4", link: "/que4" },
  { name: "Question Paper 5", link: "/que5" },
]
export default function Questions() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <MetaTag title="Questions" />
       <div className="container">
              <div className="flex-column-center vh-100">
                <h4>Questions</h4>
                {ques.map((e, i) => {
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
