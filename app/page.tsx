import 'core-js/proposals/array-grouping-v2'
import { Fragment } from 'react'
import { metadata } from './layout'
import './page.css'
import data from './page.json'

declare global {
  interface ObjectConstructor {
    groupBy<T>(
      items: Iterable<T>,
      callbackfn: (value: T, index: number) => string
    ): Record<string, T[]>
  }

  interface MapConstructor {
    groupBy<T, U>(
      items: Iterable<T>,
      callbackfn: (value: T, index: number) => U
    ): Map<U, T[]>
  }
}

export default function Home() {
  const statusEmoji = new Map([
    ['Unsupported', '🚫'],
    ['Planned', '💬'],
    ['Canary', '🦜'],
    ['Stable', '✅'],
  ])

  return (
    <>
      <h1>{metadata.title}</h1>
      {Array.from(
        Map.groupBy(data, ({ category }) => category),
        ([category, data]) => (
          <Fragment key={category}>
            <h2>{category}s</h2>
            {Array.from(
              Map.groupBy(data, ({ status }) => status),
              ([status, data]) => (
                <Fragment key={status}>
                  <h3>
                    {statusEmoji.get(status)} {status}
                  </h3>
                  {data.map(({ name, url }) => (
                    <h4 key={name}>
                      <a href={url}>{name}</a>
                    </h4>
                  ))}
                </Fragment>
              )
            )}
          </Fragment>
        )
      )}
    </>
  )
}
