import AppButton from "@/components/organisams/AppButton";
import AppHeader from "@/components/templates/AppHeader";
import { FaLink } from "react-icons/fa6";
import { Fragment } from "react/jsx-runtime";

export default function Kalvi() {
    const Kalvidata = [
        { title: "KALVI TV XI BIOLOGY VIDEOS ", content: [{ name: "BIOLOGY", link: "https://www.youtube.com/playlist?list=PL-mvKYotpGsK5c724-HNCS-Xl9-zfLcUJ" }] },
        {
            title: "KALVI TV - RESPIRATION VIDEOS",
            content: [
                { name: "Respiration 1", link: "https://youtu.be/2dO8Zjbxuzw?si=VvLmsKvEbqQQ4hvj" },
                { name: "Respiration 2", link: "https://youtu.be/b4fcCCjBigg?si=OPaRIm_OQ2adWCMN" },
                { name: "Respiration 3", link: "https://youtu.be/8FcYhXRho6s?si=zIBBIy65PdakaLFO" },
                { name: "Respiration 4", link: "https://youtu.be/f-S_WgGplx8?si=pqF3y7pVNUfYMM0N" },
                { name: "Respiration 5", link: "https://youtu.be/eKPkFLK3jQU?si=FdxhORgdrmvQmJwu" }
            ]
        },
        {
            title: "KALVI TV - BODY FLUID AND CIRCULATION",
            content: [
                { name: "Body Fluid and Circulation 1", link: "https://youtu.be/flZEAnviJvY?si=RWpKYy_nv2PabSMS" },
                { name: "Body Fluid and Circulation 2", link: "https://youtu.be/a6RCl2SHILY?si=dhFsBPh7fFZbzQpC" },
                { name: "Body Fluid and Circulation 3", link: "https://youtu.be/MRQv6NIQipk?si=Y1SplpduJaJzV5td" },
                { name: "Body Fluid and Circulation 4", link: "https://youtu.be/M6kiP1hpQ3o?si=IqfW5lbhhQAxuEbC" },
                { name: "Body Fluid and Circulation 5", link: "https://youtu.be/22dcVIqHi3k?si=Twfrw9A-plSWMYEK" }
            ]
        },
    ]
    return (
        <Fragment>
            <AppHeader label="Furthur Learning" link="/furthur" title="KALVI TV" />
            <div className="flex-column-center">
                    {Kalvidata.map((e, i) => {
                        return (
                            <div className="mb-2 w-100">
                                <h4>{e.title}</h4>
                                {e.content.map((e, i) => {
                                    return (
                                        <div key={i} className="w-100 shadow p-2 rounded-3 flex-between">
                                            <span className="">{e.name}</span>
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
                        )
                    })}

                </div>
        </Fragment>
    );
}
