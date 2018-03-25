import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

class Level extends React.Component {
    
    constructor(props){
        super(props)
    }

    render () {
        
    let section_height = this.props.height + 'px'
    

    return (
     
        
        <div style={{height:section_height}} className="level-day">
       
            
         
        </div>

    

    );
  }
}

export default Level 
