export type TVideo = {
  title: number;
  items: TVideoItems[];
};

type TVideoItems = {
  url: string;
  name: string;
  site: string;
};
