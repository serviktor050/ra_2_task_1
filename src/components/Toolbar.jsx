import React from "react";

export default function Toolbar(props) {
  const { filters, selected } = props;

  return (
    <div className="filters">
      {filters.map((filter) => {
        return (
          <div
            onClick={() => props.onSelectFilter(filter)}
            className={filter === selected && "active"}
          >
            {filter}
          </div>
        );
      })}
    </div>
  );
}
