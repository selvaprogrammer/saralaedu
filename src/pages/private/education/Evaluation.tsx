import AppButton from "@/components/organisams/AppButton";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function Evaluation() {
  const evl = [
    { name: "Respiration - Quiz 1", link: "/quiz1" },
    { name: "Respiration - Quiz 2", link: "/quiz2" },
    { name: "Respiration - Quiz 3", link: "/quiz3" },
    { name: "Body Fluid and Circulation - Quiz 1", link: "/quiz4" },
    { name: "Body Fluid and Circulation - Quiz 2", link: "/quiz5" },
    { name: "Body Fluid and Circulation - Quiz 3", link: "/quiz6" },
  ]
  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="flex-column-center vh-100">
        <h4>Self Assesment Quiz Links</h4>
        {evl.map((e, i) => {
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
  );
}