import React from "react";
import Breadcrumb from "../breadcrumb";

const Interactive = () => {
  const items = [
    { title: "Home", link: "/" },
    { title: "Interactive Module", link: "/interactive" }
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="mt-5 pt-3">
          <Breadcrumb items={items} />
        </div>
        <div scrolling="no" seamless="seamless">
          <iframe
            frameBorder="0"
            title="interactive"
            src="https://www.wageedge.tk/Interactive_module.html"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Interactive;
