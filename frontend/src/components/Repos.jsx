import React from 'react'
import Repo from './Repo'

function Repos({repos}) {

  return (
    <div>
        <ol>
            {repos.map((repo) => {
                <Repo key={repo.id} repo={repo}/>
            })}
            {repos.length === 0 && <p>No Repos Found</p>}
        </ol>
    </div>
  )
}

export default Repos