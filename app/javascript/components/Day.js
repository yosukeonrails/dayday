import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import Scale from './Scale.js'
import LevelScale from './Level-Scale.js'

class Day extends React.Component {
    
    constructor(props){
        super(props)
        
        console.log(props);

        this.changeHeight= this.changeHeight.bind(this);
        
        this.state = {
            original_height:0,
            level:0
        }
    }


    changeHeight(lvl){

        let height = (500 / this.props.levels.length)  * lvl
        this.setState({
            original_height:height,
            level:lvl
        })

    }

    render () {


    return (
      <div>
        
        <div className="graph-day">
        
            <LevelScale colors={this.props.colors} level={this.state.level} original_height={this.state.original_height} daydata={this.props.day_data} levels ={this.props.levels}/>
            <Scale day={this.props.day}  daydata={this.props.day_data} addDay={this.props.addDay} changeHeight={this.changeHeight} levels ={this.props.levels}/>
          
        </div>

      </div>

    );
  }
}

export default Day 
