import * as React from 'react'
import { parseISO, format } from 'date-fns'

export interface DateProps {
  dateString: any
}

export function Date({ dateString }: DateProps) {
  //   const date = parseISO(dateString)
  const date = Number(dateString)
  return <time dateTime={dateString}>{format(date, 'd MMM yyyy')}</time>
}
