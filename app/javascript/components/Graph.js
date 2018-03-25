import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import Day from './Day.js'
import divideScale from './divideScale.js'
class Graph extends React.Component {
    
    constructor(props){
        super(props);
        
        this.addDay = this.addDay.bind(this);
        let color_array= divideScale(87, 237 , this.props.data.tracker.levels.length)
       
        this.state= {days:this.props.data.days, colors:color_array}
        console.log(props)
    }


    addDay( day, level){
         
        console.log(this.props)
        let dis= this;

        axios.post('/day', {
            tracker_id: this.props.data.tracker.id,
            month:this.props.data.month,
            year:this.props.data.year,
            day:day,
            level:level
          })

          
          .then(function (response) {
              

              let days = response.data;
              console.log(response.data);
              dis.setState({
                 days:days
              })
              
              console.log('set state should rerender');
              console.log(dis.state);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    render () {

      console.log(this.state);
        // this is divided , depending number of levels the Graph has
   

        let day_array = [];
        let graph_width = this.props.data.daycount * 100;
        for(let i=1 ; i <= this.props.data.daycount ; i++){

            let day = this.state.days.find( (day)=>{ return day.day === i });
            day = (day)? day:null 
            day_array.push(<Day day_data={day} colors={this.state.colors} addDay={this.addDay} levels={this.props.data.tracker.levels} key={i} day={i} />)  
        } 

        
    return (
      <div>
        
        <div className="graph">

                <div  style={{ width: graph_width }} className="graph-inside">
                {day_array}
                </div>
            

        </div>

      </div>

    );
  }
}

export default Graph 




