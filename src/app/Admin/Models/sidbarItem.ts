import { ICategory } from "../../core/Models/category"
import { INavItem } from "../../core/Models/menu"
import { IMenuItem } from "../../core/Models/menuIte"

export interface ISidebarItem {
    id: number
    tittle: string
    item: INavItem[]
    isActive?: boolean
}