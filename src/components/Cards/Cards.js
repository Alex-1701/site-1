import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {AddImageCard, Card} from "../Card";
import {IMAGES_COLLECTION, FirestoreApi, StorageApi} from "../../services";

import "./Cards.css";

export function Cards({isLogged, selectedCategoryId, searchName}) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newImageName, setNewImageName] = useState("");
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState("");

  useEffect(() => {
    FirestoreApi.getAll(IMAGES_COLLECTION).then((res) => {
      setImages(res);
    });
  }, []);

  const handleRemove = async (image) => {
    await FirestoreApi.remove(IMAGES_COLLECTION, image.id);
    await StorageApi.remove(image.id);
    setImages(images.filter((img) => img.id !== image.id));
  };

  const handleAdd = async () => {
    setIsLoading(true);

    if (newImageName === "" || !file) {
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    const newImgId = await FirestoreApi.addNew(IMAGES_COLLECTION, {
      name: newImageName,
      category: selectedCategoryId,
      url: "",
    });

    await StorageApi.addNew(file, newImgId);

    await StorageApi.getURL(newImgId).then((fileUrl) => {
      FirestoreApi.update(IMAGES_COLLECTION, newImgId, {
        name: newImageName,
        category: selectedCategoryId,
        url: fileUrl,
      });
    });

    setIsLoading(false);
    setNewImageName("");
    setFile(null);
    setFileURL("");

    FirestoreApi.getAll(IMAGES_COLLECTION).then((res) => {
      setImages(res);
    });
  };

  const filterFunc = (image) => {
    if (searchName === "") {
      return image.category === selectedCategoryId || selectedCategoryId === ""
    }
    return image.name.toLowerCase().match(`(${searchName.toLowerCase()})`)
  }

  return (
    <div className="cards">
      {images
        .filter(image => filterFunc(image))
        .map((image) => (
          <Card
            key={image.id}
            card={image}
            isLogged={isLogged}
            handleRemove={handleRemove}
          />
        ))}
      {isLogged && selectedCategoryId !== "" && (
        <AddImageCard
          newImageName={newImageName}
          setNewImageName={setNewImageName}
          setFile={setFile}
          fileUrl={fileURL}
          setFileUrl={setFileURL}
          isLoading={isLoading}
          handleAdd={handleAdd}
        />
      )}
    </div>
  );
}

Cards.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  selectedCategoryId: PropTypes.string.isRequired,
  searchName: PropTypes.string.isRequired,
};
