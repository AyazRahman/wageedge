import React from "react";

import Chart from "../../components/Chart";

const Minwage = () => {
  return (
    <section className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-heading text-center">
              Part-time minimum wage in Australia
            </h2>
            <div className="mt-5" style={{ fontSize: 20 }}>
              <p>
                The national minimum wage is currently <b>$19.49 per hour</b> or
                $740.80 per 38 hour week (before tax).
              </p>
              <p>
                Employees have to be paid the right pay rate for all time
                worked, including time spent:
              </p>

              <ul>
                <li>training</li>
                <li>in team meetings</li>
                <li>openning and closing the business</li>
                <li>working unreasonable trial shifts</li>
              </ul>
            </div>
          </div>
          <Chart />
        </div>
      </div>
    </section>
  );
};

export default Minwage;
