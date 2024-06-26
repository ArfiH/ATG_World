import "./App.css";
import logo from "./assets/whole.svg";
import formSideImage from "./assets/formSideImage.jpg";
import pen from "./assets/pen.png";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="container py-4 px-30 mx-auto">
        <div className="header-container container d-none d-lg-flex align-items-center justify-content-between p-3">
          <div className="header-img" style={{ zIndex: 1 }}>
            <img src={logo} width="162.57px" height="24px" alt="Logo" />
          </div>
          <div className="header-form">
            <form className="d-flex" style={{ width: 360, borderRadius: 21 }}>
              <input
                className="form-control custom-input-search rounded-pill"
                type="search"
                placeholder="🔎  Search for your favorite groups in ATG"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="header-button">
            <button
              id="show"
              className="btn custom-btn-create p-0 m-0"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => {
                document.querySelector(".dialog-content").showModal();
              }}
            >
              Create Account.
              <span className="text-primary fw-bold">
                It's Free!
                <img
                  className="rounded-circle"
                  alt="Profile"
                  src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                />
              </span>
            </button>
          </div>
        </div>

        <dialog
          id="modal-content"
          className="dialog-content border-0"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <button
            id="close-form"
            type="button"
            className="close btn btn-secondary"
            aria-label="Close"
            onClick={() => {
              document.querySelector(".dialog-content").close();
            }}
          >
            <span aria-hidden="true">✖</span>
          </button>
          <div
            id="modal-header"
            className="modal-header custom-modal-header justify-content-center mb-4 p-2"
            style={{ backgroundColor: "#EFFFF4", color: "#008A45" }}
          >
            Let's learn, share &amp; inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
          <div className="px-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="d-flex fw-bold" id="update">
                Create Account
              </h4>
              <button
                id="large-alternate"
                type="button"
                className="btn"
                onClick={() => {
                  if (
                    (document.getElementById(
                      "hide-for-sign-in1"
                    ).style.display = "block")
                  ) {
                    document.getElementById("hide-for-sign-in1").style.display =
                      "none";
                  } else {
                    document.getElementById("hide-for-sign-in1").style.display =
                      "block";
                  }

                  if (
                    (document.getElementById(
                      "hide-for-sign-in2"
                    ).style.display = "block")
                  ) {
                    document.getElementById("hide-for-sign-in2").style.display =
                      "none";
                  } else {
                    document.getElementById("hide-for-sign-in2").style.display =
                      "block";
                  }

                  if (
                    (document.getElementById("update").textContent =
                      "Create Account")
                  ) {
                    document.getElementById("update").textContent = "Sign In";
                  } else {
                    document.getElementById("update").textContent =
                      "Create Account";
                  }
                  if (
                    (document.getElementById("update1").textContent =
                      "Create Account")
                  ) {
                    document.getElementById("update1").textContent = "Sign In";
                  } else {
                    document.getElementById("update1").textContent =
                      "Create Account";
                  }
                }}
              >
                Already have an account?
                <span className="text-primary" id="sign-in">
                  Sign In
                </span>
              </button>
            </div>
            <div className="container text-center">
              <div className="row" id="form-row">
                <div className="col">
                  <div className="d-flex flex-column gap-2">
                    <div className="d-flex">
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="First Name"
                        id="hide-for-sign-in1"
                        style={{ display: "block" }}
                      />
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="Last Name"
                        id="hide-for-sign-in2"
                        style={{ display: "block" }}
                      />
                    </div>
                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="Email"
                    />
                    <div className="d-flex align-items-center justify-content-between position-relative">
                      <input
                        type="password"
                        className="form-control custom-input"
                        placeholder="Password"
                      />
                      <button
                        className="btn position-absolute"
                        style={{ right: 10 }}
                      >
                        <img
                          src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/action/visibility_24px'%3e%3cpath%20id='icon/action/visibility_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.75%209C2.0475%205.7075%205.25%203.375%209%203.375C12.75%203.375%2015.9525%205.7075%2017.25%209C15.9525%2012.2925%2012.75%2014.625%209%2014.625C5.25%2014.625%202.0475%2012.2925%200.75%209ZM15.615%209C14.3775%206.4725%2011.8425%204.875%209%204.875C6.1575%204.875%203.6225%206.4725%202.385%209C3.6225%2011.5275%206.1575%2013.125%209%2013.125C11.8425%2013.125%2014.3775%2011.5275%2015.615%209ZM9%207.125C10.035%207.125%2010.875%207.965%2010.875%209C10.875%2010.035%2010.035%2010.875%209%2010.875C7.965%2010.875%207.125%2010.035%207.125%209C7.125%207.965%207.965%207.125%209%207.125ZM5.625%209C5.625%207.14%207.14%205.625%209%205.625C10.86%205.625%2012.375%207.14%2012.375%209C12.375%2010.86%2010.86%2012.375%209%2012.375C7.14%2012.375%205.625%2010.86%205.625%209Z'%20fill='%23525252'/%3e%3c/g%3e%3c/svg%3e"
                          alt="eye"
                          width="18px"
                          height="18px"
                        />
                      </button>
                    </div>
                    <input
                      type="password"
                      className="form-control mb-4 custom-input"
                      placeholder="Confirm password"
                    />
                    <div className="mobile-form">
                      <button
                        className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4"
                        id="update1"
                        onClick={() => {
                          document.querySelector(
                            ".header-button"
                          ).innerHTML = `<div class="side-profile">
                        <img
                          class="rounded-circle"
                          alt="Profile"
                          src="https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qsEHSzyt4wYw7ptWWaMAzMgdXhKBQ1639EW4vFNz8qvkQriMDxN9-r13uHnnrlcOIvzLfIy9m3rfdxuJZUsXgUuvKQ7HuTg1aZLRLjt1J1NR7rhCwGSCTA0wnD0my2RRboMuadNltmVye1bX3IxOOxYwPjWLQPUPZH2I1LgjbGMHegrHrwvtf4Tnpfqpea1a9s5CVNjUrNsJxeZNQkq--flCe0O5iPf6Xx3-02iloN7X5Zo~wgtknpmNFpEKDUMY3IxQvxbqFlDFN7W6rQ9Im7Fch~cZQdN4fcbL~oVkOIDEt4UKIB4TyxyoJWk5-sQdj32k3vqcViHEsxkwjrvAeA__"
                          width="36px"
                          height="36px"
                        />
                        <div className="text-wrapper">Sarthak Kamra</div>
                        <img
                                        src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                                        alt="arrow down"
                                      />
                      </div>
                      `;
                          document.querySelector(".dialog-content").close();
                        }}
                      >
                        Create Account
                      </button>

                      <button
                        id="mobile-alternate"
                        type="button"
                        className="btn"
                        onClick={() => {
                          document.getElementById("sign-in-text").textContent =
                            "or, Create Account";
                          if (
                            (document.getElementById(
                              "hide-for-sign-in1"
                            ).style.display = "block")
                          ) {
                            document.getElementById(
                              "hide-for-sign-in1"
                            ).style.display = "none";
                          } else {
                            document.getElementById(
                              "hide-for-sign-in1"
                            ).style.display = "block";
                          }

                          if (
                            (document.getElementById(
                              "hide-for-sign-in2"
                            ).style.display = "block")
                          ) {
                            document.getElementById(
                              "hide-for-sign-in2"
                            ).style.display = "none";
                          } else {
                            document.getElementById(
                              "hide-for-sign-in2"
                            ).style.display = "block";
                          }

                          if (
                            (document.getElementById("update").textContent =
                              "Create Account")
                          ) {
                            document.getElementById("update").textContent =
                              "Sign In";
                          } else {
                            document.getElementById("update").textContent =
                              "Create Account";
                          }
                          if (
                            (document.getElementById("update1").textContent =
                              "Create Account")
                          ) {
                            document.getElementById("update1").textContent =
                              "Sign In";
                          } else {
                            document.getElementById("update1").textContent =
                              "Create Account";
                          }
                        }}
                      >
                        <span
                          className="text-secondary text-decoration-underline"
                          id="sign-in-text"
                        >
                          or, Sign In
                        </span>
                      </button>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      <button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group">
                        <img
                          src="https://s3-alpha-sig.figma.com/img/2260/c71f/967377e16ffbb611ef03393e79e51f6e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZdaqYj40GA4jv3EhToholknIWUtv8HxXMqxYOdS4OISvY6uLq2t8BhpMJt2PANl1js4wDfkB4VaKbFENKQu2FSWkANDGZEgkRpyuBOk-LuL2zvVdlAIsGrlBCZxk8JPfaEQ8a9mIC3zJscbXG66e5VPvyQ3LLbiu9zcOVaoMbBVy9I01dhhTkHCenDioEqOpglg-TykJHXFPBOkHX98SR4ClboNzRVUlu8eotyP9RQZ7h4y4cbMBSm79VdvaVRSsLCWfzrHKT7BwE1KYGxEMwTZo1iKCSLrKGXb391CC163TNSWSxuy~UMr0Tep9TnbbwwjvieMYxdlYIuWUeY4sw__"
                          alt="facebook"
                          width="16px"
                          height="16px"
                        />
                        Sign Up with Facebook
                      </button>
                      <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
                        <img
                          src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_2217)'%3e%3cpath%20d='M3.54594%209.66905L2.989%2011.7482L0.953406%2011.7912C0.345063%2010.6629%200%209.37192%200%208.00005C0%206.67345%200.322625%205.42245%200.8945%204.32092H0.894938L2.70719%204.65317L3.50106%206.45455C3.33491%206.93895%203.24434%207.45895%203.24434%208.00005C3.24441%208.5873%203.35078%209.14995%203.54594%209.66905Z'%20fill='%23FBBB00'/%3e%3cpath%20d='M15.8602%206.50562C15.9521%206.98955%2016%207.48933%2016%208.00012C16%208.57287%2015.9398%209.13155%2015.8251%209.67046C15.4357%2011.5043%2014.4181%2013.1056%2013.0084%2014.2388L13.008%2014.2384L10.7253%2014.1219L10.4023%2012.1052C11.3377%2011.5566%2012.0687%2010.6981%2012.4537%209.67046H8.1759V6.50562H12.5161H15.8602Z'%20fill='%23518EF8'/%3e%3cpath%20d='M13.0081%2014.2382L13.0085%2014.2386C11.6375%2015.3406%209.89596%2015.9999%208.00015%2015.9999C4.95355%2015.9999%202.30477%2014.2971%200.953552%2011.7911L3.54608%209.66895C4.22168%2011.472%205.96102%2012.7555%208.00015%2012.7555C8.87662%2012.7555%209.69774%2012.5186%2010.4023%2012.105L13.0081%2014.2382Z'%20fill='%2328B446'/%3e%3cpath%20d='M13.1064%201.84175L10.5148%203.9635C9.78553%203.50769%208.92353%203.24438%208.00003%203.24438C5.91475%203.24438%204.14288%204.58678%203.50113%206.4545L0.894969%204.32088H0.894531C2.22597%201.75384%204.90816%200%208.00003%200C9.94112%200%2011.7209%200.691438%2013.1064%201.84175Z'%20fill='%23F14336'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_2217'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                          alt="google"
                        />
                        Sign Up with Google
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column">
                    <img
                      src={formSideImage}
                      alt="atg-illustration"
                      style={{ width: "300px", height: "300px" }}
                      id="form-side-img"
                    />
                    <p className="info-signup">
                      By signing up, you agree to our Terms &amp; conditions,
                      Privacy policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>

        <div className="container1" style={{ zIndex: 1 }}>
          <button className="back-arrow btn text-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            id="joinBtn"
            className="join-group btn text-white border-2 border-white"
            onClick={() => {
              const joinBtn = document.querySelector(".join-group");
              if (joinBtn.textContent === "Join Group") {
                document.querySelector(".dialog-content").showModal();
                joinBtn.textContent = "Leave Group";
              } else {
                joinBtn.textContent = "Join Group";
              }
            }}
          >
            Join Group
          </button>
          <div className="container1-text">
            <h1 className="text-white">Computer Engineering</h1>
            <p className="text-white mb-5">
              142,765 Computer Engineers follow this
            </p>
          </div>
        </div>
        <div className="container2">
          <div
            className="d-none d-lg-flex justify-content-between mx-auto align-items-center container sticky-top"
            style={{
              maxWidth: 1040,
              height: 68,
              background: "rgb(255, 255, 255)",
              borderTop: "1px solid rgba(0, 0, 0, 0.2)",
            }}
          >
            <ul className="nav my-2 nav-underline">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  All Posts (32)
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Article
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Event
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Job
                </a>
              </li>
            </ul>
            <div className="d-flex my-2 align-items-center">
              <button
                className="btn"
                aria-label="write-post"
                style={{ background: "rgb(242, 242, 242)" }}
              >
                Write Post
                <img
                  src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="arrow down"
                />
              </button>
              <button
                className="btn btn-primary ms-2 gap-2 d-flex align-items-center"
                aria-label="Join group"
                style={{ border: "0.8px solid rgb(152, 152, 153)" }}
              >
                <img
                  src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_1_859)'%3e%3cpath%20d='M7.33333%209.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5%2010.0834C18.0217%2010.0834%2019.2408%208.85504%2019.2408%207.33337C19.2408%205.81171%2018.0217%204.58337%2016.5%204.58337C16.2067%204.58337%2015.9225%204.62921%2015.6658%204.71171C16.1883%205.45421%2016.4908%206.35254%2016.4908%207.33337C16.4908%208.31421%2016.1792%209.20337%2015.6658%209.95504C15.9225%2010.0375%2016.2067%2010.0834%2016.5%2010.0834ZM11.9167%2010.0834C13.4383%2010.0834%2014.6575%208.85504%2014.6575%207.33337C14.6575%205.81171%2013.4383%204.58337%2011.9167%204.58337C10.395%204.58337%209.16667%205.81171%209.16667%207.33337C9.16667%208.85504%2010.395%2010.0834%2011.9167%2010.0834ZM17.985%2012.0634C18.7458%2012.7325%2019.25%2013.585%2019.25%2014.6667V16.5H22V14.6667C22%2013.255%2019.8275%2012.3842%2017.985%2012.0634ZM11.9167%2011.9167C10.0833%2011.9167%206.41667%2012.8334%206.41667%2014.6667V16.5H17.4167V14.6667C17.4167%2012.8334%2013.75%2011.9167%2011.9167%2011.9167Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_859'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                  alt="Join group"
                />
                Join Group
              </button>
            </div>
          </div>
        </div>
        <hr className="mx-auto mt-0" style={{ maxWidth: 1040 }} />
        <div className="container3">
          <div
            id="mobile-posts-header"
            className="mx-auto my-2 gap-5 justify-content-between align-items-center"
          >
            <p className="posts-mobile">Posts (368)</p>
            <button
              className="btn"
              aria-label="write-post"
              style={{ background: "rgb(242, 242, 242)" }}
            >
              Filter
              <img
                src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                alt="arrow down"
              />
            </button>
          </div>
          <div
            id="main"
            className="mx-auto d-flex justify-content-center"
            style={{ maxWidth: 1040 }}
          >
            <div className="posts-center position-relative">
              <Card
                postHead="✍️ Article"
                postSubject="What if famous brands had regular fonts? Meet RegulaBrands!"
                postImgSrc="https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AI96XbEM9G2nQUo-8USJmmBj2pUlj8V3sWG3YrYi3s3BGjFiUVMJ6cGqqkcZwxAZRfcXsOPTCv4yEHY84irTbgZiUK7G06xelQncLxvF-YGFKSvs-Fz5wqku9jXDrmJk5aMXI3DBRdCGZIqGXgpcvoR~lFlu1e8h-KTIGKPTrDVs0MVXGoobchz6NW7NLDOv5q68kCMZ5mgAKrzXXD3mS8uGepF0RVQwHcirt1KKSAi49GjtN9kT08h~D43-adfTpTqRU1eb22nevEDPdMpw2axYRAJGq4k-76egS5z06m6ogRtMwfUhz8CO5XqWGunnLuAVjqz8WNQ4hDDNWt2UGA__"
                postAvatar="https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CdzbtHS0xYM~P0lnGXpvz7rWZsn~wFLjyulnJCsrLf2YouuGcwi16VPWtbvk2bW5V10lUNmrhAK3ckdX2yogkX2mIJYrbCGBT3C95DSjGpu7QfNaiGVLbwuLUWhtY13IRt6zNINlp17F2cTFg8dIXU~R4Yfymey31l3MH6aZwCSrEyPkib~DxvtgDi~TT2401unRBGqb-oKj7LPphwB0zTKMYXjyBdbWm~p8QzezKMyAJmseD1SpVYUmYA2ILY1Gk~ibNfObZTJOVb5lWZEdhu7YU7kgCkYMOHdFJAjBtMsVBqdvOXrTFfG1nxMEmZcQnPwICIHNK3V4heO0VlwVvA__"
                postAuthor="Sarthak Kamra"
              />
              <Card
                postHead="🔬️ Education"
                postSubject="Tax Benefits for Investment under National Pension Scheme
                      launched by Government"
                postImgSrc="https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W83tmxj4TJMo5r3JLp~ew1JFxM2wpaKvXttG2MfutexxDtnGWkUKrconwFWLnUYAYv8hO5zqghbowoJVXfm9AX3qGUTt6eoz3Ah2ppvzOvmliCoE0K2QLeLU0Z0H3urtMuIBaQkdqIHVS8Eltca409~pzwjZVTn1PeFM-O8efwljfMHqdopjW3-Ixuj-aXYkjqAxjZDRWPTJXuFkttnGSx9WXxdpPcdDy8tGVkWFVK1k2Ty9~-u6HNb-pqYRIcUf7ToCX-4cDlg1IXZqTN3IOqU5EzS9p4wbTijg-8OILeI52oiCJ7C0RRAg1deWik6OJ3rwyFJzdt9jl2FSraqSNw__"
                postAvatar="https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VNrZ57HOk5k5afFH2GLMkx3Y-i4lIVa2qudb5l7R9lUM~~ms2WJewGyzVt2TbRBYsroxwT~u7uJSKGi1GjBta54wnU9HxQHWZCVzTfzEvG9FcXeOChLzAv1Uoq7gCudmHjz8K7IigjPjlxMDrXdTRjg-9clTAAWmQk5ZchFjyX2udFcb65ELWBbO8zqvtnAOn4d7W7n5CPyTpNmQ3nbxzm1Y7G9YYNinAntUyUVOHvH6lZJ60wCkcmfaI0Q5vwNstfUXVHOwznKV3F1vHXlqSFnc7xONHHQ5e4nUERxoXNRbu--C~2REH78ShgdF9JOiY6a6t4lv~j9X16cL9sxNVQ__"
                postAuthor="Sarah West"
              />
              <div
                className="d-flex flex-column border border-1 rounded-2"
                style={{
                  maxWidth: 692,
                  borderColor: "rgb(224, 224, 224)",
                  fill: "rgb(255, 255, 255)",
                }}
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/bdc0/79a9/a2e530610a1b91c9682ba7889c87c1b2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FoTuoKXN9AS8XTbmTOzof2D~2fuMTDlmTwjWfnngUqqNAGwzEtE8JmwpKWSPMJvD8hVSafQSg0LOdAHv1En5gSfeHl8aUp6IKyOsi0boxjqTjxS64bkzCLygWJ97tYFTdj3-GfglxSJJwgVWDW3i0sgQkGaAsG3pSMjGpSjNDqFFHjQtJPE8OgcAqI7yO1gxen-qXGhAZR72AC6Fc8PmxTU~LhdoUY6xrvNzD3-j7tkKad6akC1lHoaYB5yDjivcQJgpIITXgR8y6tfTf6JhUk9m~tuUUt-~VTSDQ7U-sOOuoprfbHHD9uYlorZxEWJ8HGEqPmUqVvyg2pxYWANdNQ__"
                  alt="Nature"
                  className="imagePost"
                />
                <div className="p-4">
                  <h3 className="d-flex">🗓️ Meetup</h3>
                  <div className="d-flex gap-6 justify-content-between">
                    <h4>
                      Finance &amp; Investment Elite Social Mixer @Lujiazui
                    </h4>
                    <div className="btn align-self-start">
                      <div className="dropdown">
                        <div
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            src="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-more_vert-24px'%3e%3cpath%20id='Vector'%20d='M18.6667%2014C18.6667%2015.2833%2019.7167%2016.3333%2021%2016.3333C22.2833%2016.3333%2023.3333%2015.2833%2023.3333%2014C23.3333%2012.7166%2022.2833%2011.6666%2021%2011.6666C19.7167%2011.6666%2018.6667%2012.7166%2018.6667%2014ZM16.3333%2014C16.3333%2012.7166%2015.2833%2011.6666%2014%2011.6666C12.7167%2011.6666%2011.6667%2012.7166%2011.6667%2014C11.6667%2015.2833%2012.7167%2016.3333%2014%2016.3333C15.2833%2016.3333%2016.3333%2015.2833%2016.3333%2014ZM9.33333%2014C9.33333%2012.7166%208.28333%2011.6666%207%2011.6666C5.71666%2011.6666%204.66666%2012.7166%204.66666%2014C4.66666%2015.2833%205.71666%2016.3333%207%2016.3333C8.28333%2016.3333%209.33333%2015.2833%209.33333%2014Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e"
                            alt="more details"
                            height="28px"
                            width="28px"
                          />
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <button className="dropdown-item" type="button">
                              Edit
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              Report
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              option 3
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <ul className="d-flex align-items-center gap-5 list-unstyled">
                    <li className="d-flex align-items-center gap-1">
                      <img
                        src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-today-24px'%20clip-path='url(%23clip0_1_895)'%3e%3cpath%20id='Vector'%20d='M15.8333%202.49992H15V0.833252H13.3333V2.49992H6.66667V0.833252H5V2.49992H4.16667C3.24167%202.49992%202.50833%203.24992%202.50833%204.16659L2.5%2015.8333C2.5%2016.7499%203.24167%2017.4999%204.16667%2017.4999H15.8333C16.75%2017.4999%2017.5%2016.7499%2017.5%2015.8333V4.16659C17.5%203.24992%2016.75%202.49992%2015.8333%202.49992ZM15.8333%2015.8333H4.16667V6.66658H15.8333V15.8333ZM5.83333%208.33325H10V12.4999H5.83333V8.33325Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_895'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                        alt="date"
                        width="20px"
                        height="20px"
                      />
                      Fri, 12 Oct, 2018
                    </li>
                    <li className="d-flex align-items-center gap-1">
                      <img
                        src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='outline-location_on-24px%202'%20clip-path='url(%23clip0_1_1233)'%3e%3cpath%20id='Vector'%20d='M9%201.5C6.0975%201.5%203.75%203.8475%203.75%206.75C3.75%2010.6875%209%2016.5%209%2016.5C9%2016.5%2014.25%2010.6875%2014.25%206.75C14.25%203.8475%2011.9025%201.5%209%201.5ZM5.25%206.75C5.25%204.68%206.93%203%209%203C11.07%203%2012.75%204.68%2012.75%206.75C12.75%208.91%2010.59%2012.1425%209%2014.16C7.44%2012.1575%205.25%208.8875%205.25%206.75Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M9%208.625C10.0355%208.625%2010.875%207.78553%2010.875%206.75C10.875%205.71447%2010.0355%204.875%209%204.875C7.96447%204.875%207.125%205.71447%207.125%206.75C7.125%207.78553%207.96447%208.625%209%208.625Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1233'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                        alt="location"
                        width="20px"
                        height="20px"
                      />
                      Ahmedabad, India
                    </li>
                  </ul>
                  <button
                    className="custom-post-link btn mb-4 fw-semibold border-secondary"
                    style={{ color: "rgb(229, 97, 53)", width: "100%" }}
                  >
                    Visit WebSite
                  </button>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        className="rounded-circle"
                        alt="Profile"
                        src="https://s3-alpha-sig.figma.com/img/b8a9/097f/c3ac7682e52df2e10d0a36ec3f243a44?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PoqF96KzdVES8JvPASuGUOInrwlT8Rv40V4ZtzbwXWLZwsbjJHKp0E29xZrhiY1y1zCd-TncVAiKsIT12wLIeGqI4oCBuRKs6dMqdBGSHK13i0axnuBISTMFGs~~dySqEDpydj~IDxk6zqIZGOeGl6clHw~42fBk2L8TIUwkMtVqkpHxqXxmYMa4Uve35ZLkO390o0QmsPRbZpZ-31rV3WBl4S1Otj6Du1J0fmKd5yJSFILfC5Qnjktme8SohdQO8bQTqPQfn54m4zeP9y7OZ8GM3VWILmqn3EuFB-o4ucOgd7YyVaCAJq9Q9EYSlAbomhqupVwpq1GZhECSB-0XjQ__"
                        width={48}
                        height={48}
                      />
                      <div className="d-flex flex-column">
                        <div className="text-wrapper">Ronal Jones</div>
                        <div className="d-lg-none">
                          <img
                            src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/action/visibility_24px'%3e%3cpath%20id='icon/action/visibility_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.75%209C2.0475%205.7075%205.25%203.375%209%203.375C12.75%203.375%2015.9525%205.7075%2017.25%209C15.9525%2012.2925%2012.75%2014.625%209%2014.625C5.25%2014.625%202.0475%2012.2925%200.75%209ZM15.615%209C14.3775%206.4725%2011.8425%204.875%209%204.875C6.1575%204.875%203.6225%206.4725%202.385%209C3.6225%2011.5275%206.1575%2013.125%209%2013.125C11.8425%2013.125%2014.3775%2011.5275%2015.615%209ZM9%207.125C10.035%207.125%2010.875%207.965%2010.875%209C10.875%2010.035%2010.035%2010.875%209%2010.875C7.965%2010.875%207.125%2010.035%207.125%209C7.125%207.965%207.965%207.125%209%207.125ZM5.625%209C5.625%207.14%207.14%205.625%209%205.625C10.86%205.625%2012.375%207.14%2012.375%209C12.375%2010.86%2010.86%2012.375%209%2012.375C7.14%2012.375%205.625%2010.86%205.625%209Z'%20fill='%23525252'/%3e%3c/g%3e%3c/svg%3e"
                            alt="watch"
                          />
                          <span>1.4k views</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-none d-lg-block pe-4">
                        <img
                          src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/action/visibility_24px'%3e%3cpath%20id='icon/action/visibility_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.75%209C2.0475%205.7075%205.25%203.375%209%203.375C12.75%203.375%2015.9525%205.7075%2017.25%209C15.9525%2012.2925%2012.75%2014.625%209%2014.625C5.25%2014.625%202.0475%2012.2925%200.75%209ZM15.615%209C14.3775%206.4725%2011.8425%204.875%209%204.875C6.1575%204.875%203.6225%206.4725%202.385%209C3.6225%2011.5275%206.1575%2013.125%209%2013.125C11.8425%2013.125%2014.3775%2011.5275%2015.615%209ZM9%207.125C10.035%207.125%2010.875%207.965%2010.875%209C10.875%2010.035%2010.035%2010.875%209%2010.875C7.965%2010.875%207.125%2010.035%207.125%209C7.125%207.965%207.965%207.125%209%207.125ZM5.625%209C5.625%207.14%207.14%205.625%209%205.625C10.86%205.625%2012.375%207.14%2012.375%209C12.375%2010.86%2010.86%2012.375%209%2012.375C7.14%2012.375%205.625%2010.86%205.625%209Z'%20fill='%23525252'/%3e%3c/g%3e%3c/svg%3e"
                          alt="watch"
                        />
                        <span>1.4k views</span>
                      </div>
                      <button
                        className="btn d-flex align-items-center gap-2"
                        style={{ background: "rgb(237, 238, 240)" }}
                      >
                        <img
                          src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-share-24px'%20clip-path='url(%23clip0_1_1104)'%3e%3cpath%20id='Vector'%20d='M13.5%2012.06C12.93%2012.06%2012.42%2012.285%2012.03%2012.6375L6.6825%209.525C6.72%209.3525%206.75%209.18%206.75%209C6.75%208.82%206.72%208.6475%206.6825%208.475L11.97%205.3925C12.375%205.7675%2012.9075%206%2013.5%206C14.745%206%2015.75%204.995%2015.75%203.75C15.75%202.505%2014.745%201.5%2013.5%201.5C12.255%201.5%2011.25%202.505%2011.25%203.75C11.25%203.93%2011.28%204.1025%2011.3175%204.275L6.03%207.3575C5.625%206.9825%205.0925%206.75%204.5%206.75C3.255%206.75%202.25%207.755%202.25%209C2.25%2010.245%203.255%2011.25%204.5%2011.25C5.0925%2011.25%205.625%2011.0175%206.03%2010.6425L11.37%2013.7625C11.3325%2013.92%2011.31%2014.085%2011.31%2014.25C11.31%2015.4575%2012.2925%2016.44%2013.5%2016.44C14.7075%2016.44%2015.69%2015.4575%2015.69%2014.25C15.69%2013.0425%2014.7075%2012.06%2013.5%2012.06Z'%20fill='%232D2D2D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1104'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                          alt="share"
                        />
                        <span className="d-lg-none">Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-flex flex-column border border-1 rounded-2"
                style={{
                  maxWidth: 692,
                  borderColor: "rgb(224, 224, 224)",
                  fill: "rgb(255, 255, 255)",
                }}
              >
                <div className="p-4">
                  <h3 className="d-flex">💼️ Job</h3>
                  <div className="d-flex gap-6 justify-content-between">
                    <h4>Software Developer</h4>
                    <div className="btn align-self-start">
                      <div className="dropdown">
                        <div
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            src="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-more_vert-24px'%3e%3cpath%20id='Vector'%20d='M18.6667%2014C18.6667%2015.2833%2019.7167%2016.3333%2021%2016.3333C22.2833%2016.3333%2023.3333%2015.2833%2023.3333%2014C23.3333%2012.7166%2022.2833%2011.6666%2021%2011.6666C19.7167%2011.6666%2018.6667%2012.7166%2018.6667%2014ZM16.3333%2014C16.3333%2012.7166%2015.2833%2011.6666%2014%2011.6666C12.7167%2011.6666%2011.6667%2012.7166%2011.6667%2014C11.6667%2015.2833%2012.7167%2016.3333%2014%2016.3333C15.2833%2016.3333%2016.3333%2015.2833%2016.3333%2014ZM9.33333%2014C9.33333%2012.7166%208.28333%2011.6666%207%2011.6666C5.71666%2011.6666%204.66666%2012.7166%204.66666%2014C4.66666%2015.2833%205.71666%2016.3333%207%2016.3333C8.28333%2016.3333%209.33333%2015.2833%209.33333%2014Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e"
                            alt="more details"
                            height="28px"
                            width="28px"
                          />
                        </div>
                        <ul className="dropdown-menu">
                          <li>
                            <button className="dropdown-item" type="button">
                              Edit
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              Report
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              option 3
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <ul className="d-flex align-items-center gap-5 list-unstyled">
                    <li className="d-flex align-items-center gap-1">
                      <img
                        src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='outline-work_outline-24px'%20clip-path='url(%23clip0_1_941)'%3e%3cpath%20id='Vector'%20d='M11.6667%205.00008V3.33341H8.33342V5.00008H11.6667ZM3.33341%206.66675V15.8334H16.6667V6.66675H3.33341ZM16.6667%205.00008C17.5917%205.00008%2018.3334%205.74175%2018.3334%206.66675V15.8334C18.3334%2016.7584%2017.5917%2017.5001%2016.6667%2017.5001H3.33341C2.40841%2017.5001%201.66675%2016.7584%201.66675%2015.8334L1.67508%206.66675C1.67508%205.74175%202.40841%205.00008%203.33341%205.00008H6.66675V3.33341C6.66675%202.40841%207.40841%201.66675%208.33342%201.66675H11.6667C12.5917%201.66675%2013.3334%202.40841%2013.3334%203.33341V5.00008H16.6667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_941'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                        alt="date"
                        width="20px"
                        height="20px"
                      />
                      Innovaccer Analytics Private Ltd.
                    </li>
                    <li className="d-flex align-items-center gap-1">
                      <img
                        src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='outline-location_on-24px%202'%20clip-path='url(%23clip0_1_1233)'%3e%3cpath%20id='Vector'%20d='M9%201.5C6.0975%201.5%203.75%203.8475%203.75%206.75C3.75%2010.6875%209%2016.5%209%2016.5C9%2016.5%2014.25%2010.6875%2014.25%206.75C14.25%203.8475%2011.9025%201.5%209%201.5ZM5.25%206.75C5.25%204.68%206.93%203%209%203C11.07%203%2012.75%204.68%2012.75%206.75C12.75%208.91%2010.59%2012.1425%209%2014.16C7.44%2012.1575%205.25%208.8875%205.25%206.75Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M9%208.625C10.0355%208.625%2010.875%207.78553%2010.875%206.75C10.875%205.71447%2010.0355%204.875%209%204.875C7.96447%204.875%207.125%205.71447%207.125%206.75C7.125%207.78553%207.96447%208.625%209%208.625Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1233'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                        alt="location"
                        width="20px"
                        height="20px"
                      />
                      Noida, India
                    </li>
                  </ul>
                  <button
                    className="custom-post-link btn mb-4 fw-semibold border-secondary"
                    style={{ color: "rgb(2, 184, 117)", width: "100%" }}
                  >
                    Apply on Timejobs
                  </button>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        className="rounded-circle"
                        alt="Profile"
                        src="https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qsEHSzyt4wYw7ptWWaMAzMgdXhKBQ1639EW4vFNz8qvkQriMDxN9-r13uHnnrlcOIvzLfIy9m3rfdxuJZUsXgUuvKQ7HuTg1aZLRLjt1J1NR7rhCwGSCTA0wnD0my2RRboMuadNltmVye1bX3IxOOxYwPjWLQPUPZH2I1LgjbGMHegrHrwvtf4Tnpfqpea1a9s5CVNjUrNsJxeZNQkq--flCe0O5iPf6Xx3-02iloN7X5Zo~wgtknpmNFpEKDUMY3IxQvxbqFlDFN7W6rQ9Im7Fch~cZQdN4fcbL~oVkOIDEt4UKIB4TyxyoJWk5-sQdj32k3vqcViHEsxkwjrvAeA__"
                        width={48}
                        height={48}
                      />
                      <div className="d-flex flex-column">
                        <div className="text-wrapper">Joseph Gray</div>
                        <div className="d-lg-none">
                          <img
                            src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/action/visibility_24px'%3e%3cpath%20id='icon/action/visibility_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.75%209C2.0475%205.7075%205.25%203.375%209%203.375C12.75%203.375%2015.9525%205.7075%2017.25%209C15.9525%2012.2925%2012.75%2014.625%209%2014.625C5.25%2014.625%202.0475%2012.2925%200.75%209ZM15.615%209C14.3775%206.4725%2011.8425%204.875%209%204.875C6.1575%204.875%203.6225%206.4725%202.385%209C3.6225%2011.5275%206.1575%2013.125%209%2013.125C11.8425%2013.125%2014.3775%2011.5275%2015.615%209ZM9%207.125C10.035%207.125%2010.875%207.965%2010.875%209C10.875%2010.035%2010.035%2010.875%209%2010.875C7.965%2010.875%207.125%2010.035%207.125%209C7.125%207.965%207.965%207.125%209%207.125ZM5.625%209C5.625%207.14%207.14%205.625%209%205.625C10.86%205.625%2012.375%207.14%2012.375%209C12.375%2010.86%2010.86%2012.375%209%2012.375C7.14%2012.375%205.625%2010.86%205.625%209Z'%20fill='%23525252'/%3e%3c/g%3e%3c/svg%3e"
                            alt="watch"
                          />
                          <span>1.4k views</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-none d-lg-block pe-4">
                        <img
                          src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/action/visibility_24px'%3e%3cpath%20id='icon/action/visibility_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.75%209C2.0475%205.7075%205.25%203.375%209%203.375C12.75%203.375%2015.9525%205.7075%2017.25%209C15.9525%2012.2925%2012.75%2014.625%209%2014.625C5.25%2014.625%202.0475%2012.2925%200.75%209ZM15.615%209C14.3775%206.4725%2011.8425%204.875%209%204.875C6.1575%204.875%203.6225%206.4725%202.385%209C3.6225%2011.5275%206.1575%2013.125%209%2013.125C11.8425%2013.125%2014.3775%2011.5275%2015.615%209ZM9%207.125C10.035%207.125%2010.875%207.965%2010.875%209C10.875%2010.035%2010.035%2010.875%209%2010.875C7.965%2010.875%207.125%2010.035%207.125%209C7.125%207.965%207.965%207.125%209%207.125ZM5.625%209C5.625%207.14%207.14%205.625%209%205.625C10.86%205.625%2012.375%207.14%2012.375%209C12.375%2010.86%2010.86%2012.375%209%2012.375C7.14%2012.375%205.625%2010.86%205.625%209Z'%20fill='%23525252'/%3e%3c/g%3e%3c/svg%3e"
                          alt="watch"
                        />
                        <span>1.4k views</span>
                      </div>
                      <button
                        className="btn d-flex align-items-center gap-2"
                        style={{ background: "rgb(237, 238, 240)" }}
                      >
                        <img
                          src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-share-24px'%20clip-path='url(%23clip0_1_1104)'%3e%3cpath%20id='Vector'%20d='M13.5%2012.06C12.93%2012.06%2012.42%2012.285%2012.03%2012.6375L6.6825%209.525C6.72%209.3525%206.75%209.18%206.75%209C6.75%208.82%206.72%208.6475%206.6825%208.475L11.97%205.3925C12.375%205.7675%2012.9075%206%2013.5%206C14.745%206%2015.75%204.995%2015.75%203.75C15.75%202.505%2014.745%201.5%2013.5%201.5C12.255%201.5%2011.25%202.505%2011.25%203.75C11.25%203.93%2011.28%204.1025%2011.3175%204.275L6.03%207.3575C5.625%206.9825%205.0925%206.75%204.5%206.75C3.255%206.75%202.25%207.755%202.25%209C2.25%2010.245%203.255%2011.25%204.5%2011.25C5.0925%2011.25%205.625%2011.0175%206.03%2010.6425L11.37%2013.7625C11.3325%2013.92%2011.31%2014.085%2011.31%2014.25C11.31%2015.4575%2012.2925%2016.44%2013.5%2016.44C14.7075%2016.44%2015.69%2015.4575%2015.69%2014.25C15.69%2013.0425%2014.7075%2012.06%2013.5%2012.06Z'%20fill='%232D2D2D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1104'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                          alt="share"
                        />
                        <span className="d-lg-none">Share</span>
                      </button>
                    </div>
                  </div>
                  <div className="edit-post">
                    <button
                      className="btn btn-outline-primary border-0 rounded-circle p-3"
                      style={{
                        backgroundColor: "red",
                        backgroundImage:
                          "linear-gradient(to bottom right, #FF5C5C, #F0568A)",
                        color: "white",
                      }}
                    >
                      <img src={pen} alt="Edit post" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar">
              <div className="container d-none d-lg-flex flex-column mt-4">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='outline-location_on-24px%202'%20clip-path='url(%23clip0_1_1233)'%3e%3cpath%20id='Vector'%20d='M9%201.5C6.0975%201.5%203.75%203.8475%203.75%206.75C3.75%2010.6875%209%2016.5%209%2016.5C9%2016.5%2014.25%2010.6875%2014.25%206.75C14.25%203.8475%2011.9025%201.5%209%201.5ZM5.25%206.75C5.25%204.68%206.93%203%209%203C11.07%203%2012.75%204.68%2012.75%206.75C12.75%208.91%2010.59%2012.1425%209%2014.16C7.44%2012.1575%205.25%208.8875%205.25%206.75Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M9%208.625C10.0355%208.625%2010.875%207.78553%2010.875%206.75C10.875%205.71447%2010.0355%204.875%209%204.875C7.96447%204.875%207.125%205.71447%207.125%206.75C7.125%207.78553%207.96447%208.625%209%208.625Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1233'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                      alt="location"
                    />
                    <input
                      type="text"
                      placeholder="  Enter Your Location"
                      className="input-text border-0"
                    />
                  </div>
                  <button className="btn">
                    <img
                      src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-edit-24px'%20clip-path='url(%23clip0_1_848)'%3e%3cpath%20id='Vector'%20d='M2.5%2014.375V17.5H5.625L14.8417%208.28334L11.7167%205.15834L2.5%2014.375ZM17.2583%205.86667C17.5833%205.54167%2017.5833%205.01667%2017.2583%204.69167L15.3083%202.74167C14.9833%202.41667%2014.4583%202.41667%2014.1333%202.74167L12.6083%204.26667L15.7333%207.39167L17.2583%205.86667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_848'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                      alt="edit"
                    />
                  </button>
                </div>
                <hr className="my-1" />
                <div className="d-flex align-items-center gap-2 my-4">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-error_outline-24px'%20opacity='0.5'%20clip-path='url(%23clip0_1_1239)'%3e%3cpath%20id='Vector'%20d='M7.33333%209.99998H8.66667V11.3333H7.33333V9.99998ZM7.33333%204.66665H8.66667V8.66665H7.33333V4.66665ZM7.99333%201.33331C4.31333%201.33331%201.33333%204.31998%201.33333%207.99998C1.33333%2011.68%204.31333%2014.6666%207.99333%2014.6666C11.68%2014.6666%2014.6667%2011.68%2014.6667%207.99998C14.6667%204.31998%2011.68%201.33331%207.99333%201.33331ZM8%2013.3333C5.05333%2013.3333%202.66667%2010.9466%202.66667%207.99998C2.66667%205.05331%205.05333%202.66665%208%202.66665C10.9467%202.66665%2013.3333%205.05331%2013.3333%207.99998C13.3333%2010.9466%2010.9467%2013.3333%208%2013.3333Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1239'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                    alt="information"
                    className="mt-2 align-self-start"
                  />
                  <p className="location-info">
                    Your location will help us serve better and extend a
                    personalised experience.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 text-capitalize mb-3">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='twotone-thumb_up-24px'%20clip-path='url(%23clip0_1_1263)'%3e%3cpath%20id='Vector'%20opacity='0.3'%20d='M15.75%209V7.5H9L10.005%203.495L6.75%206.75V14.25H13.5L15.75%209Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M6.75%2015.75H13.5C14.1225%2015.75%2014.655%2015.375%2014.88%2014.835L17.145%209.5475C17.2125%209.375%2017.25%209.195%2017.25%209V7.5C17.25%206.675%2016.575%206%2015.75%206H11.0175L11.73%202.5725L11.7525%202.3325C11.7525%202.025%2011.625%201.74%2011.4225%201.5375L10.6275%200.75L5.685%205.6925C5.415%205.9625%205.25%206.3375%205.25%206.75V14.25C5.25%2015.075%205.925%2015.75%206.75%2015.75ZM6.75%206.75L10.005%203.495L9%207.5H15.75V9L13.5%2014.25H6.75V6.75ZM0.75%206.75H3.75V15.75H0.75V6.75Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1263'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                    alt="thumbs up"
                  />
                  <span className="text-recommended">REcommended Groups</span>
                </div>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        className="rounded-circle"
                        alt="Profile"
                        src="https://s3-alpha-sig.figma.com/img/bb0d/5f13/7ffa8afe7647578af2381ac9090c32e2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZQrCLgTmb~9ZgONYLxo5orU4xIFpnxnWTzXmpjv0TsyUOCpmfmR0CXHpV-d~zg5Eqyn8V7rWBRc1d2euuORY1AmrP4Yck4W0Xb4-1rLVTHPnI8nyqdj-AZgJ4s3QlClrsisyZU27LjKdaAyuHgkpo0p2mTlrqC-9nP7~Uie2NlshPxt~aoGN-Dyes8wt0O~~~o7a4g9TSYjcWgGNZnbHVCpLsuUcL4rNMUKInf5Lv3deWyfaiypODO2Qn5gmHv8Qi41rAmgyV66QNs~SBFC5gc8ygNuu8hEghKyAt1g63hvX4JCuxW9rwC8FKgzQnb1rOZ1D59ZqXJrR6nb0IZ8TQ__"
                        width={36}
                        height={36}
                      />
                      <div className="text-wrapper">Leisure</div>
                    </div>
                    <a className="btn btn-dark follow rounded-5" href="/">
                      Followed
                    </a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        className="rounded-circle"
                        alt="Profile"
                        src="https://s3-alpha-sig.figma.com/img/bcef/452c/f2f96211f57819f3ef6b3922e0cd72cf?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cDsS7WH-oNMF-lmRkVQ2Eyb6C9Pw-mJSuXMi1jDUUPAt-oJZB1QnMn-vaRGF97OSBBLz0a4xIBwcYTMeYcXTpOjP5t3ez4gC7vKac76rbKfP5l156CrhfXZKc7PjWL~Ah-jrct4AtNRoBmGcxCnrjrQcAMk8K7FFuOYFbTbonL4pyhQNW-skRci-lin8JO-xzMHsr1XHuxTZbgymJ7NYFTmKtgii~U6aiNt1feJuZs745u3o-qnlaJ8AXGrhhxHulm2zWSZZU6eRqPblQSfd7yONpfWn6PqzPRF7C1e22iaYqgtr3yiZ76g41snT6agkGwKNWPSAuPYlsaPkY28ocw__"
                        width={36}
                        height={36}
                      />
                      <div className="text-wrapper">Activism</div>
                    </div>
                    <a className="btn btn-light follow rounded-5" href="/">
                      Follow
                    </a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        className="rounded-circle"
                        alt="Profile"
                        src="https://s3-alpha-sig.figma.com/img/8f0b/0ff9/829dac10d09fc377df6ec78c4098bc9a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L34FvE0iPnpPQ6q2STymCtuaqOXKd0N07BCU0pTinJrGchxfaV16QlMz8WfImuWjkcLyqkJEDgv0TW7Jo8iiwg9S-XkvN-vegYhDBU1UUHAB7TSSSuJBUcdr-H~Ng4-Ovi69G20CYmn~xSzNHZOaMo3pOKwKD3lP4a01iKrHkz-hAckxWaV7W5KEzWUhdU6M7N-mx-eO~xoSqh5ky3U06T9~57a4eEErc~ao8fT~qDJ0GUH5SvMG4kN4ooNtTmTbphzv5AudGaWI2wXTDhNqP5tx6zWlFEesFLnMBh7AmSj8l~LM7PKS~~n-7HfEc5KiZgBahFTwyoC3w7JDIHy-~w__"
                        width={36}
                        height={36}
                      />
                      <div className="text-wrapper">MBA</div>
                    </div>
                    <a className="btn btn-light follow rounded-5" href="/">
                      Follow
                    </a>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        className="rounded-circle"
                        alt="Profile"
                        src="https://s3-alpha-sig.figma.com/img/0533/15a9/cf46af0ebdaae2ffbbb5718726788a19?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adaxj18Cy9AUqqMWeaWU7uWLKlDPRPB1E5VdJJ-khLT2Lt7XOicQowUNNug3BxzVZgN6-b3tW2~cXizoAzBrU8NbnKCL9mReYG74NMn9LzO0Vm8yWq8WFGe9ZhyK5a-BHMQ62X32Grgd9hDtKMcxheLjSrky-hezkZIZN6mKlIawOvyhPtILA~BneqcubaVtC9HUJ-zBRcEgnTxhNQmgalTzBHdbRq7T4TPwajSUulAliT~HbXQ0ovJOHxfIMQ8-2Z1l8oM2xLu9K5GS8hY4MczMdreDpR1Mt~sRHW992~lN8U69XbwVf9TvFpHu1GcNe93rtvGFThiC0o-DgOhaQA__"
                        width={36}
                        height={36}
                      />
                      <div className="text-wrapper">Philosophy</div>
                    </div>
                    <a className="btn btn-light follow rounded-5" href="/">
                      Follow
                    </a>
                  </div>
                </div>
                <button className="btn text-end mt-5 text-primary text-capitalize">
                  see more...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
