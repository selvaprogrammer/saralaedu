import AppButton from "@/components/organisams/AppButton";
import AppHeader from "@/components/templates/AppHeader";
import { Body, Body1, Respiration1, iNeet, Kebo, Respiration } from "@/helpers/image";
import { FaLink } from "react-icons/fa6";

export default function Neet() {
    const evl = [
        { name: "NEET ZOOLOGY KALVITV VIDEOS-ALL CHAPTERS", link: "https://www.youtube.com/playlist?list=PL-mvKYotpGsJZH_Qy4JGU7Lj86GIbu2dv" },
        { name: "NEET ZOOLOGY -BODY FLUIDS", link: "https://youtu.be/V4s5ttLUysA?si=6UvpdB9X3mbyhrOK" },
        { name: "NEET ZOOLOGY -BLOOD CIRCULATIONS", link: "https://youtu.be/V4s5ttLUysA?si=5fQEWJbTWqIjO_9X" },
    ];
    const lPdf = [
        { name: "Body Fluid and Circulation", link: Body },
        { name: "Body Fluid and Circulation", link: Body1 },
        { name: "Body Fluid and Circulation", link: Kebo },
        { name: "Respiration", link: Respiration1 },
        { name: "Respiration", link: Respiration },
        { name: "NEET", link: iNeet },
    ];
    return (
        <div >
            <AppHeader label="Furthur Learning" link="/furthur" title="Learning Resources" />
            <div className="flex-column-center vh-100">
                {evl.map((e, i) => {
                    return (
                        <div key={i} className="w-100 shadow p-2 rounded-3 flex-between">
                            <span >{e.name}</span>
                            <AppButton
                                label='View'
                                endIcon={<FaLink />}
                                className="bg-primary-gradient text-white"
                                onClick={() => { window.open(e.link, "_blank"); }}
                            />
                        </div>
                    )
                })}
                <div >
                    <h4>Pdf Learning Materials</h4>
                    <div className="row flex-center">
                        {lPdf.map((e, i) => {
                            return (
                                <div key={i} className="col-4 shadow p-2 rounded-3 flex-between">
                                    <span >{e.name}</span>
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
            </div>
        </div>
    );
}
