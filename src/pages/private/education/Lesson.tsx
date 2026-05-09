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
  { title: "சுவாசத்தின் பணிகள் / Respiratory function", link: "https://youtu.be/rcRHaIIeI9w?si=zGXBveCxnva-rNYB", img: ResLesson1 },
  { title: "பல்வேறு உயிரிகளில் காணப்படும் சுவாசஉறுப்புகள் / Respiratory organs in various organisms ", link: "https://youtu.be/1aJS5e_B7vg?si=KiZK0wSvruov_iC7", img: ResLesson2 },
  { title: "சுவாசம் நடைபெறும் முறை/ Mechanism of breathing", link: "https://youtu.be/F3x_ZICEOKI?si=yDOYgmwUYd4_6koV", img: ResLesson3 },
  { title: "வாயு பரிமாற்றம்   /Exchange of gases", link: "https://youtu.be/8VUVBgfNwkQ?si=PcegdScdxYjNCaR6", img: ResLesson4 },
  { title: "வாயுக்கள் கடத்தப்படுதல்/ Transport of gases", link: "https://youtu.be/jGTAU-AyATA?si=WXLJnUg-UghZCrCW", img: ResLesson5 },
  { title: "சுவாசத்தைநெறிப்படுத்துதல் / Regulation of respiration", link: "https://youtu.be/RovUY07ci38?si=MbF4PRSMQ98yhThp", img: ResLesson6 },
  { title: "ஆக்ஸிஜன் கடத்துதலில் உள்ள சிக்கல்கள் / Problems in Oxygen transport", link: "https://youtu.be/U-inNRE7jik?si=64TLHqiJ8cxuk5hY", img: ResLesson7 },
  { title: "சுவாச மண்டலக்கோளாறுகள் / Disorders of the respiratory system", link: "https://youtu.be/XUJsuak44-0?si=6A2R6INBUtUzg1M-", img: ResLesson8 },
];
const bodlessons = [
  { title: "உடல் திரவங்கள் / Body Fluids", link: "https://youtu.be/yGMRIXKyTts?si=9wZkLASfj5quB2Tt", img: BodLesson1 },
  { title: "இரத்தக்குழாய்கள் -தமனிகள், சிரைகள் மற்றும்| இரத்த நுண்நாளங்கள் / Blood vessels - Arteries, Veins and Capillaries", link: "https://youtu.be/Oq3SbxO8RB0?si=nzgM136Dl5nvqcW9", img: BodLesson2 },
  { title: "சுற்றோட்டப் பாதைகள்/ Circulatory path ways ", link: "https://youtu.be/0yiokickRgY?si=8SzcOYKspp8gNOCd", img: BodLesson3 },
  { title: "மனிதச் சுற்றோட்ட மண்டலம்/ Human Circulatory System", link: "https://youtu.be/uSTZFl5IeKo?si=lWkf9my8Bj2Kzqfw", img: BodLesson4 },
  { title: "இரட்டைசுற்றோட்டம் / Double Circulation", link: "https://youtu.be/DNNFA0-fozE?si=qtKTEiC1ljOq6mD3", img: BodLesson5 },
  { title: "இதயச்செயல்களைநெறிப்படுத்துதல் / Regulation of Cardiac activity", link: "https://youtu.be/mzz2bz4Y5Mo?si=Yk20oh7y1B9sC1vk", img: BodLesson6 },
  { title: "சுற்றோட்ட மண்டலக் கோளாறுகள்/ Disorders of the Circulatory system ", link: "https://youtu.be/h413NHcx7eo?si=0txKc48nl8zwCESG", img: BodLesson7 },
  { title: "இதய நுரையீரல் உயிர்ப்பித்தல்/ Cardio Pulmonary Resuscitation (CPR)", link: "https://youtu.be/GkzF0ycH4No?si=4Rp_yvGvdhGMJZBu", img: BodLesson8 },
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
  const [videoSrc, setVideosrc] = useState('')
  return (
    <Fragment>
      <MetaTag title="Lesson" />
      <div className='p-2'>
        <div className="flex-between border-bottom text-brand-primary">
          <span className="font-size-20">Lesson</span>
          <SegmentedControl
            value={isReport}
            data={lessonTab}
            onChange={(e: any) => { setIsReport(e);setVideosrc('') }}
          />
        </div>
        <div className="p-2 row">
          {isVideo ?
            <div className='p-2'>
              <AppButton
                label='Back'
                startIcon={<FaArrowLeftLong />}
                className="bg-primary-gradient text-white"
                onClick={() => setIsVideo(false)}
              />
              <ReactPlayer
                src={videoSrc}
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
                    <div role='button' onClick={() => { setIsVideo(true); setVideosrc(e?.link) }} className="p-2 shadow flex-between border bg-white rounded-bottom-3 text-brand-primary">
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
