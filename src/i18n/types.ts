export type Language = 'en' | 'es';

export type ThemeOptions = {
    dark: string;
    light: string;
};
  
export type LanguageOptions = {
    english: string;
    spanish: string;
};
  
export type SwitchOptions = {
    theme: ThemeOptions;
    language: LanguageOptions;
};
  
export type Skill = {
    area: string;
    tools: string[];
};
export type Skills = {
    title: string,
    skills: Skills[],
}
  
export type Career = {
    name: string;
    university: string;
    startDate: string | null;
    finishDate: string | null;
    duration: {
      number: number;
      years: string;
    };
    location: string;
};
  
export type LanguageSkill = {
    name: string;
    level: string;
    cefr: string | null;
};
export type Project = {
    name: string;
    description: string;
    tools: string[];
    link: string;
};
  
export type Sections = {
    introduction: {
        title: string;
        intro: string;
    };
    skill: {
        title: string;
        skills: Skill[];
    };
    education: {
        title: string;
        carrers: Career[];
        courses: Career[];
    };
    language: {
        title: string;
        languages: LanguageSkill[];
    };
    project: {
        title: string;
        projects: Project[];
    }; 
    cv: {
        text: string;
        fileName: string;
    };
};

export type UI = {
    [key in Language]: {
        labor: string;
        switch: SwitchOptions;
        sections: Sections;
    }
}