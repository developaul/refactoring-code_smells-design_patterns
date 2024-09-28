import { PRICING_TIERS } from "./constants";
import { InvalidPricingTier } from "./InvalidPricingTier";
import { InvalidTiers } from "./InvalidTiers";

export class TieredPricing {
	constructor(public readonly tiers: number) {
		if (this.tiers <= 0) {
			throw new InvalidTiers();
		}
	}

	total(): number {
		const pricingTier = PRICING_TIERS.find((tier) => this.tiers <= tier.max);

		if (!pricingTier) {
			throw new InvalidPricingTier();
		}

		return this.tiers * pricingTier.price;
	}
}
