import AppButton from "@/components/organisams/AppButton";
import { FaLink } from "react-icons/fa6";

export default function Neet() {
    const evl = [
        { name: "NEET ZOOLOGY KALVITV VIDEOS-ALL CHAPTERS", link: "https://www.youtube.com/playlist?list=PL-mvKYotpGsJZH_Qy4JGU7Lj86GIbu2dv" },
        { name: "NEET ZOOLOGY -BODY FLUIDS", link: "https://youtu.be/V4s5ttLUysA?si=6UvpdB9X3mbyhrOK" },
        { name: "NEET ZOOLOGY -BLOOD CIRCULATIONS", link: "https://youtu.be/V4s5ttLUysA?si=5fQEWJbTWqIjO_9X" },
        ]
    return (
        <div className="container">
            <div className="flex-column-center vh-100">
                <h4 className="mb-2">NEET STUDY MATERIALS</h4>
                {evl.map((e, i) => {
                    return (
                        <div key={i} className="w-100 shadow p-2 rounded-3 flex-between">
                            <span>{e.name}</span>
                            <AppButton
                                label='View'
                                endIcon={<FaLink />}
                                className="bg-primary-gradient text-white"
                                onClick={() => { window.open(e.link, "_blank"); }}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
