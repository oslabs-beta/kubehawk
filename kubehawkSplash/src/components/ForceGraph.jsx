import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import flareData from './flare.json';

const ForceGraph = (props) => {
  const chartRef = useRef();
  // eslint-disable-next-line react/prop-types
  const flareJson = props.roles;
  const { nodes, links } = convertToHierarchy(flareJson);

  function convertToHierarchy(jsonData) {
  const data = jsonData;
  const nodes = [];
  const links = [];

  data.items.forEach(item => {
    if (!item.subjects || item.subjects.length === 0) {
      return;
    }
    const roleName = item.metadata.name;
    let roleNode = nodes.find(node => node.id === roleName);

    if (!roleNode) {
      roleNode = { id: roleName };
      nodes.push(roleNode);
    }

    item.subjects.forEach(subject => {
      const subjectId = `${subject.kind}_${subject.name}`;
      let subjectNode = nodes.find(node => node.id === subjectId);

      if (!subjectNode) {
        subjectNode = { id: subjectId };
        nodes.push(subjectNode);
      }

      links.push({ source: roleName, target: subjectId });
    });
  });

  return { nodes, links };
}


  useEffect(() => {
    const width = 800;
    const height = 600;

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        'link',
        d3.forceLink(links).id(d => d.id)
      )
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2));

    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('viewBox', [0, 0, width, height]);

    const link = svg
      .append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(links)
      .join('line');

    const node = svg
      .append('g')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', 5)
      .attr('fill', '#69b3a2')
      .call(drag(simulation));

    node.append('title').text(d => d.id);

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node.attr('cx', d => d.x).attr('cy', d => d.y);
    });

    function drag(simulation) {
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3
        .drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    }
  }, [nodes, links]);

  return <div ref={chartRef} />;
};

export default ForceGraph;
