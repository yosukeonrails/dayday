import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'

class Dashboard extends React.Component {

 goToTracker(e){

    let tracker_id = e.target.value; 
     window.location = '/tracker/'+tracker_id;
 }

  render () {
      console.log("this is in teh dashboard")
      console.log(this.props);

     let tracker_buttons=  this.props.trackers.map((t, i)=>{
          return <button key={i} value={t.id} onClick={ (event)=>{ this.goToTracker(event)} } > {t.name} </button>
      })
      
          return (
      <div className="dayday-dashboard">

        {tracker_buttons}

      </div>

    );
  }
}

export default Dashboard
