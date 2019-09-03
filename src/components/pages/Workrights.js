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
            <div className="card-body text-muted">
              <p>
                Australian workplace laws provide basic protection and
                entitlements for all workers in Australia, including workers
                from overseas. International students have the same entitlements
                to minimum wages and conditions as Australian workers, as well
                as superannuation and workers’ compensation under Australian
                workplace laws.
              </p>
              <p>
                You must not work in Australia before your course of study
                commences.
              </p>
              <p>
                You must not work in Australia for more than 40 hours a
                fortnight when your course of study or training is in session.{" "}
              </p>
              <p>
                A fortnight means the period of 14 days commencing on a Monday.
              </p>
              <p>
                If you hold a subclass 500 visa or subclass 574 (Postgraduate
                Research) visa you can work unrestricted hours if:
              </p>
              <ul>
                <li>
                  you are studying a masters by research or a doctorate degree
                  and you have started your course, or
                </li>
                <li>the work is a registered part of your course</li>
              </ul>
              <p>
                As a student visa holder, you can be considered to have engaged
                in work if you have:
              </p>
              <ul>
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
              <h4 className="text-muted">Deduct money from wages</h4>
            </button>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body text-muted">
              <p>
                Generally, an employer cannot deduct any money from your wages
                unless the deduction is:
              </p>
              <ul>
                <li>for your benefit, and you agree to it in writing or</li>
                <li>
                  authorised under a term of an award, agreement or Fair Work
                  Commission order or
                </li>
                <li>
                  authorised under Commonwealth, State or Territory law, or by
                  an order of a court.
                </li>
              </ul>
              <p>
                This means that an employer generally cannot take money from
                your wages unless you agree and the deduction benefits you, or
                unless your industrial instrument permits it. For example, if
                you accidentally break something, the employer cannot deduct
                money from your wages. Further, an employer cannot force you to
                agree to a deduction.
              </p>
              <p>
                Even if the deduction is authorised under a term in an award or
                agreement, the term has no effect if the deduction is directly,
                or indirectly, for the employer's benefit, or if the deduction
                is unreasonable.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center" id="headingFour">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h4 className="text-muted">Pay in cash</h4>
            </button>
          </div>
          <div
            id="collapseFour"
            className="collapse"
            aria-labelledby="headingFour"
            data-parent="#accordion"
          >
            <div className="card-body text-muted">
              <p>
                Your employer may choose to pay you using cash, cheque, money or
                postal order, or through electronic funds transfer into your
                bank account.
              </p>
              <p>
                It is acceptable for your employer to pay you in cash as long as
                tax has been taken from your earnings and sent to the Australian
                Taxation Office (ATO). Generally, you should also be receiving
                superannuation. You should check your pay slip each time you are
                paid to make sure this is being done.
              </p>
              <p>
                'Cash in hand' is a term used to describe cash payments where
                tax has not been taken out - this is against the law.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center" id="headingFive">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <h4 className="text-muted">Flexible working arrangements</h4>
            </button>
          </div>
          <div
            id="collapseFive"
            className="collapse"
            aria-labelledby="headingFive"
            data-parent="#accordion"
          >
            <div className="card-body text-muted">
              <p>
                As an international student, you can request flexible working
                arrangements at your workplace. These arrangements can be:
              </p>
              <ul>
                <li>Hours of work (eg. changes to start and finish times)</li>
                <li>Patterns of work (eg. split shifts or job sharing)</li>
                <li>Locations of work (eg. working from home)</li>
              </ul>
              <p>
                Before requesting flexible working arrangements you need to be
                working for the same employer at least 12 months. After this
                period you can request flexible arrangement if you:
              </p>
              <ul>
                <li>
                  are the parent, or have responsibility for the care, of a
                  child who is school
                </li>
                <li>aged or younger</li>
                <li>are a carer</li>
                <li>have a disability</li>
                <li>are 55 or older</li>
                <li>are experiencing family or domestic violence, or</li>
                <li>
                  provide care or support to a member of their household or
                  immediate family who requires care and support because of
                  family or domestic violence.
                </li>
              </ul>
              <p>If you are a casual employee, you can make a request if:</p>
              <ul>
                <li>
                  you’ve been working for the same employer regularly and
                  systematically for at least 12 months
                </li>
                <li>
                  there’s a reasonable expectation of continuing work with the
                  employer on a regular and systematic basis
                </li>
              </ul>
              <h4>Additional Information</h4>
              <p>
                Employers and employees can enter into individual flexibility
                arrangements (IFAs) which alter the way a modern award or
                enterprise agreement applies to an employee. This can change the
                way some entitlements, such as penalty rates or allowances,
                apply in your employment.
              </p>
              <p>
                An employer cannot force you to enter into an IFA. If you feel
                that you are being pressured to do so, you should contact the
                Fair Work Ombudsman.
              </p>
              <p>
                In order to create an IFA, the employer is required to ensure
                that you are better off overall than you would be normally under
                the award or agreement. This may mean that you receive
                additional benefits in one area to compensate for those changed
                in another area. If you believe that you are not better off
                overall, you should not enter into the IFA.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center" id="headingSix">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              <h4 className="text-muted">Unlawful workplace discrimination</h4>
            </button>
          </div>
          <div
            id="collapseSix"
            className="collapse"
            aria-labelledby="headingSix"
            data-parent="#accordion"
          >
            <div className="card-body text-muted">
              <p>
                The Fair Work Act 2009 protects employees against unlawful
                workplace discrimination. Unlawful workplace discrimination
                occurs when an employer takes adverse action against a person
                who is an employee or prospective employee because of the
                following attributes of the person:
              </p>
              <ul>
                <li>race</li>
                <li>colour</li>
                <li>sex</li>
                <li>sexual orientation</li>
                <li>age</li>
                <li>physical or mental disability</li>
                <li>marital status</li>
                <li>family or carer's responsibilities</li>
                <li>pregnancy</li>
                <li>religion</li>
                <li>political opinion</li>
                <li>national extraction or social origin</li>
              </ul>
              <p>
                Where an investigation finds that the employer has (or had)
                discriminatory practices that are linked to adverse actions for
                employees or prospective employees, the Fair Work Ombudsman may
                take enforcement action.
              </p>
              <p>
                Adverse action taken by an employer includes doing, threatening
                or organising any of the following:
              </p>
              <ul>
                <li>dismissing an employee</li>
                <li>injuring an employee in their employment</li>
                <li>altering an employee's position to their detriment</li>
                <li>discriminating between one employee and other employees</li>
                <li>refusing to employ a prospective employee</li>
                <li>
                  discriminating against a prospective employee on the terms and
                  conditions in the offer of employment.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center" id="headingSeven">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              <h4 className="text-muted">Leave’s and Related entitlement</h4>
            </button>
          </div>
          <div
            id="collapseSeven"
            className="collapse"
            aria-labelledby="headingSeven"
            data-parent="#accordion"
          >
            <div className="card-body text-muted">
              <h4>Parental leave</h4>
              <p>
                There are some cases that international students come to
                Australia and are expecting to have a child. If this is your
                case you should know that you have the right to take parental
                leave, even if is your partner who is going to give birth. Also,
                if you decide to adopt a child under 16 years old while you are
                studying in Australia you can take parental leave.
              </p>
              <p>
                You are entitled to 12 months of unpaid parental leave, and you
                can request an additional 12 months of leave if you need it.
                There are some conditions you need to know before request
                parental leave:
              </p>
              <ul>
                <li>
                  You have worked for your employer for at least 12 months
                </li>
                <li>
                  before the date or expected date of birth if the employee is
                  pregnant
                </li>
                <li>before the date of the adoption, or</li>
                <li>
                  when the leave starts (if the leave is taken after another
                  person cares for the child or takes parental leave)
                </li>
                <li>
                  have or will have responsibility for the care of a child.
                </li>
              </ul>
              <p>
                For casual employees to be eligible for unpaid parental leave
                they need to have:
              </p>
              <ul>
                <li>
                  been working for their employer on a regular and systematic
                  basis for at least 12 months
                </li>
                <li>
                  a reasonable expectation of continuing work with the employer
                  on a regular and systematic basis had it not been for the
                  birth or adoption of a child.
                </li>
              </ul>
              <h4>Annual leave</h4>
              <p>
                All employees (except for casual employees) get paid annual
                leave. Full-time and part-time employees get 4 weeks of annual
                leave, based on their ordinary hours of work.
              </p>
              <h4>Public holidays</h4>
              <p>
                Public holidays can be different depending on the state or
                territory you work in. It’s important to know when public
                holidays are because employees can get different entitlements on
                these days. Go to the List of public holidays of Fairwork
                website for a full list of public holidays in your state or
                territory.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center" id="headingEight">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              <h4 className="text-muted">
                Notice of termination and redundancy pay
              </h4>
            </button>
          </div>
          <div
            id="collapseEight"
            className="collapse"
            aria-labelledby="headingEight"
            data-parent="#accordion"
          >
            <div className="card-body text-muted">
              <p>
                A notice period is the length of time that an employee or
                employer has to give to end employment. To end an employee’s
                employment, an employer has to give them written notice of their
                last day of employment. Redundancy happens when an employer
                either:
              </p>
              <ul>
                <li>doesn’t need an employee’s job to be done by anyone, or</li>
                <li>becomes insolvent or bankrupt.</li>
              </ul>
              <p>Redundancy can happen when the business:</p>
              <ul>
                <li>
                  introduces new technology (eg. the job can be done by a
                  machine)
                </li>
                <li>slows down due to lower sales or production</li>
                <li>closes down</li>
                <li>relocates interstate or overseas</li>
                <li>
                  restructures or reorganises because a merger or takeover
                  happens
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center" id="headingNine">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              <h4 className="text-muted">Fair Work Information Statement</h4>
            </button>
          </div>
          <div
            id="collapseNine"
            className="collapse"
            aria-labelledby="headingNine"
            data-parent="#accordion"
          >
            <div className="card-body text-muted">
              <p>
                Employers have to give every new employee a copy of the Fair
                Work Information Statement before, or as soon as possible after,
                they start their new job. This provides new employees with
                information about their conditions of employment, such as:
              </p>
              <ul>
                <li>The National Employment Standards</li>
                <li>Right to request flexible working arrangements</li>
                <li>Modern awards</li>
                <li>Making agreements under the Fair Work Act</li>
                <li>Individual flexibility arrangements</li>
                <li>
                  Freedom of association and workplace rights (General
                  protections)
                </li>
                <li>Termination of employment</li>
                <li>Right of entry</li>
                <li>
                  The role of the Fair Work Ombudsman and the Fair Work
                  Commission.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center" id="headingTen">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              <h4 className="text-muted">
                Full time, part time or casual employment?
              </h4>
            </button>
          </div>
          <div
            id="collapseTen"
            className="collapse"
            aria-labelledby="headingTen"
            data-parent="#accordion"
          >
            <div className="card-body text-muted">
              <p>
                Under Australian law, your rights are different depending on
                what type of worker you are.
              </p>
              <p>
                Full time employees work about 38 hour a week. If you are a full
                time employee you also get annual leave and paid sick leave as
                well as a number of other entitlements.
              </p>
              <p>
                Part time employees work less than 38 hours per week on average.
                If you are a part time employee you get the same benefits as a
                full time employee, at a rate in proportion to the amount of
                time you work. For example if you work one day per week, your
                leave entitlements are one fifth of the entitlements of someone
                who works five days per week.
              </p>
              <p>
                Casual employees have no guaranteed hours of work. As a casual
                employee your employer does not have to give you work, or they
                can ask you to work at short notice. Casual employees do not get
                paid leave.
              </p>{" "}
              <p>
                Casual employees are entitled to casual loading - a higher
                hourly rate. This additional loading is to compensate for not
                getting leave entitlements.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center" id="headingEleven">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseEleven"
              aria-expanded="false"
              aria-controls="collapseEleven"
            >
              <h4 className="text-muted">
                Employee or independent contractor?
              </h4>
            </button>
          </div>
          <div
            id="collapseEleven"
            className="collapse"
            aria-labelledby="headingEleven"
            data-parent="#accordion"
          >
            <div className="card-body text-muted">
              <p>
                Under Australian law, your rights are different depending on
                whether you are an employee or an independent contractor
                (working with an ABN).
              </p>
              <p>
                Employees work for someone else’s business. If you are an
                employee you have the right to entitlements including minimum
                wage and superannuation, and your employer must pay your tax and
                workers compensation insurance.
              </p>
              <p>
                Independent contractors run their own business. If you are an
                independent contractor, you don’t have a minimum pay rate but
                instead negotiate payment as part of your contract. You must
                also pay your own tax and take out your own insurance.
              </p>
              <p>
                An employer is breaking the law if they tell you that you are an
                independent contractor and you are actually an employee. It is
                irrelevant what you agree with your boss, or what your boss
                tells you.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center" id="headingTwelve">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwelve"
              aria-expanded="false"
              aria-controls="collapseTwelve"
            >
              <h4 className="text-muted">Awards and Enterprise Agreements</h4>
            </button>
          </div>
          <div
            id="collapseTwelve"
            className="collapse"
            aria-labelledby="headingTwelve"
            data-parent="#accordion"
          >
            <div className="card-body text-muted">
              <p>
                Depending where you work your employment may be covered by an
                Award or an Enterprise Agreement.
              </p>
              <p>
                Awards are legal documents that outline the minimum pay rates
                and conditions of employment for employees working in a specific
                industry or occupation. Examples of specific industries are the
                'retail industry' or the 'fast food industry'.
              </p>
              <p>
                Enterprise Agreements set out the pay rates and working
                conditions for all employees working for a particular business
                or group of businesses. Not all businesses or group of
                businesses have an Enterprise Agreement.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header text-center" id="headingThirteen">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseThirteen"
              aria-expanded="false"
              aria-controls="collapseThirteen"
            >
              <h4 className="text-muted">Employment contracts</h4>
            </button>
          </div>
          <div
            id="collapseThirteen"
            className="collapse"
            aria-labelledby="headingThirteen"
            data-parent="#accordion"
          >
            <div className="card-body text-muted">
              <p>
                An employment contract is an agreement between an employer and
                an employee that sets out the terms and conditions of
                employment, including pay rates and days of work. Employment
                contracts should also set out whether someone is full-time,
                part-time or casual. A contract can be in writing, but it can
                also be verbal (based on a spoken agreement between the employer
                and the employee).{" "}
              </p>
              <p>
                An employment contract cannot set out terms and conditions that
                are less favourable than the entitlements provided under
                Australian law (including what is set out in relevant Awards and
                Enterprise Agreements). If an employment contract tries to do
                this, it is invalid.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-heading text-center">Work Rights</h2>
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
/*
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
            <div className="card-body text-muted">
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
 */
