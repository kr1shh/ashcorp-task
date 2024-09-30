import ProjectCard from "./ui/ProjectCard"

const ProjectCarousel = () => {
  return (
    <>
      <div className="flex">
        <ProjectCard
          title={"BLM Orchid"}
          image={"/assets/images/project-img-1.png"}
          place={"Mannarkkad"}
          squareFeet={"1500 SQFT X6"}
        />
        <ProjectCard
          title={"BLM Orchid"}
          image={"/assets/images/project-img-2.png"}
          place={"Mannarkkad"}
          squareFeet={"1500 SQFT X6"}
        />
      </div>
    </>
  );
}

export default ProjectCarousel