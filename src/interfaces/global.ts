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
      },
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
        },
      ];
    };
  };
}
