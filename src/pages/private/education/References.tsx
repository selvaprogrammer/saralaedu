import AppButton from "@/components/organisams/AppButton";
import { FaLink } from "react-icons/fa6";

const refData = [
  { title: "TN SCHOOLS", link: "https://tnschools.gov.in/welcome" },
  { title: "DIKSHA", link: "https://diksha.gov.in/explore?board=State%20(Tamil%20Nadu)&medium=Tamil&id=tn_k-12_5&selectedTab=home&gradeLevel=Class%2011" },
  { title: "SWAYAM", link: "https://swayam.gov.in/explorer" },
  { title: "OLAB", link: "https://www.olabs.edu.in/?sub=79" },
  { title: "DIKSHA VIRUTUAL LAB", link: "https://diksha.gov.in/virtuallabs.html" },
  { title: "PHET SIMULATION", link: "https://phet.colorado.edu/en/simulations/browse" },
];
export default function References() {
  return (
    <div className="container">
      <div className="flex-column-center vh-100">
        <h4>Useful Reference Links</h4>
        {refData.map((e, i) => {
          return (
            <div key={i} className="w-100 shadow p-2 rounded-3 flex-between">
              <span>{e.title}</span>
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
  )
}
