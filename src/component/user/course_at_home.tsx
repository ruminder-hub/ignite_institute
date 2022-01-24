import { Link } from "react-router-dom";
import courseImage from "../images/pic07.jpg";

export const UserCourses = () => {
  return (
    <div className="col-4 col-12-medium">
      <section className="box spotlight">
        <h2 className="icon fa-file-alt">Your courses</h2>
        <article>
          <Link to="#" className="image featured">
            <img src={courseImage}></img>
          </Link>
          <header>
            <h3>
              <Link to="#">Neural Implants</Link>
            </h3>
            <p>The pros and cons. Mostly cons.</p>
          </header>
        </article>
        <article>
          <Link to="#" className="image featured">
            <img src={courseImage}></img>
          </Link>
          <header>
            <h3>
              <Link to="#">Neural Implants</Link>
            </h3>
            <p>The pros and cons. Mostly cons.</p>
          </header>
        </article>
      </section>
    </div>
  );
};
