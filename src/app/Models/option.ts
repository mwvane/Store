import { optionType } from "../Enums/optionType"
import { IOptionType } from "./optionType"

export interface IOption {
    optionId? : number
    name: string
    value: string
    optionType: IOptionType
}
