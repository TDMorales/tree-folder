import { useState } from 'react'
import './App.css'

const files = {
  children: [
    {
      id: 1,
      name: "branch",
      children: [
        {
          id: 2,
          name: "pine needles",
          children: [
            {
              id: 3,
              name: "pine oil"
            }
          ]
        },
        {
          id: 4,
          name: "pine cones",
          children: [
            {
              id: 5,
              name: "pine seeds"
            }
          ]
        }
      ]
    },
    {id: 6, name: "pine tree"},
    {id: 7, name: "tree root"}
  ],
}

type TEntry = {
  id: number,
  name: string,
  children?: TEntry[]
}
function Entry({entry, depth}: {entry: TEntry; depth: number}){
  const [isExpanded, setIsExpanded] = useState(false); 
  return (
    <div>
      {entry.children ?
        <a href="#"className="entry" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "- " : "+ "}
          {entry.name}
        </a> :
        <div>{entry.name}</div>
      } 
      {isExpanded && 
        <div style={{paddingLeft: `${depth + 10}px`}}>
          {entry.children?.map(entry => (
            <Entry key={entry.id} entry={entry} depth={depth + 1}/>
          ))}
        </div>
      }
    </div>
  )
}

function App() {

  return (
    <div className="App">
      {files.children.map((entry) =>(
        <Entry key={entry.id} entry={entry} depth={1}/>
      ))}
    </div>
  )
}

export default App
