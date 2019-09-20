import React from "react";
import { Link } from "react-router-dom";

const renderItems = items => {
  const size = items.length;
  return items.map((item, i) => {
    return (
      <li
        key={item.title}
        className={`breadcrumb-item ${i + 1 === size ? "" : "active"}`}
      >
        {renderLinks(i, size, item)}
      </li>
    );
  });
};

const renderLinks = (i, size, item) => {
  if (i + 1 === size) {
    return <span>{item.title}</span>;
  }
  return <Link to={item.link}>{item.title}</Link>;
};

const Breadcrumb = props => {
  if (props.hasOwnProperty("items")) {
    const { items } = props;
    return (
      <nav>
        <ol className="breadcrumb">{renderItems(items)}</ol>
      </nav>
    );
  }
  return <div></div>;
};

export default Breadcrumb;
