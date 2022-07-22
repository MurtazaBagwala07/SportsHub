import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
    {
        _id: '434ba150-3c82-4514-8cc1-47a538d49c6a',
        userId: 'd0256cee-862b-4fe5-852d-f12392e52a95',
        content:
          'My top 3 defenders of all time : Nesta , Ramos , Beckenbauer.',
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: [],
        },
        name: "Sergio",
        username: "sergioR",
        profilePicture: "",
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: '8bfabb5a-498b-45f4-b19c-7267a889845f',
        userId: 'cfc37be2-44e4-45a8-b082-7aa17a1dcf99',
        content:
          'Pepe-Ramos might be the most aggressive cb pairing of all time.',
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: [],
        },
        name: "Eder",
        username: "ederM",
        profilePicture: "",
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: 'e4b2aa17-a057-49ba-95ca-3d00fcdf4ecd',
        userId: 'b8964c6c-344d-40bd-b5fe-e9fd31d24ca2',
        content:
          'Nadal is my GOAT.',
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: [],
        },
        name: "Novak",
        username: "djoker",
        profilePicture: "",
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: '1b67243d-08a2-4523-a1fc-260af5586634',
        userId: 'd0256cee-862b-4fe5-852d-f12392e52a95',
        content:
          '14 champions league > 5 champions league',
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: [],
        },
        name: "Sergio",
        username: "sergioR",
        profilePicture: "",
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: '3a70dfa4-c71c-4136-a30c-19bcb2bf55ba',
        userId: '6df71771-8722-4ad7-ad99-fcc7a2440915',
        content:
          'Theres a reason he is called Sir Jadeja.',
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: [],
        },
        name: "Warne",
        username: "rockkstar",
        profilePicture: "",
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
    {
        _id: '61657692-05c4-4dc8-aa25-1fca4e83e77b',
        userId: '6df71771-8722-4ad7-ad99-fcc7a2440915',
        content:
          'Chennai Super King is the biggest IPL franchise.',
        likes: {
          likeCount: 0,
          likedBy: [],
          dislikedBy: [],
        },
        name: "Warne",
        username: "rockkstar",
        profilePicture: "",
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
];
