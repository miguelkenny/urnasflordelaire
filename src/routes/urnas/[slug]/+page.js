import urnas from "../../dataUrnas.js";

export function load({ params }) {
    const urna = urnas.find((u) => u.slug === params.slug);

    if (!urna) {
        return {
            status: 404,
            error: new Error("Urna no encontrada")
        };
    }

    return {
        data: { urna }
    };
}
