import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import ReactECharts from 'echarts-for-react';
import React, { useMemo } from 'react';
import { generateGraphData } from '../../utils/dataGenerator';

interface EChartsDemoProps {
  nodes?: number;
  demoId?: string;
}

const EChartsDemo = ({ nodes, demoId }: EChartsDemoProps) => {
  const { nodes: gNodes, edges: gEdges } = useMemo(() => {
    return nodes
      ? generateGraphData(nodes)
      : {
          nodes: [{ id: '1' }, { id: '2' }, { id: '3' }],
          edges: [
            { source: '1', target: '2' },
            { source: '2', target: '3' },
          ],
        };
  }, [nodes]);

  const option = useMemo(() => {
    const chartData = {
      nodes: gNodes.map((n) => ({ id: n.id, name: n.label })),
      links: gEdges.map((e) => ({ source: e.source, target: e.target })),
    };

    // Handle variants
    let color = '#4f46e5';
    if (demoId === 'custom') color = '#f59e0b';

    return {
      series: [
        {
          type: 'graph',
          layout: 'force',
          data: chartData.nodes,
          links: chartData.links,
          roam: true,
          label: { show: true },
          itemStyle: { color: color },
          lineStyle: { color: '#ccc', curveness: 0.3 },
        },
      ],
    };
  }, [gNodes, gEdges, demoId]);

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
      }}
    >
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default EChartsDemo;
