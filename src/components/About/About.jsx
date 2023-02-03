import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";
import AboutImg from "../../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondary px-5 text-white py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info pb-5 md:pb-0 ">
          <h2 className="text-4xl mb-5 font-bold border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About me
          </h2>

          <p className="pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam inventore quos error odio, nemo quia! Iure reiciendis iste dolor et minus velit quis sunt eius sed illum? Minus, eaque laborum.
          </p>
          <p className="pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam inventore quos error odio, nemo quia! Iure reiciendis iste dolor et minus velit quis sunt eius sed illum? Minus, eaque laborum.
          </p>
          <p className="py-b">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam inventore quos error odio, nemo quia! Iure reiciendis iste dolor et minus velit quis sunt eius sed illum? Minus, eaque laborum.
          </p>

        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
