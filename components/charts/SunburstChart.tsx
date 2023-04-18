import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import Sunburst from 'sunburst-chart';

const SunburstChart = (props) => {
  const chartRef = useRef();
  // eslint-disable-next-line react/prop-types
  const flareJson = props.roles;
  const heirarchyData = convertToHierarchy(flareJson);
  
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

  useEffect(() => {

    const color = d3.scaleOrdinal(d3.schemePaired);

    Sunburst()
      .data(heirarchyData)
      .label('name')
      .size('size')
      .color((d, parent) => color(parent ? parent.data.name : null))
      .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)
      // eslint-disable-next-line no-unexpected-multiline
      (chartRef.current);
  }, []);

  return <div ref={chartRef} />;
  
};

export default SunburstChart;