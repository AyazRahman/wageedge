import React from "react";
import Breadcrumb from "../breadcrumb";

const LegalAdvice = () => {
  const items = [
    { title: "Home", link: "/" },
    { title: "Legal Advice", link: "/legaladvice" }
  ];
  return (
    <section className="page-section">
      <div className="container">
        <Breadcrumb items={items} />
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-heading text-center">Legal Advice</h2>
            <div className="mt-5" style={{ fontSize: 20 }}>
              <p>
                Migrant workers and Visa holders, including international
                students, have the same workplace rights as all other workers in
                Australia. Fair Work OMBUDSMAN (FWO) provides free legal advice
                and assistance to all workers to help them understand their
                rights like:
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.fairwork.gov.au/find-help-for/visa-holders-and-migrants#your-visa"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Your Visa
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.fairwork.gov.au/find-help-for/visa-holders-and-migrants#pay-and-conditions"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Pay and conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.fairwork.gov.au/find-help-for/visa-holders-and-migrants#help-with-workplace-issues"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Help with workplace issues
                  </a>
                </li>
              </ul>
              <p>
                An employee can’t get into trouble or have their visa cancelled
                for contacting FWO to ask for information about their pay or
                other entitlements.
              </p>
              <p>
                If an international student thinks that their employer has made
                a mistake or cheated them with their pay or entitlements, then
                those employees can visit{" "}
                <a
                  href="https://www.fairwork.gov.au/how-we-will-help/how-we-help-you/help-resolving-workplace-issues/default"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Fair Work OMBUDSMAN website{" "}
                </a>
                for practical steps on how to fix the problem.
              </p>
              <p>
                International students can also contact FWO anonymously to help
                keep their workplaces fair. They can make a report in their own
                language using the FWO translated{" "}
                <a
                  href="https://www.fairwork.gov.au/how-we-will-help/how-we-help-you/report-a-workplace-issue-in-your-language"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Anonymous report form
                </a>
                , which is available in multiple languages.
              </p>
              <p>Additional Resources:</p>

              <ul>
                <li>
                  <a
                    href="https://www.studymelbourne.vic.gov.au/event/international-students-work-rights-legal-service-tue"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Study Melbourne
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.youngworkers.org.au/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Young Workers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalAdvice;
