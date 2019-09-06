import React from "react";

const Sky = ({ hero, children }) => {
  return <header className={hero}>{children}</header>;
};

export default Sky;

Sky.defaultProps = {
  hero: "defaultHero"
};
