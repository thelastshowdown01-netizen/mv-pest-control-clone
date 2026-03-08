// src/tenantConfig.ts
export const tenant = {
    companyName: "M V Pest control Management Services",
    tagline: "Don't Risk Your Family's Safety.",
    logoUrl: "/mv_pest_control_logo.svg",
    heroImage: "/mv_pest_control_hero.png",

    colors: {
        brandDark: "#1e3a8a", // Deep Blue
        brandLight: "#f0fdf4", // Soft Mint
        brandAccent: "#10b981", // Emerald Green
        brandOrange: "#f59e0b", // Amber
    },

    phone: "8076333896",
    phoneFull: "+918076333896",
    whatsapp: "+917210508650",
    whatsappLink: "https://wa.me/917210508650",
    email: "info@mvpestcontrol.com",

    regionName: "Delhi NCR",
    regionCities: "Delhi · Lucknow · Noida",
    serviceAreas: [
        {
            city: "Delhi NCR",
            areas: ["New Delhi", "Noida", "Lucknow"],
            count: "1,000+",
        }
    ],

    stats: {
        homesProtected: "10,000+",
        successRate: "99%",
        googleReviews: "500+",
        responseTime: "24 Hrs",
        avgRating: "4.8",
    },

    heroHeadline: "Delhi NCR's Most Trusted",
    heroHeadlineAccent: "Sanitization & Pest Management.",
    heroSubheadline: "M V Pest control Management is dedicated to provide your business or residence with the most effective and ongoing pest management solution available. We use 100% green methods.",
    heroCta1: "Book FREE Inspection Today",
    heroCta2: "📞 8076333896",

    certifications: [
        {
            label: "CERT",
            value: "Expert",
            subtitle: "Well-trained experts offering accomplished service.",
            color: "blue",
            fullTitle: "Highly-Trained Staff",
            description: "Our service professionals go through a rigorous training program.",
        },
        {
            label: "GOVT",
            value: "Licensed",
            subtitle: "Validated licensed company.",
            color: "blue",
            fullTitle: "Government Licensed",
            description: "Registered with all required authorities.",
        },
        {
            label: "ECO",
            value: "Friendly",
            subtitle: "100% green practices.",
            color: "green",
            fullTitle: "Eco-Friendly Safe",
            description: "Green practices minimize pollution and safeguard health.",
        },
    ],

    services: [
        { iconName: "ShieldCheck", title: "Sanitization Service", description: "Hygienic sanitization and disinfection for homes, offices & commercial spaces delivering 99% germ eradication." },
        { iconName: "Search", title: "Termite Inspection", description: "Visual and tech-driven detection for termite treatments using infrared cameras and moisture meters." },
        { iconName: "Bug", title: "General Pest Management", description: "Professional Pest Management Services using Quality Products and Equipment protecting from Dengue, Malaria & Typhoid." },
    ],

    featureSection: {
        heading: "Two decades of proven excellence.",
        subheading: "Since 2015, M V Pest control Management Services has built a reputation for reliability, safety, and results.",
        features: [
            {
                lines: [
                    { text: "20+", small: false, colored: false },
                    { text: "YEARS", small: true, colored: true },
                ],
                title: "Experience",
                description: "We are not a newbie; we have held our position for more than two decades in the pest control service domain.",
                colorHex: "#60a5fa", // Lighter blue so it doesn't merge with the dark blue background
            },
            {
                lines: [
                    { text: "GREEN", small: false, colored: true },
                    { text: "METHODS", small: true, colored: true },
                ],
                title: "Eco-Friendly",
                description: "Green practices minimize pollution, conserve natural resources, and safeguard the health of humans and pets.",
                colorHex: "#10b981", // Emerald Green
            },
            {
                lines: [
                    { text: "99%", small: false, colored: false },
                    { text: "GERM ERAD", small: true, colored: true },
                ],
                title: "Deep Disinfection",
                description: "Two-stage Surface & Spatial disinfection with advanced machinery ensuring no space or surface is missed out.",
                colorHex: "#f59e0b", // Amber
            }
        ]
    },

    steps: [
        {
            num: "01",
            iconName: "PhoneCall",
            title: "Request a Free Inspection",
            description: "Call the expert for a free inspection visit at 8076333896 or 7210508650.",
        },
        {
            num: "02",
            iconName: "Search",
            title: "Detailed Inspection",
            description: "Visual precision and tech-driven detection using infrared cameras and moisture meters.",
        },
        {
            num: "03",
            iconName: "Shield",
            title: "Effective Treatment",
            description: "Special attention given to high germ contamination spots with world-renowned sanitizing agents.",
        },
    ],

    reviews: [
        {
            name: "Rajesh Sharma",
            text: "Excellent sanitization service for our office in Noida. Their two-stage disinfection process really gave us peace of mind during the pandemic.",
            initial: "R",
            location: "Noida",
            image: "https://placehold.co/100x100/1e3a8a/FFFFFF?text=R&font=oswald"
        },
        {
            name: "Sunita Verma",
            text: "Very professional team. They used infrared cameras to find hidden termites in my wooden cabinets. Highly recommend M V Pest Control.",
            initial: "S",
            location: "Lucknow",
            image: "https://placehold.co/100x100/1e3a8a/FFFFFF?text=S&font=oswald"
        },
        {
            name: "Anil Gupta",
            text: "I was worried about pest treatments affecting my pets, but their green methods are truly safe. No strong odors, just great results.",
            initial: "A",
            location: "Delhi",
            image: "https://placehold.co/100x100/1e3a8a/FFFFFF?text=A&font=oswald"
        },
    ],

    clients: [
        { name: "City Hospital", logo: "https://placehold.co/200x100/f0fdf4/1e3a8a?text=City+Hospital&font=oswald" },
        { name: "Grand Hotel", logo: "https://placehold.co/200x100/f0fdf4/1e3a8a?text=Grand+Hotel&font=oswald" },
        { name: "Sunrise Cafe", logo: "https://placehold.co/200x100/f0fdf4/1e3a8a?text=Sunrise+Cafe&font=oswald" },
        { name: "Metro Mall", logo: "https://placehold.co/200x100/f0fdf4/1e3a8a?text=Metro+Mall&font=oswald" },
        { name: "Global Tech", logo: "https://placehold.co/200x100/f0fdf4/1e3a8a?text=Global+Tech&font=oswald" },
        { name: "Acme Corp", logo: "https://placehold.co/200x100/f0fdf4/1e3a8a?text=Acme+Corp&font=oswald" }
    ],

    hours: {
        weekday: "Monday–Sunday",
        weekdayTime: "Open 24 hours",
        weekend: "",
        weekendTime: "",
    },

    footerLinks: [
        ["Home", "/"],
        ["About Us", "/"],
        ["Privacy Policy", "/"],
        ["Contact Us", "/"],
    ],
    footerServices: [
        ["Sanitization Service", "/"],
        ["Termite Inspection", "/"],
        ["General Pest Management", "/"],
    ],
    copyrightText: "© 2026 M V Pest Control Management Services. All rights reserved.",
    copyrightSubtext: "Providing hygienic sanitization and disinfection services in Delhi NCR, Lucknow and Noida.",

    seo: {
        title: "M V PEST CONTROL — Top Rated Sanitization & Pest Services in Delhi NCR",
        description: "M V Pest control Management is dedicated to provide your business or residence with the most effective pest management. Call 8076333896 for a free inspection.",
    },
};
