import React, { Component } from 'react';
import * as d3 from 'd3'
import Bar from './Bar'
var DataSeries = React.createClass({
  getDefaultProps: function() {
    return {
      title: '',
      data: []
    }
  },

  render: function() {
    var props = this.props;

    var yScale = d3.scaleLinear()
      .domain([0, d3.max(this.props.data)])
      .range([0, this.props.height]);

    var xScale = d3.scaleBand()
      .domain(d3.range(this.props.data.length))
      .rangeRound([0, this.props.width]).padding(0.05);

    var bars = this.props.data.map(function(point, i) {
      return (
        <Bar height={yScale(point)} width={xScale.bandwidth()} offset={xScale(i)} availableHeight={props.height} color={props.color} key={i} />
      )
    });

    return (
      <g>{bars}</g>
    );
  }
});

export default DataSeries;
