import AppButton from "@/components/organisams/AppButton";
import { FaArrowRightLong } from "react-icons/fa6";
import Teacher from "@assets/image/Teacher.jpg"
const furthurdata = [
    { title: "KALVI TV OFFICIAL", link: "https://www.youtube.com/playlist?list=PL-mvKYotpGsK5c724-HNCS-Xl9-zfLcUJ" },
    { title: "TN SCHOOLS", link: "https://tnschools.gov.in/welcome" },
    { title: "DIKSHA", link: "https://diksha.gov.in/explore?board=State%20(Tamil%20Nadu)&medium=Tamil&id=tn_k-12_5&selectedTab=home&gradeLevel=Class%2011" },
    { title: "SWAYAM", link: "https://swayam.gov.in/explorer" },
    { title: "OLAB", link: "https://www.olabs.edu.in/?sub=79" },
    { title: "DIKSHA VIRUTUAL LAB", link: "https://diksha.gov.in/virtuallabs.html" },
    { title: "PHET SIMULATION", link: "https://phet.colorado.edu/en/simulations/browse" },
];
export default function Furthurlearning() {
    return (
        <div className="container row flex-center">
            {
                furthurdata.map((e, i) => {
                    return (
                        <div className='col-3' key={i}>
                            <div className="mt-2 p-2 text-truncate shadow  border bg-white rounded-top-3 text-brand-primary">
                                <span className="font-size-14 ">{e?.title}</span>
                            </div>
                            <div className='flex-center bg-white m-2'>
                                <img src={Teacher} style={{ height: '150px', width: '150px' }} />
                            </div>
                            <div className="p-2 shadow flex-end border bg-white rounded-bottom-3">
                                <AppButton
                                    endIcon={<FaArrowRightLong />}
                                    className="bg-primary-gradient text-white"
                                    label="View"
                                    onClick={() => { window.open(e.link, "_blank"); }}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
