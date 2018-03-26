import React from "react"
import PropTypes from "prop-types"
import axios from 'axios'
import Day from './Day.js'
import divideScale from './divideScale.js'
class Graph extends React.Component {
    
    constructor(props){
        super(props);
        
        this.selectMonth = this.selectMonth.bind(this);

        let color_array= divideScale(87, 237 , this.props.data.tracker.levels.length)    
        this.state= {days:this.props.data.days, colors:color_array}
         
    }

    selectMonth (isNext){
      
      let m = this.props.data.month ;
      let y = this.props.data.year;
      let tracker= this.props.data.tracker.id;

      m = (isNext)?(m+1) : (m-1)
      
      switch (m) {

        case 13:
          m= 1;
          y++
          break;
      
        case 0:
         m= 12;
         y--
         break;

        default:
           m = m;
          break;
      }

     
      this.props.getMonth(tracker,y,m)

    }
    
    // addDay( day, level){
         
    //     console.log(this.props)
    //     let dis= this;

    //     axios.post('/day', {
    //         tracker_id: this.props.data.tracker.id,
    //         month:this.props.data.month,
    //         year:this.props.data.year,
    //         day:day,
    //         level:level
    //       })

          
    //       .then(function (response) {
              

    //           let days = response.data;
    //           console.log(response.data);
    //           dis.setState({
    //              days:days
    //           })
              
    //           console.log('set state should rerender');
    //           console.log(dis.state);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });

    // }

    render () {

        let day_array = [];
        let graph_width = this.props.data.daycount * 70;
        for(let i=1 ; i <= this.props.data.daycount ; i++){

            let day = this.props.data.days.find( (day)=>{ return day.day === i });
            day = (day)? day:null 
            day_array.push(<Day day_data={day} colors={this.state.colors} addDay={this.props.addDay} levels={this.props.data.tracker.levels} key={i} day={i} />)  
        } 

        
    return (
      <div>
        
        <div className="graph">

                <div  style={{ width: graph_width }} className="graph-inside">
                {day_array}
                </div>
            
        
        </div>


        <div className="tracker-controller">
        
          <div className="month-controller">

          <button  onClick={ ()=>{this.selectMonth(false)}  } >Prev</button>
           <button onClick={ ()=>{this.selectMonth(true)} } >Next</button>

          </div>  

        </div>  



      </div>

    );
  }
}

export default Graph 




