import { optionType } from "../Enums/optionType"

export interface IOption {
    id? : number
    name: string
    value: string
    optionType: optionType
}
