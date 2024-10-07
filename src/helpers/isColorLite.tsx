
export const isLightColor = (hex: string) => {
    // Convierte el valor hexadecimal a sus componentes RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    // Calcula el brillo relativo usando la fórmula de luminosidad
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
    // Si el brillo es mayor que un umbral alto (240), lo consideramos "blanco o blanquecino"
    return brightness > 240;
  };
  