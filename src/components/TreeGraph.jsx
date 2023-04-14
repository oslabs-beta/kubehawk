import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function TreeGraph(props) {
  const ref = useRef();

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const hierarchy = convertToHierarchy(props.roles);
    const root = d3.hierarchy(hierarchy);

    const treeLayout = d3.tree().size([window.innerHeight, window.innerWidth]);
    treeLayout(root);

    const dimensions = treeLayout(root)
    const svg = d3.select(ref.current).append('svg')
      .attr('width', window.innerWidth * 1.5)
      .attr('height', window.innerHeight)
      .style('background-color', '#f2f2f2');

    const linkGroup = svg.append('g').attr('class', 'links');
    const nodeGroup = svg.append('g').attr('class', 'nodes');

    const links = root.links();
    linkGroup.selectAll('path')
    .data(links)
    .enter().append('path')
    .attr('d', d => {
      return `M${d.source.y},${d.source.x}L${d.target.y},${d.target.x}`;
    })
    .attr('stroke', 'black')
    .attr('stroke-width', 2);
  
  

    const nodes = root.descendants();
    nodeGroup.selectAll('circle')
    .data(nodes)
    .enter().append('circle')
    .attr('r', d => 5 * (root.height + 1 - d.depth))
    .attr('cx', d => d.y)
    .attr('cy', d => d.x);
  

    nodeGroup.selectAll('text')
      .data(nodes)
      .enter().append('text')
      .attr('x', d => d.y + 15)
      .attr('y', d => d.x)
      .text(d => d.data.name)
      .attr('alignment-baseline', 'middle');
  }, []);

  function convertToHierarchy(jsonData) {
    const data = jsonData;
    const hierarchy = [];

    data.items.forEach(item => {
      if (!item.subjects || item.subjects.length === 0) {
        return;
      }

      const role = item.roleRef.name;
      const subject = item.subjects[0].name;
      const subjectType = item.subjects[0].kind;

      // Find or create the parent node for the current role
      let roleNode = hierarchy.find(node => node.name === role);
      if (!roleNode) {
        roleNode = {
          name: role,
          children: []
        };
        hierarchy.push(roleNode);
      }

      // Create a child node for the current subject
      const subjectNode = {
        name: subjectType === 'ServiceAccount' ? `Service Account ${subject}` : `User ${subject}`,
        size: 1 // Assign a size value if needed, e.g., based on the subject data
      };

      // Add the child node to the parent node's children array
      roleNode.children.push(subjectNode);
    });

    // Create the root node and add the hierarchy as its children
    const rootNode = {
      name: 'Roles',
      children: hierarchy
    };

    return rootNode;
  }

  return <div ref={ref}></div>;
}

export default TreeGraph;
