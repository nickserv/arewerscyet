/* eslint-disable react/jsx-key */
import { readFile } from 'fs/promises'
import { metadata } from './layout'
import './page.css'

function joinClasses(...classes: string[]) {
  return classes.join(' ')
}

export default async function Home() {
  const csv = await readFile('app/support.csv', { encoding: 'utf8' })
  const [header, ...lines] = csv
    .trim()
    .split('\n')
    .map((line) => line.trimEnd().split(','))
  const entries = lines.map(
    (line) =>
      Object.fromEntries(
        line.map((value, index) => [header[index], value || undefined])
      ) as {
        Name: string
        Category: string
        Status: string
        URL?: string
      }
  )

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
    <article className="page sans">
      <header>
        <h1 className="page-title">{metadata.title}</h1>
        <p className="page-description"></p>
      </header>
      <div className="page-body">
        <table className="collection-content">
          <thead>
            <tr>
              {Object.keys(entries[0]).map((value) => (
                <th>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {entries.map(({ Name, Category, Status, URL }) => (
              <tr>
                <td className="cell-title">{Name}</td>
                <td>
                  <span
                    className={joinClasses(
                      'selected-value',
                      `select-value-color-${colors.category.get(Category)}`
                    )}
                  >
                    {Category}
                  </span>
                </td>
                <td>
                  <span
                    className={joinClasses(
                      'status-value',
                      `select-value-color-${colors.status.get(Status)}`
                    )}
                  >
                    <div
                      className={joinClasses(
                        'status-dot',
                        `status-dot-color-${colors.status.get(Status)}`
                      )}
                    ></div>
                    {Status}
                  </span>
                </td>
                <td>
                  <a href={URL} className="url-value">
                    {URL}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}
