import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>("/src/assets/images/*.jpg", { eager: true });

function getImagePath(src: string) {
    const filename = src.split("/").pop();
    const path = `/src/assets/images/${filename}`;
    if (images[path]) {
        return images[path].default;
    }
    return src;
}

export interface DogInfo {
    name: string;
    nickname: string;
    breed: string;
    age: string;
    birthDate: string;
    photoUrl: any;
    personality: string[];
    favoriteThings: string[];
}

export const dogInfo: DogInfo = {
    name: "Bučko",
    nickname: "Buks",
    breed: "Ameriški Bully",
    age: "1 leto",
    birthDate: "2023-11-27", // Adjusted to match the "1 year, 1 month" info
    photoUrl: getImagePath("/images/bucko-buks-004.jpg"),
    personality: [
        "Igriv",
        "Ljubeč",
        "Energitičen",
        "Prijazen",
        "Radoveden",
        "Inteligenten",
        "Včasih trmast",
    ],
    favoriteThings: [
        "Tekanje za žogo",
        "Crkljanje na kavču",
        "Srečevanje novih ljudi",
        "Sončenje",
        "Dobrote in prigrizki",
        "Dolgi sprehodi v naravi",
        "Plavanje",
    ],
};
