import Nav from "../Nav";
import Footer from "../Footer";
import "./css/works.css";

export default function Work() {
  return (
    <div className="App">
      <Nav />
      <div class="workpage">
        <p className="parahed">
          My Recent <strong>Works</strong>
        </p>
        <div class="workcontainer">
          <div class="workbox">
            <img src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png" />
            <h3>Todo List</h3>
            <div>
              <p>
                To-do lists offer a way to increase productivity, stopping you
                from forgetting things, helps prioritise tasks, manage tasks
                effectively, use time wisely and improve time management as well
                as workflow
              </p>
            </div>
            <a href="https://gtw6yb.csb.app/" target="_blank">
              <button>Check App</button>
            </a>
          </div>

          <div class="workbox">
            <img src="https://media.istockphoto.com/id/954711432/vector/unique-school-hand-drawn-lettering-with-doodles-tic-tac-toe-on-the-purple-background.jpg?s=1024x1024&w=is&k=20&c=DJ2uXc1FzlBrdHXLW7_5fsEPE_5dwMSj6valaccyVYg=" />
            <h3>Tic-Tac-Toe</h3>
            <p>
              A game in which two players seek in alternate turns to complete a
              row, a column, or a diagonal with either three O's or three X's
              drawn in the spaces of a grid of nine squares; noughts and
              crosses.
            </p>
            <div>
              <a href="https://tic-tak-tao.netlify.app/" target="_blank">
                <button>Check App</button>
              </a>
            </div>
          </div>

          <div class="workbox">
            <img src="https://img.freepik.com/premium-vector/realistic-weather-icon-cloud-with-snow-illustration-purple-background_593483-22.jpg?w=740" />
            <h3>Weather Checker</h3>
            <p>
              Get the weather forecast in a beautiful and powerful app. See
              current and forecasted weather with a smart layout that updates as
              conditions change.
            </p>
            <div>
              <a href="https://prepyo.csb.app/" target="_blank">
                <button>Check App</button>
              </a>
            </div>
          </div>
        </div>

        <div class="workcontainer">
          <div class="workbox">
            <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX41061414.jpg" />
            <h3>Currency Converter</h3>
            <p>
              Currency conversion is the process that facilitates transactions
              where the issuer and acquirer use different currencies by
              exchanging one type of currency for another
            </p>
            <div>
              <a href="https://zux69.csb.app/" target="_blank">
                <button>Check App</button>
              </a>
            </div>
          </div>
          <div class="workbox">
            <img src="https://thumbs.dreamstime.com/b/purple-time-10146772.jpg" />
            <h3>Time</h3>
            <p>
              A game in which two players seek in alternate turns to complete a
              row, a column, or a diagonal with either three O's or three X's
              drawn in the spaces of a grid of nine squares; noughts and
              crosses.
            </p>
            <div>
              <a href="https://bc41r.csb.app/" target="_blank">
                <button>Check App</button>
              </a>
            </div>
          </div>
          <div class="workbox">
            <img src="https://img.freepik.com/premium-vector/abstract-modern-wallpaper-purple-pink-blue-with-random-geometry-background-vector-illustration_640644-183.jpg?w=900" />
            <h3>Random Things</h3>
            <p>
              Random things is a concept of getting random joke and facts and
              riddle. This is a fun website that gives different facts and
              riddle and jokes each time.
            </p>
            <div>
              <a href="https://hrwxu4.csb.app/" target="_blank">
                <button>Check App</button>
              </a>
            </div>
          </div>
        </div>
        <div class="workcontainer">
          <div class="workbox" style={{ width: "295px" }}>
            <div>
              <img src="https://www.makeitgrateful.com/wp-content/uploads/2019/05/diy-photo-frame-tutorial-768x512.jpg" />
              <h3>Zig-Zag Photo</h3>
              <p>
                This uses <strong>OpenCV</strong> to process images. Where we
                have to select two images and both will be resized and cropped
                in to 5 different parts and both image parts will be kept one
                after another to make a frame which is a good gift idea.
              </p>
              <div>
                <a href="https://6ksv8g-3001.csb.app/" target="_blank">
                  <button>Check App</button>
                </a>
              </div>
            </div>
          </div>


          <div class="workbox" style={{ width: "295px" }}>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlIkEXC6t3j8bYdflNxbEqlhMc15BCFwgvQ&s" />
              <h3>Ecommerce website</h3>
              <p>
                This is a simple online store where users can buy any products.
                The website has some few products when the users can see the details of the product and
                get the product.
              </p>
              <div>
                <a href="https://vitejsvite2nyep2-snie--5173--fc837ba8.local-credentialless.webcontainer.io/" target="_blank">
                  <button>Check App</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer place="workplace" />
    </div>
  );
}
