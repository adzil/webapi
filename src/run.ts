/**
 * Async function runner
 */

'use strict'

import { isFunction } from 'lodash'

export interface AsyncFunction {
  (...args: any[]): Promise<any>
}

export default function run(fn: AsyncFunction | Promise<any>): Promise<any> {
  if (!isPromise(fn)) {
    fn = fn()
  }
  return fn.catch((err: Error) => console.error(err))
}

function isPromise(o: any): o is Promise<any> {
  return (o && isFunction(o.then) && isFunction(o.catch))
}