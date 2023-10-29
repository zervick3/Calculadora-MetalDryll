function TablaResultado({
  Planchas,
  Parante,
  Riel,
  tornillo,
  wafer,
  clavo,
  fulminante,
  cintapapel,
  masilla,
  lija,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  title8,
  title9,
  title10,
  title11,
  title12,
  title13,
  title14,
  title15,
}) {
  return (
    <div className="overflow-auto rounded-lg shadow">
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
              {title1}
            </td>
            <td className="p-3 text-sm text-gray-700">PL</td>
            <td className="p-3 text-sm text-gray-700">{Planchas}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              {title2}
            </td>
            <td className="p-3 text-sm text-gray-700">PZA</td>
            <td className="p-3 text-sm text-gray-700">{Parante}</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              {title3}
            </td>
            <td className="p-3 text-sm text-gray-700">PZA</td>
            <td className="p-3 text-sm text-gray-700">{Riel}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              {title4}
            </td>
            <td className="p-3 text-sm text-gray-700">MILL</td>
            <td className="p-3 text-sm text-gray-700">{tornillo}</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              {title5}
            </td>
            <td className="p-3 text-sm text-gray-700">MILL</td>
            <td className="p-3 text-sm text-gray-700">{wafer}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              {title6}
            </td>
            <td className="p-3 text-sm text-gray-700">CTO</td>
            <td className="p-3 text-sm text-gray-700">{clavo}</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              {title7}
            </td>
            <td className="p-3 text-sm text-gray-700">CTO</td>
            <td className="p-3 text-sm text-gray-700">{fulminante}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              {title8}
            </td>
            <td className="p-3 text-sm text-gray-700">ROLL</td>
            <td className="p-3 text-sm text-gray-700">{cintapapel}</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              {title9}
            </td>
            <td className="p-3 text-sm text-gray-700">BALD</td>
            <td className="p-3 text-sm text-gray-700">{masilla}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              {title10}
            </td>
            <td className="p-3 text-sm text-gray-700">PZA</td>
            <td className="p-3 text-sm text-gray-700">{lija}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TablaResultado;
