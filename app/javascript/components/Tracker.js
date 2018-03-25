import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import Graph from './Graph.js'

class Tracker extends React.Component {

    constructor(props){
        super(props)

        this.state= {
          month:this.props.month,
          tracker:this.props.tracker,
          days:this.props.days,
          daycount:this.props.daycount,
          year:this.props.year
        }

    }

    getNextMonth(){
        axios.get('/month/2?year=2018&month=2')
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });

    }

    render () {
      console.log("In the tracker component ")
      console.log(this.props);
      console.log(Graph)
    return (
      <div>
        
        <div> <Graph data={this.state} /> </div>

      </div>

    );
  }
}

export default Tracker
