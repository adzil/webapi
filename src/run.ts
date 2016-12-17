
export interface AsyncFunction {
  (): Promise<any>
}
export default function run(fn: AsyncFunction) {
  fn().catch((err: Error) => console.error(err))
}