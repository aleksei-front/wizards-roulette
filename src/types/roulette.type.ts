export type RouletteCardProps = {
    icon: string
    winCounter?: number
    id?: number | string
    bgColor?: string
}
export type RouletteHistoryUserProps = {
    avatar: string
    name: string
    total: number
}
export type RouletteHistoryItemProps = {
    headBgColor?: string
    headRate?:number
    name: string
    bodyIcon: string
    bodyTotal: number
    bodyData: RouletteHistoryUserProps[]
}