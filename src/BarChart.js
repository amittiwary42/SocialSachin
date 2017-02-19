import React, { Component } from 'react';
import d3 from 'd3'
import Chart from './Chart'
import DataSeries from './DataSeries'


var BarChart = React.createClass({
  render: function() {
    return (
      <Chart width={this.props.width} height={this.props.height}>
        <DataSeries data={this.props.data} width={this.props.width} height={this.props.height} color="#ffd800" />
      </Chart>
    );
  }
});

export default BarChart;
