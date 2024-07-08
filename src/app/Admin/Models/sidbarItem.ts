import { ICategory } from "../../Models/category"

export interface ISidebarItem {
    id: number
    tittle: string
    item: ICategory[]
    isActive?: boolean
}