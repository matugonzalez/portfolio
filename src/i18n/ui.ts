import type { UI } from "./types";

export const languages = {
    en: {
        english: 'english',
        spanish: 'spanish'
    },
    es: {
        english: 'Inglés',
        spanish: 'Español',
    }
};
  
export const defaultLang = 'en';
export const name = 'Mateo González'
export const ui: UI = {
    en: {
        switch :{
            theme:{
                dark: 'dark',
                light: 'light',
            },
            language:{
                english: 'english',
                spanish: 'spanish',
            }
        },
        labor: 'frontend developer',
        sections: {
            introduction: {
                title: 'profile',
                intro: 'Junior Frontend Developer passionate about creating attractive, responsive, and user-optimized interfaces. Skilled in HTML, CSS, JavaScript, and React, with experience in design. A fast learner, problem-solver, and team player. While my primary focus is on frontend development, I am actively expanding my backend knowledge and eager to enhance my skills in that area.',
            },
            skill:{   
                title: 'skills',
                skills: [
                    {
                        area: 'frontend',
                        tools: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TailwindCSS']
                    },
                    {
                        area: 'backend',
                        tools: ['Node.js', 'Express.js'],
                    },
                    {
                        area: 'vcs',
                        tools: ['Git'],
                    },
                    {
                        area: 'design',
                        tools: ['Figma'],
                    },
                    {
                        area: 'other',
                        tools: ['Github'],
                    },
                    {
                        area: 'currently learning',
                        tools: ['Astro', 'TypeScript']
                    }
                ]
            },
        
            education: {
                title: 'education',
                carrers: [
                    {
                        name: 'University Degree in Programming',
                        university: 'Universidad Tecnologica Nacional',
                        startDate: 'april 2022',
                        finishDate: 'december 2024',
                        duration: {
                            number: 2,
                            years: 'years',
                        },
                        location: "Argentina, Tucumán",
                    },
                ],
                courses: [
                    {
                        name: 'english institute',
                        university: 'ATICANA',
                        startDate: null,
                        finishDate: null,
                        duration: {
                            number: 8,
                            years: 'years'
                        },
                        location: "Argentina, Tucumán",
                    },
                ]
            },
        
            language: {
                title: 'languages',
                languages: [
                    {
                        name: 'spanish',
                        level: 'native',
                        cefr: null,
                    },
                    {
                        name: 'english',
                        level: 'intermediate',
                        cefr: 'B2',
                    },
                ] 
            },
            project: {
                title: 'my projects',
                projects: [
                    {
                        name: 'missed-connections',
                        description: 'a mini-game, where you have to select related items to find groups',
                        tools: ['ReactJs', 'TailwindCSS'],
                        link: 'https://github.com/matugonzalez/missed-connections',
                    },
                    {
                        name: 'text-to-morsecode',
                        description: 'a morse code text both ways translator.',
                        tools: ['ReactJs', 'TailwindCSS'],
                        link: 'https://github.com/matugonzalez/text-to-morsecode',
                    },
                    {
                        name: 'globglogabgalab',
                        description: 'a showcase of books.',
                        tools: ['Astro', 'TailwindCSS'],
                        link: 'https://github.com/matugonzalez/globglogabgalab',
                    },
                    {
                        name: 'portfolio',
                        description: 'my portfolio.',
                        tools: ['Astro', 'TailwindCSS'],
                        link: 'https://github.com/matugonzalez/portfolio',
                    },
                ]
            },
        
            cv: {
                text: 'My CV',
                fileName: '/MateoGonzalez_CV_English.pdf',
            },
        }
    },
    es: {
        switch : {
                theme: {
                    dark: 'oscuro',
                    light: 'claro',
                },
                language: {
                    english: 'ingles',
                    spanish: 'español',
                }
        },
        labor: 'desarrollador frontend',
        sections: {
            introduction: {
                title: 'perfil',
                intro: 'Desarrollador Frontend Junior apasionado por crear interfaces atractivas, responsivas y optimizadas para el usuario. Con conocimientos en HTML, CSS, JavaScript y React, así como experiencia en diseño. Aprendiz rápido, resolutivo y con habilidades para el trabajo en equipo. Si bien me encuentro mas enfocado en front, estoy aprendiendo mas de backend y me encuentro dispuesto a mejorar en ese área.'
            },
            skill: {
                title: 'habilidades',
                skills: [
                    {
                        area: 'frontend',
                        tools: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TailwindCSS']
                    },
    
                    {
                        area: 'backend',
                        tools: ['Node.js', 'Express.js'],
                    },
        
                    {
                        area: 'vcs',
                        tools: ['Git']
                    },
        
                    {
                        area: 'diseño',
                        tools: ['Figma']
                    },
        
                    {
                        area: 'otras',
                        tools: ['Github']
                    },
                    {
                        area: 'actualmente aprendiendo',
                        tools: ['Astro', 'TypeScript']
                    }
                ],
            },
            education: {
                title: 'educacion',
                carrers: [
                    {
                        name: 'Tecnicatura Universitaria en Programación',
                        university: 'Universidad Tecnologica Nacional',
                        startDate: 'Abril 2022',
                        finishDate: 'Diciembre 2024',
                        duration: {
                            number: 2,
                            years: 'años'
                        },
                        location: "Argentina, Tucumán",
                    },
                ],
                courses: [
                    {
                        name: 'instituto de ingles',
                        university: 'ATICANA',
                        startDate: null,
                        finishDate: null,
                        duration: {
                            number: 8,
                            years: 'años'
                        },
                        location: "Argentina, Tucumán",
                    },
                ]
            },
            language: {
                title: 'lenguajes',
                languages: [
                    {
                        name: 'español',
                        level: 'nativo',
                        cefr: null,
                    },
                    {
                        name: 'ingles',
                        level: 'intermedio',
                        cefr: 'b2'
                    }
                ]
            },
            project: {
                title: 'mis proyectos',
                projects: [
                    {
                        name: 'missed-connections',
                        description: 'un mini-juego, donde tienes que seleccionar items relacionados para tratar encontrar grupos.',
                        tools: ['ReactJs', 'TailwindCSS'],
                        link: 'https://github.com/matugonzalez/missed-connections',
                    },
                    {
                        name: 'text-to-morsecode',
                        description: 'un traductor de texto de codigo morse.',
                        tools: ['ReactJs', 'TailwindCSS'],
                        link: 'https://github.com/matugonzalez/text-to-morsecode',
                    },
                    {
                        name: 'globglogabgalab',
                        description: 'una muestra de libros.',
                        tools: ['Astro', 'TailwindCSS'],
                        link: 'https://github.com/matugonzalez/globglogabgalab',
                    },
                    {
                        name: 'portfolio',
                        description: 'mi portfolio.',
                        tools: ['Astro', 'TailwindCSS'],
                        link: 'https://github.com/matugonzalez/portfolio',
                    },
                ]
            },
            cv: {
                text: 'Mi CV',
                fileName: '/MateoGonzalez_CV_Spanish.pdf',
            }
        }
    }
}

