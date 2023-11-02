import React, { useState } from "react";
import Modal from "../../Moda/Modal";
import { useModal } from "../../hooks/useModal";
import TablaResultadoBal120 from "./TablaResultadoBal120";

function InputFormBal120() {
  const [form, setForm] = useState({
    area: "",
  });

  // Funcion para tener mas contro en el formulario..
  const handleChange = (e) => {
    let { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // enviar el contenido al backens
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const baldosa = parseFloat(form.area) * 0.75;
  const principales = parseFloat(form.area) * 0.23;
  const secundario = parseFloat(form.area) * 1.36;
  const angulos = parseFloat(form.area) * 0.27;
  const alambre = parseFloat(form.area) * 0.06;
  const clavo = parseFloat(form.area) * 0.09;
  const fulminante = parseFloat(form.area) * 0.09;
  const clavoAcero = parseFloat(form.area) * 2.18;

  const [isOpenModal, openModal1, closeModal1] = useModal(false);
  const [Calcular, setCalcular] = useState({
    username: "Calcular",
  });

  return (
    // estilo del formulario <<<<<<<<<<<<<<<<<<<<<<<<<
    <div className="flex py-4 justify-center items-center ">
      <div className="flex justify-center items-center py-3 w-full">
        <form
          onSubmit={handleSubmit}
          className="form w-full flex flex-1 flex-row justify-center items-center"
        >
          <input
            type="number"
            required
            id="area"
            name="area"
            value={form.area}
            onChange={handleChange}
            placeholder="10"
            className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-w-[220px] mr-4"
          />
          <span className="relative -left-12 font-bold p-0">
            m<sup>2</sup>
          </span>
          <input
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 numero"
            name="username"
            onClick={openModal1}
          />
        </form>
      </div>
      <Modal isOpen={isOpenModal} closeModal={closeModal1}>
        <TablaResultadoBal120
          baldosa={Math.ceil(baldosa)}
          principales={Math.ceil(principales)}
          secundario={Math.ceil(secundario)}
          angulos={Math.ceil(angulos)}
          alambre={Math.ceil(alambre)}
          clavo={Math.ceil(clavo)}
          fulminante={Math.ceil(fulminante)}
          clavoAcero={Math.ceil(clavoAcero)}
        />
      </Modal>
    </div>
    // fin estilo formulario
  );
}

export default InputFormBal120;
