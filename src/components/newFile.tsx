<Fragment>
  <div class="flex justify-center items-center py-3 w-full">
    <form
      id="miFormulario"
      class="w-full flex flex-1 flex-row justify-center items-center"
    >
      <input
        id="miInput"
        type="number"
        required
        name="superficie"
        placeholder="10"
        class="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm max-w-[220px] mr-4"
      />
      <span class="relative -left-12 font-bold p-0">
        m<sup>2</sup>
      </span>

      <button
        id="modal-btn"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 numero"
        type="submit"
      >
        Calcular
      </button>
    </form>
  </div>
</Fragment>;
