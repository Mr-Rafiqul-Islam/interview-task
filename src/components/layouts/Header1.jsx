import React from "react";

function Header1() {
  return (
    <header>
      <div className="grid grid-cols-3 absolute top-0 left-0 w-full">
        <div>menu</div>
        <div className="text-center">
          <img src="src/assets/logo4.png" alt="" className="mx-auto" />
        </div>
        <div>number</div>
      </div>
    </header>
  );
}

export default Header1;
