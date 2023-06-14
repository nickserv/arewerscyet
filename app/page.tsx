/* eslint-disable react/jsx-key */
import data from './data.json'
import { metadata } from './layout'
import './page.css'

export default function Home() {
  const statusColors = new Map([
    ['Planned', 'gray'],
    ['Canary', 'yellow'],
    ['Stable', 'green'],
  ])

  return (
    <article>
      <header>
        <h1>{metadata.title}</h1>
      </header>
      {['Framework', 'Meta Framework', 'Tool'].map((sortCategory) => (
        <>
          <h2>{sortCategory}s</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter(({ category }) => category === sortCategory)
                .map(({ name, status, url }) => (
                  <tr>
                    <td>{url ? <a href={url}>{name}</a> : name}</td>
                    <td>
                      <span className={`color-${statusColors.get(status)}`}>
                        {status}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      ))}
    </article>
  )
}
