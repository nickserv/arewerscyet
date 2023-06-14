/* eslint-disable react/jsx-key */
import { metadata } from './layout'
import './page.css'
import entries from './support.json'

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
            {entries.map(({ Name, Category, Status, URL }) => (
              <tr>
                <td>{URL ? <a href={URL}>{Name}</a> : Name}</td>
                <td>
                  <span
                    className={[
                      'selected-value',
                      `color-${colors.category.get(Category)}`,
                    ].join(' ')}
                  >
                    {Category}
                  </span>
                </td>
                <td>
                  <span className={`color-${colors.status.get(Status)}`}>
                    {Status}
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
