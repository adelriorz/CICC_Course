import React, { Component } from 'react'
import withTodoData from './withTodoData'

function TodoTable({ isLoading, items }) {

    if(isLoading){
        return <div>Prices are being loaded... </div>
    }

    if(!items || items.length === 0){
        return <div>No prices to display</div>
    }

    return (
        <div>
            <h1>TodoTable</h1>
            <table>
                <tbody>
                    {items.slice(0,5).map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default withTodoData(TodoTable)
