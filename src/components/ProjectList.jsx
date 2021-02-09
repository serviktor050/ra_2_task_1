import React from "react";

export default function ProjectList(props) {
  const { projects } = props;
  const projectArray = [];
  let stringsArray = 6;
  let columnsArray = Math.round(projects.length / stringsArray);

  for (let i = 0; i < stringsArray; i += 1) {
    projectArray.push(projects.slice(columnsArray * i, columnsArray * (i + 1)));
  }

  return (
    <div className="project-list">
      {projectArray.map((array) => (
        <div className="project-div">
          {array.map((object) => (
            <img src={object.img} alt={object.category} key={object.id} />
          ))}
        </div>
      ))}
    </div>
  );
}
