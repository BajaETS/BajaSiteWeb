import type { Sponsor, SponsorTier, SponsorTierId } from './types'
import { TIER_COLORS } from '@/theme/tokens.mjs'

/**
 * THE SPONSORS.
 *
 * This used to live inside the partners page component, where adding a sponsor meant
 * editing 482 lines of React and getting the punctuation exactly right. Now it is data.
 *
 * -- Adding a sponsor ----------------------------------------------------------
 *   1. Put the logo in public/Partners/<tier>/ - a PNG with a transparent background.
 *   2. Add a line to SPONSORS below. Copy an existing one and edit it.
 *   3. Run: npm run check
 *      It will tell you if the logo path is wrong before anything reaches the site.
 *
 * -- A sponsorship ended -------------------------------------------------------
 *   Change active: true to active: false. DO NOT delete the line.
 *   The entry stays as a record of who has supported the team, and disappears from
 *   the site. If they come back next year, flip it back.
 *
 * -- A sponsor changed tier ----------------------------------------------------
 *   Change their "tier", and move their logo file into the matching folder under
 *   public/Partners/.
 *
 * -- Adding a whole new tier ---------------------------------------------------
 *   1. Add its id to SponsorTierId in ./types.ts.
 *   2. Add a colour for it to TIER_COLORS in src/theme/tokens.mjs.
 *   3. Add an entry to SPONSOR_TIERS below and put it in TIER_ORDER.
 *   4. Add its name under "partners.ranking" in BOTH message files.
 *   TypeScript will not let you forget step 3 - it fails the build until every tier
 *   listed in SponsorTierId has an entry here.
 *
 * "messageKey" is optional and points at a thank-you paragraph in the message files.
 * Only platinum sponsors have one today.
 */

/** How each tier is displayed. logoWidth/logoHeight are the logo box, in pixels. */
export const SPONSOR_TIERS: Record<SponsorTierId, SponsorTier> = {
  platinum: {
    labelKey: 'partners.ranking.platinum',
    accent: TIER_COLORS.platinum,
    logoWidth: 250,
    logoHeight: 0, // 0 means "keep the logo's own proportions" (was height: 'auto')
  },
  gold: {
    labelKey: 'partners.ranking.gold',
    accent: TIER_COLORS.gold,
    logoWidth: 180,
    logoHeight: 180,
  },
  silver: {
    labelKey: 'partners.ranking.silver',
    accent: TIER_COLORS.silver,
    logoWidth: 150,
    logoHeight: 150,
  },
  bronze: {
    labelKey: 'partners.ranking.bronze',
    accent: TIER_COLORS.bronze,
    logoWidth: 100,
    logoHeight: 100,
  },
}

/** Richest tier first. This is the order the page shows them in. */
export const TIER_ORDER: SponsorTierId[] = ['platinum', 'gold', 'silver', 'bronze']

