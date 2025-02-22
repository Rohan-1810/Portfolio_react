import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import IMG from "/IMG.jpg";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={IMG} alt="" className="left-img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hey there! 👋 I'm a passionate Front-End Developer who loves
              crafting engaging and user-friendly web experiences. I specialize
              in building responsive websites using modern frameworks like React
              and styling with Bootstrap.
            </p>

            <p>
              My goal? To bring ideas to life through clean, efficient code
              while delivering seamless user interfaces. I’m constantly learning
              and staying up-to-date with the latest web technologies to build
              better, faster, and more beautiful websites.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript </p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>BootStrap </p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React </p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Technical Milestones</h1>
          <p>
            Successfully completed the Front-End Web Development course on
            Udemy, gaining expertise in HTML, CSS, JavaScript, React, and
            Bootstrap.
          </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Open Source Contributions</h1>
          <p>
            Published and maintained personal repositories showcasing
            interactive UI components and web applications.
          </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1> Continuous Learning</h1>
          <p>
            Regularly expand my skill set by completing advanced tutorials and
            participating in coding challenges.
          </p>
        </div>
      </div>
    </div>
  );
}
