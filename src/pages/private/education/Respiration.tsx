import AppButton from "@/components/organisams/AppButton";
import Discussionform from "@/components/templates/Discussionform";
import { ResLesson1, ResLesson2, ResLesson3, ResLesson4, ResLesson5, ResLesson6, ResLesson7, ResLesson8 } from "@/helpers/image";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { SegmentedControl } from "rsuite";

const reslessons = [
    { title: "சுவாசத்தின் பணிகள் / Respiratory function", link: "https://www.youtube.com/embed/rcRHaIIeI9w", img: ResLesson1, link1: "https://www.youtube.com/embed/OJPAnojsw0Q" },
    { title: "பல்வேறு உயிரிகளில் காணப்படும் சுவாசஉறுப்புகள் / Respiratory organs in various organisms ", link: "https://www.youtube.com/embed/1aJS5e_B7vg", img: ResLesson2, link1: "https://www.youtube.com/embed/JQeol238GHk" },
    { title: "சுவாசம் நடைபெறும் முறை/ Mechanism of breathing", link: "https://www.youtube.com/embed/F3x_ZICEOKI", img: ResLesson3, link1: "https://www.youtube.com/embed/mWYCJ5vOU8w" },
    { title: "வாயு பரிமாற்றம்   /Exchange of gases", link: "https://www.youtube.com/embed/8VUVBgfNwkQ", img: ResLesson4, link1: "https://www.youtube.com/embed/W3Azw4J80rA" },
    { title: "வாயுக்கள் கடத்தப்படுதல்/ Transport of gases", link: "https://www.youtube.com/embed/jGTAU-AyATA", img: ResLesson5, link1: "https://www.youtube.com/embed/W3Azw4J80rA" },
    { title: "சுவாசத்தைநெறிப்படுத்துதல் / Regulation of respiration", link: "https://www.youtube.com/embed/RovUY07ci38", img: ResLesson6, link1: "https://www.youtube.com/embed/0DYO_mhxdy4" },
    { title: "ஆக்ஸிஜன் கடத்துதலில் உள்ள சிக்கல்கள் / Problems in Oxygen transport", link: "https://www.youtube.com/embed/U-inNRE7jik", img: ResLesson7, link1: "" },
    { title: "சுவாச மண்டலக்கோளாறுகள் / Disorders of the respiratory system", link: "https://www.youtube.com/embed/XUJsuak44-0", img: ResLesson8, link1: "https://www.youtube.com/embed/Osrx8nUs1z4" },
];
export default function Respiration() {
    const [isVideo, setIsVideo] = useState(false)
    const [videodata, setVideoData] = useState<any>(null);
    const [playing, setPlaying] = useState(1)
    return (
        <div className="row">
            {isVideo ?
                <div className="row">
                    <div className="col-9">
                        <div className="flex-between border-bottom text-brand-primary mb-2">
                            <div className="flex-row-center" role="button" onClick={() => { setIsVideo(false); setVideoData(null) }}>
                                <FaArrowLeftLong className="me-2" />
                                <span className="font-size-12">{videodata?.title}</span>
                            </div>
                            {videodata?.link1 && (
                                <SegmentedControl
                                    value={playing}
                                    data={[{ label: 'Video 1', value: 1 }, { label: 'Video 2', value: 2 }]}
                                    onChange={(e: any) => { setPlaying(e) }}
                                />
                            )}
                        </div>
                        <iframe
                            className="shadow rounded-3"
                            style={{ width: '100%', height: '80vh' }}
                            src={playing == 1 || !videodata?.link1 ? videodata?.link : videodata?.link1}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="col-3">
                        <div className="flex-center vh-90">
                            <div>
                                <Discussionform />
                            </div>
                        </div>
                    </div>
                </div> :
                <div>
                    <div className="flex-between border-bottom text-brand-primary mb-2">
                        <div className="flex-row-center">
                            <span >Respiration</span>
                        </div>
                    </div>
                    <div className="row">
                        {reslessons.map((e, i) => {
                            return (
                                <div className='col-3' key={i}>
                                    <div className="mt-2 p-2 text-truncate shadow  border bg-white rounded-top-3 text-brand-primary">
                                        <span className="font-size-14 ">{e?.title}</span>
                                    </div>
                                    <div className='flex-center bg-white m-2'>
                                        <img src={e.img} style={{ height: '150px', width: '150px' }} />
                                    </div>
                                    <div className="p-2 shadow flex-end border bg-white rounded-bottom-3">
                                        <AppButton
                                            endIcon={<FaArrowRightLong />}
                                            className="bg-primary-gradient text-white"
                                            label="Play"
                                            onClick={() => { setIsVideo(true); setVideoData(e) }}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </div>
    )
}
