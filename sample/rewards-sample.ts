class Reward {
  title: string;
  min: number;
  max: number;
  get description() {
    return `Price from ${this.min} t0 ${this.max}`;
  }
  constructor(init?: Partial<Reward>) {
    Object.assign(this, init);
  }
}

const rewards: Reward[] = [
  new Reward({ title: "A cup of drink", min: 10000, max: 20000 }),
  new Reward({ title: "Dessert", min: 20000, max: 30000 }),
  new Reward({ title: "A meal", min: 30000, max: 50000 }),
];

export default rewards;
