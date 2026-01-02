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

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author?: string;
    tags?: string[];
    featuredImage?: any;
    readingTime?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "ai-v-oskrbi-psov",
        title: "🐕🤖 Ali lahko s pomočjo umetne inteligence izboljšamo skrb za vašega hišnega ljubljenčka?",
        excerpt: "Odkrijte, kako umetna inteligenca spreminja način skrbi za pse. Od personaliziranih nasvetov do sledenja zdravju - prihodnost je tukaj!",
        content: `
            <p>V zadnjih letih je umetna inteligenca (AI) prodrla v skoraj vsak vidik našega življenja, od tega, kako delamo, do tega, kako se zabavamo. Nič drugače ni v svetu hišnih ljubljenčkov. Tehnologija AI nam danes omogoča, da bolje razumemo potrebe naših psov in jim zagotovimo varnejše ter bolj zdravo življenje.</p>

            <p>Ena izmed najbolj zanimivih uporab AI je spremljanje zdravja v realnem času. Pametne ovratnice, opremljene z naprednimi algoritmi, lahko zaznajo subtilne spremembe v obnašanju, ki bi lahko kazale na bolezen ali nelagodje, še preden opazimo fizične simptome. Poleg tega AI pomaga pri analizi prehranskih potreb, kjer na podlagi pasme, starosti in stopnje aktivnosti pripravi popoln jedilnik.</p>

            <p>V prihodnosti lahko pričakujemo še naprednejše sisteme, ki bodo zmožni analizirati lajež in telesno govorico s ciljem izboljšanja komunikacije med psom in lastnikom. Čeprav tehnologija nikoli ne more nadomestiti ljubezni in pozornosti, ki jo psu nudi človek, je vsekakor močno orodje, ki nam pomaga biti boljši skrbniki.</p>
        `,
        date: "2024-12-10",
        author: "Bučko Ekipa",
        tags: ["AI", "tehnologija", "skrb za pse"],
        featuredImage: getImagePath("/images/bucko-buks-042.jpg"),
        readingTime: "8 min",
    },
    {
        id: "reja-bullyjev-v-sloveniji",
        title: "Reja Bullyjev v Sloveniji",
        excerpt: "Ameriški Bully - Profil Pasme. Osnovni podatki, kategorije in vzrejni standardi za Ameriške Bullyje v Sloveniji.",
        content: `
            <p>Ameriški Bully postaja v Sloveniji vse bolj priljubljena pasma. Čeprav so na prvi pogled videti robustni in morda celo zastrašujoči, so v resnici izjemno ljubeči in predani družinski psi. Pri reji te pasme pa je ključnega pomena, da se držimo visokih standardov in poskrbimo za zdravje psov.</p>

            <p>V Sloveniji se vzreja osredotoča na več kategorij, vključno s Pocket, Standard in Classic tipi. Vsak tip ima svoje specifične značilnosti, vsem pa je skupen stabilen karakter. Odgovorni vzreditelji morajo opraviti vrsto zdravstvenih testov, preden psa vključijo v vzrejni program:</p>
            <ul>
                <li><strong>Displazija kolkov in komolcev (RTG):</strong> Ključno za zagotavljanje mobilnosti v starosti.</li>
                <li><strong>Pregled srca (Kardiolog):</strong> Preprečevanje prirojenih srčnih napak.</li>
                <li><strong>Očesne bolezni:</strong> Pregledi za entropion in 'cherry eye'.</li>
            </ul>

            <p>Če razmišljate o nakupu Ameriškega Bullyja, se vedno pozanimajte o rodovniku in zdravstvenih spričevalih staršev. Kvalitetna vzreja zagotavlja, da bo vaš novi družinski član zdrav in srečen dolga leta.</p>
        `,
        date: "2024-12-01",
        author: "Bučko Ekipa",
        tags: ["bully", "pasme", "reja"],
        featuredImage: getImagePath("/images/bucko-buks-006.jpg"),
        readingTime: "15 min",
    },
];

// Helper function to get posts sorted by date
export function getSortedPosts(limit?: number): BlogPost[] {
    const sorted = [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return limit ? sorted.slice(0, limit) : sorted;
}

// Helper function to get a post by ID
export function getPostById(id: string): BlogPost | undefined {
    return blogPosts.find(post => post.id === id);
}

// Helper function to get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
    return blogPosts.filter(post =>
        post.tags?.includes(tag)
    );
}
