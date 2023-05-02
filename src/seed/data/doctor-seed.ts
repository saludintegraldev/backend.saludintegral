interface SeedDoctors{

    title: string;
    fullName: string;
    gender: string;
    consultingRoom: number;
    cosultationDays: string[];
    timeTable: string
    slug: string;
}

    type validConsultationDays = 'Lunes'|'Martes'|'Miercoles'|'Jueves'|'Viernes';
    type validgender = 'famale'|'male';

    interface SeedData {
        doctors: SeedDoctors[];
    }
  
    export const initialData: SeedData = {
    doctors: [
    {
      title: 'Medicina Interna',
      fullName:  'Dra. María del Carmen Corominas García',
      gender: 'famale',
      consultingRoom: 5,
      cosultationDays:[ 'Lunes a Viernes'],
      timeTable: '8:00 am a 3:00 pm',
      slug: 'cualquiera1'
    },  
    {
      title: 'Diabetología',
      fullName:  'Dra. Amelia Pichardo Sánchez',
      gender: 'famale',
      consultingRoom: 6,
      cosultationDays:[ '8:00 am a 12:00 pm'],
      timeTable: 'Miercoles y Viernes',
      slug: 'cualquiera2'
    },  
    {
      title: 'Diabetología',
      fullName:  'Dra. Paola Thomas',
      gender: 'famale',
      consultingRoom: 6,
      cosultationDays:[ '1:00 pm a 5:00 pm'],
      timeTable: 'Martes y Viernes',
      slug: 'cualquiera3'
    },  
    {
      title: 'Nefrología',
      fullName:  'Dra. Alexandra Encarnación Ogando',
      gender: 'famale',
      consultingRoom: 6,
      cosultationDays:[ '8:00 am a 12:00 pm'],
      timeTable: 'Lunes',
      slug: 'cualquiera4'
    },  
    {
      title: 'Nefrología',
      fullName:  'Dra. Anabel Rosario Olea',
      gender: 'famale',
      consultingRoom: 6,
      cosultationDays:[ '8:00 am y 12:00 pm'],
      timeTable: 'Jueves',
      slug: 'cualquiera5'
    },  
    {
      title: 'Nutriología',
      fullName:  'Dra. Miwolkis Danessa Thomas',
      gender: 'famale',
      consultingRoom: 3,
      cosultationDays:[ '8:00 am a 3:00 pm'],
      timeTable: 'Lunes a Viernes',
      slug: 'cualquiera6'
    },
    {
      title: 'Nutriología',
      fullName:  'Dra. Lidiana Linoska Felix Guzmán',
      gender: 'famale',
      consultingRoom: 6,
      cosultationDays:[ '2:00 pm a 5:00 pm'],
      timeTable: 'Lunes y Miercoles',
      slug: 'cualquiera7'
    },
    {
      title: 'Oftalmología',
      fullName:  'Dra. Tammy Isidora Reyes Morales',
      gender: 'famale',
      consultingRoom: 7,
      cosultationDays:[ '2:00 pm a 5:00 pm'],
      timeTable: 'Viernes',
      slug: 'cualquiera8'
    },
    {
      title: 'Medicina General',
      fullName:  'Dra. María Ramírez',
      gender: 'famale',
      consultingRoom: 2,
      cosultationDays:[ '8:00 am a 5:00 pm'],
      timeTable: 'Lunes a Viernes',
      slug: 'cualquiera9'
    },
    {
      title: 'Odontología',
      fullName:  'Dra. Yosandri Leyba',
      gender: 'famale',
      consultingRoom: 4,
      cosultationDays:[ '8:00 am a 12:00 pm y 8:00 am a 5:00 pm '],
      timeTable: 'Lunes a Jueves y Viernes',
      slug: 'cualquiera10'
    },
    {
      title: 'Psicología',
      fullName:  'Lic Sinthia Mora Morfa',
      gender: 'famale',
      consultingRoom: 4,
      cosultationDays:[ '8:00 am a 12:00 pm'],
      timeTable: 'Viernes',
      slug: 'cualquiera11'
    },
    {
      title: 'Psicología',
      fullName:  'Lic. Ramón Alberto Jerez Then',
      gender: 'famale',
      consultingRoom: 4,
      cosultationDays:[ '8:00 am a 12:00 pm'],
      timeTable: 'Viernes',
      slug: 'cualquiera12'
    },
    {
      title: 'Psicología',
      fullName:  'Lic Jazmin Del Rosario',
      gender: 'famale',
      consultingRoom: 4,
      cosultationDays:[ ''],
      timeTable: '',
      slug: 'cualquiera13'
    },
    {
      title: 'Psicología',
      fullName:  'Dra. Mabelis Peña Mendez',
      gender: 'famale',
      consultingRoom: 3,
      cosultationDays:[ ''],
      timeTable: '',
      slug: 'cualquiera14'
    },
    {
      title: 'Medicina General / Paliativa',
      fullName:  'Dra. Cindy Pimentel',
      gender: 'famale',
      consultingRoom: 5,
      cosultationDays:[ ''],
      timeTable: '',
      slug: 'cualquiera15'
    },
    {
      title: 'Ginecología',
      fullName:  'Dr. Yistten Quezada',
      gender: 'famale',
      consultingRoom: 6,
      cosultationDays:[ ''],
      timeTable: '',
      slug: 'cualquiera16'
    },
    {
      title: 'Ginecología',
      fullName:  'Dra. Ironelis Caridad Felix',
      gender: 'famale',
      consultingRoom: 2,
      cosultationDays:[ ''],
      timeTable: '',
      slug: 'cualquiera17'
    },
    {
      title: 'Medicina Familiar',
      fullName:  'Dra. Sirsa Feliz',
      gender: 'famale',
      consultingRoom: 1,
      cosultationDays:[ ''],
      timeTable: '',
      slug: 'cualquiera18'
    },
    {
      title: 'Medicina Familiar',
      fullName:  'Dra. Catalina del Rosario',
      gender: 'famale',
      consultingRoom: 2,
      cosultationDays:[ '8:00 am a 5:00 pm'],
      timeTable: 'Lunes a Viernes',
      slug: 'cualquiera19'
    }
  ]
}