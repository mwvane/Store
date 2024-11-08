import { INavItem } from "./menu"

export interface ISidebarItem {
    id: number
    tittle: string
    item: INavItem[]
    isActive?: boolean
}