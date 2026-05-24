import AppButton from '@/components/organisams/AppButton';
import MetaTag from '@/components/templates/MetaTag'
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
const ebook = [
  { name: "Biology - Tamil", link: "/book1" },
  { name: "Biology - English", link: "/book2" },
  { name: "Zoology - Tamil", link: "/book3" },
  { name: "Zoology - English", link: "/book4" }
]
export default function Ebook() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <MetaTag title="Lesson" />
      <div className="container">
        <div className="flex-column-center vh-100">
          <h4>Lessons</h4>
          {ebook.map((e, i) => {
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
