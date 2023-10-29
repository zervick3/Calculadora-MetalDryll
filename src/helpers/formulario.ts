export function obtenerDatosDeFormulario(
  formulario: HTMLFormElement
): Record<string, string> {
  const formData = new FormData(formulario);
  const datos: Record<string, string> = {};

  formData.forEach((valor, clave) => {
    datos[clave] = valor.toString();
  });

  return datos;
}
