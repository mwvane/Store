import { ICategory } from "../../Models/category"
import { INavItem } from "../../Models/menu"
import { IMenuItem } from "../../Models/menuIte"

export interface ISidebarItem {
    id: number
    tittle: string
    item: INavItem[]
    isActive?: boolean
}