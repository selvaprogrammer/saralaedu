import { Empty } from "@/helpers/image";
import type { RootState } from "@/store/reducer";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Divider, Placeholder } from "rsuite";

export default function InvestigateData() {
    const { investigateData, investigateLoading } = useSelector((state: RootState) => state.public);
    return (
        <div>
            {investigateLoading ?
                Array.from({ length: 7 }, (_, i) => (<Placeholder.Paragraph key={i} className="mt-2 mb-2" active />)) :
                investigateData ?
                    <div className="border rounded-2 p-2">
                        <div className="flex-between text-brand-primary">
                            <span className="font-size-16">Investigation Summary</span>
                            <HiOutlineViewfinderCircle size={20} />
                        </div>
                        <Divider />
                        <span className="font-size-14 text-muted">{investigateData}</span>
                    </div>
                    :
                    <span className="flex-center flex-column gap-3">
                        <img src={Empty} className="w-50" />
                        <span>No fema data found</span>
                    </span>
            }
        </div>
    )
}
