import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import Section from './Section.js'
import Level from './Level.js'
class Scale extends React.Component {
    
    constructor(props){
        super(props)
    }

    render () {
   
    let level = (this.props.daydata)? this.props.daydata.level : 0;

    let height = (500/this.props.levels.length)   


    let sections = this.props.levels.map((section , i )=>{
        return <Section day={this.props.day} addDay={this.props.addDay} changeHeight={this.props.changeHeight} key={i} levels={this.props.levels} level={i+1} height={height}/>
    })

    return (
      <div>
        
        <div className="scale-day">
        
            {sections}

        </div>

      </div>

    );
  }
}

export default Scale 
