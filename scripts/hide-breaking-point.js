Hooks.once("ready", () => {
    document.body.classList.toggle(
        "dg-hide-breaking-point-for-players",
        !game.user.isGM,
    );
});
