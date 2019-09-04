import React, { Component } from "react";

import { Link } from "react-router-dom";

const pageOptions = [
  { title: "Work Restriction", icon: "clock" },
  { title: "Volunteer Work", icon: "user-friends" },
  { title: "Pay in Cash", icon: "dollar-sign" },
  { title: "Deduct money from wage", icon: "minus" },
  { title: "Workplace descrimination", icon: "gavel" },
  { title: "Employment Type", icon: "book-open" },
  { title: "Leaves and Entitlement", icon: "running" },
  { title: "Flexible Working Arrangements", icon: "infinity" }
];

class Workrights extends Component {
  constructor(props) {
    super(props);
    this.state = { id: parseInt(this.props.match.params.id) };
  }

  renderOptions = id => {
    let optionLeft = (pageOptions.length + id - 1) % pageOptions.length;
    let optionRight = (pageOptions.length + id + 1) % pageOptions.length;
    return (
      <div className="row">
        <div className="col-4 text-left">
          <a
            href="#"
            onClick={() => {
              this.setState({ id: optionLeft });
            }}
          >
            <span className="text-primary ">
              <i className={`fas fa-caret-left fa-3x`} />
            </span>
            <p className="text-dark">{pageOptions[optionLeft].title}</p>
          </a>
        </div>
        <div className="col-4 text-center">
          <span className="fa-stack fa-2x ">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i
              className={`fas fa-${pageOptions[id].icon} fa-stack-1x fa-inverse`}
            />
          </span>
          <h6 className="mt-3">{pageOptions[id].title}</h6>
        </div>
        <div className="col-4 text-right">
          <a
            href="#"
            onClick={() => {
              this.setState({ id: optionRight });
            }}
          >
            <span className="text-primary ">
              <i className={`fas fa-caret-right fa-3x`} />
            </span>
            <p className="text-dark">{pageOptions[optionRight].title}</p>
          </a>
        </div>
      </div>
    );
  };

