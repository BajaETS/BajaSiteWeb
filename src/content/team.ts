import type { TeamSection } from './types'

/**
 * THE TEAM ROSTER.
 *
 * -- Adding a member -----------------------------------------------------------
 *   1. Put their photo in public/Team/ (a square crop looks best - the site shows a circle).
 *   2. Copy an existing line below, paste it into the right section, edit the values.
 *   3. programKey and roleKeys are LOOKUPS, not text. Each value must already exist under
 *      "team.programs" / "team.roles" in messages/en.json AND messages/fr.json. Always write
 *      the key in full, starting with "team.". If the role
 *      you need is not there yet, add it to both message files first.
 *   4. Run: npm run check
 *      It tells you if a photo path or a key is wrong, before the site breaks.
 *
 * -- Removing a member ---------------------------------------------------------
 *   Delete their line. Delete their photo from public/Team/ too, if nobody else uses it.
 *
 * -- Someone changed role ------------------------------------------------------
 *   Edit their roleKeys. Somebody can hold more than one:
 *     roleKeys: ['team.roles.mechanics', 'team.roles.cvt-lead']
 *
 * The order here is the order shown on the page. "nickname" and "linkedin" are optional:
 * leave the whole property out if the person does not have one.
 *
 * This roster used to be copied into BOTH message files, identically - 171 values in each,
 * none of which changed with language. It lives here once now.
 */
