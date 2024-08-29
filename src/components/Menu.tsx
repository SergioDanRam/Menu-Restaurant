import AgregadoAlMenu from "./AgregadoAlMenu";
import ListaMenu from "./ListaMenu";
import { menu } from "../menu";
import { useState } from "react";
import type { Menu, PlatosElegidos } from "../types/types";

function Menu() {
    const [menuElegido, setMenuElegido] = useState<PlatosElegidos[]>([]);

    const addToMenu = (elegido: Menu) => {
        // Comprobar si el ítem ya está en el menú
        const comidaElegida = menuElegido.findIndex(
            (item) => item.id === elegido.id,
        );

        if (comidaElegida >= 0) {
            // Si el ítem ya está en el menú, incrementar su cantidad
            const itemElegido = menuElegido.map((item) => {
                if (item.id === elegido.id) {
                    return {
                        ...item,
                        cantidad: item.cantidad + 1,
                    };
                } else {
                    return item;
                }
            });
            setMenuElegido(itemElegido);
        } else {
            // Si el ítem no está en el menú, agregarlo con cantidad 1

            const itemAgregado: PlatosElegidos = { ...elegido, cantidad: 1 };
            setMenuElegido([...menuElegido, itemAgregado]);
        }
    };

    const handlerDelete = (id: PlatosElegidos["id"]) => {
        const menuActualizado = menuElegido.filter((item) => item.id !== id);
        setMenuElegido(menuActualizado);
    };

    const handelReset = () => {
        setMenuElegido([]);
    };

    return (
        <>
            <div className="md:grid md:grid-cols-2 md:gap-3 md:w-3/4 mx-auto mt-10">
                <ListaMenu addToMenu={addToMenu} menu={menu} />
                <AgregadoAlMenu
                    handelReset={handelReset}
                    handlerDelete={handlerDelete}
                    menuElegido={menuElegido}
                />
            </div>
        </>
    );
}

export default Menu;
