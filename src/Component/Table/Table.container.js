import React, { Component } from 'react'
import Table from './Table.component';
// import url from '../../Util/index'

const url = 'http://localhost:8100/products';

class TableContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: ''
        }
    }

    render () {
        return (
           <div>
              <h1>Products</h1>
              <Table datalist={this.state.product}/>
           </div>
        )
    }
     
    componentDidMount() {
        fetch(url, {
            Method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            // this.setState(data)
            console.log(data)
        })
    }
}

export default TableContainer