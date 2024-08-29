import { PlatosElegidos } from "../types/types";

interface AgregadoAlMenuProp {
    menuElegido: PlatosElegidos[];
    handlerDelete: (id: PlatosElegidos["id"]) => void;
    handelReset: () => void;
}

function AgregadoAlMenu({
    menuElegido,
    handlerDelete,
    handelReset,
}: AgregadoAlMenuProp) {
    const total = menuElegido.reduce(
        (acumulador, item) => acumulador + item.cantidad * item.precio,
        0,
    );

    return (
        <>
            <div className="border border-dashed m-2 py-4 px-2">
                <h2 className="text-center font-bold text-xl">Tu Pedido</h2>
                {menuElegido.length === 0 ? (
                    <p className="text-center pt-4">{`No elegiste nada para comer :(`}</p>
                ) : (
                    menuElegido.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between m-2 p-2 border bg-slate-100"
                        >
                            <div className="w-9/12">
                                <h3 className="font-semibold">{item.nombre}</h3>
                                <p>Cantidad: {item.cantidad}</p>
                            </div>
                            <div>
                                <p className="font-semibold">
                                    ${item.precio * item.cantidad}
                                </p>
                            </div>
                            <button
                                onClick={() => handlerDelete(item.id)}
                                className="text-red-700 font-black"
                            >
                                X
                            </button>
                        </div>
                    ))
                )}
                {menuElegido.length === 0 ? (
                    ""
                ) : (
                    <div className="flex items-center justify-between p-2 mt-6">
                        <p className="text-center font-bold">
                            Total: <span className="font-normal">${total}</span>
                        </p>
                        <button
                            onClick={() => handelReset()}
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold p-2 rounded-full"
                        >
                            Ordenar
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default AgregadoAlMenu;
