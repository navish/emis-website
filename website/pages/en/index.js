/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer >
        <div className="inner" >
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>

            <div >
              <img
                src={`${this.props.siteConfig.baseUrl}img/landing.png`}
                alt="EMIS Landing Page"
              />
            </div>

          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}


class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const EmisIntro = () => (
      <Container background="dark">
        <div className="content">
          <h1 align="center">What is EMIS?</h1>
          <p> EMIS is a collaboration platform that facilitate communication, planning and actions for disaster management. The focus being to help the community and responders be able to mitigate, prepare, improve response and aid recovery on emergency / disaster incidents. It incorporates data that can be shared and analyzed in order to generate insights for local authorities and communities to better manage disasters and increase resilience to disaster risk.</p>
        </div>
      </Container>
    );

    const EmisObjectives = () => (
      <Container>
        <div className="content">
          <h1 align="center">Objective</h1>
          <p>EMIS will support the Dar es Salaam city authorities and other stakeholders to effectively execute their responsibilities in disaster management by providing timely and reliable information essential for disaster actions. </p>
          <p>EMIS will</p>
          <ul>
            <li>Strengthen the EOC operations.</li>
            <li>Improve emergency response coordination.</li>
          </ul>
        </div>
      </Container>
    );

    const EmisComponents = () => (
      <Container>
        <div>
          <h1 align="center">EMIS COMPONENTS</h1>
        </div>

        <div className="content row">
          <div className="col">
            <img
              src="img/plan.svg"
            />
          </div>
          <div className="col">
            <h3>Emergency Plans</h3>
            <p>
              Provides a way to plan, store and disseminate emergency/disaster management plans with detailed activities and Standard Operating Procedures (SOPs) guiding what is to be performed by stakeholders in mitigation, preparedness, response and recovery phases disaster management.
            </p>
            <a className="learnmore" href="docs/emergency-plans.html">
              Learn more
            </a>
          </div>
        </div>
        <div className="content row">
          <div className="col">
            <h3>Incident Management</h3>
            <p>
              Provides means to record and report the occurrence of a disaster incident and activating planned activities to respond and recover. It allows for storing of results of continuous assessments performed on affected areas, people and critical infrastructure.
            </p>
            <a className="learnmore" href="docs/incidents.html">
              Learn more
            </a>
          </div>
          <div className="col center">
            <img
              src="img/incident.svg"
            />
          </div>
        </div>
        <div className="content row">
          <div className="col">
            <img
              src="img/alert.svg"
            />
          </div>
          <div className="col">
            <h3>Alerts</h3>
            <p>
              Includes an up to date database of ingested emergency / disaster alerts from multiple sources in near real time and disseminating them to disaster management stakeholders. It also provides a way to keep historical logs of the alerts and a means to perform targeted situational assessment survey per alert.
            </p>
            <a className="learnmore" href="docs/alerts.html">
              Learn more
            </a>
          </div>
        </div>
        <div className="content row">
          <div className="col">
            <h3>Assessment</h3>
            <p>
              Provides an integrated tools to assess the situation and the needs before, during or immediately after a disaster. It provides a way to determine what happened, where it happened, who was affected, what was the impact and what type of assistance is required for an immediate response for both affected population and infrastructures.
            </p>
            <a className="learnmore" href="docs/assessment.html">
              Learn more
            </a>
          </div>
          <div className="col center">
            <img
              src="img/assessment.svg"
            />
          </div>
        </div>
        <div className="content row">
          <div className="col">
            <img
              src="img/stakeholders.svg"
            />
          </div>
          <div className="col">
            <h3>Stakeholders</h3>
            <p>
              Includes up to date database of all stakeholders responsible for emergency/disaster management within a specific region including responders, government institutions, disaster management committees, humanitarian organizations, non-governmental organizations (NGOs), civil societies, community disaster response teams and everyone involved in disaster management.
            </p>
            <a className="learnmore" href="docs/stakeholders.html">
              Learn more
            </a>
          </div>
        </div>
        <div className="content row">
          <div className="col">
            <h3>Geographical Features</h3>
            <p>
              Provides an up to date geographical database of all features of interest that can be used to study and control the expected and the actual extent of impact that may be caused in case of an emergency / disaster. It also assists in coordinating disaster management activities and tasks at source, prone and affected areas.
            </p>
            <a className="learnmore" href="docs/geographical-features.html">
              Learn more
            </a>
          </div>
          <div className="col center">
            <img
              src="img/geo-feature.svg"
            />
          </div>
        </div>

      </Container>
    );

    const HowItWorks = () => (
      <Container background="light" align="center">
        <div className="content">
          <h1 align="center">How It Works?</h1>
          <img
            src="img/how-it-works-1x.svg"
          />

        </div>
      </Container>
    );

    const TestDiv = () => (
      <div>
        Test div
     </div>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <EmisIntro />
          <EmisComponents />
          <HowItWorks />
          <EmisObjectives />
        </div>
      </div>
    );
  }
}

Index.desscription = 'A collaboration platform that facilitate communication, planning and actions for disaster management.';
module.exports = Index;
