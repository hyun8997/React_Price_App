import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    // css 스타일의 높이로 설정할 값
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* chart의 바가 어느정도 채워져야 하는지 */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div classNamse="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
