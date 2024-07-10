import { optionType } from "../Enums/optionType"

export interface IOption {
    optionId? : number
    name: string
    value: string
    optionType: optionType
}
