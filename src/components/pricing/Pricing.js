import React from "react";

function Pricing() {
  return (
    <div className="ftcosection" id="pricing-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftcoanimate">
            <span className="subheading">Pricing</span>
            <h2 className="mb-4">Buy Tickets</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 ftcoanimate">
            <div className="pricing-entry pb-5 text-center">
              <div>
                <h3 className="mb-4">Basic</h3>
                <p>
                  <span className="price">$29.00</span>{" "}
                  <span className="per">/ month</span>
                </p>
              </div>
              <ul>
                <li>Visit 4 Events</li>
                <li>Regular Seat</li>
                <li>Free Coffee</li>
                <li>Lunch Item</li>
                <li>Free Entrance</li>
              </ul>
              <p className="button text-center">
                <a href="/" className="btn btn-primary px-4 py-3">
                  Buy Ticket
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 ftcoanimate">
            <div className="pricing-entry pb-5 text-center">
              <div>
                <h3 className="mb-4">Standard</h3>
                <p>
                  <span className="price">$59.00</span>{" "}
                  <span className="per">/ month</span>
                </p>
              </div>
              <ul>
                <li>Visit 4 Events</li>
                <li>Regular Seat</li>
                <li>Free Coffee</li>
                <li>Lunch Item</li>
                <li>Free Entrance</li>
              </ul>
              <p className="button text-center">
                <a href="/" className="btn btn-primary px-4 py-3">
                  Buy Ticket
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 ftcoanimate">
            <div className="pricing-entry active pb-5 text-center">
              <div>
                <h3 className="mb-4">Premium</h3>
                <p>
                  <span className="price">$79.00</span>{" "}
                  <span className="per">/ month</span>
                </p>
              </div>
              <ul>
                <li>Visit 4 Events</li>
                <li>Regular Seat</li>
                <li>Free Coffee</li>
                <li>Lunch Item</li>
                <li>Free Entrance</li>
              </ul>
              <p className="button text-center">
                <a href="/" className="btn btn-primary px-4 py-3">
                  Buy Ticket
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 ftcoanimate">
            <div className="pricing-entry pb-5 text-center">
              <div>
                <h3 className="mb-4">Gold</h3>
                <p>
                  <span className="price">$89.50</span>{" "}
                  <span className="per">/ month</span>
                </p>
              </div>
              <ul>
                <li>Visit 10 Events</li>
                <li>VIP Seat</li>
                <li>Free Coffee</li>
                <li>Free Lunch</li>
                <li>Free Entrance</li>
              </ul>
              <p className="button text-center">
                <a href="/" className="btn btn-primary px-4 py-3">
                  Buy Ticket
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
