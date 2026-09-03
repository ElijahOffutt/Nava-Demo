import { Metadata } from "next";

import { getTranslations } from "next-intl/server";

import { View } from "./view";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const meta: Metadata = {
    title: t("home.title"),
  };

  return meta;
}

export default function Controller() {
  return <> 
    <div className="usa-section">
  <div className="grid-container">

    <nav className="usa-breadcrumb" aria-label="Breadcrumbs">
      <ol className="usa-breadcrumb__list">
        <li className="usa-breadcrumb__list-item">
          <a href="/" className="usa-breadcrumb__link">Home</a>
        </li>
        <li className="usa-breadcrumb__list-item usa-current" aria-current="page">
          About Commune
        </li>
      </ol>
    </nav>

    <div className="grid-row grid-gap margin-top-4 margin-bottom-6">
      <div className="tablet:grid-col-8">
        <span className="usa-badge usa-badge--info margin-bottom-2">
          Engineering Demonstration
        </span>
        <h1 className="font-heading-2xl text-bold margin-top-0 margin-bottom-2">
          Commune Platform
        </h1>
        <p className="font-intro text-base-darker line-height-sans-4">
          A human-centered, accessible, and auditable public-benefits application and 
          case-management system designed around community access and unified service delivery.
        </p>
      </div>
    </div>

    <div className="grid-row grid-gap">
      <main className="tablet:grid-col-8 desktop:grid-col-8">
        
        <section className="margin-bottom-6" aria-labelledby="section-what">
          <h2 id="section-what" class="font-heading-xl text-primary-darker border-bottom-2px border-primary-light padding-bottom-1">
            What is this system?
          </h2>
          <p className="usa-prose">
            <strong>Commune</strong>—a name reflecting community connection and unified efforts—is an end-to-end demonstration system that models how state and 
            federal agencies can deliver critical public assistance programs (such as SNAP, Medicaid, or Childcare Support).
          </p>
          <p className="usa-prose">
            The platform provides two distinct, tailored user experiences:
          </p>
          <ul className="usa-list">
            <li>
              <strong>For Applicants &amp; Citizens:</strong> A clear, plain-language portal to screen for potential eligibility, complete applications, submit required verification documents, and track status in real-time.
            </li>
            <li>
              <strong>For Caseworkers:</strong> A streamlined management interface to review household financial details, verify documentation, apply program policy rules, make determinations, and maintain an immutable audit trail.
            </li>
          </ul>
        </section>

        <section className="margin-bottom-6" aria-labelledby="section-why">
          <h2 id="section-why" className="font-heading-xl text-primary-darker border-bottom-2px border-primary-light padding-bottom-1">
            Why was it built?
          </h2>
          <p className="usa-prose">
            This demonstration was engineered specifically to showcase alignment with modern government technology standards, 
            drawing inspiration from <strong>Nava PBC’s public service principles</strong>, USWDS patterns, and civic tech best practices.
          </p>
          <p className="usa-prose">
            Public benefits programs are often burdened by legacy technology, confusing interfaces, and high administrative friction. 
            Commune demonstrates how thoughtful software architecture can unify these efforts into software that is:
          </p>

          <ol className="usa-process-list margin-top-4">
            <li className="usa-process-list__item">
              <h3 className="usa-process-list__heading font-heading-md">
                Human-Centered &amp; Accessible
              </h3>
              <p className="margin-top-1">
                Designed to target <strong>WCAG 2.2 AA compliance</strong>, relying on semantic HTML, strict keyboard navigation, 
                visible focus states, high contrast, and screen-reader accessibility so all citizens can access support.
              </p>
            </li>
            <li className="usa-process-list__item">
              <h3 className="usa-process-list__heading font-heading-md">
                Trustworthy &amp; Auditable
              </h3>
              <p className="margin-top-1">
                Incorporating immutable, domain-driven audit events for every state change—ensuring complete 
                transparency for eligibility determinations, appeal histories, and caseworker actions.
              </p>
            </li>
            <li className="usa-process-list__item">
              <h3 className="usa-process-list__heading font-heading-md">
                Maintainable &amp; Decoupled
              </h3>
              <p className="margin-top-1">
                Separating business rules and policy logic (such as income-threshold evaluations) from controller code, 
                allowing policies to adapt independently as regulations evolve.
              </p>
            </li>
          </ol>
        </section>

        <section className="margin-bottom-6" aria-labelledby="section-demo">
          <h2 id="section-demo" className="font-heading-xl text-primary-darker border-bottom-2px border-primary-light padding-bottom-1">
            Engineering &amp; Architectural Highlights
          </h2>
          <p className="usa-prose">
            The implementation prioritizes solid software engineering judgment over flashiness. 
            Key technical capabilities demonstrated include:
          </p>

          <div className="grid-row grid-gap margin-top-3">
            <div className="tablet:grid-col-6 margin-bottom-3">
              <div className="usa-card__container border-1px border-base-lighter padding-2 height-full radius-md">
                <h3 className="font-heading-sm text-primary margin-top-0">
                  Modular Monolith Architecture
                </h3>
                <p className="font-body-xs margin-bottom-0">
                  Clean domain boundaries (<code>household</code>, <code>eligibility</code>, <code>casework</code>, <code>documents</code>, <code>audit</code>) 
                  written in Java/Spring Boot using Spring IoC/DI.
                </p>
              </div>
            </div>

            <div className="tablet:grid-col-6 margin-bottom-3">
              <div className="usa-card__container border-1px border-base-lighter padding-2 height-full radius-md">
                <h3 className="font-heading-sm text-primary margin-top-0">
                  Policy Rule Engines
                </h3>
                <p className="font-body-xs margin-bottom-0">
                  Strategy-pattern eligibility policies (<code>MedicaidPolicy</code>, <code>SNAPPolicy</code>) allowing dynamic, 
                  testable program evaluation.
                </p>
              </div>
            </div>

            <div className="tablet:grid-col-6 margin-bottom-3">
              <div className="usa-card__container border-1px border-base-lighter padding-2 height-full radius-md">
                <h3 className="font-heading-sm text-primary margin-top-0">
                  USWDS &amp; Next.js Frontend
                </h3>
                <p className="font-body-xs margin-bottom-0">
                  Built using Nava’s Next.js template structure, TypeScript, USWDS styling, 
                  and composable components.
                </p>
              </div>
            </div>

            <div className="tablet:grid-col-6 margin-bottom-3">
              <div className="usa-card__container border-1px border-base-lighter padding-2 height-full radius-md">
                <h3 className="font-heading-sm text-primary margin-top-0">
                  Cloud &amp; DevOps Readiness
                </h3>
                <p className="font-body-xs margin-bottom-0">
                  Dockerized local dev targeting AWS ECS/Fargate, RDS PostgreSQL, S3 document storage, 
                  and Infrastructure as Code with Terraform.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <aside className="tablet:grid-col-4 desktop:grid-col-4">
        <div className="usa-summary-box margin-top-0" role="region" aria-label="Quick Technical Stack">
          <div className="usa-summary-box__body">
            <h3 className="usa-summary-box__heading font-heading-md">
              Technology Stack
            </h3>
            <div className="usa-summary-box__text">
              <ul className="usa-list usa-list--unstyled font-body-xs line-height-sans-3">
                <li className="margin-bottom-1">
                  <strong>Frontend:</strong> Next.js (App Router), React, TypeScript, USWDS
                </li>
                <li className="margin-bottom-1">
                  <strong>Backend:</strong> Java 21, Spring Boot 3, REST APIs, JPA/Hibernate
                </li>
                <li className="margin-bottom-1">
                  <strong>Database:</strong> PostgreSQL with Liquibase migrations
                </li>
                <li className="margin-bottom-1">
                  <strong>Infrastructure:</strong> Docker, AWS (ECS Fargate, RDS, S3), Terraform
                </li>
                <li className="margin-bottom-1">
                  <strong>Standards:</strong> WCAG 2.2 AA, OpenAPI 3.0, Plain Language Guidelines
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-base-lightest padding-3 margin-top-3 radius-md border-1px border-base-lighter">
          <h3 className="font-heading-sm margin-top-0">Explore the Demo</h3>
          <p className="font-body-xs">
            Test the application from either user perspective:
          </p>
          <div className="margin-top-2">
            <a href="/applicant" className="usa-button usa-button--outline display-block text-center margin-bottom-2">
              Applicant Portal
            </a>
            <a href="/caseworker" className="usa-button display-block text-center">
              Caseworker Portal
            </a>
          </div>
        </div>
      </aside>
    </div>

  </div>
</div>
  </>;
}
