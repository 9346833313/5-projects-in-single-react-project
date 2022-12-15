import React from 'react'


export default function Child(props) {
  return (
    <div className="card my-4 mx-4 d-flex border-danger" >
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-success">{props.loc}</li>
        <li className="list-group-item text-primary">{props.confirmedCasesForeign}</li>
        <li className="list-group-item text-danger">{props.confirmedCasesIndian}</li>
        <li className="list-group-item text-info">{props.deaths}</li>
        <li className="list-group-item text-secondary">{props.discharged}</li>
      </ul>
      
</div>
  )
}
