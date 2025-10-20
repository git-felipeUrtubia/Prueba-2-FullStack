
import { describe, it, expect } from "vitest";
import { calcularIva, calcularTotal, calcularPrecioProd} from "../pages/pago/seccionCarrito.jsx";


// test 1
describe("calcularIva", () => {
    it("calcula 19% del subtotal (precio*cant)", () => {
        expect(calcularIva(1000, 2)).toBeCloseTo(380); 
        expect(calcularIva(10000, 1)).toBeCloseTo(1900);
    });
});

// test 2

describe("calcularTotal", () => {
    const productos = [
        { id: 1, precio: 1000 },
        { id: 2, precio: 500 },
    ];

    it("suma precio * cantidad por producto", () => {
        const cantidad = { 1: 2, 2: 2 };
        expect(calcularTotal(productos, cantidad)).toBeCloseTo(3000);
    });
});

// test 3
describe("calcularPrecioProd", () => {

    it("multiplica precio * cantidad por producto", () => {
        const cantidad = { 1: 1, 2: 3 };
        const precio = 1000;
        expect(calcularPrecioProd(precio, cantidad[1])).toBeCloseTo(1000)
        expect(calcularPrecioProd(precio, cantidad[2])).toBeCloseTo(3000)
    })

})




