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
      {['Framework', 'Meta Framework', 'Tool'].map((sortCategory) => (
        <Fragment key={sortCategory}>
          <h2>{sortCategory}s</h2>
          {data
            .filter(({ category }) => category === sortCategory)
            .map(({ name, status, url }) => (
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
