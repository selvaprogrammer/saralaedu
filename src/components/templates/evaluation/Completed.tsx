import AppButton from '@/components/organisams/AppButton'
import { FaNoteSticky } from 'react-icons/fa6'
import { Panel, Divider, Progress } from 'rsuite'
interface Props{
    count:any;
    correctCount:any;
    wrongCount:any;
    percentage:any;
    onRetest:()=>void;
}
export default function Completed(props:Props) {
    const {correctCount,count,onRetest,percentage,wrongCount}=props;
    return (
        <div style={{ maxWidth: 700, margin: "40px auto" }} >
            <Panel bordered shaded>
                <h2 style={{ textAlign: "center", marginBottom: 20 }} >
                    🎉 Quiz Finished
                </h2>
                <Divider />
                <div className="flex-row-between gap-2">
                    <div>
                        <h4>
                            Total Questions : {count}
                        </h4>
                        <h4 style={{ color: "green" }}>
                            Correct Answers : {correctCount}
                        </h4>
                        <h4 style={{ color: "red" }}>
                            Wrong Answers : {wrongCount}
                        </h4>
                        <h3>
                            Percentage : {percentage}%
                        </h3>
                    </div>
                    <Progress.Circle className="w-40" percent={Number(percentage)} strokeColor="#34c759" />
                </div>
                <div className='flex-center'>
                    <AppButton
                        label='Retry this test'
                        endIcon={<FaNoteSticky />}
                        className="bg-primary-gradient text-white"
                        onClick={onRetest}
                    />
                </div>
            </Panel>
        </div>
    )
}
