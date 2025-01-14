import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Typed from "react-typed";

import SvgHero from "@site/src/svg/topEditor.svg";
import SvgCreate from "@site/src/svg/Create";
import SvgCreateBg from "@site/src/svg/CreateBg";
import SvgDevelop from "@site/src/svg/Develop";
import SvgDevelopBg from "@site/src/svg/DevelopBg";
import SvgExploreBg from "@site/src/svg/ExploreBg";
import SvgArrowRight from "@site/src/svg/ArrowRight";

function Hero() {
  return (
    <header className="rds-hero">
      <div className="container">
        <div className="row">
          <div className="col col--7">
            <h1 className="hero-title">
              The Home of
              <br /> ESX Developers
            </h1>

            <h2 className="hero-subtitle">
              <Typed
                strings={[">_ Creating a roleplay server has never been easier."]}
                typeSpeed={75}
              ></Typed>
            </h2>

            <div className="boxes">
              <div className="box box-create">
                <SvgCreateBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgCreate color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Create</h3>
                  <p className="description">
                    Create A Roleplay Server With Ease using txAdmin or
                    Github!
                  </p>
                  <span className="more">
                    Create Your Server <SvgArrowRight color="#DC382C" />
                  </span>
                </div>
                <a
                  href={useBaseUrl("/legacy/installation")}
                  className="link"
                >
                  Read More
                </a>
              </div>

              <div className="box box-develop">
                <SvgDevelopBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgDevelop color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Develop</h3>
                  <p className="description">
                    Learn how to effortlessly create your own resources
                  </p>
                  <span className="more">
                    Develop your Script <SvgArrowRight color="#DC382C" />
                  </span>
                </div>
                <a
                  href={useBaseUrl("/legacy/installation")}
                  className="link"
                >
                  Read More
                </a>
              </div>

              <div className="box box-explore">
                <SvgExploreBg color="#FFFFFF" className="bg" />
                <span className="icon">
                <img src="https://dunb17ur4ymx4.cloudfront.net/webstore/logos/3161f3d321b88381015ef8deb78b9ffe38f6f6d6.png"/>
                </span>
                <div className="text">
                  <h3 className="title"></h3>
                  <p className="description">
                    Expand your server with unique, multiplayer high quality scripts & minigames. Use creator code <b>ESX</b> for 10% off at checkout
                  </p>
                  <span className="more">
                    Explore Their Store!
                    <SvgArrowRight color="#DC382C" />
                  </span>
                </div>
                <a href={"https://store.rcore.cz/esx"} className="link">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col col--5">
            <SvgHero color="#FFFFFF" className="illustration" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
