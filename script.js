const harry = (hechizo) => `Harry ejecuta ${hechizo} con determinación.`;

const hermione = (palabra) => {
    if (palabra === "Leviosa") {
        return "Hermione pronuncia correctamente Wingardium Leviosa y la pluma se eleva.";
    } else {
        return "Hermione corrige: No es Leviosá, es Leviosa.";
    }
};


const dumbledore = () => "Dumbledore crea luz con un simple gesto, como un Lumos perfecto.";


// Función mejorada para Harry.
// Se añadió validación del parámetro y un mensaje por defecto.
// Esto evita resultados inesperados si la función se invoca sin argumentos.
const harry = (hechizo = "un hechizo no especificado") => {
    // Validamos que el parámetro sea una cadena para evitar errores lógicos.
    if (typeof hechizo !== "string") {
        return "Harry intenta realizar magia, pero el hechizo proporcionado no es válido.";
    }
    return `Harry ejecuta ${hechizo} con determinación.`;
};


// Función mejorada para Hermione.
// Se añadió normalización de texto (lowercase) para permitir comparaciones más flexibles.
// También se agregó una validación del parámetro para evitar comportamientos inesperados.
const hermione = (palabra) => {
    // Validación del parámetro para asegurar que sea una cadena.
    if (typeof palabra !== "string" || palabra.trim() === "") {
        return "Hermione frunce el ceño: no puede corregir un hechizo vacío o inválido.";
    }

    // Normalizamos la palabra para evitar depender de mayúsculas/minúsculas.
    const palabraNormalizada = palabra.toLowerCase();

    if (palabraNormalizada === "leviosa") {
        return "Hermione pronuncia correctamente Wingardium Leviosa y la pluma se eleva con elegancia.";
    } else {
        return "Hermione corrige con paciencia: No es Leviosá, es Leviosa.";
    }
};


// Función mejorada para Dumbledore.
// Se añadió un parámetro opcional que permite ampliar la función sin romper la compatibilidad.
// Con esto se vuelve más expresiva y reutilizable.
const dumbledore = (hechizo = "Lumos") => {
    // Validación simple del tipo del parámetro.
    if (typeof hechizo !== "string") {
        return "Dumbledore guarda silencio: ese tipo de magia no puede ser interpretada.";
    }
    return `Dumbledore conjura ${hechizo} con un simple gesto, irradiando serenidad y poder.`;
};
