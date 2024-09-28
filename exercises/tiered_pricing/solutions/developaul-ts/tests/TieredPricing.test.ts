import { InvalidTiers } from "../src/InvalidTiers";
import { TieredPricing } from "../src/TieredPricing";
import { TieredPricingMother } from "../src/TieredPricingMother";

describe("TieredPricing", () => {
	it("should throw InvalidTiers for negative number of tiers", () => {
		expect(() => new TieredPricing(-777)).toThrow(InvalidTiers);
	});

	it("should throw InvalidTiers for zero tiers", () => {
		expect(() => new TieredPricing(0)).toThrow(InvalidTiers);
	});

	it("should apply the highest price for 1-2 tiers", () => {
		const tieredPricing = TieredPricingMother.withRangeTiers(1, 2);
		expect(tieredPricing.tiers).toBeGreaterThanOrEqual(1);
		expect(tieredPricing.tiers).toBeLessThanOrEqual(2);
		expect(tieredPricing.total()).toBe(299 * tieredPricing.tiers);
	});

	it("should apply the second tier price for 3-10 tiers", () => {
		const tieredPricing = TieredPricingMother.withRangeTiers(3, 10);
		expect(tieredPricing.tiers).toBeGreaterThanOrEqual(3);
		expect(tieredPricing.tiers).toBeLessThanOrEqual(10);
		expect(tieredPricing.total()).toBe(239 * tieredPricing.tiers);
	});

	it("should apply the third tier price for 11-25 tiers", () => {
		const tieredPricing = TieredPricingMother.withRangeTiers(11, 25);
		expect(tieredPricing.tiers).toBeGreaterThanOrEqual(11);
		expect(tieredPricing.tiers).toBeLessThanOrEqual(25);
		expect(tieredPricing.total()).toBe(219 * tieredPricing.tiers);
	});

	it("should apply the fourth tier price for 26-50 tiers", () => {
		const tieredPricing = TieredPricingMother.withRangeTiers(26, 50);
		expect(tieredPricing.tiers).toBeGreaterThanOrEqual(26);
		expect(tieredPricing.tiers).toBeLessThanOrEqual(50);
		expect(tieredPricing.total()).toBe(199 * tieredPricing.tiers);
	});

	it("should apply the lowest price for 51 or more tiers", () => {
		const tieredPricing = TieredPricingMother.withRangeTiers(51, 100);
		expect(tieredPricing.tiers).toBeGreaterThanOrEqual(51);
		expect(tieredPricing.tiers).toBeLessThanOrEqual(100);
		expect(tieredPricing.total()).toBe(149 * tieredPricing.tiers);
	});
});
