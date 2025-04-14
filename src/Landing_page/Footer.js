import React from "react";

export default function Footer() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <img
            src="media\images\images\logo.svg"
            style={{ width: "40%" }}
          ></img>
          <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <p>
              <i className="fa-brands fa-x-twitter"></i>
            </p>
            <p>
              <i className="fa-brands fa-instagram"></i>
            </p>
            <p>
              <i className="fa-brands fa-facebook"></i>
            </p>
            <p>
              <i className="fa-brands fa-linkedin"></i>
            </p>
          </div>
          <hr className="border border-black border-1 opacity-10"></hr>

          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>
        <div className="col-3">
          <h3>Company</h3>
          <p>Products</p>
          <p>About</p>
          <p>Pricing</p>
          <p>Referral Programme</p>
          <p>Careers</p>
          <p>Zerodha Tech</p>
          <p>Open Source</p>
          <p>Press & Media</p>
          <p>Zerodha Cares(CSR)</p>
        </div>
        <div className="col-3">
          <h3>Support</h3>
          <p>Contact Us</p>
          <p>Support Portal</p>
          <p>Z-Connect Blog</p>
          <p>List of charges</p>
          <p>Download & resources</p>
          <p>Videos</p>
          <p>Market Overview</p>
          <p>How To file a complaint?</p>
          <p>Status of your complaints</p>
        </div>
        <div className="col-3">
          <h3>Acoount </h3>
          <p> Open an account</p>
          <p> Fund Transfer</p>
        </div>
      </div>
      <br></br>
      <div className="container">
        <p className="fs-8 text-muted">Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
        <p className="fs-8 text-muted">Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
        <p className="fs-8 text-muted">Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        <p className="fs-8 text-muted">Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
        <p className="fs- text-muted">"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="">create a ticket here.</a></p>
      </div>
    </div>
  );
}
