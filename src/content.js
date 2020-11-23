import sectionMacroImg from './Assets/section-macros.jpg';
import sectionPortraitsImg from './Assets/section-portraits.jpg';
import sectionGraphistesImg from './Assets/section-graphistes.jpg';

const sectionText = [
    {
        id: 1,
        classe: 'macros',
        title: 'Monde Macros',
        description:
            "La plupart des photos macro sont réalisées avec la méthode du focus stacking (en français, empilement de mises au point) . Plusieurs photos sont prises en rapprochant à chaque fois l'appareil qui est monté sur un rail micrométrique décalant à chaque fois le plan de  mise au point. Les images réalisée, sont compilées par Helicon Focus  qui  va extraire les parties nettes de chaque photo pour constituer l’image finale avec une grande profondeur de champ.",
        image: sectionMacroImg,
    },
    {
        id: 2,
        classe: 'portraits',
        title: 'Studio Portraits',
        description: `Pendant le shooting, les image sont envoyées directement par wifi sur un écran 27 " . Le modèle peut juger Le rendu, des éclairages, de sa pose, de son expression. 
        \n
        OU : Le portrait transcrit une expression qui caractérise le modèle vis à vis de ses proches. A la fois ses traits physiques, mais aussi sa posture, son rang social, ses habitudes de vie, son univers, sa singularité.
        `,
        image: sectionPortraitsImg,
    },
    {
        id: 3,
        classe: 'graphistes',
        title: 'Au Café des Graphistes',
        description:
            'La retouche et les manipulations des images sont réalisées avec Photoshop CC via une tablette numérique Wacom.',
        image: sectionGraphistesImg,
    },
    // {
    //     id:
    //     classe: '',
    //     title: '',
    //     description: '',
    // },
];

export default sectionText;
