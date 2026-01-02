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
    birthDate: string;
    photoUrl: any;
    personality: string[];
    favoriteThings: string[];
}

const baseDogInfo = {
    name: "Bučko",
    nickname: "Buks",
    birthDate: "2024-12-01",
    photoUrl: getImagePath("/images/bucko-buks-004.jpg"),
};

export const dogInfo: Record<string, DogInfo> = {
    en: {
        ...baseDogInfo,
        breed: "American Bully",
        personality: [
            "Playful",
            "Loving",
            "Energetic",
            "Friendly",
            "Curious",
            "Intelligent",
            "Sometimes stubborn"
        ],
        favoriteThings: [
            "Playing fetch",
            "Cuddling on the couch",
            "Meeting new people",
            "Sunbathing",
            "Treats and snacks",
            "Long walks in nature",
            "Swimming"
        ],
    },
    sl: {
        ...baseDogInfo,
        breed: "Ameriški Bully",
        personality: [
            "Igriv",
            "Ljubeč",
            "Energitičen",
            "Prijazen",
            "Radoveden",
            "Inteligenten",
            "Včasih trmast"
        ],
        favoriteThings: [
            "Tekanje za žogo",
            "Crkljanje na kavču",
            "Srečevanje novih ljudi",
            "Sončenje",
            "Dobrote in prigrizki",
            "Dolgi sprehodi v naravi",
            "Plavanje"
        ],
    }
};

export function getDogInfo(lang: string = 'sl'): DogInfo {
    return dogInfo[lang] || dogInfo.sl;
}
