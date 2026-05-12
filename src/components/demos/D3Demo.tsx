import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
import { generateGraphData } from '../../utils/dataGenerator';

interface D3DemoProps {
  nodes?: number;
  demoId?: string;
}

const D3Demo = ({ nodes, demoId }: D3DemoProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 600;
    const height = 400;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const { nodes: gNodes, edges: gEdges } = nodes
      ? generateGraphData(nodes)
      : {
          nodes: [{ id: '1' }, { id: '2' }, { id: '3' }],
          edges: [
            { source: '1', target: '2' },
            { source: '2', target: '3' },
          ],
        };

    const simulation = d3
      .forceSimulation(gNodes as any)
      .force(
        'link',
        d3.forceLink(gEdges).id((d: any) => d.id),
      )
      .force('charge', d3.forceManyBody().strength(-100))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg
      .append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(gEdges)
      .join('line')
      .attr('stroke-width', 2);

    const node = svg
      .append('g')
      .selectAll('circle')
      .data(gNodes)
      .join('circle')
      .attr('r', 8)
      .attr('fill', demoId === 'custom' ? '#f59e0b' : '#4f46e5');

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);
    });

    return () => {
      simulation.stop();
    };
  }, [nodes, demoId]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        maxHeight: '80vh',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <svg ref={svgRef} width={600} height={400} />
    </div>
  );
};

export default D3Demo;
