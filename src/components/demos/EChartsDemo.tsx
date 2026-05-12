import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import React from 'react';

const EChartsDemo = () => {
  const option = {
    title: {
      text: 'ECharts Graph Demo',
      left: 'center',
    },
    tooltip: {},
    legend: {
      data: ['Group A', 'Group B'],
      bottom: 10,
    },
    series: [
      {
        name: 'Graph',
        type: 'graph',
        layout: 'force',
        data: [
          { name: 'Node 1', category: 0, value: 10 },
          { name: 'Node 2', category: 0, value: 20 },
          { name: 'Node 3', category: 1, value: 30 },
          { name: 'Node 4', category: 1, value: 40 },
          { name: 'Node 5', category: 0, value: 50 },
        ],
        links: [
          { source: 'Node 1', target: 'Node 2' },
          { source: 'Node 1', target: 'Node 3' },
          { source: 'Node 2', target: 'Node 4' },
          { source: 'Node 3', target: 'Node 5' },
          { source: 'Node 4', target: 'Node 5' },
        ],
        categories: [{ name: 'Group A' }, { name: 'Group B' }],
        force: {
          repulsion: 100,
          edgeLength: 100,
        },
        label: {
          show: true,
        },
      },
    ],
  };

  return (
    <div
      style={{
        width: '100%',
        height: '500px',
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
