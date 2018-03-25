import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

import Level from './Level.js'
class LevelScale extends React.Component {
    
    constructor(props){
        super(props)
    }

    render () {
    
    let color =  "rgb(0,0,0)"
    let color_array =  (this.props.daydata) ? this.props.colors[this.props.daydata.level-1]: this.props.colors[this.props.level];
    let section = (500/this.props.levels.length) // total height / level n 
    let height = (this.props.daydata )? (this.props.daydata.level * section) : this.props.original_height; // if day data exists, 
    
     if(this.props.daydata){
      color_array= this.props.colors[this.props.daydata.level-1]; 
     } 

     if(this.props.original_height !== 0){  
        color_array= this.props.colors[this.props.level-1];
       }

     if(this.props.daydata && this.props.original_height !== 0){ 
       height = this.props.original_height; 
       color_array= this.props.colors[this.props.level-1];
     }

     color = "rgb("+color_array[0]+","+color_array[1]+","+color_array[2]+")"


    return (
      <div>
       
        <div style={{height:height , backgroundColor:color}}  className="level-scale">
           
        </div>
          
       

      </div>

    );
  }
}

export default LevelScale 
