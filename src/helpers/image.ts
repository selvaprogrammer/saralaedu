import { config } from "./configuration";
import LoaderImage from "@assets/image/loader.gif";
import Login from "@assets/image/login.png";
import Empty from "@assets/image/empty.png"
import Logo3a from "@assets/logo/logo-3a.png";
import Logo3aSmall from "@assets/logo/logo-3a-small.png";
import LogoWipro from "@assets/logo/logo-wipro.png";
import LogoWiproSmall from "@assets/logo/logo-wipro-small.jpg";
import LogoLtts from "@assets/logo/logo-ltts.png";
import LogoLttsSmall from "@assets/logo/logo-ltts-small.png";
import LogoNext from "@assets/logo/logo-indi.png";
import LogoNextSmall from "@assets/logo/logo-indi-small.png";
import LogoTechM from "@assets/logo/logo-techm.png";
import LogoTechMSmall from "@assets/logo/logo-techm-small.png";
import LogoSarala from "@assets/logo/logo-sarala.png";
import LogoSaralaSmall from "@assets/logo/logo-sarala-small.png";
import NotFound from "@assets/image/notfound.png";
import Dashimg from "@assets/image/dashboard.png";

import ResLesson1 from "@assets/respiraation/Lesson1.jpg";
import ResLesson2 from "@assets/respiraation/Lesson2.webp";
import ResLesson3 from "@assets/respiraation/Lesson3.png";
import ResLesson4 from "@assets/respiraation/Lesson4.png";
import ResLesson5 from "@assets/respiraation/Lesson5.png";
import ResLesson6 from "@assets/respiraation/Lesson6.png";
import ResLesson7 from "@assets/respiraation/Lesson7.webp";
import ResLesson8 from "@assets/respiraation/Lesson8.jpg";

import BodLesson1 from "@assets/body/Lesson1.webp";
import BodLesson2 from "@assets/body/Lesson2.png";
import BodLesson3 from "@assets/body/Lesson3.png";
import BodLesson4 from "@assets/body/Lesson4.png";
import BodLesson5 from "@assets/body/Lesson5.png";
import BodLesson6 from "@assets/body/Lesson6.jpg";
import BodLesson7 from "@assets/body/Lesson7.jpg";
import BodLesson8 from "@assets/body/Lesson8.png";

import Biology_Tamil from '@assets/ebook/Biology_Tamil.pdf';
import Biology_English from '@assets/ebook/Biology_English.pdf';
import Zoology_Tamil from '@assets/ebook/Zoology_Tamil.pdf';
import Zoology_English from '@assets/ebook/Zoology_English.pdf';

import Question from "@assets/question.pdf";
import Question1 from "@assets/question/question1.pdf";
import Question2 from "@assets/question/question2.pdf";
import Question3 from "@assets/question/question3.pdf";
import Question4 from "@assets/question/question4.pdf";
import Question5 from "@assets/question/question5.pdf";


import iAuthor from "@assets/image/author.png";
import iGuide from "@assets/image/guide.png";
import Guide1 from "@assets/image/guide1.png";
import Author1 from "@assets/image/author1.png";

import Body from "@assets/learning/body-fluid.pdf";
import Body1 from "@assets/learning/body-fluid-1.pdf";
import Body2 from "@assets/learning/body-fluid-2.pdf";
import Respiration from "@assets/learning/respiration.pdf";
import iNeet from "@assets/learning/Neet.pdf";
import Kebo from "@assets/learning/kebo.pdf";





const MainLogo = config.env == '3a' ? Logo3a :
    config.env == 'ltts' ? LogoLtts :
        config.env == 'next' ? LogoNext :
            config.env == 'wipro' ? LogoWipro :
                config.env == 'techm' ? LogoTechM :
                    config.env == 'sarala' ? LogoSarala : Logo3a
const SmallLogo = config.env == '3a' ? Logo3aSmall :
    config.env == 'ltts' ? LogoLttsSmall :
        config.env == 'next' ? LogoNextSmall :
            config.env == 'wipro' ? LogoWiproSmall :
                config.env == 'techm' ? LogoTechMSmall :
                    config.env == 'sarala' ? LogoSaralaSmall : Logo3aSmall

export {
    LoaderImage, Login, Empty, MainLogo, SmallLogo,NotFound,Dashimg,
    ResLesson1,ResLesson2,ResLesson3,ResLesson4,ResLesson5,ResLesson6,ResLesson7,ResLesson8,
    BodLesson1,BodLesson2,BodLesson3,BodLesson4,BodLesson5,BodLesson6,BodLesson7,BodLesson8,
    Biology_English,Biology_Tamil,Zoology_English,Zoology_Tamil,Question,
    iAuthor,iGuide,Guide1,Author1,Question1,Question2,Question3,Question4,Question5,
    Body,Body1,Body2,Kebo,Respiration,iNeet
}