import { Toast } from "../../../app/toast/toast_model"

export interface IResponse<T> {
    data?: T
    notification?: Toast
    success?: string
    error?: string[]
}