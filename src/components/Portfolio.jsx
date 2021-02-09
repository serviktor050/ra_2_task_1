import { useState } from "react";
import Toolbar from "./Toolbar.jsx";
import ProjectList from "./ProjectList.jsx";

export default function Portfolio() {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const allProjects = [
    {
      id: "1",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
      category: "Business Cards",
    },
    {
      id: "2",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites",
    },
    {
      id: "3",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites",
    },
    {
      id: "4",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
      category: "Websites",
    },
    {
      id: "5",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
      category: "Business Cards",
    },
    {
      id: "6",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
      category: "Websites",
    },
    {
      id: "7",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites",
    },
    {
      id: "8",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards",
    },
    {
      id: "9",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
      category: "Websites",
    },
    {
      id: "10",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
      category: "Flayers",
    },
    {
      id: "11",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
      category: "Websites",
    },
    {
      id: "12",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
      category: "Business Cards",
    },
    {
      id: "13",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
      category: "Websites",
    },
    {
      id: "14",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites",
    },
    {
      id: "15",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards",
    },
    {
      id: "16",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
      category: "Websites",
    },
    {
      id: "17",
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
      category: "Flayers",
    },
  ];
  const [selectedFilter, setSelectFilter] = useState("All");

  const filteredProjects = allProjects.filter((project) => {
    if (selectedFilter === "All") {
      return true;
    } else {
      return project.category === selectedFilter;
    }
  });

  return (
    <div className="portfolio">
      <Toolbar
        filters={filters}
        selected={selectedFilter}
        onSelectFilter={(filter) => {
          setSelectFilter(filter);
        }}
      />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}
