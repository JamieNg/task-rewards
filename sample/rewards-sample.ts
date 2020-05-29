class Reward {
  title: string;
  min: number;
  max: number;
  point: number;
  icon: string;
  get description() {
    return `Price from ${this.min} to ${this.max}`;
  }
  constructor(init?: Partial<Reward>) {
    Object.assign(this, init);
  }
}

const rewards: Reward[] = [
  new Reward({
    title: "A cup of drink",
    min: 10000,
    max: 20000,
    point: 1,
    icon: "drink.png",
  }),
  new Reward({
    title: "Dessert",
    min: 20000,
    max: 30000,
    point: 2,
    icon: "cake.png",
  }),
  new Reward({
    title: "A meal",
    min: 30000,
    max: 50000,
    point: 4,
    icon: "meal.png",
  }),
];

export default rewards;
