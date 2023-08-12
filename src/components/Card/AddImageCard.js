import choose_file from "../../img/choose_file.svg";

export default function addImageCard() {
  return (
    <div className="cards__card">
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
            let file = document.getElementById("input__file").files[0];
            let image = document.getElementById("img");
            let fr = new FileReader();
            fr.onload = (event) => {
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
          let image = document.getElementById("input__file");
          let input = document.getElementById("name");
          if (!input.value) {
            input.classList.add("red");
            return;
          }
          if (!image.files[0]) {
            document.getElementById("img").style.border = "1px solid red";
            return;
          }
          let formData = new FormData();
          formData.append("image", image.files[0]);
        }}
      >
        Сохранить
      </button>
    </div>
  );
}