  renderContent = id => {
    switch (id) {
      case 0:
        return (
          <div className="row page-section" style={{ fontSize: 20 }}>
            <div className="col-md-6">
              <ul>
                <li>
                  You <b>must not</b> work in Australia before your course of
                  study commences.
                </li>
                <li>
                  You <b>must not</b> work in Australia for{" "}
                  <b>more than 40 hours a fortnight</b> when your course of
                  study or training is in session.
                </li>
                <li>
                  A fortnight means the period of 14 days commencing on a
                  Monday.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src="/img/work-restrictions.png"
                alt="work-restrictions"
                className="img-fluid my-3"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="row page-section" style={{ fontSize: 20 }}>
            <div className="col-lg-12">
              You may take part in volunteer work{" "}
              <b>outside of the 40 hours per fortnight</b> work limitation if it
              fits within the description of volunteer work.
            </div>
            <div className="col-lg-12 text-center">
              <img
                src="/img/volunteer.jpg"
                alt="work-restrictions"
                className="img-fluid my-3"
              />
            </div>
            <div className="col-lg-12">
              <p>
                <b>volunteer work</b> is work that:
              </p>
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
            </div>
          </div>
        );
      case 2:
        return (
          <div className="row page-section" style={{ fontSize: 20 }}>
            <div className="col-lg-12">
              It is <b>acceptable</b> for your employer to pay you in cash as
              long as
              <b>
                tax has been taken from your earnings and sent to the Australian
                Taxation Office (ATO).
              </b>{" "}
              You should check your pay slip each time you are paid to make sure
              this is being done.
            </div>
            <div className="col-lg-12 text-center">
              <img
                src="/img/cash-payment.jpg"
                alt="work-restrictions"
                className="img-fluid my-3"
              />
            </div>
            <div className="col-lg-12">
              '<b>Cash in hand</b>' is a term used to describe cash payments
              where <b>tax has not been taken out</b> - this is against the law.
            </div>
          </div>
        );
      case 3:
        return (
          <div className="row page-section" style={{ fontSize: 20 }}>
            <div className="col-lg-12">
              This means that an employer generally{" "}
              <b>cannot take money from your wages unless</b> you agree and the
              deduction benefits you, or unless your industrial instrument
              permits it.
            </div>
            <div className="col-lg-12 text-center">
              <img
                src="/img/deduct.jpg"
                alt="work-restrictions"
                className="img-fluid my-3"
              />
            </div>
            <div className="col-lg-12">
              <p>
                For example, if you accidentally break something, the employer
                cannot deduct money from your wages. Further, an employer cannot
                <b>force you to agree to a deduction</b>.
              </p>
              <p>
                Generally, an employer cannot deduct any money from your wages
                unless the deduction is:
              </p>
              <ul>
                <li>
                  <b>for your benefit</b>, and you agree to it in writing or
                </li>
                <li>
                  authorised <b>under a term of an award, agreement</b> or Fair
                  Work Commission order or
                </li>
                <li>
                  authorised <b>under Commonwealth, State or Territory law</b>,
                  or by an order of a court.
                </li>
              </ul>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="row page-section" style={{ fontSize: 20 }}>
            <div className="col-lg-12">
              Adverse action taken by an employer includes doing, threatening or
              organising any of the following:
            </div>
            <div className="col-lg-12 text-center">
              <img
                src="/img/discirmination.png"
                alt="work-restrictions"
                className="img-fluid my-3"
              />
            </div>
            <div className="col-lg-12">
              <ul>
                <li>
                  <b>dismissing</b> an employee
                </li>
                <li>
                  <b>injuring</b> an employee in their employment
                </li>
                <li>
                  <b>altering an employee's position</b> to their detriment
                </li>
                <li>
                  discriminating <b>between</b> one employee and other employees
                </li>
                <li>
                  <b>refusing</b> to employ a prospective employee
                </li>
                <li>
                  discriminating against a prospective employee on the{" "}
                  <b>terms and conditions in the offer of employment</b>.
                </li>
              </ul>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="row page-section " style={{ fontSize: 20 }}>
            <div className="col-lg-12">
              <p>
                <b>Full time</b> employees work about <b>38 hour a week</b>. If
                you are a full time employee you also get annual leave and paid
                sick leave as well as a number of other entitlements.
              </p>
              <p>
                <b>Part time</b> employees work <b>20 hours per week</b>. If you
                are a part time employee you get the same benefits as a full
                time employee, at a rate in proportion to the amount of time you
                work.
              </p>
              <p>
                <b>Casual employees</b>
              </p>
              <ul>
                <li>
                  have <b>no guaranteed hours of work</b>. As a casual employee
                  your employer does not have to give you work, or they can ask
                  you to work at short notice.
                </li>
                <li>do not get paid leave.</li>
                <li>
                  are entitled to casual loading - a higher hourly rate. This
                  additional loading is to compensate for not getting leave
                  entitlements.
                </li>
              </ul>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="row page-section" style={{ fontSize: 20 }}>
            <div className="col-lg-12">
              <p>
                <b>Annual leave</b>
              </p>
              <p>
                Full-time and part-time employees get <b>4 weeks</b> of annual
                leave, based on their ordinary hours of work.
              </p>
            </div>
            <div className="col-lg-12 text-center">
              <img
                src="/img/leave.jpg"
                alt="leave"
                className="img-fluid my-3"
              />
            </div>
            <div className="col-lg-12">
              <p>
                <b>Public holidays</b>
              </p>
              <p>
                It's important to know when public holidays are because
                employees can get different entitlements on these days.
              </p>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="row page-section" style={{ fontSize: 20 }}>
            <div className="col-lg-12">
              <p>
                Before requesting flexible working arrangements you need to be
                working for the <b>same employer at least 12 months</b>.
              </p>
            </div>
            <div className="col-lg-12 text-center">
              <img
                src="/img/flexibleworking.png"
                alt="flexible-working"
                className="img-fluid my-3"
              />
            </div>
            <div className="col-lg-12">
              <p>
                <b>Public holidays</b>
              </p>
              <p>
                As an international student, you can request{" "}
                <b>flexible working arrangements</b> at your workplace. After
                this period you can request flexible arrangement, if you:
              </p>
              <ul>
                <li>
                  are the <b>parent</b>, or have{" "}
                  <b>responsibility for the care</b>, of a child who is school
                </li>
                <li>aged or younger</li>
                <li>
                  are a <b>carer</b>
                </li>
                <li>
                  have a <b>disability</b>
                </li>
                <li>
                  are <b>55 or older</b>
                </li>
                <li>are experiencing family or domestic violence, or</li>
                <li>
                  <b>provide care</b> or support to a member of their household
                  or immediate family who requires care and support because of
                  family or domestic violence.
                </li>
              </ul>
            </div>
          </div>
        );

      default:
        return;
    }
  };
  render() {
    return (
      <section className="page-section">
        <div className="container">{this.renderOptions(this.state.id)}</div>
        <div className="container">{this.renderContent(this.state.id)}</div>
      </section>
    );
  }
}

export default Workrights;
