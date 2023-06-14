/* eslint-disable react/jsx-key */
import data from './data.json'
import { metadata } from './layout'
import './page.css'

export default async function Home() {
  const colors = {
    category: new Map([
      ['Framework', 'blue'],
      ['Meta Framework', 'green'],
      ['Tool', 'gray'],
    ]),
    status: new Map([
      ['Planned', 'gray'],
      ['Canary', 'yellow'],
      ['Stable', 'green'],
    ]),
  }

  return (
    <article>
      <header>
        <h1>{metadata.title}</h1>
      </header>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ name, category, status, url }) => (
              <tr>
                <td>{url ? <a href={url}>{name}</a> : name}</td>
                <td>
                  <span
                    className={[
                      'selected-value',
                      `color-${colors.category.get(category)}`,
                    ].join(' ')}
                  >
                    {category}
                  </span>
                </td>
                <td>
                  <span className={`color-${colors.status.get(status)}`}>
                    {status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}
