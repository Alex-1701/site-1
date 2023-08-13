import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button";
import edit from "../../img/edit.svg";
import remove from "../../img/delete.svg";
import checkMark from "../../img/check_mark.svg";

import "./SideNavItem.css";

export function SideNavItem({
  category,
  isLogged,
  handleRemove,
  handleUpdate,
  isSelected,
  handleSelect,
  isDefault,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState(category.name);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
    <div
      className={`side__category ${isSelected && "side__category_selected"}`}
      onClick={() => (isDefault ? handleSelect("") : handleSelect(category.id))}
    >
      {isEditing ? (
        <input
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
      ) : (
        <div className="category__block">
          <p className="category__name">
            {isDefault ? "Все категории" : category.name}
          </p>
        </div>
      )}
      {isLogged && !isDefault && (
        <div>
          {isEditing ? (
            <Button
              logo={checkMark}
              name="edit"
              onClick={() => {
                handleUpdate(category, newCategoryName);
                setIsEditing(false);
              }}
            />
          ) : (
            <div>
              <Button
                logo={edit}
                name="edit"
                onClick={() => {
                  setIsEditing(true);
                }}
              />
              <Button
                logo={remove}
                name="remove"
                onClick={() => {
                  handleRemove(category);
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

SideNavItem.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  isLogged: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func,
  handleUpdate: PropTypes.func,
  isSelected: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
  isDefault: PropTypes.bool,
};

SideNavItem.defaultProps = {
  category: {},
  handleRemove: () => {},
  handleUpdate: () => {},
  isDefault: false,
};
