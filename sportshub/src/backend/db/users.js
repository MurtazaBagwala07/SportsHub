import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
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
    _id: uuid(),
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
    _id: uuid(),
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
