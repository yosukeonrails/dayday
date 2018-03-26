import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import Graph from './Graph.js'
let monthArray = {1:"January" , 2:"February", 3:"March", 4:"April", 5:"May", 6:"June", 7:"July", 8:"August", 9:"September", 10:"October", 11:"November", 12:"December"}
class Tracker extends React.Component {

    constructor(props){
        super(props)

        this.getMonth= this.getMonth.bind(this);
        this.addDay = this.addDay.bind(this);

        this.state= {      
            month:this.props.month,
            tracker:this.props.tracker,
            days:this.props.days,
            daycount:this.props.daycount,
            year:this.props.year, 
        }
      

    }

    addDay( day, level){
         
      console.log(this.state)
      let dis= this;

      axios.post('/day', {
          tracker_id: this.state.tracker.id,
          month:this.state.month,
          year:this.state.year,
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



    getMonth(tracker_id , year ,month ){
      
      let dis= this;

        axios.get('/month/'+tracker_id+'?year='+year+'&month='+month)
        .then(function (response) {
          
          let data = response.data;
          console.log("got response")
          console.log(data);
          
            dis.setState({
              month:data.month,
              tracker:data.tracker,
              days:data.days,
              daycount:data.daycount,
              year:data.year, 
            })

      

        })
        .catch(function (error) {
               console.log(error);
        });

    }

    render () {

      console.log("In the tracker component ")
      console.log(Graph)
      console.log(this.state);

    return (
      <div>
        
        <div><h1>{ monthArray[this.state.month] } </h1><h1>{ this.state.year }</h1></div>
        <div> <Graph  addDay={this.addDay} data={this.state} getMonth={this.getMonth} /> </div>

      </div>

    );
  }
}

export default Tracker
