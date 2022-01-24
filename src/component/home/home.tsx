import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../shared/footer";
import { Header } from "../shared/header";
import { Banner } from "../shared/banner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

export const Home = () => {
  useEffect(() => {});

  return (
    <>
      <body className="homepage is-preload">
        <div id="page-wrapper">
          <Header />
          <Banner />
          {/* <!-- Main Wrapper --> */}
          <div id="main-wrapper">
            <div className="wrapper style1">
              <div className="inner">
                {/* <!-- Feature 1 --> */}
                <section className="container box feature1">
                  <div className="row">
                    <div className="col-12">
                      <header className="first major">
                        <h2>This is an important heading</h2>
                        <p>
                          And this is where we talk about why we’re{" "}
                          <strong>pretty awesome</strong> ...
                        </p>
                      </header>
                    </div>
                    <div className="col-4 col-12-medium">
                      <section>
                        <Link to="/">
                          <img src="../../images/pic01.jpg" alt="" />
                        </Link>
                        <header className="second icon solid fa-user">
                          <h3>Here's a Heading</h3>
                          <p>And a subtitle</p>
                        </header>
                      </section>
                    </div>
                    <div className="col-4 col-12-medium">
                      <section>
                        <Link to="/">
                          <img src="../../images/pic02.jpg" alt="" />
                        </Link>
                        <header className="second icon solid fa-cog">
                          <h3>Also a Heading</h3>
                          <p>And another subtitle</p>
                        </header>
                      </section>
                    </div>
                    <div className="col-4 col-12-medium">
                      <section>
                        <Link to="/">
                          <img src="../../images/pic03.jpg" alt="" />
                        </Link>
                        <header className="second icon solid fa-chart-bar">
                          <h3>Another Heading</h3>
                          <p>And yes, a subtitle</p>
                        </header>
                      </section>
                    </div>
                    <div className="col-12">
                      <p>
                        Phasellus quam turpis, feugiat sit amet ornare in,
                        hendrerit in lectus. Praesent semper bibendum ipsum, et
                        tristique augue fringilla eu. Vivamus id risus vel dolor
                        auctor euismod quis eget mi. Etiam eu ante risus.
                        Aliquam erat volutpat. Aliquam luctus mattis lectus sit
                        amet pulvinar. Nam nec turpis.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="wrapper style2">
              <div className="inner">
                {/* <!-- Feature 2 --> */}
                <section className="container box feature2">
                  <div className="row">
                    <div className="col-6 col-12-medium">
                      <section>
                        <header className="major">
                          <h2>And this is a subheading</h2>
                          <p>It’s important but clearly not *that* important</p>
                        </header>
                        <p>
                          Phasellus quam turpis, feugiat sit amet ornare in,
                          hendrerit in lectus. Praesent semper mod quis eget mi.
                          Etiam eu ante risus. Aliquam erat volutpat. Aliquam
                          luctus et mattis lectus sit amet pulvinar. Nam turpis
                          nisi consequat etiam.
                        </p>
                        <footer>
                          <Link
                            to="/"
                            className="button medium icon solid fa-arrow-circle-right"
                          >
                            Let's do this
                          </Link>
                        </footer>
                      </section>
                    </div>
                    <div className="col-6 col-12-medium">
                      <section>
                        <header className="major">
                          <h2>This is also a subheading</h2>
                          <p>And is as unimportant as the other one</p>
                        </header>
                        <p>
                          Phasellus quam turpis, feugiat sit amet ornare in,
                          hendrerit in lectus. Praesent semper mod quis eget mi.
                          Etiam eu ante risus. Aliquam erat volutpat. Aliquam
                          luctus et mattis lectus sit amet pulvinar. Nam turpis
                          nisi consequat etiam.
                        </p>
                        <footer>
                          <Link
                            to="/"
                            className="button medium alt icon solid fa-info-circle"
                          >
                            Wait, what?
                          </Link>
                        </footer>
                      </section>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="wrapper style3">
              <div className="inner">
                <div className="container">
                  <div className="row">
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
                                <Link to="#">
                                  Repairing a hyperspace window
                                </Link>
                              </h3>
                            </header>
                            <p>
                              Phasellus quam turpis, feugiat sit amet ornare in,
                              hendrerit in lectus semper mod quisturpis nisi
                              consequat etiam lorem. Phasellus quam turpis,
                              feugiat et sit amet ornare in, hendrerit in lectus
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
                                <Link to="#">
                                  Adventuring with a knee injury
                                </Link>
                              </h3>
                            </header>
                            <p>
                              Phasellus quam turpis, feugiat sit amet ornare in,
                              hendrerit in lectus semper mod quisturpis nisi
                              consequat etiam lorem. Phasellus quam turpis,
                              feugiat et sit amet ornare in, hendrerit in lectus
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
                              Phasellus quam turpis, feugiat sit amet ornare in,
                              hendrerit in lectus semper mod quisturpis nisi
                              consequat etiam lorem. Phasellus quam turpis,
                              feugiat et sit amet ornare in, hendrerit in lectus
                              semper mod quis eget mi dolore.
                            </p>
                          </div>
                        </article>
                      </section>
                    </div>
                    <div className="col-4 col-12-medium">
                      {/* <!-- Spotlight --> */}
                      <section className="box spotlight">
                        <h2 className="icon fa-file-alt">Spotlight</h2>
                        <article>
                          <Link to="#" className="image featured">
                            <img src="../../images/pic07.jpg" alt=""></img>
                          </Link>
                          <header>
                            <h3>
                              <Link to="#">Neural Implants</Link>
                            </h3>
                            <p>The pros and cons. Mostly cons.</p>
                          </header>
                          <p>
                            Phasellus quam turpis, feugiat sit amet ornare in,
                            hendrerit in lectus semper mod quisturpis nisi
                            consequat ornare in, hendrerit in lectus semper mod
                            quis eget mi quat etiam lorem. Phasellus quam
                            turpis, feugiat sed et lorem ipsum dolor consequat
                            dolor feugiat sed et tempus consequat etiam.
                          </p>
                          <p>
                            Lorem ipsum dolor quam turpis, feugiat sit amet
                            ornare in, hendrerit in lectus semper mod quisturpis
                            nisi consequat etiam lorem sed amet quam turpis.
                          </p>
                          <footer>
                            <Link
                              to="#"
                              className="button alt icon solid fa-file-alt"
                            >
                              Continue Reading
                            </Link>
                          </footer>
                        </article>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </body>
    </>
  );
};
