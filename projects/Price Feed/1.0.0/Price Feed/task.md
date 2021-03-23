## Liquidate

The `priceFeed` is setup to point at the **ETHUSD** aggregator. We can ask this aggregator for the latest price data available and use that to determine if we should liquidate.

### <emoji id="checkered_flag" /> Your Goal: Check Liquidation

Complete the `checkLiquidation` function to emit `Liquidate` if the ETH price is below $1700. 