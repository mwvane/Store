export interface IResponse<T> {
    data?: T
    success?: string
    error?: string[]
}