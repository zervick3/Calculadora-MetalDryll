import React, { useState } from "react";
import Modal from "../../Moda/Modal";
import { useModal } from "../../hooks/useModal";
import TablaResultadoSt from "./TablaResultadoSt";

function InputForm() {
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
  const Planchas = parseFloat(form.area) * 0.74;

  const Parante = parseFloat(form.area) * 0.8;
  const Riel = parseFloat(form.area) * 0.35;
  const tornillo = parseFloat(form.area) * 0.02;
  const wafer = parseFloat(form.area) * 0.01;
  const clavo = parseFloat(form.area) * 0.02;
  const fulminante = parseFloat(form.area) * 0.02;
  const cintapapel = parseFloat(form.area) * 0.04;
  const masilla = parseFloat(form.area) * 0.06;
  const lija = parseFloat(form.area) * 0.04;

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
        <TablaResultadoSt
          Planchas={Math.ceil(Planchas)}
          Parante={Math.ceil(Parante)}
          Riel={Math.ceil(Riel)}
          tornillo={Math.ceil(tornillo)}
          wafer={Math.ceil(wafer)}
          clavo={Math.ceil(clavo)}
          fulminante={Math.ceil(fulminante)}
          cintapapel={Math.ceil(cintapapel)}
          masilla={Math.ceil(masilla)}
          lija={Math.ceil(lija)}
        />
      </Modal>
    </div>
    // fin estilo formulario
  );
}

export default InputForm;
