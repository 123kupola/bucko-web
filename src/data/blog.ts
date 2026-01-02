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
    lang: 'en' | 'sl';
}

const blogPostsEn: BlogPost[] = [
    {
        id: "buckos-first-park-adventure",
        title: "Bucko's First Park Adventure",
        excerpt: "A magical day filled with new smells, friends, and endless tail wags!",
        content: `
            <p>Today was a special day for Bucko - his first trip to the big dog park!</p>

            <p>From the moment we arrived, his eyes were wide with excitement. The park was filled with new smells, new friends, and endless possibilities. He cautiously approached the other dogs, sniffing and wagging his tail tentatively at first.</p>

            <p>Within minutes, Bucko was running and playing with his new friends like he'd known them forever. It was heartwarming to see his confidence grow with every lap around the park.</p>

            <p>By the end of our visit, he was exhausted but happy - the perfect kind of tired that comes from a day of pure joy and adventure.</p>
        `,
        date: "2024-01-15",
        author: "Bucko's Human",
        tags: ["adventure", "park", "firsts"],
        featuredImage: getImagePath("/images/bucko-buks-006.jpg"),
        lang: 'en'
    },
    {
        id: "learning-new-tricks",
        title: "Learning New Tricks: The Power of Positive Reinforcement",
        excerpt: "Watch Bucko master shake hands and high-fives with the magic of treats and patience!",
        content: `
            <p>This week, Bucko made amazing progress in his training journey. We've been working on basic commands, and I'm thrilled to share that he's mastered "sit," "stay," and the ever-impressive "shake hands!"</p>

            <p>The secret? Plenty of positive reinforcement, patience, and of course, his favorite treats. Every small success was celebrated with enthusiasm, and Bucko responded beautifully to the encouragement.</p>

            <p>What impressed me most was his eagerness to learn. His tail never stopped wagging during training sessions, showing me just how much he enjoys the mental stimulation and the special bonding time.</p>

            <p>We're now working on "roll over" and "play dead" - stay tuned for updates on his progress!</p>
        `,
        date: "2024-01-10",
        author: "Bucko's Human",
        tags: ["training", "tricks", "learning"],
        featuredImage: getImagePath("/images/bucko-buks-042.jpg"),
        lang: 'en'
    },
    {
        id: "the-perfect-cuddle-buddy",
        title: "The Perfect Cuddle Buddy",
        excerpt: "There's nothing better than cozy movie nights with Bucko snuggled up on the couch!",
        content: `
            <p>After a long day, there's nothing I look forward to more than settling onto the couch with a good movie and my perfect cuddle buddy, Bucko.</p>

            <p>Despite his energetic nature during the day, Bucko transforms into the gentlest, most affectionate companion when it's time to relax. He seems to have an innate sense of when I need extra comfort, always knowing exactly how to position himself for the perfect cuddle.</p>

            <p>These quiet moments are when I feel our bond strongest. The gentle rise and fall of his breathing, the occasional contented sigh, and the warmth of his presence create a sense of peace that's hard to describe but easy to appreciate.</p>

            <p>Whether we're watching an action movie or a romantic comedy, Bucko is always there, making even the most ordinary evening feel special.</p>
        `,
        date: "2024-01-05",
        author: "Bucko's Human",
        tags: ["bonding", "relaxation", "love"],
        featuredImage: getImagePath("/images/bucko-buks-009.jpg"),
        lang: 'en'
    },
];

const blogPostsSl: BlogPost[] = [
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
        lang: 'sl'
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
        lang: 'sl'
    }
];

export const blogPosts: BlogPost[] = [...blogPostsEn, ...blogPostsSl];

// Helper function to get posts sorted by date
export function getSortedPosts(lang: 'en' | 'sl' = 'sl', limit?: number): BlogPost[] {
    const sorted = blogPosts
        .filter(post => post.lang === lang)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return limit ? sorted.slice(0, limit) : sorted;
}

// Helper function to get a post by ID
export function getPostById(id: string): BlogPost | undefined {
    return blogPosts.find(post => post.id === id);
}

// Helper function to get posts by tag
export function getPostsByTag(tag: string, lang: 'en' | 'sl' = 'sl'): BlogPost[] {
    return blogPosts.filter(post =>
        post.tags?.includes(tag) && post.lang === lang
    );
}
