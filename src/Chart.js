import React, { Component } from 'react';
import d3 from 'd3'

var Chart = React.createClass({
  render: function() {
    return (
      <svg width={this.props.width} height={this.props.height}>{this.props.children}</svg>
    );
  }
});

export default Chart;
