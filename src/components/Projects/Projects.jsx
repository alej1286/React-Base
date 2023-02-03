import project1 from "../../assets/01.webp";
import project2 from "../../assets/02.webp";
import project3 from "../../assets/03.jpg";
import project4 from "../../assets/04.png";
import project5 from "../../assets/05.webp";
import project6 from "../../assets/06.webp";

const Projects = () => {
  return (
    <section className="bg-primary px-5 text-white py-32" id="Project">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info pb-5 md:pb-0 ">
          <h2 className="text-4xl mb-5 font-bold border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            inventore quos error odio, nemo quia! Iure reiciendis iste dolor et
            minus velit quis sunt eius sed illum? Minus, eaque laborum.
          </p>
        </div>

        <div className="about-img"></div>
      </div>
      <div className="projects container mx-auto grid md:grid-cols-3">
        <div>
          <a href="#">
            <img src={project1} alt="" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={project2} alt="" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={project3} alt="" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={project4} alt="" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={project5} alt="" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src={project6} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
