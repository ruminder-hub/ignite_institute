import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../shared/footer";
import { Header } from "../shared/header";
import { Banner } from "../shared/banner";
import "bootstrap/dist/css/bootstrap.min.css";

import "../home/home.css";
import { UserCourses } from "./course_at_home";
import { UserNotifications } from "./notifications";

export const UserHome = () => {
  useEffect(() => {});

  return (
    <>
      <body className="homepage is-preload">
        <div id="page-wrapper">
          <Header />

          {/* <!-- Main Wrapper --> */}
          <div id="main-wrapper">
            <div className="wrapper style3">
              <div className="inner">
                <div className="container">
                  <div className="row">
                    <UserCourses />
                    <UserNotifications />
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
