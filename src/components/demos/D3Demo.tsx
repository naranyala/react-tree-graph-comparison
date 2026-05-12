import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

const D3Demo = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    svg
      .append('circle')
      .attr('cx', 50)
      .attr('cy', 50)
      .attr('r', 40)
      .style('fill', 'blue');

    svg
      .append('text')
      .attr('x', 50)
      .attr('y', 100)
      .text('D3 Simple Circle')
      .attr('text-anchor', 'middle');
  }, []);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h3>D3.js Demo</h3>
      <svg ref={svgRef} width="200" height="150" />
    </div>
  );
};

export default D3Demo;
