type PageContent = {
  en: string;
  sv: string;
};

type Page = {
  name: string;
  path: string;
  content: PageContent;
};
export const pageContents :Page[]= [
  {
    name: 'Home',
    path: '/',
    content: {
      en: `
        Your Vision. Our Passion.
        Resource Point has the IT experts you need.
        Skilled and experienced consultants.
        We are a reputed consultant company based in Gothenburg with over 25 years of experience.
        Our core strengths lie in supplying skilled and experienced consultants at competitive prices.
        We offer everything from newly graduated developers to seasoned system architects, for both short and long-term contracts.
        If you need competence that is hard to find in Sweden, we can provide it through our partners in India, Romania, and Macedonia.
      
        Our Services:
        - Strategic IT Consulting
        - Cloud Solutions
        - Cybersecurity
        - Managed IT Services
        - Data Analytics
      
        Explore Solutions.

        IT Consultancy & Solutions
        HR On-Demand Subscription
        Training & Development
        Additional Service
      
        Steps of Recruitment Process:
        We guide you through every step to find the best talent:
        1. Identify Job Opening
        2. Recruit and Interview
        3. Select Candidate
        4. Onboard and Start
        online application, send CV 
        
        If you have the idea, we will find the right way.
        We're here to identify which tactics need funding and which are a drain on resources.
        Real-time decisions involve multiple touchpoints.
      
        Be at the forefront of innovation with us.
        Your goals are individual — and we believe our advice should be too.
        Let us help your business thrive in today's fast-changing world.
      
        All available positions: 
        Frontend Developer, Tech - Göteborg, Work with modern JavaScript frameworks to build user-friendly interfaces.
        Backend Developer, Tech - Göteborg, Develop and maintain server-side solutions with focus on performance and security.
        Software Tester, QA - Göteborg, Test and ensure software quality through automated testing.
        Apply Now
      `,
      sv: `
        Din vision. Vår passion.
        Resource Point har IT-experterna du behöver.
        Kompetenta och erfarna konsulter
        Vi är ett välrenommerat konsultföretag baserat i Göteborg med över 25 års erfarenhet.
        Våra kärnkompetenser ligger i att tillhandahålla kompetenta och erfarna konsulter till konkurrenskraftiga priser. Vi erbjuder allt från programmerare som är nyutexaminerade till erfarna systemarkitekter för kort- eller långsiktiga uppdrag. Om du behöver kompetens som är svår eller omöjlig att hitta i Sverige kan vi tillhandahålla det genom våra partners.
      
        Våra tjänster:
        - Strategisk IT-konsulting
        - Molnlösningar
        - Cybersäkerhet
        - Hanterade IT-tjänster
        - Dataanalys
      
        Utforska lösningar.
        IT-konsulttjänster & Lösningar, HR-prenumeration, Utbildning & Utveckling, Ytterligare tjänster.

        Rekryteringsprocessens steg:
        Vi guidar dig genom varje steg för att hitta rätt talang.
        Identifiera tjänst
        Rekrytera och intervjua
        Välj kandidat
        Introduktion och start
        online Ansökan, skicka CV
        
        Om du har idén, hittar vi rätt väg.
        Vi är här för att identifiera vilka taktiker som behöver finansiering och vilka som är en belastning på resurser.
        Realtidsbeslut involverar flera kontaktpunkter.
      
        Var i framkant av ny innovation.
        Dina mål är individuella. Vi tror att affärsrådgivning också borde vara det, så vi hjälper ditt företag att blomstra i denna arbetsmiljö.

        Frontendutvecklare, IT - Tech-Gothenburg, Arbeta med moderna JavaScript-ramverk för att bygga användarvänliga gränssnitt.
        Backendutvecklare, IT - Tech-Gothenburg, Utveckla och underhåll serverlösningar med fokus på prestanda och säkerhet.
        Mjukvarutestare, IT - QA-Gothenburg, Testa och säkerställ kvaliteten på mjukvarulösningar genom automatiserade tester.
        Ansök nu
      `
    }
  },
  {
    name: 'About',
    path: '/about',
    content: {
      en: `
        About, Headquartered in Göteborg, the western gateway to Sweden, Resource Point AB is a 20+ year old firm, providing software solutions, services and resources to firms in Scandinavia. Resource Point is a distinguished consulting company with its roots firmly planted in the vibrant city of Gothenburg, Sweden. Established in 1997, Resource Point has been a trusted partner for organizations seeking innovative solutions and expert guidance in a rapidly evolving business landscape. With over two decades of experience, the company has built a reputation for excellence in providing strategic insights, tailored recommendations, and practical implementation support across various industries. Resource Point AB is your trusted consulting partner, dedicated to helping you unlock your full potential and achieve sustainable growth. With a wealth of experience and a team of experts in various domains, we specialize in providing tailored solutions and strategic guidance to organizations across industries.
        Internship program We have a running collaboration with IT-Högskolan i Väst, where we take in a group of students and give them real assignments to build IT applications for their internship. That gives them real experience from worklife and we support them with expertise from our senior consultants at the same time as we are getting to know them personally. We also help them with what it takes to get assignments as consultants or their first job, when they graduate. Apply for the inernship
        Expertise: Our team of experienced consultants brings a wealth of knowledge and expertise to every project, ensuring successful outcomes. Client-centric Approach: We prioritize your unique needs and business objectives, tailoring solutions that fit your organization perfectly. Innovation: We stay at the forefront of technology trends to provide you with cutting-edge solutions that give you a competitive advantage. Reliability: Count on us for dependable, 24/7 support and proactive monitoring to keep your systems running smoothly.Today we are a consultancy company providing competent candidates for both the private and the public sector
      `,
      sv: `
        Om Oss, Med huvudkontor i Göteborg, Västsveriges port, är Resource Point AB ett företag med över 20 års erfarenhet som levererar mjukvarulösningar, tjänster och resurser till företag i Skandinavien. Resource Point är ett framstående konsultföretag med sina rötter djupt förankrade i den livliga staden Göteborg, Sverige. Företaget grundades 1997 och har varit en betrodd partner för organisationer som söker innovativa lösningar och expertvägledning i en snabbt föränderlig affärsvärld. Med över två decenniers erfarenhet har företaget byggt ett rykte för excellens i att tillhandahålla strategiska insikter, skräddarsydda rekommendationer och praktiskt stöd vid implementering inom olika branscher. Resource Point AB är din pålitliga konsultpartner, dedikerad att hjälpa dig att låsa upp din fulla potential och uppnå hållbar tillväxt. Med en stor erfarenhet och ett team av experter inom olika områden specialiserar vi oss på att erbjuda skräddarsydda lösningar och strategisk vägledning till organisationer i alla branscher.
        Praktikprogram: Vi har ett pågående samarbete med IT-Högskolan i Väst, där vi tar in en grupp studenter och ger dem verkliga uppdrag för att bygga IT-applikationer under sin praktik. Det ger dem verklig erfarenhet från arbetslivet och vi stödjer dem med expertis från våra seniora konsulter samtidigt som vi lär känna dem personligen. Vi hjälper dem också med vad som krävs för att få uppdrag som konsulter eller deras första jobb när de examineras. Expertis: Vårt team av erfarna konsulter tillför en stor mängd kunskap och expertis till varje projekt, vilket säkerställer framgångsrika resultat. Kundcentrerat tillvägagångssätt: Vi prioriterar dina unika behov och affärsmål och skräddarsyr lösningar som passar din organisation perfekt. Innovation: Vi ligger i framkant när det gäller teknologitrender för att ge dig banbrytande lösningar som ger dig en konkurrensfördel. Pålitlighet: Räkna med oss för pålitlig support dygnet runt och proaktiv övervakning för att hålla dina system i gång utan avbrott. Idag är vi ett konsultföretag som levererar kompetenta kandidater till både den privata och den offentliga sektorn.
      `
    }
  },
  {
    name: 'Blog',
    path: '/blog',
    content: {
      en: `
        LATEST NEWS, Explore our content to stay informed and connected with the innovative ideas shaping our industry.Latest LinkedIn Updates:


      `,
      sv: `
        SENASTE NYHETER, Håll dig uppdaterad med våra senaste nyheter och insikter. Latest LinkedIn Updates:
      `
    }
  },
  {
    name: 'Contact',
    path: '/contact',
    content: {
      en: `
        Contact us. Leave us a little info, and we’ll be in touch. HOW CAN WE HELP YOU OUT? Reach out to us in the only office. Working hours: Monday - Friday, 9 am to 4 pm EST.Phone: +46 70 440 31 70. Email: info@resourcepoint.se. Address: Stora Badhusgatan 18, 411 21, Göteborg. Name. Email. Phone. Subject. Message. Send message. Google Maps location of Resource Point AB.
      `,
      sv: `
        Kontakta oss. Lämna oss lite information, så hör vi av oss. HUR KAN VI HJÄLPA DIG? Kontakta oss på vårt närmaste kontor. Arbetstider: Måndag - Fredag, 9:00 till 16:00 EST. Telefon: +46 70 440 31 70. E-post: info@resourcepoint.se. Adress: Stora Badhusgatan 18, 411 21, Göteborg. Namn. E-post. Telefon. Ämne. Meddelande. Skicka meddelande. Google Maps plats för Resource Point AB.
      `
    }
  },
  {
    name: 'Services',
    path: '/services',
    content: {
      en: `
        Services. We provide a wide range of services to help you achieve your business goals. Capitalizing on the Real World Experience. We explore some of the latest trends and strategies. Our expert services: Enterprise Arkitekter, Software Developers, project Managers, Scrum Masters,Quality Assurance, project Owners. Private individuals products & services. Small & medium business clients acquisition. Corporate clients & services. If you have the idea, we will find the right way.View all available positions.
      `,
      sv: `
        Våra tjänster. Vi erbjuder skräddarsydda IT-lösningar och konsulttjänster som passar dina behov. Dra nytta av verklig erfarenhet. Vi utforskar de senaste trenderna och strategierna. Produkter och tjänster för privatpersoner, Förvärv av små och medelstora företagskunder, Företagskunder och tjänster. Våra expertområden: Enterprise Arkitekter, mjukvaruutvecklare, projektledare, Scrum Masters, kvalitetssäkring, projektägare. Om du har idén hittar vi rätt väg. Se alla tillgängliga tjänster.
      `
    }
  },
  {
    name: 'SingleService',
    path: '/singleService/corporate',
    content: {
      en: `
        Corporate clients & services. Enterprise-level support for digital transformation, security, infrastructure optimization and training services.
      `,
      sv: `
        Företagskunder och tjänster. Stöd på företagsnivå för digital transformation, säkerhet, infrastrukturoptimering och utbildningstjänster.`
     }
    },
    {
      name: 'SingleService',
      path: '/singleService/business',
      content: {
        en: `
          Small & Medium Bussiness client aquisition. We support SMEs with customized software, CRM integration, and strategic consultancy to help scale sustainably.
        `,
        sv: `
          Små och medelstora företagskunder. Vi stödjer små och medelstora företag med skräddarsydd mjukvara, CRM-integration och strategisk konsultation för att hjälpa dem att växa hållbart.
        `
      }
  },
{
  name: 'SingleService',
  path: '/singleService/individuals',
  content: {
    en: `
      Private Individuals Products & Services. We offer tailored digital solutions for individuals including financial planning, tech support and personal development tools.`,
    sv: `
      Produkter och tjänster för privatpersoner. Vi erbjuder skräddarsydda digitala lösningar för privatpersoner, inklusive finansiell planering, teknisk support och verktyg för personlig utveckling.`
  }
}
];
