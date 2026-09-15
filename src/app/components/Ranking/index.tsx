import clsx from "clsx"
import { TRankingProps } from "./interface"
import Tooltip from "../Tooltip"
import { MEDALS } from "@/theme/tokens.mjs"
import type { MedalType } from "@/content/types"

/**
 * One result chip: category, placing, optional points, and a coloured medal bar.
 * The medal colours come from src/theme/tokens.mjs. Do not hardcode them here.
 */
const Ranking = (props: TRankingProps) => {

    const { placeLabel, points, medal, category, details } = props

    // Typed as a full Record, so a medal colour can never be silently missing.
    const stops: Record<MedalType, readonly [string, string]> = MEDALS
    const [from, to] = stops[medal]

    return (
        <Tooltip text={details}>
            <div className="flex w-min font-bebas bg-black shadow-md">
                <div className="flex flex-col p-2">
                    <p className="m-0 p-0 text ">
                        {category}
                    </p>
                    <p className="m-0 p-0 text-2xl">
                        {placeLabel}
                    </p>
                </div>
                {points && (
                    <p className="m-0 p-0 text-xs text-nowrap w-4 text-orientation-mixed writing-mode-vertical-lr -scale-y-[1] -scale-x-[1] text-center">
                        {points} pts
                    </p>
                )}
                <div
                    className={clsx("ml-1 w-2 min-h-full")}
                    style={{ backgroundImage: `linear-gradient(to bottom, ${from}, ${to})` }}
                />
            </div>
        </Tooltip>

    )
}

export default Ranking
