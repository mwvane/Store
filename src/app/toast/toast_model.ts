export class Toast {
  constructor(
    title: string,
    message: string,
    status: toastType = toastType.info,
    duration: number = 4,
    autoHide: boolean = true,
  ) {
    this.autoHide = autoHide,
    this.duration = duration,
    this.message = message,
    this.title = title,
    this.status = status
  }
  id?: string;
  title: string = '';
  message: string = '';
  seen?: boolean = false;
  duration: number = 4000;
  autoHide: boolean = true;
  status: toastType = toastType.info;
}

export enum toastType {
  success = 0,
  error = 1,
  warning = 2,
  info = 3,
}
