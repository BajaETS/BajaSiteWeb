export interface TRankingProps {
    ranking: string
    category: string
    points?: number
    type: "gold" | "silver" | "bronze" | "other"
    details?: string
}