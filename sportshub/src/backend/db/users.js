import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 'd0256cee-862b-4fe5-852d-f12392e52a95',
    name:'Sergio',
    username: "sergioR",
    password: "sergioRamos",
    fav_Sport: 'Football',
    fav_Athlete: 'Ramos',
    profilePicture:'',
    followers:[],
    following:[],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 'cfc37be2-44e4-45a8-b082-7aa17a1dcf99',
    name:'Eder',
    username: "ederM",
    password: "ederMilitao",
    fav_Sport: 'Football',
    fav_Athlete: 'Pepe',
    profilePicture: '',
    followers:[],
    following:[],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 'b8964c6c-344d-40bd-b5fe-e9fd31d24ca2',
    name:'Novak',
    username: "djoker",
    password: "djokovic",
    fav_Sport: 'Tennis',
    fav_Athlete: 'Nadal',
    profilePicture: '',
    followers:[],
    following:[],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
