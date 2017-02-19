import React, { Component } from 'react';
import BarChart from './BarChart'
import mydata from '../mydata.json'

var Total = React.createClass({
  render : function(){
    var newdata = [];
    var temp1 = mydata[0].date;var bat_total = 0;
    for (var i=0; i<mydata.length; i++){
      var temp = mydata[i];
      if (temp.date == temp1){
        bat_total+= temp.batting_score ;
      }
      else{
        temp1 = temp.date;
        newdata.push(bat_total);
        bat_total = temp.batting_score;
      }

    }newdata.push(bat_total);
    return(
      <div className="text-center"><BarChart width={800} height={300} data={newdata} /></div>);
  }

});

export default Total;
