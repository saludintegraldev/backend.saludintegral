// Generated by https://quicktype.io

export interface SchedulerResponse {
    idSlot:           number;
    idExam:           number;
    nameExam:         NameExam;
    startSlot:        string;
    timeSlot:         string;
    durationSlot:     number;
    nameProfessional: NameProfessional;
    endSlot:          string;
}

export enum NameExam {
    ConsultaDeMedicinaInterna = "Consulta de Medicina Interna",
}

export enum NameProfessional {
    JennyElviraRodriguezMartinez = "JENNY ELVIRA RODRIGUEZ MARTINEZ",
    LuisJoseGonzalezRoa = "LUIS JOSE GONZALEZ ROA",
    YamalyAvila = "YAMALY  AVILA ",
}