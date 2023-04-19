import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const DemoSunburst = ({ dataFile }) => {
  const chartRef = useRef();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(dataFile);
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, [dataFile]);

  useEffect(() => {
    if (data) {
      const width = 900,
        height = 900,
        radius = Math.min(width, height) / 2;

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const sunburstLayout = d3.partition()
        .size([2 * Math.PI, radius]);

      const arc = d3.arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .innerRadius(d => d.y0)
        .outerRadius(d => d.y1);

      const svg = d3.select(chartRef.current)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

      const root = d3.hierarchy(data)
        .sum(d => d.value)
        .sort((a, b) => b.value - a.value);

      sunburstLayout(root);

      svg.selectAll("path")
        .data(root.descendants().filter(d => d.depth))
        .enter()
        .append("path")
        .attr("display", d => d.depth ? null : "none")
        .attr("d", arc)
        .style("fill", d => color((d.children ? d : d.parent).data.name))
        .style("stroke", "#fff")
        .style("stroke-width", "1px");
    }
  }, [data]);

  return (
    <svg ref={chartRef}></svg>
  );
};

export default DemoSunburst;
