import { Payout } from "../models";
import { Payout as ScalaPayout, PayoutDetail as ScalaPayoutDetail } from "../models/payout.interface";
export declare class PayoutMapper {
    map(payout: ScalaPayout, items: ScalaPayoutDetail[]): Payout;
}
