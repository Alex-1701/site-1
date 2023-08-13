import React from "react";
import PropTypes from "prop-types";
import choose_file from "../../img/choose_file.svg";

export function AddImageCard({
  newImageName,
  setNewImageName,
  fileUrl,
  setFileUrl,
  setFile,
  isLoading,
  handleAdd,
}) {
  const handleSelectFile = (event) => {
    const selectedFile = Array.from(event.target.files)[0];

    setFile(selectedFile);

    const fr = new FileReader();
    fr.readAsDataURL(selectedFile);

    fr.onload = () => {
      setFileUrl(fr.result);
    };
  };

  return (
    <div className="cards__card">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        <img
          className="card__choose"
          src={fileUrl || choose_file}
          alt="Нажмите для выбора файла."
        />
        <input
          type="file"
          multiple={false}
          accept=".jpg, .jpeg, .png, .svg, .img"
          onChange={handleSelectFile}
          hidden
        />
      </label>
      <input
        type="text"
        placeholder="Название"
        value={newImageName}
        onChange={(e) => setNewImageName(e.target.value)}
        className="card__name"
      />
      <button
        type="button"
        className={`card__save ${isLoading && "card__save_loading"}`}
        onClick={() => !isLoading && handleAdd()}
        disabled={newImageName === ""}
      >
        {isLoading ? "Сохранение..." : "Сохранить"}
      </button>
    </div>
  );
}

AddImageCard.propTypes = {
  newImageName: PropTypes.string.isRequired,
  setNewImageName: PropTypes.func.isRequired,
  fileUrl: PropTypes.string.isRequired,
  setFileUrl: PropTypes.func.isRequired,
  setFile: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleAdd: PropTypes.func.isRequired,
};
