import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div id="footer-wrapper">
        <footer id="footer" className="container">
          <div className="row">
            <div className="col-3 col-6-medium col-12-small">
              <section>
                <h2>IGNITE Institute</h2>
                <ul className="divided">
                  <li>
                    <Link to="#">Quam turpis feugiat dolor</Link>
                  </li>
                  <li>
                    <Link to="#">Amet ornare in hendrerit </Link>
                  </li>
                  <li>
                    <Link to="#">Semper mod quisturpis nisi</Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="col-3 col-6-medium col-12-small">
              {/* <!-- Links --> */}
              <section>
                <h2>Popular Courses</h2>
                <ul className="divided">
                  <li>
                    <Link to="#">Quam turpis feugiat dolor</Link>
                  </li>
                  <li>
                    <Link to="#">Amet ornare in in lectus</Link>
                  </li>
                  <li>
                    <Link to="#">Semper mod sed tempus nisi</Link>
                  </li>
                  <li>
                    <Link to="#">Consequat etiam phasellus</Link>
                  </li>
                </ul>
              </section>

              {/* <!-- Links --> */}
              <section>
                <h2>Quick Links</h2>
                <ul className="divided">
                  <li>
                    <Link to="#">Quam turpis feugiat dolor</Link>
                  </li>
                  <li>
                    <Link to="#">Amet ornare hendrerit lectus</Link>
                  </li>
                  <li>
                    <Link to="#">Semper quisturpis nisi</Link>
                  </li>
                  <li>
                    <Link to="#">Consequat lorem phasellus</Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="col-6 col-12-medium imp-medium">
              {/* <!-- About --> */}
              <section>
                <h2>
                  <strong>IGNITE Institute</strong> by Prashant Singla
                </h2>
                <p>
                  Hi! This is <strong>Ignite Institute</strong>, a free, fully
                  responsive HTML5 site template by{" "}
                  <Link to="http://twitter.com/ajlkn">AJ</Link> for{" "}
                  <Link to="http://html5up.net/">HTML5 UP</Link>. It's{" "}
                  <Link to="http://html5up.net/license/">
                    Creative Commons Attribution
                  </Link>
                  licensed so use it for any personal or commercial project
                  (just credit us for the design!).
                </p>
                <Link
                  to="#"
                  className="button alt icon solid fa-arrow-circle-right"
                >
                  Learn More
                </Link>
              </section>

              {/* <!-- Contact --> */}
              <section>
                <h2>Get in touch</h2>
                <div>
                  <div className="row">
                    <div className="col-6 col-12-small">
                      <dl className="contact">
                        <dt>Twitter</dt>
                        <dd>
                          <Link to="#">@untitled-corp</Link>
                        </dd>
                        <dt>Facebook</dt>
                        <dd>
                          <Link to="#">facebook.com/untitled</Link>
                        </dd>
                        <dt>WWW</dt>
                        <dd>
                          <Link to="#">untitled.tld</Link>
                        </dd>
                        <dt>Email</dt>
                        <dd>
                          <Link to="#">user@untitled.tld</Link>
                        </dd>
                      </dl>
                    </div>
                    <div className="col-6 col-12-small">
                      <dl className="contact">
                        <dt>Address</dt>
                        <dd>
                          1234 Fictional Rd
                          <br />
                          Nashville, TN 00000-0000
                          <br />
                          USA
                        </dd>
                        <dt>Phone</dt>
                        <dd>(000) 000-0000</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-12">
              <div id="copyright">
                <ul className="menu">
                  <li>&copy; Untitled. All rights reserved</li>
                  <li>
                    Design: <Link to="http://html5up.net">HTML5 UP</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
