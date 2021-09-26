export const themeSelector = theme => {
    if (!theme) return;

    const themes = {
        dark: {
            body: "#121620",
            text: "#f1f1f1",
        },

        light: {
            body: "#f1f1f1",
            text: "#121620",
        },
    };

    return themes[theme];
};
