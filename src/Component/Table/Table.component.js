import React, { Component } from 'react'

import './Table.scss'

// const Tabledata = (props) => {
// return <p>{props.datalist}</p>
// }

class Table extends Component {
     constructor(props){
        super(props)
        console.log(this.props.datalist)
    }
    render() {
        const {datalist} = this.props
        return (
            <div>
                <h1>{datalist}</h1>
            </div>
        )
    }
}

export default Table;