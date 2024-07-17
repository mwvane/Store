export class Toast {
  constructor(
    header: string,
    message: string,
    status: toastType = toastType.info,
    duration: number = 4,
    autoHide: boolean = true,
  ) {
    this.autoHide = autoHide,
    this.duration = duration,
    this.message = message,
    this.header = header,
    this.status = status
  }
  id?: string;
  header: string = '';
  message: string = '';
  seen?: boolean = false;
  duration: number = 4000;
  autoHide: boolean = true;
  status: toastType = toastType.info;
}

export enum toastType {
  success = "success",
  error = "error",
  warrning = "warrning",
  info = "info",
}
