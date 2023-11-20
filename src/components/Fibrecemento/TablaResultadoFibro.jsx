function TablaResultadoFibro({
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
  sika,
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
              SUPERBOARD 1.22X2.44M X 6MM (EXTERIOR)
            </td>
            <td className="p-3 text-sm text-gray-700">PL</td>
            <td className="p-3 text-sm text-gray-700">{Planchas}</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              GYPLAC (STD) 1.22x2.44x12.7MM.(1/2¨) (INTERIOR)
            </td>
            <td className="p-3 text-sm text-gray-700">PL</td>
            <td className="p-3 text-sm text-gray-700">{Planchas}</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              PARANTE 3" VOLCAN/CONSTRUTEK 89x38x0.45mmx3m
            </td>
            <td className="p-3 text-sm text-gray-700">PZA</td>
            <td className="p-3 text-sm text-gray-700">{Parante}</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              RIEL 3" VOLCAN/CONSTRUTEK 90x25x0.45mmx3m
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
              CINTA PAPEL METALDRLL 50mm x 90m
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
          <tr className="bg-gray-50">
            <td className="p-3 text-xs md:text-sm text-gray-700 whitespace-wrap">
              SIKA FLEX AT FACHADA METALDRYLL (junta exterior 300ml)
            </td>
            <td className="p-3 text-sm text-gray-700">BALD</td>
            <td className="p-3 text-sm text-gray-700">{sika}</td>
          </tr>
        </tbody>
      </table>
      <div className="px-2 py-3">
        <h5 className="text-red-700 font-black">Consideraciones:</h5>
        <p className="px-4 ">
          * Cálculo realizado con parantes cada 61mm para alturas no mayores a
          3.50m.{" "}
        </p>
        <p className="px-4 ">
          * Para fachadas exteriores se recomienda la placa Superboard SQ de
          12mm
        </p>
        <p className="px-4 ">
          * Para una pared interior con junta invisible se recomienda la placa
          Superboard PRO de 6mm.
        </p>

        <h5 className="text-red-700 font-black">Observaciones:</h5>
        <p className="px-4 ">
          * Nunca masillar las placas en exteriores, dejar la junta visible y
          sellar con Sika AT FACHADA
        </p>
        <p className="px-4 ">
          * Masillar las placas Supeboard PRO en interiores, dejando una
          dilatación de 3 milímetros, y aplicando una masilla para interiores y
          una cinta de malla de fibra de vidrio.
        </p>
        <p className="px-4 ">* Los cuadros de consumos son estimados.</p>
      </div>
    </div>
  );
}

export default TablaResultadoFibro;
