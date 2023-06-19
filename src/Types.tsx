export interface Dark {
  dark: boolean;
};
export interface DarkToggle {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
export type Info = [
  [string, number, string],
  [string, number, string],
  [string, number, string],
  [string, number, string]
];
export type Features = [
  {
    title: string;
    desc: string;
    icon: string;
  },
  {
    title: string;
    desc: string;
    icon: string;
  },
  {
    title: string;
    desc: string;
    icon: string;
  },
  {
    title: string;
    desc: string;
    icon: string;
  },
  {
    title: string;
    desc: string;
    icon: string;
  },
  {
    title: string;
    desc: string;
    icon: string;
  }
];
export type Steps = [
  {
    title: string;
    desc: string;
    icon: string;
  },
  {
    title: string;
    desc: string;
    icon: string;
  },
  {
    title: string;
    desc: string;
    icon: string;
  }
];
export type Price = [
  {
    title: string;
    desc1: string;
    desc2: string;
    price: string;
    weight: string;
  },
  {
    title: string;
    desc1: string;
    desc2: string;
    price: string;
    weight: string;
  },
  {
    title: string;
    desc1: string;
    desc2: string;
    price: string;
    weight: string;
  },
  {
    title: string;
    desc1: string;
    desc2: string;
    price: string;
    weight: string;
  }
];
export type Integrations = [
  {
    image: string;
    title: string;
    desc: string;
  },
  {
    image: string;
    title: string;
    desc: string;
  },
  {
    image: string;
    title: string;
    desc: string;
  },
  {
    image: string;
    title: string;
    desc: string;
  }
];
export type Footer = [
  {
    title: string;
    desc1: string;
    desc2: string;
    icon: string;
  },
  {
    title: string;
    desc1: string;
    desc2: string;
    icon: string;
  }
];