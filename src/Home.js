import "./styles.css";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div class="home">
      Hi, i am <strong>M_Mohandas</strong>
      <div class="subtxt">
        <p>And i am an</p>
        <Typewriter
          options={{
            strings: [
              "Front End Developer",
              "Engineer",
              "Quick Learner",
              "Team player",
              "Creative thinker"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50
          }}
        />
      </div>
    </div>
  );
}
