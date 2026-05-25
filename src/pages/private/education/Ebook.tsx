import AppButton from '@/components/organisams/AppButton';
import MetaTag from '@/components/templates/MetaTag'
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
const ebook = [
  { name: "XI STD Biology - Tamil Medium", link: "/book1" },
  { name: "XI STD Biology - English Medium", link: "/book2" },
  { name: "XI STD Zoology - Tamil Medium", link: "/book3" },
  { name: "XI STD Zoology - English Medium", link: "/book4" }
]
export default function Ebook() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <MetaTag title="Lesson" />
      <div className="container">
        <div className="flex-column-center vh-100">
          <h4>Ebook</h4>
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
