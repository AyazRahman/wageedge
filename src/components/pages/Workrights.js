import React from "react";

import Header from "../Header";

const Workrights = () => {
  const accordian = () => {
    return (
      <div className="col-lg-12" id="accordion">
        <div className="card">
          <div className="card-header text-center" id="headingOne">
            <button
              className="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h4 className="text-muted">
                Work Restrictions: 40 Hours a fortnight
              </h4>
            </button>
          </div>
          <div
            id="collapseOne"
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">
              <p className="text-muted">
                Australian workplace laws provide basic protection and
                entitlements for all workers in Australia, including workers
                from overseas. International students have the same entitlements
                to minimum wages and conditions as Australian workers, as well
                as superannuation and workers’ compensation under Australian
                workplace laws.
              </p>
              <p className="text-muted">
                You must not work in Australia before your course of study
                commences.
              </p>
              <p className="text-muted">
                You must not work in Australia for more than 40 hours a
                fortnight when your course of study or training is in session.{" "}
              </p>
              <p className="text-muted">
                A fortnight means the period of 14 days commencing on a Monday.
              </p>
              <p className="text-muted">
                If you hold a subclass 500 visa or subclass 574 (Postgraduate
                Research) visa you can work unrestricted hours if:
              </p>
              <ul className="text-muted">
                <li>
                  you are studying a masters by research or a doctorate degree
                  and you have started your course, or
                </li>
                <li>the work is a registered part of your course</li>
              </ul>
              <p className="text-muted">
                As a student visa holder, you can be considered to have engaged
                in work if you have:
              </p>
              <ul className="text-muted">
                <li>
                  attended a place of work for a period by a roster or timesheet
                  (but not during unpaid breaks)
                </li>
                <li>
                  been 'clocked on' to an electronic system that records a work
                  activity
                </li>
                <li>
                  received remuneration for work, as indicated in a payslip you
                  have received (unless you provide documentary evidence that
                  you were not working during this time)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center" id="headingTwo">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h4 className="text-muted">Volunteer work</h4>
            </button>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="card-body text-muted">
              <p>
                You may take part in volunteer work outside of the 40 hours per
                fortnight work limitation if it fits within the description of
                volunteer work.
              </p>
              <p>Volunteer work is work that:</p>
              <ul>
                <li>
                  is unpaid (you can be provided with meals, accommodation or
                  out-of-pocket living expenses)
                </li>
                <li>would not otherwise be done by an Australian for pay</li>
                <li>is short term</li>
                <li>is incidental to your visit to Australia</li>
                <li>is done for a not-for-profit organisation</li>
                <li>benefits the community</li>
              </ul>
              <p>
                Unpaid work that does not fit within this description is counted
                towards the 40 hours per fortnight limitation.
              </p>
              <p>Examples of the definition of work:</p>
              <ul>
                <li>
                  You undertake a shift at a restaurant as part of a roster is
                  engaged in work, but not during your rostered unpaid meal
                  break.
                </li>
                <li>
                  You are a taxi driver who has signed in and is ready to
                  receive passengers is considered to be working, until at such
                  time as you sign out for a break or when your shift has ended.
                </li>
                <li>
                  You have a payslip indicating you were paid for 25 hours work
                  in one fortnight, but can provide a medical certificate that
                  were were at home unwell for 15 of these 25 hours, meaning
                  that you only worked for 10 of those hours.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center" id="headingThree">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h4 className="text-muted">Australian work rights</h4>
            </button>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      <Header image="img/header-bg.jpg" />
      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-heading text-uppercase text-center">
                Work Rights
              </h2>
              <h3 className="section-subheading text-muted">
                Every employee has minimum rights and conditions at work that
                may be set by a legal document like an award, an agreement, or a
                contract of employment. Ask your employer which one applies to
                you to find out how you are affected. If an award or agreement
                does not apply, all employees in the national workplace
                relations system will receive basic minimum pay, conditions and
                protections under Commonwealth workplace laws
              </h3>
            </div>
          </div>

          <div className="row ">{accordian()}</div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Workrights;
