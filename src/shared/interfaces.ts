export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContuctUs = "contactus",
}

export interface IBenefit {
  icon: JSX.Element,
  title: string,
  description: string,
}

export interface IClass {
  image: string,
  name: string,
  description?: string,
}