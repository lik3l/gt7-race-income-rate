export type TCallback<R=void> = () => R
export type TArgCallback<T, R=void> = (arg: T) => R

export interface IDialogProps {
  open: boolean
  onClose: TCallback
  onSuccess?: TCallback
}
