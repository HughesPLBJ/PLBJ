// ============================================================
//  PREMIER LEAGUE BLACKJACK — DATA FILE
//  This is the ONLY file you need to edit to update the comp.
// ============================================================
//
//  TO UPDATE GOALS:  find the player in the PLAYERS list below
//                    and change their "goals" number.
//
//  TO MARK AS PAID:  in the ENTRIES list, change paid: false
//                    to paid: true for that person.
//
//  IF A PLAYER IS OUT FOR THE SEASON (injury, transfer abroad,
//  etc.):  add  out: true  to that player's line, e.g.
//                    { name: "Player", club: "ARS", goals: 0, out: true },
//                    Anyone holding an out player who scored ZERO
//                    goals busts. If they scored first, goals stay.
//
//  FORMAT:  4 players per entry · combined goals cap = 21 ·
//           go over 21 = BUST · all four must score at least
//           once by season end or the entry is void.
//
//  After editing, save/commit the file — the leaderboard
//  updates automatically.
// ============================================================

const CAP = 21;
const LAST_UPDATED = "23/08/26";

// Club colours — primary hex used for the badge + accent bar.
// Add or edit clubs here; the 3-letter code is what players reference.
const CLUBS = {
  ARS: { name: "Arsenal",            color: "#EF0107" },
  AVL: { name: "Aston Villa",        color: "#95BFE5" },
  BOU: { name: "Bournemouth",        color: "#DA291C" },
  BRE: { name: "Brentford",          color: "#E30613" },
  BHA: { name: "Brighton",           color: "#0057B8" },
  CHE: { name: "Chelsea",            color: "#034694" },
  CRY: { name: "Crystal Palace",     color: "#1B458F" },
  EVE: { name: "Everton",            color: "#003399" },
  FUL: { name: "Fulham",             color: "#CFcfcf" },
  LEE: { name: "Leeds United",       color: "#FFE100" },
  LIV: { name: "Liverpool",          color: "#C8102E" },
  MCI: { name: "Man City",           color: "#6CABDD" },
  MUN: { name: "Man United",         color: "#DA291C" },
  NEW: { name: "Newcastle",          color: "#241F20" },
  NFO: { name: "Nottm Forest",       color: "#DD0000" },
  SUN: { name: "Sunderland",         color: "#EB172B" },
  TOT: { name: "Tottenham",          color: "#132257" },
  COV: { name: "Coventry City",      color: "#87CEEB" },
  HUL: { name: "Hull City",          color: "#F5A12D" },
  IPS: { name: "Ipswich Town",       color: "#3A64A3" },
};

// PLAYERS — edit goals here. "club" is the 3-letter code from CLUBS above.
const PLAYERS = [
  { name: "Kai Havertz",   club: "ARS", goals: 1, out: false },
  { name: "Declan Rice",   club: "ARS", goals: 20, out: false },
  { name: "John McGinn",  club: "AVL", goals: 0, out: false },
  { name: "Matty Cash",  club: "AVL", goals: 0, out: false },
  { name: "Kevin Schade",  club: "BRE", goals: 0, out: false },
  { name: "Moises Caicedo",  club: "CHE", goals: 0, out: false },
  { name: "Morgan Rogers",  club: "CHE", goals: 0, out: false },
  { name: "Danny Welbeck",  club: "CHE", goals: 0, out: false },
  { name: "Gustavo Hamer",  club: "COV", goals: 0, out: false },
  { name: "Ismalia Sarr",  club: "CRY", goals: 0, out: false },
  { name: "Daniel Munoz",  club: "CRY", goals: 0, out: false },
  { name: "James Tarkowski",  club: "EVE", goals: 0, out: false },
  { name: "Illiman NDiaye",  club: "EVE", goals: 0, out: false },
  { name: "Gonzalo Garcia",  club: "FUL", goals: 0, out: false },
  { name: "Emile Smith Rowe",  club: "FUL", goals: 0, out: false },
  { name: "Oli McBurnie",  club: "HUL", goals: 0, out: false },
  { name: "Mo Belloumi",  club: "HUL", goals: 0, out: false },
  { name: "Anton Stach", club: "LEE", goals: 1, out: false },
  { name: "Harry Wilson", club: "LEE", goals: 0, out: false },
  { name: "Tarik Muharemović", club: "LEE", goals: 0, out: false },
  { name: "Virgil Van Dijk", club: "LIV", goals: 0, out: false },
  { name: "Dominik Szoboszlai", club: "LIV", goals: 1, out: false },
  { name: "Elliot Anderson", club: "MCI", goals: 0, out: false },
  { name: "Marc Guehi", club: "MCI", goals: 1, out: false },
  { name: "Nico O'Reilly", club: "MCI", goals: 0, out: false },
  { name: "Rayan Cherki", club: "MCI", goals: 0, out: false },
  { name: "Bruno Fernandes", club: "MUN", goals: 0, out: false },
  { name: "Matheus Chunha", club: "MUN", goals: 0, out: false },
  { name: "Youri Tielemans", club: "MUN", goals: 0, out: false },
  { name: "Harry McGuire", club: "MUN", goals: 0, out: false },
  { name: "Malick Thiaw", club: "NEW", goals: 0, out: false },
  { name: "Jacob Murphy", club: "NEW", goals: 0, out: false },
  { name: "Brian Brobbey", club: "SUN", goals: 0, out: false },

];

// ENTRIES — each person picks 4 players (reference by exact name).
const ENTRIES = [
  { name: "Lewis Hughes", paid: false, players: ["Bruno Fernandes", "Virgil Van Dijk", "Anton Stach", "John McGinn"] },
  { name: "Ryan Archer", paid: false,  players: ["Gonzalo Garcia", "Virgil Van Dijk", "Anton Stach", "Kai Havertz"] },
  { name: "Nathan Beevers", paid: true,  players: ["Oli McBurnie", "Malick Thiaw", "Illiman NDiaye", "Nico O'Rielly"] },
  { name: "Tom Millbank", paid: false,  players: ["Bruno Fernandes", "Elliot Anderson", "Marc Guehi", "James Tarkowski"] },
  { name: "Jack Wrigglesworth", paid: false,  players: ["Morgan Rogers", "Tarik Muharemović", "Danny Welbeck", "Matheus Cunha"] },
  { name: "Adam Taylor", paid: false,  players: ["Declan Rice", "Virgil Van Dijk", "Dominik Szoboszlai", "Emile Smith Rowe"] },
  { name: "Ebun Karim", paid: false,  players: ["Bruno Fernandes", "Ismalia Sarr", "Virgil Van Dijk", "Daniel Munoz"] },
  { name: "Chris Dent", paid: false,  players: ["Brian Brobbey", "Mo Belloumi", "Dominik Szoboszlai", "Nico O'Reilly"] },
  { name: "Tom Leeman", paid: true,  players: ["Bruno Fernandes", "Harry Wilson", "Ismalia Sarr", "Maises Caicedo"] },
  { name: "Charlie Olsson", paid: false,  players: ["Declan Rice", "Kevin Schade", "Tarik Muharemović", "Harry McGuire"] },
  { name: "Kev Mitchell", paid: true,  players: ["Matty Cash", "Gustavo Hamer", "Jacob Murphy", "Youri Tielemans"] },
  { name: "Dean Jackson", paid: true,  players: ["Declan Rice", "Harry Wilson", "Jacob Murphy", "Youri Tielemans"] },
  { name: "Rob Bedford", paid: true,  players: ["Rayan Cherki", "Harry Wilson", "Declan Rice", "John McGinn"] },
];
