export const matchScreen = (mediaQuery: `(${ string })`): boolean => {
    const media = window?.matchMedia(mediaQuery);

    return media.matches;
}

export const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
