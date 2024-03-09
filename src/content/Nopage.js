import Nav from "../Nav";
import Footer from "../Footer";

export default function Work() {
  return (
    <div className="App">
      <Nav />
      <h1 style={{ position: "relative", top: "250px", color: "white" }}>
        {" "}
        <strong style={{ color: "#a020f0" }}>404</strong> page not found
      </h1>
      <p style={{ position: "relative", top: "250px" }}>
        The requested URL was not found on this server. That’s all we know.
      </p>
      <img src=""></img>
      <Footer place="nopage" />
    </div>
  );
}
