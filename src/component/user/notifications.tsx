import { Link } from "react-router-dom";

export const UserNotifications = () => {
  return (
    <div className="col-8 col-12-medium">
      {/* <!-- Article list --> */}
      <section className="box article-list">
        <h2 className="icon fa-file-alt">Latest Updates</h2>

        {/* <!-- Excerpt --> */}
        <article className="box excerpt">
          <Link to="#" className="image left">
            <img src="../../images/pic04.jpg" alt="" />
          </Link>
          <div>
            <header>
              <span className="date">July 24</span>
              <h3>
                <Link to="#">Repairing a hyperspace window</Link>
              </h3>
            </header>
            <p>
              Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in
              lectus semper mod quisturpis nisi consequat etiam lorem. Phasellus
              quam turpis, feugiat et sit amet ornare in, hendrerit in lectus
              semper mod quis eget mi dolore.
            </p>
          </div>
        </article>

        {/* <!-- Excerpt --> */}
        <article className="box excerpt">
          <Link to="#" className="image left">
            <img src="../../images/pic05.jpg" alt="" />
          </Link>
          <div>
            <header>
              <span className="date">July 18</span>
              <h3>
                <Link to="#">Adventuring with a knee injury</Link>
              </h3>
            </header>
            <p>
              Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in
              lectus semper mod quisturpis nisi consequat etiam lorem. Phasellus
              quam turpis, feugiat et sit amet ornare in, hendrerit in lectus
              semper mod quis eget mi dolore.
            </p>
          </div>
        </article>

        {/* <!-- Excerpt --> */}
        <article className="box excerpt">
          <Link to="#" className="image left">
            <img src="../../images/pic06.jpg" alt="" />
          </Link>
          <div>
            <header>
              <span className="date">July 14</span>
              <h3>
                <Link to="#">Preparing for Y2K38</Link>
              </h3>
            </header>
            <p>
              Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in
              lectus semper mod quisturpis nisi consequat etiam lorem. Phasellus
              quam turpis, feugiat et sit amet ornare in, hendrerit in lectus
              semper mod quis eget mi dolore.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};
