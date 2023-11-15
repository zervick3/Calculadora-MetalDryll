function TablaResultadoCielo({
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
              GYPLAC (STD) 1.22x2.44x12.7MM.(3/8¨)
            </td>
            <td className="p-3 text-sm text-gray-700">PL</td>
            <td className="p-3 text-sm text-gray-700">{Planchas}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              PARANTE 1" VOLCAN/CONSTRUTEK 38x38x0.45mmx3m
            </td>
            <td className="p-3 text-sm text-gray-700">PZA</td>
            <td className="p-3 text-sm text-gray-700">{Parante}</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              RIEL 1" VOLCAN/CONSTRUTEK 39x25x0.45mmx3m
            </td>
            <td className="p-3 text-sm text-gray-700">PZA</td>
            <td className="p-3 text-sm text-gray-700">{Riel}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              TORNILLO PLANCHA METALDRYLL 6x1 P/FINA
            </td>
            <td className="p-3 text-sm text-gray-700">MILL</td>
            <td className="p-3 text-sm text-gray-700">{tornillo}</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              TORNILLO METAL WAFER 8X1/2" P/FINA
            </td>
            <td className="p-3 text-sm text-gray-700">MILL</td>
            <td className="p-3 text-sm text-gray-700">{wafer}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              CLAVO 1" PARA DISPARO
            </td>
            <td className="p-3 text-sm text-gray-700">CTO</td>
            <td className="p-3 text-sm text-gray-700">{clavo}</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              FULMINANTE CALIBRE 0.22 METALDRYLL
            </td>
            <td className="p-3 text-sm text-gray-700">CTO</td>
            <td className="p-3 text-sm text-gray-700">{fulminante}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              CINTA PAPEL 50mm x 90m
            </td>
            <td className="p-3 text-sm text-gray-700">ROLL</td>
            <td className="p-3 text-sm text-gray-700">{cintapapel}</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              MASILLA GYPLAC BALDE X 27 KG
            </td>
            <td className="p-3 text-sm text-gray-700">BALD</td>
            <td className="p-3 text-sm text-gray-700">{masilla}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              LIJA Nº120 AL AGUA
            </td>
            <td className="p-3 text-sm text-gray-700">PZA</td>
            <td className="p-3 text-sm text-gray-700">{lija}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TablaResultadoCielo;
