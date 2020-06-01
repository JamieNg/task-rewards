class RewardCard {
  title: string;
  min: number;
  max: number;
  point: number;
  icon: string;
  get description() {
    return `Price from ${this.min} to ${this.max}`;
  }
  constructor(init?: Partial<RewardCard>) {
    Object.assign(this, init);
  }
}

const rewards: RewardCard[] = [
  new RewardCard({
    title: "Drink",
    min: 10000,
    max: 20000,
    point: 1,
    icon: "drink.png",
  }),
  new RewardCard({
    title: "Dessert",
    min: 20000,
    max: 30000,
    point: 2,
    icon: "cake.png",
  }),
  new RewardCard({
    title: "Meal",
    min: 30000,
    max: 50000,
    point: 4,
    icon: "meal.png",
  }),
];

export default rewards;
export { RewardCard };
