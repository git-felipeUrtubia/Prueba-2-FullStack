
import { describe, it, expect, vi, beforeEach } from "vitest";
import { checkLogin } from "../pages/login/sign.jsx";

describe("checkLogin", () => {
    beforeEach(() => {
        vi.stubGlobal("alert", vi.fn());
    });

    it("retorna false y alerta 'Usuario no existe' si la lista está vacía", () => {
        const form = { email: "a@a.com", passd: "123" };
        const usuarios = [];

        const ok = checkLogin(form, usuarios);

        expect(ok).toBe(false);
        expect(alert).toHaveBeenCalledWith("Usuario no existe ❌");
    });

    it("retorna true y alerta 'Iniciando sesión... ✅' si las credenciales son correctas", () => {
        const form = { email: "felipe@mail.com", passd: "1234" };
        const usuarios = [
            { email: "otro@mail.com", passd: "zzz" },
            { email: "felipe@mail.com", passd: "1234" }, // credenciales correctas
        ];

        const ok = checkLogin(form, usuarios);

        expect(ok).toBe(true);
        expect(alert).toHaveBeenCalledWith("Iniciando sesión... ✅");
    });
});