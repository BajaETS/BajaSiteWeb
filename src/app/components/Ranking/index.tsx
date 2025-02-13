import clsx from "clsx"
import { TRankingProps } from "./interface"
import Tooltip from "../Tooltip"


const Ranking = (props: TRankingProps) => {

    const { ranking, points, type, category, details } = props

    const gradients: Record<TRankingProps['type'], string> = {
        gold: "from-[#EBB512] to-[#FFE39B]",
        silver: "from-[#D9D9D9] to-[#E8E8E8]",
        bronze: "from-[#EB8612] to-[#FFCD95]",
        other: "from-[#9747FF] to-[#CDA6FF]"
    }

    return (
        <Tooltip text={details}>
            <div className="flex w-min font-bebas bg-black shadow-md">
                <div className="flex flex-col p-2">
                    <p className="m-0 p-0 text ">
                        {category}
                    </p>
                    <p className="m-0 p-0 text-2xl">
                        {ranking}
                    </p>
                </div>
                {points && (
                    <p className="m-0 p-0 text-xs text-nowrap w-4 text-orientation-mixed writing-mode-vertical-lr -scale-y-[1] -scale-x-[1] text-center">
                        {points} pts
                    </p>
                )}
                <div className={clsx("ml-1 w-2 min-h-full bg-gradient-to-b", gradients[type])} />
            </div>
        </Tooltip>

    )
}

export default Ranking
