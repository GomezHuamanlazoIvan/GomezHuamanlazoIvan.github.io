export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'Gomez Humanlazo Ivan Paul',
    subtitle: 'DESARROLLO WEB',
    description: 'Tema Astro.js y Tailwind CSS para blog y portafolio por justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Tema Astro.js y Tailwind CSS'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'GitHub',
            href: '/https://github.com/GomezHuamanlazoIvan'
        }
    ],
    footerNavLinks: [
        {
            text: 'Acerca de',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Términos',
            href: '/terms'
        },
        {
            text: 'Descargar tema',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Facebook',
            href: 'https://www.facebook.com/ivanpaul.gomezhuamanlazo'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: '¡HOLA Y BIENVENIDO A MI PORTAFOLIO ELECTRÓNICO!',
        text: "Soy **Ivan Paul Gomez Humanlazo**, desarrollador web apasionado por la colaboración y la inteligencia artificial. Mi enfoque se basa en la intuición, la investigación precisa y el uso de la estética como motor para crear productos excepcionales. Disfruto del buen software, el diseño visual y los principios del crecimiento guiado por producto. Explora mis proyectos en <a href='https://github.com/GomezHumanlazoIvan'>GitHub</a>",
        image: {
            src: '/hero.jpeg',
            alt: 'Persona sentada en un escritorio frente a una computadora'
        },
        actions: [
            {
                text: 'Ponerse en contacto',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Suscríbete al boletín de Gomez Humanlazo Ivan Paul',
        text: 'Una actualización por semana. Todas las publicaciones más recientes directamente en tu bandeja de entrada.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
