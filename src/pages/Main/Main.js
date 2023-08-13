import React, { useState } from "react";
import { Cards, SideNav } from "../../components";
import { isLogged } from "../../services";

import "./Main.css";

export function Main() {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const handleSelectCategory = (id) => {
    setSelectedCategoryId(id);
  };

  const isUserLogged = isLogged();

  return (
    <div className="main">
      <SideNav
        isLogged={isUserLogged}
        selectedCategoryId={selectedCategoryId}
        handleSelectCategory={handleSelectCategory}
      />
      <Cards selectedCategoryId={selectedCategoryId} isLogged={isUserLogged} />
    </div>
  );
}
