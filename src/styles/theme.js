export const themeSelector = theme => {
    if (!theme) return;

    const themes = {
        dark: {
            body: "#010409",
            text: "#f1f1f1",
            panel: "#0d1117",
            subHeader: "#ffffff78",
        },

        light: {
            body: "#f1f1f1",
            text: "#121620",
            panel: "#ffffff",
            subHeader: "#00000078",
        },
    };

    return themes[theme];
};
