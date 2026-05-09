import MetaTag from '@/components/templates/MetaTag'
import { BodLesson1, BodLesson2, BodLesson3, BodLesson4, BodLesson5, BodLesson6, BodLesson7, BodLesson8, ResLesson1, ResLesson2, ResLesson3, ResLesson4, ResLesson5, ResLesson6, ResLesson7, ResLesson8 } from '@/helpers/image';
import React, { Fragment, useState } from 'react'
import { FaArrowLeftLong, FaArrowRight } from 'react-icons/fa6';
import { GiNoseFront } from 'react-icons/gi';
import { IoBodyOutline } from 'react-icons/io5';
import { HStack, SegmentedControl } from 'rsuite';
import ReactPlayer from 'react-player'
import AppButton from '@/components/organisams/AppButton';

const reslessons = [
  { title: "சுவாசத்தின் பணிகள் / Respiratory function", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: ResLesson1 },
  { title: "பல்வேறு உயிரிகளில் காணப்படும் சுவாசஉறுப்புகள் / Respiratory organs in various organisms ", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: ResLesson2 },
  { title: "சுவாசம் நடைபெறும் முறை/ Mechanism of breathing", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: ResLesson3 },
  { title: "வாயு பரிமாற்றம்   /Exchange of gases", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: ResLesson4 },
  { title: "வாயுக்கள் கடத்தப்படுதல்/ Transport of gases", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: ResLesson5 },
  { title: "சுவாசத்தைநெறிப்படுத்துதல் / Regulation of respiration", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: ResLesson6 },
  { title: "ஆக்ஸிஜன் கடத்துதலில் உள்ள சிக்கல்கள் / Problems in Oxygen transport", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: ResLesson7 },
  { title: "சுவாச மண்டலக்கோளாறுகள் / Disorders of the respiratory system", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: ResLesson8 },
];
const bodlessons = [
  { title: "உடல் திரவங்கள் / Body Fluids", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: BodLesson1 },
  { title: "இரத்தக்குழாய்கள் -தமனிகள், சிரைகள் மற்றும்| இரத்த நுண்நாளங்கள் / Blood vessels - Arteries, Veins and Capillaries", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: BodLesson2 },
  { title: "சுற்றோட்டப் பாதைகள்/ Circulatory path ways ", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: BodLesson3 },
  { title: "மனிதச் சுற்றோட்ட மண்டலம்/ Human Circulatory System", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: BodLesson4 },
  { title: "இரட்டைசுற்றோட்டம் / Double Circulation", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: BodLesson5 },
  { title: "இதயச்செயல்களைநெறிப்படுத்துதல் / Regulation of Cardiac activity", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: BodLesson6 },
  { title: "சுற்றோட்ட மண்டலக் கோளாறுகள்/ Disorders of the Circulatory system ", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: BodLesson7 },
  { title: "இதய நுரையீரல் உயிர்ப்பித்தல்/ Cardio Pulmonary Resuscitation (CPR)", link: "https://www.youtube.com/watch?v=ceAZqE_sAG8", img: BodLesson8 },
];
const lessonTab = [
  {
    label: (
      <HStack>
        <GiNoseFront />
        <span>சுவாசம் / Respiration</span>
      </HStack>
    ),
    value: 'respiration'
  },
  {
    label: (
      <HStack>
        <IoBodyOutline />
        <span>உடல்திரவங்கள் மற்றும் சுற்றோட்டம் / Body Fluids and Circulation</span>
      </HStack>
    ),
    value: 'body'
  },
];
export default function Lesson() {
  const [isReport, setIsReport] = useState('respiration');
  const [isVideo, setIsVideo] = useState(false)
  return (
    <Fragment>
      <MetaTag title="Lesson" />
      <div className='p-2'>
        <div className="flex-between border-bottom text-brand-primary">
          <span className="font-size-20">Lesson</span>
          <SegmentedControl
            value={isReport}
            data={lessonTab}
            onChange={(e: any) => { setIsReport(e) }}
          />
        </div>
        <div className="p-2 row">
          {isVideo ?
            <div className='p-2'>
              <AppButton
                label='Back'
                startIcon={<FaArrowLeftLong />}
                className="bg-primary-gradient text-white"
                onClick={()=>setIsVideo(false)}
              />
              <ReactPlayer
                src='https://www.youtube.com/watch?v=ceAZqE_sAG8'
                style={{ width: '100%', height: '80vh', }}
                controls
                playing
                playsInline
              />
            </div> :
            isReport == 'respiration' ?
              reslessons.map((e, i) => {
                return (
                  <div className='col-3' key={i}>
                    <div className="mt-2 p-2 shadow flex-center border bg-white rounded-top-3 text-brand-primary">
                      <span className="font-size-14 ">{e?.title}</span>
                    </div>
                    <div className='flex-center bg-white m-2'>
                      <img src={e.img} style={{ height: '250px', width: '250px' }} />
                    </div>
                    <div role='button' onClick={() => { setIsVideo(true) }} className="p-2 shadow flex-between border bg-white rounded-bottom-3 text-brand-primary">
                      <span className="font-size-14 ">Play Video</span>
                      <FaArrowRight size={20} />
                    </div>
                  </div>
                )
              }) :
              bodlessons.map((e, i) => {
                return (
                  <div className='col-3' key={i}>
                    <div className="mt-2 p-2 shadow flex-center border bg-white rounded-top-3 text-brand-primary">
                      <span className="font-size-14 ">{e?.title}</span>
                    </div>
                    <div className='flex-center bg-white m-2'>
                      <img src={e.img} style={{ height: '250px', width: '250px' }} />
                    </div>
                    <div role='button' onClick={() => { setIsVideo(true) }} className="p-2 shadow flex-between border bg-white rounded-bottom-3 text-brand-primary">
                      <span className="font-size-14 ">Play Video</span>
                      <FaArrowRight size={20} />
                    </div>
                  </div>
                )
              })}
        </div>
      </div>
    </Fragment>
  )
}
