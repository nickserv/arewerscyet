import 'core-js/proposals/array-grouping-v2'
import { Fragment } from 'react'
import { metadata } from './layout'
import './page.css'
import data from './page.json'

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
      {data.map(({ category, entries }) => (
        <Fragment key={category}>
          <h2>{category}s</h2>
          {entries.map(({ name, status, url }) => (
            <Fragment key={name}>
              <h3>
                <a href={url}>{name}</a>
              </h3>
              <p>
                {statusEmoji.get(status)} {status}
              </p>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </>
  )
}
