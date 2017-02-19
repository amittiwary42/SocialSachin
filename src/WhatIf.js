import React, { Component } from 'react';
import BarChart from './BarChart'
import battingav from '../battingav.json'

var WhatIf = React.createClass({
  render : function(){
    var newdata = [];
    for (var i=0; i<battingav.length; i++){
      var temp = battingav[i];
      newdata.push(temp.Average);
    }
    return(
      <div className="text-center"><BarChart width={800} height={300} data={newdata} /></div>);
  }

});

export default WhatIf;
