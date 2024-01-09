import React from 'react'

export const TableComponent = ({listaUtenti}) => {
  return (
   <table>
    <thead>
        <tr>
            <td>-</td>
            <td>Nome</td>
            <td>Cognome</td>
            <td>Città</td>
        </tr>
    </thead>
    <tbody>
        {listaUtenti.map(u =>
            <tr>
                <td>-</td>
                <td>{u.nome}</td>
                <td>{u.username}</td>
                <td>{u.città}</td>
            </tr> )
            }
    </tbody>
   </table>
  )
}
