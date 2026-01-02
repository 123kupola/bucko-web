export interface DogInfo {
    name: string;
    nickname: string;
    breed: string;
    age: string;
    birthDate: string;
    photoUrl: string;
    personality: string[];
    favoriteThings: string[];
}

export const dogInfo: DogInfo = {
    name: "Bučko",
    nickname: "Buks",
    breed: "American Bully",
    age: "11 months old",
    birthDate: "2024-12-01",
    photoUrl: "/images/bucko-buks-004.jpg",
    personality: [
        "Playful",
        "Loving",
        "Energetic",
        "Friendly",
        "Curious",
        "Intelligent",
    ],
    favoriteThings: [
        "Long walks in the park",
        "Playing fetch",
        "Cuddling on the couch",
        "Meeting new people",
        "Sunbathing",
        "Treats and snacks",
        "Swimming",
        "Dog park adventures",
    ],
};
