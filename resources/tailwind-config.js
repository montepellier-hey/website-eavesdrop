/* Shared Tailwind settings. Load directly after the Tailwind CDN script in the <head> of every page. */
tailwind.config = {
    theme: {
        extend: {
            colors: {
                ink: "#012222",
                deep: "#011a1a",
                accent: "#b3e16e",
                moss: "#365f5e",
                mist: "#e6f3df",
            },
            fontFamily: {
                sans: ['"Work Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
            },
            boxShadow: {
                glow: "0 0 40px -8px rgba(179, 225, 110, 0.45)",
            },
            keyframes: {
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(14px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "fade-up": "fade-up 0.7s ease-out both",
            },
        },
    },
};
