import { Finding, FindingSeverity, FindingType } from "forta-agent";

export const COMET_ABI = ["function getReserves() public view returns (int)"];

export const MAINNET_COMET = "0xc3d688B66703497DAA19211EEdff47f25384cdc3";
export const GOERLI_COMET = "0xc3d688B66703497DAA19211EEdff47f25384cdc3";
export const MAINNET_TARGET_RESERVES = "1000000000000";
export const GOERLI_TARGET_RESERVES = "1000000000000";

export function getFindingInstance(actualReserves: string, targetReserves: string) {
  return Finding.fromObject({
    name: "Token Reserves Low",
    description: "The base token reserves have gone below the target threshold",
    alertId: "COMP-1",
    severity: FindingSeverity.Low,
    type: FindingType.Info,
    protocol: "COMP",
    metadata: {
      actualReserves,
      targetReserves,
    },
  });
}
