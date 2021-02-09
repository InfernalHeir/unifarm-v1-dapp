import React from "react";

const AppBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="form_signup_one home_page_list">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ml-auto">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default AppBody;
