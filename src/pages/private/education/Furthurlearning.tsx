import AppButton from "@/components/organisams/AppButton";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const fl = [
    { name: "Kalvi Tv", link: "/kalvi" },
    { name: "Learning Resources", link: "/neet" },
]
export default function Furthurlearning() {
    const navigate = useNavigate()
    return (
        <div className="container">
            <div className="flex-column-center vh-100">
                <h4>Furthur Learning Study Materials</h4>
                {fl.map((e, i) => {
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
