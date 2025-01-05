export default {
    hello: 'Hallo',
    'hello.world': 'Hallo Welt!',
    welcome: 'Hallo {name}!',
    menu: {
        mainNav: 'Hauptnavigation',
        countrySelect: 'Land auswählen',
        openSubMenu: 'Untermenü öffnen',
        closeSubMenu: 'Untermenü schließen',
        closeMenu: 'Menü schließen',
        darkMode: 'Dunkelmodus',
        lightMode: 'Hellmodus',
        home: 'Startseite',
        howItWorks: 'Wie funktioniert es?',
        solutions: 'Lösungen',
        pricing: 'Preise',
        blog: 'Blog',
        moreResources: 'Weitere Ressourcen',
        language: 'Sprache',
        choosen: 'Ausgewählt',
        team: 'Unser Team',
        values: 'Werte',
        jobs: 'Karriere',
        brand: 'Marke',
        create: 'Erstellen',
        project: 'Projekt',
        feasibilityReport: 'Machbarkeitsstudie',
        financialReport: 'Finanzbericht',
        businessIdea: 'Geschäftsidee',
        allRightsReserved: 'Alle Rechte vorbehalten',
        terms: 'Nutzungsbedingungen',
        privacy: 'Datenschutz',
        cookiePolicy: 'Cookie-Richtlinie',
        soon: 'Bald',
        active: 'Aktiv',
    },
    pages: {
        home: {
            title: 'Startseite',
            description: 'Startseitenbeschreibung',
        },
        pricing: {
            title: 'Preise',
            description: 'Preisbeschreibung',
            breadcrumbs: {},
        },
        report: {
            create: {
                title: 'Bericht erstellen',
                description: 'Bericht erstellen Seite',
                steps: {
                    entrepreneurInfo: 'Informationen zum Unternehmer',
                    startupDetails: 'Details zum Startup',
                    teamAndFunding: 'Team und Finanzierung',
                    productAndMarket: 'Produkt und Markt',
                    financialInfo: 'Finanzinformationen',
                    challengesAndOpportunities: 'Herausforderungen und Chancen',
                    advantageAndGoals: 'Wettbewerbsvorteil und Ziele',
                },
                fields: {
                    startupName: 'Name des Startups',
                    userType: 'Benutzertyp',
                    industry: 'Branche',
                    foundingYear: 'Gründungsjahr',
                    teamSize: 'Teamgröße',
                    fundingStage: 'Finanzierungsphase',
                    productDescription: 'Produktbeschreibung',
                    targetMarket: 'Zielmarkt',
                    revenue: 'Jahreseinnahmen',
                    growthRate: 'Wachstumsrate',
                    challenges: 'Herausforderungen',
                    opportunities: 'Chancen',
                    competitiveAdvantage: 'Wettbewerbsvorteil',
                    futureGoals: 'Zukünftige Ziele',
                },
                placeholders: {
                    startupName: 'Geben Sie den Namen Ihres Startups ein',
                    userType: 'Wählen Sie Ihren Benutzertyp aus',
                },
            },
        },
    },
} as const;
