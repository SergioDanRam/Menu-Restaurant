import type { Menu } from "../types/types";

interface ManuProp {
    menu: Menu[];
    addToMenu: (elegido: Menu) => void

}

function ListaMenu({ menu, addToMenu }: ManuProp) {
    return (
        <>
            <div className="border border-dashed m-2 py-4">
                <h2 className="text-center font-bold text-xl">Menú</h2>
                {menu.map((item) => (
                    <div onClick={() => addToMenu(item)} key={item.id} className="flex items-center justify-between m-2 p-2 border bg-slate-100 hover:bg-slate-200 hover:cursor-pointer">
                        <div className="w-9/12">
                            <h3 className="font-semibold">{item.nombre}</h3>
                            <p>{item.descripcion}</p>
                        </div>
                        <div>
                            <p className="font-semibold">${item.precio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ListaMenu;