export const SPONSORS: Sponsor[] = [
  // ---- platinum (5 active, 3 past) ----
  {
    name: 'BRP',
    tier: 'platinum',
    logo: '/Partners/platinum/BRP.png',
    link: 'https://www.brp.com/',
    active: true,
    messageKey: 'partners.platinum-messages.BRP',
  },
  {
    name: 'Blaxes',
    tier: 'platinum',
    logo: '/Partners/platinum/Blaxes.png',
    link: 'https://blaxes.com',
    active: true,
    messageKey: 'partners.platinum-messages.Blaxes',
  },
  {
    name: 'OSG',
    tier: 'platinum',
    logo: '/Partners/platinum/osg.png',
    link: 'https://osgcanada.com/osg/',
    active: true,
    messageKey: 'partners.platinum-messages.OSG',
  },
  {
    name: 'SKF Bearings',
    tier: 'platinum',
    logo: '/Partners/platinum/skf.png',
    link: 'https://www.skf.com/ca/en',
    active: true,
    messageKey: 'partners.platinum-messages.SKF',
  },
  {
    name: 'AEETS',
    tier: 'platinum',
    logo: '/Partners/platinum/AEETS.png',
    link: 'https://aeets.com',
    active: true,
    messageKey: 'partners.platinum-messages.AEETS',
  },
  {
    name: 'École de technologie supérieure',
    tier: 'platinum',
    logo: '/Partners/platinum/ets.png',
    link: 'https://www.etsmtl.ca',
    active: false,
    messageKey: 'partners.platinum-messages.ETS',
  },
  {
    name: 'Ressorts Liberté',
    tier: 'platinum',
    logo: '/Partners/platinum/RessortsLiberte.png',
    link: 'https://www.libertyspring.com/?lang=fr',
    active: false,
    messageKey: 'partners.platinum-messages.RessortsLiberte',
  },
  {
    name: 'Altium',
    tier: 'platinum',
    logo: '/Partners/platinum/altium.png',
    link: 'https://www.altium.com',
    active: false,
    messageKey: 'partners.platinum-messages.Altium',
  },
  // ---- gold (14 active, 5 past) ----
  {
    name: 'CNC Tracy',
    tier: 'gold',
    logo: '/Partners/gold/CNCtracy.png',
    link: 'https://cnctracy.com',
    active: true,
  },
  {
    name: 'Drillmex',
    tier: 'gold',
    logo: '/Partners/gold/Drillmex.png',
    link: 'https://drillmex.com/',
    active: true,
  },
  {
    name: 'ESCI',
    tier: 'gold',
    logo: '/Partners/gold/ESCI.png',
    link: 'http://www.engrenage-esci.com/',
    active: true,
  },
  {
    name: 'GMN Bearing USA',
    tier: 'gold',
    logo: '/Partners/gold/GMn.png',
    link: 'https://www.gmnbt.com/',
    active: true,
  },
  {
    name: 'GMP Friction',
    tier: 'gold',
    logo: '/Partners/gold/GMPfriction.png',
    link: 'https://gmpfriction.com/',
    active: true,
  },
  {
    name: 'Engrenage LB',
    tier: 'gold',
    logo: '/Partners/gold/engrenageslb.png',
    link: 'https://engrenagelb.ca/',
    active: true,
  },
  {
    name: 'KISSsoft',
    tier: 'gold',
    logo: '/Partners/gold/KISSsoft.png',
    link: 'https://www.kisssoft.com/en',
    active: true,
  },
  {
    name: 'SEGGER',
    tier: 'gold',
    logo: '/Partners/gold/segger.png',
    link: 'https://www.segger.com/',
    active: true,
  },
  {
    name: 'Cégep de Saint-Laurent',
    tier: 'gold',
    logo: '/Partners/gold/cstlaurent.png',
    link: 'https://www.cegepsl.qc.ca/',
    active: true,
  },
  {
    name: 'Lotus Design',
    tier: 'gold',
    logo: '/Partners/gold/lotusdesign.png',
    link: 'https://www.lotus-design.ca/',
    active: true,
  },
  {
    name: 'Rapid Harness',
    tier: 'gold',
    logo: '/Partners/gold/rapidharness.png',
    link: 'https://rapidharness.com/',
    active: true,
  },
  {
    name: 'ELKA',
    tier: 'gold',
    logo: '/Partners/gold/ELKA.png',
    link: 'https://www.elkasuspension.com/',
    active: true,
  },
  {
    name: 'Iscar',
    tier: 'gold',
    logo: '/Partners/gold/iscar.png',
    link: 'https://www.iscar.com/',
    active: true,
  },
  {
    name: 'CVTech-IBC',
    tier: 'gold',
    logo: '/Partners/silver/CVTech-IBC.png',
    link: 'https://cvtech-ibc.com/home/',
    active: true,
  },
  // NOTE: logo file is missing from public/ - restore it before setting active: true
  {
    name: 'BRP',
    tier: 'gold',
    logo: '/Partners/gold/BRP.png',
    link: 'https://www.brp.com/',
    active: false,
  },
  {
    name: 'Industrie L',
    tier: 'gold',
    logo: '/Partners/gold/IndustrieL.png',
    link: 'https://www.industrie-l.ca/',
    active: false,
  },
  {
    name: 'Mesotec',
    tier: 'gold',
    logo: '/Partners/gold/mesotec.png',
    link: 'https://mesotec.ca/',
    active: false,
  },
  {
    name: 'Solidworks',
    tier: 'gold',
    logo: '/Partners/gold/Solidworks.png',
    link: 'https://www.solidworks.com/',
    active: false,
  },
  {
    name: 'Lenovo Canada',
    tier: 'gold',
    logo: '/Partners/gold/lenovo.png',
    link: 'https://www.lenovo.com/ca/',
    active: false,
  },
  // ---- silver (33 active, 3 past) ----
  {
    name: 'Acier Richelieu',
    tier: 'silver',
    logo: '/Partners/silver/aciersRichelieu.png',
    link: 'https://www.aciers-richelieu.com/',
    active: true,
  },
  {
    name: 'Amcan Jumax',
    tier: 'silver',
    logo: '/Partners/silver/amcanjumax.png',
    link: 'http://amcanjumax.com/',
    active: true,
  },
  {
    name: 'Anodisation Expert',
    tier: 'silver',
    logo: '/Partners/silver/AnodisationExpert.png',
    link: 'https://anodisationexpert.com/',
    active: true,
  },
  {
    name: 'Applied Industrial Technologies',
    tier: 'silver',
    logo: '/Partners/silver/appliedindustrial.png',
    link: 'https://www.applied.com/',
    active: true,
  },
  {
    name: 'Avaled',
    tier: 'silver',
    logo: '/Partners/silver/avaled.png',
    link: 'http://www.avaled.com/',
    active: true,
  },
  {
    name: 'Canimex',
    tier: 'silver',
    logo: '/Partners/silver/Canimex.png',
    link: 'https://www.groupecanimex.com/',
    active: true,
  },
  {
    name: 'Castrol',
    tier: 'silver',
    logo: '/Partners/silver/castrol.png',
    link: 'https://www.castrol.com/en_ca/canada/home.html',
    active: true,
  },
  {
    name: 'CK Worldwide',
    tier: 'silver',
    logo: '/Partners/silver/CKworldwide.png',
    link: 'https://www.ckworldwide.com/',
    active: true,
  },
  {
    name: 'CTA CNC',
    tier: 'silver',
    logo: '/Partners/silver/CTA.png',
    link: 'https://www.cegepmontpetit.ca/cta',
    active: true,
  },
  {
    name: 'Drill-O-Max',
    tier: 'silver',
    logo: '/Partners/silver/DrillOMax.png',
    link: 'http://drillomax.com/profil_fr.htm',
    active: true,
  },
  {
    name: 'Extruflex',
    tier: 'silver',
    logo: '/Partners/silver/Extruflex.png',
    link: 'https://www.extruflex.net/',
    active: true,
  },
  {
    name: 'Ferndale Safety',
    tier: 'silver',
    logo: '/Partners/silver/ferndale.png',
    link: 'https://www.ferndalesafety.com/',
    active: true,
  },
  {
    name: 'Gene Haas Foundation',
    tier: 'silver',
    logo: '/Partners/silver/haas.png',
    link: 'https://ghaasfoundation.org/content/ghf/en/home.html',
    active: true,
  },
  {
    name: 'General Dynamics',
    tier: 'silver',
    logo: '/Partners/silver/generaldynamics.png',
    link: 'https://www.gd.com/',
    active: true,
  },
  {
    name: 'Groupe Fusia',
    tier: 'silver',
    logo: '/Partners/silver/FusiaGroupe.png',
    link: 'https://www.fusia-groupe.com/',
    active: true,
  },
  {
    name: 'Hutchinson',
    tier: 'silver',
    logo: '/Partners/silver/hutchinson.png',
    link: 'https://www.hutchinsoninc.com/',
    active: true,
  },
  {
    name: 'Igus',
    tier: 'silver',
    logo: '/Partners/silver/igus.png',
    link: 'https://www.igus.com/',
    active: true,
  },
  {
    name: 'Kimpex',
    tier: 'silver',
    logo: '/Partners/silver/kimpex.png',
    link: 'https://www.kimpex.com/fr-ca/accueil',
    active: true,
  },
  {
    name: 'LAMSI',
    tier: 'silver',
    logo: '/Partners/silver/lamsi.png',
    link: 'https://www.etsmtl.ca/laboratoires/lamsi',
    active: true,
  },
  {
    name: 'MEGATECH',
    tier: 'silver',
    logo: '/Partners/silver/megatech.png',
    link: 'https://brpmegatech.com/en/',
    active: true,
  },
  {
    name: 'Métal CN',
    tier: 'silver',
    logo: '/Partners/silver/MetalCN.png',
    link: 'https://metalcn.ca/',
    active: true,
  },
  {
    name: 'Odessa',
    tier: 'silver',
    logo: '/Partners/silver/odessa.png',
    link: 'http://odessacanada.com/',
    active: true,
  },
  {
    name: 'Odrive Robotics',
    tier: 'silver',
    logo: '/Partners/silver/odrive.png',
    link: 'https://odriverobotics.com/',
    active: true,
  },
  {
    name: 'Ressorts Liberté',
    tier: 'silver',
    logo: '/Partners/silver/RessortsLiberte.png',
    link: 'https://www.libertyspring.com/?lang=fr',
    active: true,
  },
  {
    name: 'Sodel',
    tier: 'silver',
    logo: '/Partners/silver/Sodel.png',
    link: 'https://www.sodel.com/',
    active: true,
  },
  {
    name: 'Solufab',
    tier: 'silver',
    logo: '/Partners/silver/Solufab.png',
    link: 'https://www.solufab.ca/',
    active: true,
  },
  {
    name: 'Soucy International',
    tier: 'silver',
    logo: '/Partners/silver/SoucyInter.png',
    link: 'https://www.soucy-group.com/',
    active: true,
  },
  {
    name: 'Stageline',
    tier: 'silver',
    logo: '/Partners/silver/stageline.png',
    link: 'https://stageline.com/fr/',
    active: true,
  },
  {
    name: 'Tech-53',
    tier: 'silver',
    logo: '/Partners/silver/Tech53.png',
    link: 'https://tech-53.com/',
    active: true,
  },
  {
    name: 'Thermetco',
    tier: 'silver',
    logo: '/Partners/silver/Thermetco.png',
    link: 'https://www.thermetco.com/fr/',
    active: true,
  },
  {
    name: 'TT Fabrication 3D',
    tier: 'silver',
    logo: '/Partners/silver/TTFab3D.png',
    link: 'https://www.facebook.com/TTFabrication3D/',
    active: true,
  },
  {
    name: 'TS Innovation',
    tier: 'silver',
    logo: '/Partners/silver/tsinnovation.png',
    link: 'https://tsinnovation.ca/en/',
    active: true,
  },
  {
    name: 'Walter',
    tier: 'silver',
    logo: '/Partners/silver/Walter.png',
    link: 'https://www.walter.com/fr_CA',
    active: true,
  },
  {
    name: 'Anodisation Québec',
    tier: 'silver',
    logo: '/Partners/silver/anodisationQuebec.png',
    link: 'https://www.anodisationquebec.com/',
    active: false,
  },
  {
    name: 'Centric Iterations',
    tier: 'silver',
    logo: '/Partners/silver/centriciterations.png',
    link: 'https://www.centriciterations.com/',
    active: false,
  },
  {
    name: 'Laser Amp',
    tier: 'silver',
    logo: '/Partners/silver/LaserAMP.png',
    link: 'https://www.laseramp.com/',
    active: false,
  },
  // ---- bronze (17 active, 8 past) ----
  {
    name: '3M',
    tier: 'bronze',
    logo: '/Partners/bronze/3M.png',
    link: 'https://www.3mcanada.ca/3M/fr_CA/p/',
    active: true,
  },
  {
    name: 'AFCO',
    tier: 'bronze',
    logo: '/Partners/bronze/afco.png',
    link: 'https://www.afcoracing.com/',
    active: false,
  },
  {
    name: 'Anodisation Québec',
    tier: 'bronze',
    logo: '/Partners/bronze/anodisationQuebec.png',
    link: 'https://www.anodisationquebec.com/',
    active: true,
  },
  {
    name: 'Apaulo',
    tier: 'bronze',
    logo: '/Partners/bronze/apaulo.png',
    link: 'https://apaulo.ca/',
    active: true,
  },
  {
    name: 'Cleio',
    tier: 'bronze',
    logo: '/Partners/bronze/cleio.png',
    link: 'https://www.cleio.com/',
    active: true,
  },
  {
    name: 'CTA',
    tier: 'bronze',
    logo: '/Partners/bronze/cta.png',
    link: 'https://www.cegepmontpetit.ca/cta',
    active: true,
  },
  {
    name: 'Élasto Proxy',
    tier: 'bronze',
    logo: '/Partners/bronze/elastoProxy.png',
    link: 'https://www.elastoproxy.com/',
    active: true,
  },
  {
    name: 'IFM',
    tier: 'bronze',
    logo: '/Partners/bronze/IFM.png',
    link: 'https://www.ifm.com/ca/fr',
    active: true,
  },
  {
    name: 'Joints Étanches RB',
    tier: 'bronze',
    logo: '/Partners/bronze/JointsEtanchesRB.png',
    link: 'https://www.sealsonline.com/rbqc/',
    active: true,
  },
  {
    name: 'Marmen Inc.',
    tier: 'bronze',
    logo: '/Partners/bronze/marmen.png',
    link: 'https://marmeninc.com/',
    active: true,
  },
  {
    name: 'Outils Pierre Berger',
    tier: 'bronze',
    logo: '/Partners/bronze/OutilsPB.png',
    link: 'https://www.outilspierreberger.com/',
    active: true,
  },
  {
    name: 'Prismatic Powders',
    tier: 'bronze',
    logo: '/Partners/bronze/prismaticPowders.png',
    link: 'https://www.prismaticpowders.com/',
    active: true,
  },
  {
    name: 'Prolab',
    tier: 'bronze',
    logo: '/Partners/bronze/prolab.png',
    link: 'https://www.prolabtechnolub.com/',
    active: true,
  },
  {
    name: 'SAMTEC',
    tier: 'bronze',
    logo: '/Partners/bronze/samtec.png',
    link: 'https://www.samtec.com/',
    active: true,
  },
  {
    name: 'Solaxis',
    tier: 'bronze',
    logo: '/Partners/bronze/solaxis.png',
    link: 'https://solaxis.ca/',
    active: true,
  },
  {
    name: 'Vanguard Steel',
    tier: 'bronze',
    logo: '/Partners/bronze/vanguardSteel.png',
    link: 'https://vanguardsteel.com/',
    active: true,
  },
  {
    name: 'VR3 Engineering',
    tier: 'bronze',
    logo: '/Partners/bronze/vr3.png',
    link: 'https://vr3.ca/',
    active: true,
  },
  {
    name: 'Groupe EP',
    tier: 'bronze',
    logo: '/Partners/bronze/groupeep.png',
    link: 'https://www.groupeep.com/',
    active: true,
  },
  {
    name: 'CVTech-IBC',
    tier: 'bronze',
    logo: '/Partners/bronze/CVTech-IBC.png',
    link: 'https://cvtech-ibc.com/home/',
    active: false,
  },
  {
    name: 'Campagna Motors',
    tier: 'bronze',
    logo: '/Partners/bronze/campagna.png',
    link: 'https://trex.campagnamotors.com/fr/',
    active: false,
  },
  {
    name: 'Rousseau',
    tier: 'bronze',
    logo: '/Partners/bronze/rousseau.png',
    link: 'https://www.rousseau.com/',
    active: false,
  },
  {
    name: 'Innovair Solutions',
    tier: 'bronze',
    logo: '/Partners/bronze/innovair.png',
    link: 'https://www.innovairsolutions.com/en-ca/default.aspx',
    active: false,
  },
  {
    name: 'Groupe EP',
    tier: 'bronze',
    logo: '/Partners/bronze/groupeep.png',
    link: 'https://www.groupeep.com/',
    active: false,
  },
  {
    name: 'SolidXperts',
    tier: 'bronze',
    logo: '/Partners/bronze/solidxperts.png',
    link: 'https://www.solidxperts.com/',
    active: false,
  },
  {
    name: 'DamiFilms',
    tier: 'bronze',
    logo: '/Partners/bronze/damifilms.png',
    link: 'https://instagram.com/dami.films/',
    active: false,
  },
]
