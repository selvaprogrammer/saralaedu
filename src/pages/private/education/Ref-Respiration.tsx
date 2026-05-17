import AppButton from "@/components/organisams/AppButton";
import { ResLesson1 } from "@/helpers/image";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const respirationdata = [
    {
        title: "Human Respiratory system",
        link: [
            "https://www.youtube.com/embed/N3-nXUvsjPo",
            "https://www.youtube.com/embed/nCxN-k9bK5w",
            "https://www.youtube.com/embed/ftf4-rtLclg"
        ]
    },
    {
        title: "Mechanism of respiration",
        link: [
            "https://www.youtube.com/embed/JQeol238GHk",
            "https://www.youtube.com/embed/wXQE83rFwb4"
        ]
    },
    {
        title: "RESPIRATION - HOW LUNGS WORK",
        link: [
            "https://www.youtube.com/embed/iq6gQhLxyZg"
        ]
    },
    {
        title: "Respiratory organs in various organisms",
        link: [
            "https://www.youtube.com/embed/8kwsrTqc2vU"
        ]
    },
    {
        title: "BREATHING AND EXCHANGE OF GASES",
        link: [
            "https://www.youtube.com/embed/JQeol238GHk"
        ]
    }
];
export default function RefRespiration() {
    const [isVideo, setIsVideo] = useState(false)
    const [videodata, setVideoData] = useState<any>(null);
    return (
        <div className="container row flex-center">
            {isVideo ?
                <div className="row">
                    <div className="col-12">
                        <div className="flex-between border-bottom text-brand-primary mb-2">
                            <div className="flex-row-center" role="button" onClick={() => { setIsVideo(false); setVideoData(null) }}>
                                <FaArrowLeftLong className="me-2" />
                                <span className="font-size-12">Refernce Respiration</span>
                            </div>
                        </div>
                        <iframe
                            className="shadow rounded-3 flex-center"
                            style={{ width: '100%', height: '90vh' }}
                            src={videodata}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div> :
                respirationdata.map((e, i) => {
                    return (
                        <div className='col-3' key={i}>
                            <div className="mt-2 p-2 text-truncate shadow  border bg-white rounded-top-3 text-brand-primary">
                                <span className="font-size-14 ">{e?.title}</span>
                            </div>
                            <div className='flex-center bg-white m-2'>
                                <img src={ResLesson1} style={{ height: '150px', width: '150px' }} />
                            </div>
                            <div className="p-2 shadow flex-end border bg-white rounded-bottom-3">
                                {e.link.map((a, b) => {
                                    return (
                                        <AppButton
                                            endIcon={<FaArrowRightLong />}
                                            className="bg-primary-gradient text-white btn-sm ms-1 me-1"
                                            label={"Video " + (b + 1)}
                                            onClick={() => { setIsVideo(true); setVideoData(a) }}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
