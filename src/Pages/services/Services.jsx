import React from "react";

import "./services.scss";
function Services() {
  const Service = (props) => {
    return (
      <div className="serviceCard">
        <div className="TitleContainer">
          <h3 className="ServiceTitle">{props.title}</h3>
        </div>
        <div className="ServiceDesc">
          <p classname="ServiceDesc">{props.l1}</p>
          <br />
          <p classname="ServiceDesc">{props.l2}</p>
          <br />
          <p classname="ServiceDesc">{props.l3}</p>
          <br />
          <p classname="ServiceDesc">{props.l4}</p>
          <br />
          <p classname="ServiceDesc">{props.l5}</p>
          <br />
          <p classname="ServiceDesc">{props.l6}</p>
          <br />
          <p classname="ServiceDesc">{props.l7}</p>
          <br />
          <p classname="ServiceDesc">{props.l8}</p>
          <br />
          <p classname="ServiceDesc">{props.l9}</p>
          <br />
          <p classname="ServiceDesc">{props.l10}</p>
          <br />
          <p classname="ServiceDesc">{props.l11}</p>
          <br />
          <p classname="ServiceDesc">{props.l12}</p>
          <br />
        </div>
      </div>
    );
  };
  return (
    <div id="services" className="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="service__body">
          <div className="service">
            <Service
              title="Content Writing"
              l1=" - Normal Article Writing"
              l2="- SEO based Article Writing"
              l3="- Web-Page Content Writing"
              l4=" - Blog Writing"
              l5=" - Ghost Writing"
              l6=" - Copy Editing"
              l7="- Copy Writing"
              l8="- Book writing"
              l9=" - Product Description"
            />
          </div>
          <div className="service">
            <Service
              title="Online Reputation Management"
              l1="- Grow the online visibility of your product"
              l2="- Responding to comments"
              l3="- Checking Google / Facebook / Quora / Trust Pilot reviews"
              l4="- Managing online arguments"
              l5="- Countering negative reviews"
              l6="- Working on Hashtags, location and brand"
            />
          </div>
          <div className="service">
            <Service
              title="Web Presence Services"
              l1="- SEO Based Website designing"
              l2="- Service / Product Promotion"
              l3="- Brand Promotion"
              l4="- Customized lead generation"
              l5="- Organic SEO"
              l6="- Promotion on Social Media (Facebook, Quora, Instagram, YouTube, LinkedIn and Twitter)"
            />
          </div>
          <div className="service">
            <Service
              title="Virtual Assistant Service"
              l1="- Scheduling appointments"
              l2="- Attending and making phone calls"
              l3="- Making travel arrangements"
              l4="- Managing email accounts"
              l5="- Working with the client to solve their issues"
              l6="- Perform social tasks"
            />
          </div>
          <div className="service">
            <Service
              title="Book keeping:"
              l1="- Reconcile all balance sheet accounts"
              l2="- Bank Reconciliations"
              l3="- Accounts Receivable"
              l4="- Reconciliations"
              l5="- Maintain Fixed Asset Schedules"
              l6="- Accounts Payable"
              l7="- Loan Amortization schedules"
              l8="- Deferred Revenue"
              l9="- Credit card reconciliations"
              l10="- Payroll Services"
              l11="- Job Costing"
            />
          </div>
          <div className="service">
            <Service
              title="Accounting :"
              l1="- Financial Statements"
              l2="- Compilation"
              l3="- Accounting Review"
              l4="- Budget and Cash Flow Analysis"
              l5="- Financial Projections"
              l6="- Trust Accounting"
              l7="- Fund Accounting"
              l8="- Analyze various functions for efficiencies (like payroll, accounts receivable, accounts payable, etc)"
              l9="- Onsite services to support client staff vacations, terminations and training (Fill in as Controller, Payroll Processing, Billing & Collections, etc)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
