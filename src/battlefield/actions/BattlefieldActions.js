'use strict'

export function trigger(type, ...x) { 
  return { type, x }
}

const prefix = 'BATTLEFIELD_ACTIONS'

export const SELECT = `${prefix}/SELECT`
