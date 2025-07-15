import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="quote-left" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.9 2.9 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789M20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.9 2.9 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2"
          />
        </symbol>
        <symbol id="arrow-right" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </symbol>
        <symbol id="arrow-left" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </symbol>
        <symbol id="facebook" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
          />
        </symbol>
        <symbol id="twitter" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518a3.3 3.3 0 0 0 1.447-1.817a6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429a3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218a3.2 3.2 0 0 1-.865.115a3 3 0 0 1-.614-.057a3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"
          />
        </symbol>
        <symbol id="instagram" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"
          />
        </symbol>
        <symbol id="pinterest" viewBox="0 0 24 24">
          <g fill="none">
            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path
              fill="currentColor"
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 4.006 2.356 7.462 5.758 9.058l2.29-10.766a1 1 0 0 1 1.956.416C11.73 12 11.49 12.5 11.501 13.1c.017.94.273 1.442.521 1.702c.253.265.618.408 1.095.4c.487-.01 1.038-.181 1.526-.489C15.592 14.117 16 13.095 16 12a4 4 0 1 0-7.668 1.6a1 1 0 0 1-1.832.8a6 6 0 1 1 11 0c-.368.848-1.04 1.534-1.792 2.007c-.755.475-1.657.779-2.555.795c-.819.015-1.672-.212-2.359-.808L9.66 21.726c.75.18 1.534.275 2.339.275Z"
            />
          </g>
        </symbol>
        <symbol id="youtube" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
          />
        </symbol>
        <symbol id="paintbrush" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="m5.6 11.6l-1.2-1.2c-.8-.2-2-.1-2.7 1c-.8 1.1-.3 2.8-1.7 4.6c0 0 3.5 0 4.8-1.3c1.2-1.2 1.2-2.2 1-3zm.2-3.5c-.2.3-.5.7-.7 1c0 .2-.1.3-.2.4L6.4 11c.1-.1.3-.2.4-.3c.3-.2.7-.4 1-.7c.4 0 .6-.2.8-.4L6.4 7.4c-.2.2-.4.4-.6.7m10-7.9c-.3-.3-.7-.3-1-.1c0 0-3 2.5-5.9 5.1c-.4.4-.7.7-1.1 1c-.2.2-.4.4-.6.5l2.1 2.1c.2-.2.4-.4.5-.7c.3-.4.6-.7.9-1.1c2.5-3 5.1-5.9 5.1-5.9c.3-.2.3-.6 0-.9"
          />
        </symbol>
        <symbol id="t-shirt" viewBox="0 0 20 20">
          <g fill="currentColor">
            <path
              fill-rule="evenodd"
              d="m2.668 10.009l1.166-.583V16.5a2.5 2.5 0 0 0 2.5 2.5h7.335a2.5 2.5 0 0 0 2.5-2.5V9.425l1.166.581a.5.5 0 0 0 .71-.338l.945-4.236a.5.5 0 0 0-.135-.463l-2.248-2.24A2.5 2.5 0 0 0 14.842 2h-2.007a.5.5 0 0 0-.493.415c-.287 1.658-1.04 2.409-2.342 2.409c-1.3 0-2.054-.751-2.34-2.409A.5.5 0 0 0 7.167 2H5.161a2.5 2.5 0 0 0-1.766.73L1.15 4.97a.5.5 0 0 0-.135.462l.943 4.238a.5.5 0 0 0 .711.338M5.161 3h1.598C7.195 4.84 8.297 5.824 10 5.824S12.806 4.84 13.243 3h1.6a1.5 1.5 0 0 1 1.058.437l2.053 2.046l-.745 3.343l-1.317-.656a.5.5 0 0 0-.723.448V16.5a1.5 1.5 0 0 1-1.5 1.5H6.334a1.5 1.5 0 0 1-1.5-1.5V8.618a.5.5 0 0 0-.724-.448l-1.316.658l-.744-3.345l2.051-2.045A1.5 1.5 0 0 1 5.161 3"
              clip-rule="evenodd"
            />
            <path d="M12 10.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1z" />
          </g>
        </symbol>
        <symbol id="box" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
            d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"
          />
        </symbol>
        <symbol
          id="search"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.922 9.922 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8z"
          />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          id="close"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </symbol>
      </svg>
      <div className="preloader">
        <div className="loader"></div>
      </div>
      <nav
        id="header-nav"
        className="py-4 navbar navbar-expand-lg"
        data-bs-theme="dark"
      >
        <div className="container-fluid padding-side">
          <a className="navbar-brand" href="index.html">
            <h1 className="mt-[8px] font-bold text-[38px]">
              HOSSEIN<span className="text-[#E74C3C]">SIMCHI</span>
            </h1>
          </a>

          <button
            className="shadow-none navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="shadow-none btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="text-center navbar-nav align-items-center justify-content-end flex-grow-1">
                <li className="nav-item">
                  <a
                    className="nav-link active pe-lg-5"
                    aria-current="page"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pe-lg-5" href="blog.html">
                    Blog
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link pe-lg-5" href="#" role="button">
                    {" "}
                    Articles
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link pe-lg-5 dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    {" "}
                    Works
                  </a>
                  <ul className="bg-[#e1e3e7] dropdown-menu mt-3">
                    <li>
                      <a
                        href="blog.html"
                        className="dropdown-item text-[#2C3E50] hover:bg-[#d0d2d5] hover:text-[#2C3E50]"
                      >
                        Machine Learning
                      </a>
                    </li>
                    <li>
                      <a
                        href="single-post.html"
                        className="dropdown-item text-[#2C3E50] hover:bg-[#d0d2d5] hover:text-[#2C3E50]"
                      >
                        Front-end Development
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="border-2 nav-link fw-bold border-bottom border-danger"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* //TODO: */}
      <section id="hero" className="padding-medium">
        <div className="container text-white">
          <div className="text-center row justify-content-center">
            <div className="col-xl-8">
              <p
                className="letter-space text-[#2C3E50] fs-4 mb-2"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Hi, I’m Hossein Simchi
              </p>
              <h2
                className="banner-size display-1"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Data Scientist & Front-End Developer <br />
              </h2>
              <div className="flex justify-center mt-5 mb-5">
                <p
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  className="text-[#2c3e50] text-center w-[80%]"
                >
                  I thrive at the intersection of AI and web development,
                  seeking opportunities to combine the two fields in meaningful
                  ways. Whether it’s crafting seamless user interfaces or
                  designing intelligent systems, I am always eager to learn,
                  experiment, and grow.
                </p>
              </div>
              <a
                href="portfolio.html"
                className="mt-4 btn button rounded-pill position-relative pe-5 z-1"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <span> view all works </span>
                <div className="position-absolute top-50 end-0 translate-middle-y me-2">
                  <svg
                    className="p-2 text-black bg-white arrow-right rounded-circle"
                    width="35"
                    height="35"
                  >
                    <use href="#arrow-right"></use>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="container-fluid padding-side position-relative">
        <div
          class="h-[7px] w-[30%] mx-auto my-8 
            bg-gradient-to-r 
            from-transparent 
            via-[#2f3f50] via-[40%] 
            via-[#243a4f] via-[50%] 
            via-[#2f3f50] via-[60%] 
            to-transparent
            animate-pulse-custom"
        ></div>
        <div class="border border-opacity-25 border-light rounded-5 bg-[#ffffff0f] shadow-[0px_12px_90px_#ffcac4] mb-16 p-4">
          <section id="achievements" class="padding-medium">
            <div class="container process-content" data-aos="fade-up">
              <div id="counter" class="text-center row justify-content-center">
                <div class="text-center col-lg-3 col-6">
                  <div class="d-flex justify-content-center align-items-center">
                    <h4
                      class="counter-value display-1 banner-size"
                      data-count="2"
                    >
                      2
                    </h4>
                    <span class="text-[#e74c3c] display-1 fw-lighter">+</span>
                  </div>
                  <p class="mb-0 text-capitalize">years experience</p>
                </div>
                <div class="text-center col-lg-3 col-6">
                  <div class="d-flex justify-content-center align-items-center">
                    <h4
                      class="counter-value display-1 banner-size"
                      data-count="4"
                    >
                      4
                    </h4>
                    <span class="text-[#e74c3c] display-1 fw-lighter">+</span>
                  </div>
                  <p class="mb-0 text-capitalize">Publications</p>
                </div>
                <div class="text-center col-lg-3 col-6">
                  <div class="d-flex justify-content-center align-items-center">
                    <h4
                      class="counter-value display-1 banner-size"
                      data-count="500"
                    >
                      500
                    </h4>
                    <span class="text-[#e74c3c] display-1 fw-lighter">+</span>
                  </div>
                  <p class="mb-0 text-capitalize">Projects done</p>
                </div>
                <div class="text-center col-lg-3 col-6">
                  <div class="d-flex justify-content-center align-items-center">
                    <h4
                      class="counter-value display-1 banner-size"
                      data-count="50"
                    >
                      50
                    </h4>
                    <span class="text-[#e74c3c] display-1 fw-lighter">+</span>
                  </div>
                  <p class="mb-0 text-capitalize">Certifications </p>
                </div>
              </div>
            </div>
          </section>

          <section id="experiences">
            <div class="container">
              <div class="row" data-aos="fade-up" data-aos-duration="1500">
                <div class="mb-5 col-lg-6 mb-lg-0">
                  <h3 class="mb-4 display-3">
                    Experiences<span class="text-[#e74c3c]">.</span>
                  </h3>
                  <div class="mb-5 border-l-2 border-opacity-50 border-[#e74c3c] ps-3">
                    <p class="text-[#e74c3c] fw-semibold">2021 - 2022</p>
                    <h5 class="display-6">
                      Sadra University: Teaching Professional
                    </h5>
                    <p>
                      Teaching Programming Language, DataBase and Algorithm
                      Design
                    </p>
                  </div>
                  <div class="border-l-2 border-opacity-50 border-[#e74c3c] ps-3 mb-5">
                    <p class="text-[#e74c3c] fw-semibold">2021 - 2022</p>
                    <h5 class="display-6">
                      Shahid Beheshti University: Teaching Assistant
                    </h5>
                    <div className="flex justify-center ">
                      <p className="w-[85%]">
                        Machine Learning and Pattern Recognition Course ( Master
                        and PhD ) - Prof. Ahmad Ali Abin
                      </p>
                    </div>
                  </div>
                  <div class="border-l-2 border-opacity-50 border-[#e74c3c] ps-3 mb-5">
                    <p class="text-[#e74c3c] fw-semibold">2024 - 2025</p>
                    <h5 class="display-6">
                      MAPNA Group - MECO (MAPNA Electric & Control, Engineering
                      & Manufacturing): Front-end developer
                    </h5>
                    <div className="flex justify-center ">
                      <p className="w-[85%]">
                        Frontend engineer specializing in React and Angular
                        development, with strong focus on unit testing
                        (Jest/Karma) and technical documentation
                      </p>
                    </div>
                  </div>
                  <div class="border-l-2 border-opacity-50 border-[#e74c3c] ps-3 mb-5">
                    <p class="text-[#e74c3c] fw-semibold">2025</p>
                    <h5 class="display-6">
                      MAPNA Group - MECO (MAPNA Electric & Control, Engineering
                      & Manufacturing): Unit test workshop
                    </h5>
                    <div className="flex justify-center ">
                      <p className="w-[85%]">
                        Experienced workshop instructor who has taught 5+ hours
                        of hands-on unit testing in Angular and React, helping
                        developers build confidence in test-driven development
                        (Jest/Karma/Testing Library).
                      </p>
                    </div>
                  </div>
                  <div class="border-l-2 border-opacity-50 border-[#e74c3c] ps-3 mb-5">
                    <p class="text-[#e74c3c] fw-semibold">2025 - Present</p>
                    <h5 class="display-6">
                      MAPNA Group - MAPNA DIGITAL: Front-end developer
                    </h5>
                    <div className="flex justify-center ">
                      <p className="w-[85%]">
                        Frontend engineer specializing in React and Angular
                        development, with strong focus on unit testing
                        (Jest/Karma) and technical documentation
                      </p>
                    </div>
                  </div>
                  <div class="border-l-2 border-opacity-50 border-[#e74c3c] ps-3 mb-5">
                    <p class="text-[#e74c3c] fw-semibold">2022 - Present</p>
                    <h5 class="display-6">
                      Self-Taught Machine Learning Engineer | Big Data & MLOps
                      Engineer
                    </h5>
                    <div className="flex justify-center ">
                      <p className="w-[85%]">
                        Practical ML engineer with expertise in scalable data
                        pipelines and production-grade MLOps. Passionate about
                        designing robust systems that handle large-scale data
                        while ensuring efficient model training, deployment, and
                        monitoring.
                      </p>
                    </div>
                  </div>
                </div>
                {/* TODO: */}
                <div class="col-lg-6">
                  <h3 class="mb-4 display-3">
                    Core Skills<span class="text-[#e74c3c]">.</span>
                  </h3>
                  <div class="mb-4 border-opacity-50 border-start border-primary ps-3">
                    <h5 class="display-6">Logo Design</h5>
                  </div>
                  <div class="mb-4 border-opacity-50 border-start border-primary ps-3">
                    <h5 class="display-6">Web Design</h5>
                  </div>
                  <div class="mb-4 border-opacity-50 border-start border-primary ps-3">
                    <h5 class="display-6">Brand Identity</h5>
                  </div>
                  <div class="mb-4 border-opacity-50 border-start border-primary ps-3">
                    <h5 class="display-6">UI/UX Prototyping</h5>
                  </div>
                  <div class="mb-4 border-opacity-50 border-start border-primary ps-3">
                    <h5 class="display-6">Creative Strategy</h5>
                  </div>
                </div>
              </div>
              <div class="mt-5 row" data-aos="fade-up">
                <div class="mb-5 col-lg-6 mb-lg-0">
                  <h3 class="mb-4 display-3">
                    Interests<span class="text-primary">.</span>
                  </h3>
                  <div class="mb-5 border-opacity-50 border-start border-primary ps-3">
                    <h5 class="display-6">Photography</h5>
                    <p>Capturing moments that inspire creativity.</p>
                  </div>
                  <div class="mb-5 border-opacity-50 border-start border-primary ps-3">
                    <h5 class="display-6">Sketching</h5>
                    <p>Pen and paper concepts before digital execution.</p>
                  </div>
                  <div class="border-opacity-50 border-start border-primary ps-3">
                    <h5 class="display-6">Traveling</h5>
                    <p>
                      Exploring cultures and landscapes to fuel design ideas.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <h3 class="mb-4 display-3">
                    Education<span class="text-primary">.</span>
                  </h3>
                  <div class="mb-5 border-opacity-50 border-start border-primary ps-3">
                    <p class="text-primary fw-semibold">1990 - 1994</p>
                    <h5 class="display-6">
                      Bachelors in Engineering in Information Technology
                    </h5>
                    <p>
                      Vitae aut atque fuga dolorem. Vel voluptatibus fugiat nam.
                      Impedit aperiam nesciunt facilis!
                    </p>
                  </div>
                  <div class="border-opacity-50 border-start border-primary ps-3">
                    <p class="text-primary fw-semibold">1994 - 1996</p>
                    <h5 class="display-6">Masters in Data Analysis</h5>
                    <p>
                      Vitae aut atque fuga dolorem. Vel voluptatibus fugiat nam.
                      Impedit aperiam nesciunt facilis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="portfolio"
            class="container padding-medium"
            data-aos="fade-up"
          >
            <div class="text-center">
              <h3 class="display-3">
                Latest projects<span class="text-primary">.</span>
              </h3>
              <p>
                Here’s a showcase of some of my favorite projects. <br /> Each
                design tells a unique story and reflects the client’s brand
                essence.
              </p>
              <div class="my-5">
                <p>
                  <button
                    class="px-5 py-3 mb-3 filter-button me-2 active"
                    data-filter="*"
                  >
                    All
                  </button>
                  <button
                    class="px-5 py-3 mb-3 filter-button me-2"
                    data-filter=".logo"
                  >
                    Logo
                  </button>
                  <button
                    class="px-5 py-3 mb-3 filter-button me-2"
                    data-filter=".web"
                  >
                    Web Design
                  </button>
                  <button
                    class="px-5 py-3 mb-3 filter-button me-2"
                    data-filter=".mobile"
                  >
                    Mobile App
                  </button>
                </p>
              </div>
            </div>
            <div class="isotope-container row">
              <div class="p-3 item web col-md-6">
                <div class="blog-post">
                  <div class="image-zoom rounded-3">
                    <a href="portfolio-details.html" class="blog-img">
                      <img
                        src="images/project1.jpg"
                        alt="img"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <p class="mt-3 text-uppercase text-primary fw-semibold">
                    Web design
                  </p>
                  <h5 class="display-6">
                    <a href="portfolio-details.html">
                      Ecommerce site Website Template
                    </a>
                  </h5>
                </div>
              </div>
              <div class="p-3 item logo col-md-6">
                <div class="blog-post">
                  <div class="image-zoom rounded-3">
                    <a href="portfolio-details.html" class="blog-img">
                      <img
                        src="images/project2.jpg"
                        alt="img"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <p class="mt-3 text-uppercase text-primary fw-semibold">
                    Web design
                  </p>
                  <h5 class="display-6">
                    <a href="portfolio-details.html">
                      CryptoCode Crypto currency template
                    </a>
                  </h5>
                </div>
              </div>
              <div class="p-3 item web col-md-6">
                <div class="blog-post">
                  <div class="image-zoom rounded-3">
                    <a href="portfolio-details.html" class="blog-img">
                      <img
                        src="images/project3.jpg"
                        alt="img"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <p class="mt-3 text-uppercase text-primary fw-semibold">
                    Web design
                  </p>
                  <h5 class="display-6">
                    <a href="portfolio-details.html">
                      Modish Fashion Store Website
                    </a>
                  </h5>
                </div>
              </div>
              <div class="p-3 item logo col-md-6">
                <div class="blog-post">
                  <div class="image-zoom rounded-3">
                    <a href="portfolio-details.html" class="blog-img">
                      <img
                        src="images/project4.jpg"
                        alt="img"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <p class="mt-3 text-uppercase text-primary fw-semibold">
                    Web design
                  </p>
                  <h5 class="display-6">
                    <a href="portfolio-details.html">
                      DashLIte Admin dashboard Figma
                    </a>
                  </h5>
                </div>
              </div>
              <div class="p-3 item mobile col-md-6">
                <div class="blog-post">
                  <div class="image-zoom rounded-3">
                    <a href="portfolio-details.html" class="blog-img">
                      <img
                        src="images/project5.jpg"
                        alt="img"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <p class="mt-3 text-uppercase text-primary fw-semibold">
                    Web design
                  </p>
                  <h5 class="display-6">
                    <a href="portfolio-details.html">
                      Beanie Coffee shop Redesign
                    </a>
                  </h5>
                </div>
              </div>
              <div class="p-3 item mobile col-md-6">
                <div class="blog-post">
                  <div class="image-zoom rounded-3">
                    <a href="portfolio-details.html" class="blog-img">
                      <img
                        src="images/project6.jpg"
                        alt="img"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <p class="mt-3 text-uppercase text-primary fw-semibold">
                    Web design
                  </p>
                  <h5 class="display-6">
                    <a href="portfolio-details.html">
                      Chris lee brand designer portfolio
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div class="text-center">
              <a
                href="portfolio.html"
                class="mt-4 btn button rounded-pill position-relative pe-5 "
              >
                <span>view all projects</span>
                <div class="position-absolute top-50 end-0 translate-middle-y me-2">
                  <svg
                    class="p-2 text-black bg-white arrow-right rounded-circle"
                    width="35"
                    height="35"
                  >
                    <use href="#arrow-right"></use>
                  </svg>
                </div>
              </a>
            </div>
          </section>

          <section id="testimonial" class="pt-0 padding-medium">
            <div
              class="container position-relative"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div class="text-center">
                <h3 class="display-3">
                  Read our clients reviews<span class="text-primary">.</span>
                </h3>
              </div>

              <div class="mt-4 row justify-content-center">
                <div class="col-md-7">
                  <div class="swiper testimonial-swiper">
                    <div class="swiper-wrapper">
                      <div class="text-center swiper-slide">
                        <div class="testimonial-details">
                          <svg class="text-primary" width="80" height="80">
                            <use href="#quote-left"></use>
                          </svg>
                          <p class="fs-2 lh-base fst-italic fw-light">
                            Kiwi’s designs completely transformed our branding.
                            Her attention to detail and creativity were
                            incredible!
                          </p>
                          <div class="mt-4 text-center">
                            <img
                              src="assets/images/commentor3.jpg"
                              alt="img"
                              class="img-fluid rounded-circle"
                            />
                            <div class="mt-2">
                              <p class="m-0 fw-bold">Emma Brown</p>
                              <p class="m-0 fw-light">United States</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-center swiper-slide">
                        <div class="testimonial-details">
                          <svg class="text-primary" width="80" height="80">
                            <use href="#quote-left"></use>
                          </svg>
                          <p class="fs-2 lh-base fst-italic fw-light">
                            Kiwi’s designs completely transformed our branding.
                            Her attention to detail and creativity were
                            incredible!
                          </p>
                          <div class="mt-4 text-center">
                            <img
                              src="assets/images/commentor2.jpg"
                              alt="img"
                              class="img-fluid rounded-circle"
                            />
                            <div class="mt-2">
                              <p class="m-0 fw-bold">Emma Brown</p>
                              <p class="m-0 fw-light">United States</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="text-center swiper-slide">
                        <div class="testimonial-details">
                          <svg className="text-primary" width="80" height="80">
                            <use href="#quote-left"></use>
                          </svg>
                          <p class="fs-2 lh-base fst-italic fw-light">
                            Kiwi’s designs completely transformed our branding.
                            Her attention to detail and creativity were
                            incredible!
                          </p>
                          <div class="mt-4 text-center">
                            <img
                              src="images/commentor1.jpg"
                              alt="img"
                              class="img-fluid rounded-circle"
                            />
                            <div class="mt-2">
                              <p class="m-0 fw-bold">Emma Brown</p>
                              <p class="m-0 fw-light">United States</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4 swiper-pagination position-static d-lg-none d-block"></div>
                  </div>
                </div>
              </div>
              <div class="pt-5 mt-5 position-absolute top-50 end-0 translate-middle-y me-5 main-slider-button-next d-lg-block d-none">
                <svg
                  class="p-3 border border-opacity-25 arrow border-light rounded-circle"
                  width="80"
                  height="80"
                >
                  <use href="#arrow-right"></use>
                </svg>
              </div>
              <div class="pt-5 mt-5 position-absolute top-50 start-0 translate-middle-y ms-5 main-slider-button-prev d-lg-block d-none">
                <svg
                  class="p-3 border border-opacity-25 arrow border-light rounded-circle"
                  width="80"
                  height="80"
                >
                  <use href="#arrow-left"></use>
                </svg>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
