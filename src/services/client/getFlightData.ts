import { sleep } from "@utils/sleep";
import dayjs from "dayjs";
export async function getFakeFlightData(
  abortController: AbortController
): Promise<any> {
  await sleep(2000);
  if (abortController.signal.aborted) {
    throw new Error("Aborted");
  }
  return {
    airline: `fakeAirline${Math.floor(Math.random() * 100)}`,
    terminal: `${Math.floor(Math.random() * 100)}`,
    airport: `fakeAirport${Math.floor(Math.random() * 100)}`,
    flightTime: dayjs()
      .add(Math.floor(Math.random() * 14), "days")
      .format("HH:mm")
  };
}
