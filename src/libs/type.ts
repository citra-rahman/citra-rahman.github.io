export interface WindowProps {
  window?: () => Window;
}

export interface workProp {
  id: number;
  date: string;
  title: string;
  description: string;
  tags: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface projectProp {
  name: string;
  imgPath: string;
  description: string;
  link: string;
  createdAt?: string;
  updatedAt?: string;
}
