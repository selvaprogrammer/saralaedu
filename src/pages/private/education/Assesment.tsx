import AppButton from '@/components/organisams/AppButton';
import { FaLink } from 'react-icons/fa6';

export default function Assesment() {
  const evl = [
     { name: "Practice 1", link: "https://diksha.gov.in/play/content/do_312522928385556480115127?dialCode=6CKTEG&l1Parent=do_31279143247867904011527" },
     { name: "Practice 2", link: "https://diksha.gov.in/play/content/do_31255490946388787215076?dialCode=6CKTEG&l1Parent=do_31279143247867904011527" },
     { name: "Practice 3", link: "https://diksha.gov.in/play/content/do_31256485372561817618256?dialCode=6CKTEG&l1Parent=do_31279143247867904011527" },
     { name: "Practice 4", link: "https://diksha.gov.in/play/content/do_31255434324614348814848?dialCode=6CKTEG&l1Parent=do_31279143247867904011527" },
     { name: "Practice 5", link: "https://diksha.gov.in/play/content/do_31255434324614348814848?dialCode=6CKTEG&l1Parent=do_31279143247867904011527" },
     { name: "Practice 6", link: "https://diksha.gov.in/play/content/do_31255490946388787215076?dialCode=6CKTEG&l1Parent=do_31279143247867904011527" },
   ]
   return (
     <div className="container">
       <div className="flex-column-center vh-100">
         <h4>Self Assesment Quiz Links</h4>
         <pre>Note : Before clicking view you must be logged into Diksha Application</pre>
         {evl.map((e, i) => {
           return (
             <div key={i} className="w-100 shadow p-2 rounded-3 flex-between">
               <span>{e.name}</span>
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
   );
}
