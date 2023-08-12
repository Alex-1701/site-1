import React from "react";
import choose_file from "../../img/choose_file.svg";

export default function addImageCard() {
    return (
        <div className="cards__card">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>
                <img
                    id="img"
                    className="card__choose"
                    src={choose_file}
                    alt="Нажмите для выбора файла."
                />
                <input
                    type="file"
                    id="input__file"
                    accept=".jpg, .jpeg, .png, .svg, .img"
                    onChange={() => {
                        const file = document.getElementById("input__file").files[0];
                        const image = document.getElementById("img");
                        const fr = new FileReader();
                        fr.onload = () => {
                            image.src = fr.result;
                        };
                        fr.readAsDataURL(file);
                    }}
                    hidden
                />
            </label>
            <input
                type="text"
                placeholder="Название"
                id="name"
                className="card__name"
            />
            <button
                type="button"
                className="card__save"
                onClick={() => {
                    const image = document.getElementById("input__file");
                    const input = document.getElementById("name");
                    if (!input.value) {
                        input.classList.add("red");
                        return;
                    }
                    if (!image.files[0]) {
                        document.getElementById("img").style.border = "1px solid red";
                        return;
                    }
                    const formData = new FormData();
                    formData.append("image", image.files[0]);
                }}>
                Сохранить
            </button>
        </div>
    );
}
