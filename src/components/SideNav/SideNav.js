import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SideNavItem } from "../SideNavItem";
import { Button } from "../Button";
import { Link } from "../Link";
import { CATEGORIES_COLLECTION, FirestoreApi } from "../../services";
import search from "../../img/search.svg";
import insta from "../../img/insta.svg";
import telegram from "../../img/telegram.svg";
import tiktok from "../../img/tiktok.svg";
import plus from "../../img/plus.svg";
import check from "../../img/check_mark.svg";

import "./SideNav.css";

export function SideNav({
  isLogged,
  selectedCategoryId,
  handleSelectCategory,
}) {
  const [categories, setCategories] = useState([]);
  const [isCreateNewActive, setIsCreateNewActive] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    FirestoreApi.getAll(CATEGORIES_COLLECTION).then((res) => {
      setCategories(res);
    });
  }, []);

  const handleCreateCategory = async () => {
    await FirestoreApi.addNew(CATEGORIES_COLLECTION, { name: newCategoryName });
    setIsCreateNewActive(false);
    setNewCategoryName("");
    FirestoreApi.getAll(CATEGORIES_COLLECTION).then((res) => {
      setCategories(res);
    });
  };

  const handleRemoveCategory = async (category) => {
    await FirestoreApi.remove(CATEGORIES_COLLECTION, category.id);
    FirestoreApi.getAll(CATEGORIES_COLLECTION).then((res) => {
      setCategories(res);
    });
  };

  const handleUpdateCategory = async (category, newName) => {
    await FirestoreApi.update(CATEGORIES_COLLECTION, category.id, {
      name: newName,
    });
    FirestoreApi.getAll(CATEGORIES_COLLECTION).then((res) => {
      setCategories(res);
    });
  };

  return (
    <div className="side">
      <div className="side__block">
        <input
          type="text"
          placeholder="Поиск..."
          className="block__search_input"
        />
        <button
          type="button"
          className="block__search_btn"
          onClick={() => {
            alert("search");
          }}
        >
          <img className="block__search_img" src={search} alt="search" />
        </button>
      </div>
      <SideNavItem
        handleSelect={handleSelectCategory}
        isLogged={isLogged}
        isSelected={selectedCategoryId === ""}
        isDefault
      />
      {categories.map((c) => (
        <SideNavItem
          key={c.id}
          isLogged={isLogged}
          category={c}
          handleRemove={handleRemoveCategory}
          handleUpdate={handleUpdateCategory}
          isSelected={selectedCategoryId === c.id}
          handleSelect={handleSelectCategory}
        />
      ))}
      <div className="side__links">
        <Link
          logo={insta}
          name="vishey.by"
          href="https://instagram.com/vishey.by?igshid=OGQ5ZDc2ODk2ZA=="
        />
        <Link logo={telegram} name="vishey.by" href="https://t.me/visheyby" />
        <Link
          logo={tiktok}
          name="vishey.by"
          href="https://www.tiktok.com/@vishey.by?_t=8ekSjfMfRME&_r=1"
        />
      </div>
      {isLogged && !isCreateNewActive && (
        <button
          type="button"
          className="btn center"
          onClick={() => setIsCreateNewActive(true)}
        >
          <img src={plus} alt="plus" />
        </button>
      )}
      {isLogged && isCreateNewActive && (
        <div className="side__block">
          <input
            type="text"
            placeholder="Название..."
            value={newCategoryName}
            className="block__search_input"
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <Button
            onClick={handleCreateCategory}
            name="Создать новую категорию"
            logo={check}
          />
        </div>
      )}
    </div>
  );
}

SideNav.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  selectedCategoryId: PropTypes.string.isRequired,
  handleSelectCategory: PropTypes.func.isRequired,
};
