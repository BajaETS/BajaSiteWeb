import type { MedalType } from "@/content/types"

export interface TRankingProps {
    /** Finishing position as a number. The label is formatted per locale by the page. */
    place: number
    /** Already-translated category label, e.g. "Acceleration" / "Accélération". */
    category: string
    /** Already-formatted ordinal, e.g. "1st" / "1re". */
    placeLabel: string
    points?: number
    medal: MedalType
    /** Already-translated tooltip text, if any. */
    details?: string
}
