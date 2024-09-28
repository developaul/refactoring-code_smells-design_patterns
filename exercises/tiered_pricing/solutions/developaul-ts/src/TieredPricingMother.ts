import { TieredPricing } from "./TieredPricing";

export class TieredPricingMother {
	static withRangeTiers(min: number, max: number): TieredPricing {
		const tiers = this.getRandomInt(min, max);

		return new TieredPricing(tiers);
	}

	private static getRandomInt(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}
