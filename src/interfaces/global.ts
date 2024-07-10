// "id": 3,
// "attributes": {
//     "createdAt": "2024-07-10T08:00:33.712Z",
//     "updatedAt": "2024-07-10T08:00:33.712Z",
//     "locale": "ko",
//     "metadata": null,
//     "favicon": {
//         "data": {
//             "id": 24,
//             "attributes": {
//                 "name": "favicon.ico",
//                 "alternativeText": null,
//                 "caption": null,
//                 "width": null,
//                 "height": null,
//                 "formats": null,
//                 "hash": "favicon_f333ed58b4",
//                 "ext": ".ico",
//                 "mime": "image/vnd.microsoft.icon",
//                 "size": 15.41,
//                 "url": "/uploads/favicon_f333ed58b4.ico",
//                 "previewUrl": null,
//                 "provider": "local",
//                 "provider_metadata": null,
//                 "createdAt": "2023-03-06T22:18:36.616Z",
//                 "updatedAt": "2024-07-09T07:05:11.380Z"
//             }
//         }
//     },
//     "notificationBanner": null,
//     "navbar": {
//         "id": 3
//     },
//     "footer": null,
//     "localizations": {
//         "data": [
//             {
//                 "id": 2,
//                 "attributes": {
//                     "createdAt": "2023-03-06T18:41:16.654Z",
//                     "updatedAt": "2024-07-10T08:00:33.750Z",
//                     "locale": "en"
//                 }
//             }
//         ]
//     }
// }
export default interface Global {
    id: number;
    attributes: {
        createdAt: string;
        updatedAt: string;
        locale: string;
        metadata: {
            id: number;
            metaTitle: string;
            metaDescription: string;
        };
        favicon: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    alternativeText: string;
                    caption: string;
                    width: number;
                    height: number;
                    formats: {};
                    hash: string;
                    ext: string;
                    mime: string;
                    size: number;
                    url: string;
                    previewUrl: string;
                    provider: string;
                    provider_metadata: {};
                    createdAt: string;
                    updatedAt: string;
                };
            };
        };
        notificationBanner: string;
        navItem: [
            {
                id: number;
                name: string;
                url: string;
            }
        ];
        footer: {};
        localizations: {
            data: [
                {
                    id: number;
                    attributes: {
                        createdAt: string;
                        updatedAt: string;
                        locale: string;
                    };
                }
            ];
        };
    };
};
