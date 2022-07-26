import React from 'react';

export default class DrawnPath extends React.Component {
  /* React component for user drawn paths (freeform lines)
  This component renders the path given attributes. All other logic (such as mouse
  clicking and movement) should be handled by the encompassing canvas.
  Should receive the following props
    elementId: 1
    startingPoint: [x, y]
    pathData: [[x1, y1], [x2, y2], ...]
    stroke: "#FF0000" (or some other color representation)
    strokeWidth: 5
  */

  render() {
    // create d value like 'M 0 0 L 10 20 L 30 40'
    const dPath = this.props.pathData.reduce(
      (previousValue, currentValue) => previousValue + ` L ${currentValue[0]} ${currentValue[1]}`,
      `M ${this.props.startingPoint[0]} ${this.props.startingPoint[1]}`
    );
    const { elementId, stroke, strokeWidth } = this.props;
    return <path
      data-element-id={elementId}
      d={dPath}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    ></path>;
  }
}
