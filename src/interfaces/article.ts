export default interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string;
          caption: string;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              width: number;
              height: number;
              size: number;
              url: string;
              path: string;
            };
            large: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              width: number;
              height: number;
              size: number;
              url: string;
              path: string;
            };
            small: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              width: number;
              height: number;
              size: number;
              url: string;
              path: string;
            };
            medium: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              width: number;
              height: number;
              size: number;
              url: string;
              path: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string;
          provider: string;
          provider_metadata: string;
          created_at: string;
          updated_at: string;
        };
      };
    };
    category: {
      data: {
        id: number;
        attributes: {
          name: string;
          slug: string;
          description: string;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    blocks: [
      {
        id: number;
        __component: string;
        body: string;
      },
    ];
    authorsBio: {
      data: {
        id: number;
        atteributes: {
          name: string;
          email: string;
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    seo: [
      {
        id: number;
        metaName: string;
        metaContent: string;
        metaProperty: string;
      },
    ];
  };
}
