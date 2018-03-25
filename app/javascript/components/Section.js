import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

class Section extends React.Component {
    
    constructor(props){
        super(props)
    
        this.selectLevel = this.selectLevel.bind(this);
        this.toggleTag = this.toggleTag.bind(this);
        this.state= {fade:"", tag:""};
    }

    selectLevel(){

        let day = this.props.day;
        let level = this.props.level; 

        this.props.addDay(day, level);

    }

    toggleTag(isRendered){
        
        let level = (isRendered)? 0 : this.props.level;
        this.props.changeHeight(level); 

        let tag = this.props.levels[this.props.level-1];
        let effect = (isRendered)? 'fade-out' : 'fade-in'

        this.setState({
            fade: effect,
            tag:tag
        })
    }

    render () {
        
        let section_height = this.props.height + 'px'
    

    return (

   
        <div onClick={this.selectLevel}  onMouseLeave={()=>{this.toggleTag(true)}} onMouseEnter={()=>{this.toggleTag(false)}} style={{height:section_height}} className="section-day">
        <div className={"section-tag "+ this.state.fade } > {this.state.tag} </div>
        </div>

 

    );
  }
}

export default Section 
