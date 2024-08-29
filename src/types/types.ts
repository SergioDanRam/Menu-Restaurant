interface Menu {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
}

interface PlatosElegidos extends Menu {
    cantidad: number;
}

export type { Menu, PlatosElegidos };
