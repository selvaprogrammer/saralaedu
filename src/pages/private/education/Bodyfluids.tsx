import AppButton from "@/components/organisams/AppButton";
import AppHeader from "@/components/templates/AppHeader";
import Discussionform from "@/components/templates/Discussionform";
import { BodLesson1, BodLesson2, BodLesson3, BodLesson4, BodLesson5, BodLesson6, BodLesson7, BodLesson8, } from "@/helpers/image";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { SegmentedControl } from "rsuite";
const bodlessons = [
  { title: "உடல் திரவங்கள் / Body Fluids", link: "https://www.youtube.com/embed/yGMRIXKyTts", img: BodLesson1, link1: "https://www.youtube.com/embed/M6kiP1hpQ3o" },
  { title: "இரத்தக்குழாய்கள் -தமனிகள், சிரைகள் மற்றும்| இரத்த நுண்நாளங்கள் / Blood vessels - Arteries, Veins and Capillaries", link: "https://www.youtube.com/embed/Oq3SbxO8RB0", img: BodLesson2, link1: "https://www.youtube.com/embed/J4xhOQ7e060" },
  { title: "சுற்றோட்டப் பாதைகள்/ Circulatory path ways ", link: "https://www.youtube.com/embed/BtmvR4L-2Eo", img: BodLesson3, link1: "" },
  { title: "மனிதச் சுற்றோட்ட மண்டலம்/ Human Circulatory System", link: "https://www.youtube.com/embed/uSTZFl5IeKo", img: BodLesson4, link1: "https://www.youtube.com/embed/wxeGAh5BXDI" },
  { title: "இரட்டைசுற்றோட்டம் / Double Circulation", link: "https://www.youtube.com/embed/0toh0Cix5yU", img: BodLesson5, link1: "https://www.youtube.com/embed//DNNFA0-fozE" },
  { title: "இதயத் துடிப்புதோன்றலும் பரவுதலும் / Conduction of heart", link: "https://www.youtube.com/embed/2938Qibbl30", img: BodLesson5, link1: "https://www.youtube.com/embed//TnFoJ7Hhi-M" },
  { title: "இதயச்செயல்களைநெறிப்படுத்துதல் / Regulation of Cardiac activity", link: "https://www.youtube.com/embed/mzz2bz4Y5Mo", img: BodLesson6, link1: "" },
  { title: "சுற்றோட்ட மண்டலக் கோளாறுகள்/ Disorders of the Circulatory system ", link: "https://www.youtube.com/embed/0cCYQ6nutzc", img: BodLesson7, link1: "" },
  { title: "இதய நுரையீரல் உயிர்ப்பித்தல்/ Cardio Pulmonary Resuscitation (CPR)", link: "https://www.youtube.com/embed/GkzF0ycH4No", img: BodLesson8, link1: "" },
];
export default function Bodyfluids() {
  const [isVideo, setIsVideo] = useState(false)
  const [videodata, setVideoData] = useState<any>(null);
  const [playing, setPlaying] = useState(1)
  return (
    <div className="row">
      {isVideo ?
        <div className="row">
          <div className="col-9">
            <div className="flex-between border-bottom gap-2 mb-2">
              <AppButton
                label={videodata?.title}
                startIcon={<FaArrowLeftLong />}
                className="bg-primary-gradient text-white"
                onClick={() => { setIsVideo(false); setVideoData(null) }}
              />
              {videodata?.link1 && (
                <SegmentedControl
                  value={playing}
                  data={[{ label: 'Video 1', value: 1 }, { label: 'Video 2', value: 2 }]}
                  onChange={(e: any) => { setPlaying(e) }}
                  className="text-truncate"
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
                <Discussionform vtitle={videodata?.title}/>
              </div>
            </div>
          </div>
        </div> :
        <div>
          <AppHeader label="Lessons" link="/lesson" title="உடல்திரவங்கள் மற்றும் சுற்றோட்டம் / Body Fluids and Circulation" />
          <div className="row">
            {bodlessons.map((e, i) => {
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
