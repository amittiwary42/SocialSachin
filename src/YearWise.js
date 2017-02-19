import React, { Component } from 'react';
import BarChart from './BarChart'
import mydata from '../mydata.json'

var YearWise = React.createClass({
  getInitialState (){
    return{
      value: 1989
    };
  },
  handleChange : function(event){
    this.setState({value: event.target.value})
  },

  render : function(){
    //console.log(mydata.length);
    var newdata = [];
    for (var i=0; i<mydata.length; i++){
      var temp = mydata[i];
      if (temp.date == this.state.value){
        newdata.push(temp.batting_score);
      }

    }
    return(<div className="container"><div className="row text-center col-md-4 col-md-offset-4">
      <select className="form-control" value={this.state.value} onChange={this.handleChange}>
          <option value="1989">1989</option>
          <option value="1990">1990</option>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
          <option value="1994">1994</option>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
      </select></div><div className="spacer"></div><div className="row text-center">
      <BarChart width={800} height={300} data={newdata} />
      </div></div>);
  }

});

export default YearWise;
