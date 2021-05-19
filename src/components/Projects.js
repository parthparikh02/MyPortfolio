import React, { Fragment } from "react";

const Projects = () => {
  return (
    <Fragment>
      <header className="page-header gradient">
        <div className="container pt-3">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5">
              <img
                src="images/medical.svg"
                alt="header img"
                className="img-fluid"
              />
            </div>
            <div className="col-md-5 ">
              <h2>PATIENT HEALTH MONITORING SYSTEM</h2>

              <p>
                Our project of Health Monitoring System reduces efforts of most
                of the health workers like doctors and nurses.
              </p>
              <p>
                we attached different sensors like ECG, temperature, Oximeter,
                etc. to the human body it will measure those values from the
                human body and we have used ESP8266 Wifi module with help of
                this will module and our developed APIs those data will be sent
                to our webserver.
              </p>
              <p>
                From the webserver, those data are fetched and displayed on our
                website in the graph format that we have made. Both doctors and
                patients are able to see their respective data and take actions
                according to it.
              </p>
              <a
                href="https://github.com/parthparikh02/healthmonitoringsystem"
                target="_blank"
              >
                <button className="custom-btn btn-12">
                  <span>Click!</span>
                  <span>Read More</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="container pt-4">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5">
              <h1>Ecommerce - Store</h1>

              <p>
                Developed a web application using Django REST framework for the
                backend and React JS at frontend.
              </p>
              <a
                href="https://github.com/parthparikh02/Ecommerce-Store"
                target="_blank"
              >
                <button className="custom-btn btn-12">
                  <span>Click!</span>
                  <span>Read More</span>
                </button>
              </a>
            </div>
            <div className="col-md-5">
              <img
                src="images/shopping.svg"
                alt="header img"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="container text-center pt-4">
          <a href="https://github.com/parthparikh02" target="_blank">
            <button className="custom-btn btn-12">
              <span>Click!</span>
              <span>Read More</span>
            </button>
          </a>
        </div>
      </header>
    </Fragment>
  );
};

export default Projects;
