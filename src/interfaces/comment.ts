// {
//     "id": 3,
//     "content": "sample content",
//     "blocked": false,
//     "blockedThread": false,
//     "blockReason": null,
//     "isAdminComment": null,
//     "removed": null,
//     "approvalStatus": null,
//     "related": "api::article.article:10",
//     "createdAt": "2024-07-12T09:54:32.041Z",
//     "updatedAt": "2024-07-12T09:54:32.041Z",
//     "threadOf": null,
//     "author": {
//         "id": "asdf",
//         "name": "example name",
//         "email": "me@obtuse.kr",
//         "avatar": ""
//     }
// }

export default interface Comment {
  id: number;
  content: string;
  blocked: boolean;
  blockedThread: boolean;
  blockReason: string | null;
  isAdminComment: boolean | null;
  removed: boolean | null;
  approvalStatus: string | null;
  related: string;
  createdAt: string;
  updatedAt: string;
  threadOf: string | null;
  author: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
  children: Comment[];
}
