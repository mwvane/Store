import { optionType } from "../Enums/optionType"
import { IOptionType } from "./optionType"

export interface IOption {
    id? : number
    name: string
    value: string
    optionType: IOptionType
}
