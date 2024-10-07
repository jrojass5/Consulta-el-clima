// Función para traducir texto usando la API de MyMemory
export async function translateWithMyMemory(text, sourceLang, targetLang) {
    // Realizamos una solicitud HTTP a la API de MyMemory, codificando el texto y especificando los idiomas de origen y destino
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`);
    
    // Convertimos la respuesta en formato JSON
    const data = await response.json();
    
    // Verificamos si el estado de la respuesta es exitoso (200)
    if (data.responseStatus === 200) {
        return data.responseData.translatedText; // Si es exitoso, devolvemos el texto traducido
    } else {
        // Si ocurre un error, lanzamos una excepción con el código de error
        throw new Error("Error in translation: " + data.responseStatus);
    }
}
