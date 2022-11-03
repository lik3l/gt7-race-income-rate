export type TCallback = () => void
export type TArgCallback<T> = (arg: T) => void

export interface IDialogProps {
  open: boolean
  onClose: TCallback
  onSuccess?: TCallback
}
