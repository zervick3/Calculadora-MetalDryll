function TablaResultadoBal60({
  baldosa,
  principales,
  secundario,
  terciaria,
  angulos,
  alambre,
  clavo,
  fulminante,
  clavoAcero,
}) {
  return (
    <div className="overflow-auto rounded-lg shadow mt-9">
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-xs md:text-sm font-semibold tracking-wide text-left w-16 sm:w-full">
              MATERIALES
            </th>
            <th className="p-3 text-xs md:text-sm font-semibold tracking-wide text-left">
              UNIDAD
            </th>
            <th className="p-3 text-xs md:text-sm font-semibold tracking-wide text-left">
              CANTIDAD
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr className="bg-white">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              BALDOSA 0.61m x 0.61m ( 2’ x 2’ )
            </td>
            <td className="p-3 text-sm text-gray-700">PZA</td>
            <td className="p-3 text-sm text-gray-700">{baldosa}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              TEE PRINCIPAL POWERGRID 3.66m
            </td>
            <td className="p-3 text-sm text-gray-700">PZA</td>
            <td className="p-3 text-sm text-gray-700">{principales}</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              TEE SECUNDARIO POWERGRID 1.22m
            </td>
            <td className="p-3 text-sm text-gray-700">PZA</td>
            <td className="p-3 text-sm text-gray-700">{secundario}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              TEE TERCIARIO POWERGRID 0.61m
            </td>
            <td className="p-3 text-sm text-gray-700">PZA</td>
            <td className="p-3 text-sm text-gray-700">{terciaria}</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              ANGULO PERIMETRAL POWERGRID 3.05m
            </td>
            <td className="p-3 text-sm text-gray-700">PZA</td>
            <td className="p-3 text-sm text-gray-700">{angulos}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              ALAMBRE GALVANIZADO Nº16
            </td>
            <td className="p-3 text-sm text-gray-700">KG</td>
            <td className="p-3 text-sm text-gray-700">{alambre}</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              CLAVO CLIP POWERFUL
            </td>
            <td className="p-3 text-sm text-gray-700">CTO</td>
            <td className="p-3 text-sm text-gray-700">{clavo}</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              FULMINANTE TIRO x TIRO CAL 0.22 POWERFUL
            </td>
            <td className="p-3 text-sm text-gray-700">CTO</td>
            <td className="p-3 text-sm text-gray-700">{fulminante}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              CLAVO ACERO
            </td>
            <td className="p-3 text-sm text-gray-700">CJA</td>
            <td className="p-3 text-sm text-gray-700">{clavoAcero}</td>
          </tr>
        </tbody>
      </table>
      <div className="px-2 py-3">
        <h5 className="text-red-700 font-black">Consideraciones:</h5>

        <p className="px-4 ">
          * Verifique la cantidad de ángulos perimetrales en función de las
          medidas del cielo a construir.
        </p>
        <p className="px-4">
          * Los cuadros de consumos son estimados, recomendamos realizar un
          esquema del recinto con la modulación del cielo para determinar la
          cantidad exacta de materiales.
        </p>
      </div>
    </div>
  );
}

export default TablaResultadoBal60;