export const TEAM_SECTIONS: TeamSection[] = [
  {
    titleKey: 'team.title.management',
    members: [
      {
        name: 'Annabelle Gagnon',
        image: '/Team/Annabelle2.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.team-captain'],
        nickname: 'Annacool',
        linkedin: 'https://www.linkedin.com/in/annabelle-gagnon-ab8313311/',
      },
      {
        name: 'Charles Grenier',
        image: '/Team/berp2.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.technical-director'],
        nickname: 'Berp',
        linkedin: 'https://www.linkedin.com/in/charles-grenier-b45627292/',
      },
      {
        name: 'Élie Bazinet',
        image: '/Team/elie2.jpg',
        programKey: 'team.programs.construction-engineering',
        roleKeys: ['team.roles.treasurer'],
        nickname: 'Élie-coptère',
        linkedin: 'https://www.linkedin.com/in/%C3%A9lie-bazinet-ab2777368/',
      },
    ],
  },
  {
    titleKey: 'team.title.team-leads',
    members: [
      {
        name: 'Pierre-Alexis Lachance',
        image: '/Team/PA2.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.clutch-lead'],
        nickname: 'PA',
        linkedin: 'https://www.linkedin.com/in/pierre-alexis-lachance-360a51314/',
      },
      {
        name: 'Mika Loiselle',
        image: '/Team/MIKA2.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.brakes-lead'],
        linkedin: 'https://www.linkedin.com/in/mika-loiselle-ba010b231/',
      },
      {
        name: 'Alex Maheu',
        image: '/Team/Alex.jpeg',
        programKey: 'team.programs.electrical-engineering',
        roleKeys: ['team.roles.electronics-lead'],
        linkedin: 'https://www.linkedin.com/in/alex-maheu-6382752b5/',
      },
      {
        name: 'Léo Bazinet',
        image: '/Team/Leo.JPEG',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.suspension-lead'],
        nickname: 'Le Roux',
        linkedin: 'https://www.linkedin.com/in/léo-bazinet-78165a232/',
      },
      {
        name: 'Antoine Proulx',
        image: '/Team/Antoine.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.direction-lead'],
        nickname: 'Tony (BDT)',
        linkedin: 'https://www.linkedin.com/in/antoine-proulx-884480231/',
      },
      {
        name: 'Justin Desbois',
        image: '/Team/kantin2.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.driveline-lead'],
        nickname: 'Kantin',
        linkedin: 'https://www.linkedin.com/in/justin-desbois-043bb9293/',
      },
      {
        name: 'Aymeric Bellon',
        image: '/Team/Aymerick2.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.ergonomics-lead'],
        linkedin: 'https://www.linkedin.com/in/aymeric-bellon-855b77259/',
      },
      {
        name: 'Jacob Dôme',
        image: '/Team/default3.jpeg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.driveline-lead'],
        nickname: 'J D O M E',
        linkedin: 'https://www.linkedin.com/company/baja-ets/',
      },
    ],
  },
  {
    titleKey: 'team.title.mechanics',
    members: [
      {
        name: 'Samuel Lavigne-Cloutier',
        image: '/Team/Lavigne2.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.mechanics'],
        nickname: 'Lavigne',
        linkedin: 'https://www.linkedin.com/in/samuellavigne-cloutier/',
      },
      {
        name: 'Samuel Viens',
        image: '/Team/samViens2.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.mechanics'],
        nickname: 'Sam',
        linkedin: 'https://www.linkedin.com/in/samuel-viens-6ba976309/',
      },
      {
        name: 'Adrean Domenko',
        image: '/Team/Adrien2.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.mechanics'],
        nickname: 'AD Laurent',
        linkedin: 'https://www.linkedin.com/in/adrean-domenko-aa63562b3/',
      },
      {
        name: 'Hubert Moisan-Leduc',
        image: '/Team/Hubert.jpeg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.mechanics'],
        linkedin: 'https://www.linkedin.com/in/hubert-moisan-leduc-4ba002293/',
      },
      {
        name: 'Léo Tremblay',
        image: '/Team/leotremblay.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.mechanics'],
        linkedin: 'https://www.linkedin.com/in/l%C3%A9o-tremblay-aa88703a7/',
      },
      {
        name: 'Julien Rhéaume',
        image: '/Team/JulienRheaume.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.mechanics'],
      },
      {
        name: 'Alexandre Gauthier',
        image: '/Team/AlexandreGauthier.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.mechanics'],
        nickname: 'Goat',
        linkedin: 'https://www.linkedin.com/in/alexandregauthier7/',
      },
      {
        name: 'Christophe Labrecque',
        image: '/Team/ChristopheLabrecque.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.mechanics'],
        nickname: 'Christo',
        linkedin: 'https://www.linkedin.com/in/christophe-labrecque-8bb7b238b/',
      },
      {
        name: 'Fabrice Kwey-Du Sablon',
        image: '/Team/FabriceKwey-DuSablon.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.mechanics'],
        nickname: 'Ki-wey',
        linkedin: 'https://www.linkedin.com/in/fabrice-kwey-du-sablon-aa8363273/',
      },
      {
        name: 'Kimi Sabourin',
        image: '/Team/kimi.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.mechanics'],
        linkedin: 'https://www.linkedin.com/in/kimi-sabourin-222a3b220/',
      },
      {
        name: 'Gabriel Houle',
        image: '/Team/GabrielHoule.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.mechanics'],
        nickname: 'Gab',
        linkedin: 'https://www.linkedin.com/in/gabriel-houle2/',
      },
      {
        name: 'Marcelo Costa',
        image: '/Team/MarceloCosta.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.mechanics'],
        linkedin: 'https://www.linkedin.com/in/marcelo-costa-377657247/',
      },
      {
        name: 'Laurent Vanier',
        image: '/Team/LaurentVanier.jpg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.mechanics'],
        linkedin: 'https://www.linkedin.com/in/laurent-vanier-490766329/',
      },
      {
        name: 'Thomas Lusignan',
        image: '/Team/default1.jpeg',
        programKey: 'team.programs.mechanical-engineering',
        roleKeys: ['team.roles.mechanics'],
        nickname: 'toussaignant',
      },
    ],
  },
  {
    titleKey: 'team.title.electronics',
    members: [
      {
        name: 'Maxence Lafond',
        image: '/Team/Maxwell2.jpg',
        programKey: 'team.programs.software-engineering',
        roleKeys: ['team.roles.electronics'],
        nickname: 'Maxwell',
        linkedin: 'https://www.linkedin.com/in/maxence-lafond-b211a5218/',
      },
      {
        name: 'Maxime Poitras Cardinal',
        image: '/Team/default3.jpeg',
        programKey: 'team.programs.automated-production-engineering',
        roleKeys: ['team.roles.electronics'],
        linkedin: 'https://www.linkedin.com/in/maxime-poitras-cardinal-67b49530b/',
      },
      {
        name: 'Philippe Johnston',
        image: '/Team/PhilippeJohnston.jpg',
        programKey: 'team.programs.automated-production-engineering',
        roleKeys: ['team.roles.electronics'],
      },
      {
        name: 'Jean-Nicolas de Broeck',
        image: '/Team/default4.jpeg',
        roleKeys: ['team.roles.electronics'],
        linkedin: 'https://www.linkedin.com/in/jean-nicolas-de-broeck-189975256/',
      },
      {
        name: 'Louis-Philippe Côté',
        image: '/Team/Louis-PhilippeCote.jpg',
        programKey: 'team.programs.automated-production-engineering',
        roleKeys: ['team.roles.electronics'],
        linkedin: 'https://www.linkedin.com/in/louis-philippe-c%C3%B4t%C3%A9-373b953a6/',
      },
    ],
  },
]
