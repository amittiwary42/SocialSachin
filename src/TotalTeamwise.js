import React, { Component } from 'react';
import BarChart from './BarChart'
import mydata from '../mydata.json'

var TotalTeamwise = React.createClass({
  getInitialState (){
    return{
      value: "Australia"
    };
  },
  handleChange : function(event){
    this.setState({value: event.target.value})
  },
  render : function(){
    var newdata = [];
    var temp1 = mydata[0].date;var bat_total = 0;
    for (var i=0; i<mydata.length; i++){
      var temp = mydata[i];
      if (temp.date == temp1){
        if (temp.opposition == this.state.value){
            bat_total+= temp.batting_score ;
        }
      }
      else{
        temp1 = temp.date;
        newdata.push(bat_total);
        if (temp.opposition == this.state.value){
          bat_total = temp.batting_score;
        }
        else{
          bat_total = 0;
        }
      }
     }newdata.push(bat_total);
    return(
      <div className="container">
      <div className="row text-center col-md-4 col-md-offset-4">
      <select className="form-control" value={this.state.value} onChange={this.handleChange}>
          <option value="Australia">Australia</option>
          <option value="Pakistan">Pakistan</option>
          <option value="New Zealand">New Zealand</option>
          <option value="South Africa">South Africa</option>
          <option value="West Indies">West Indies</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="England">England</option>
          <option value="Bangladesh">Bangladesh</option>

      </select>
      </div><div className="spacer"></div><div className="row text-center">
      <BarChart width={800} height={300} data={newdata} /></div>
      </div>
    );
  }
});

export default TotalTeamwise;
