import { resourceLimits } from "worker_threads"
import { writeCsvFormatFakeData } from "./fake"
import { getFileNameAndNumber } from "./utils/getFileNameAndNumbers"

const [filename, numberOfFakeData] = getFileNameAndNumber("./data/fake", 1)
const csvFilename = `${filename} - ${numberOfFakeData}.csv`
writeCsvFormatFakeData(csvFilename, numberOfFakeData)
  .then((result: any) => console.log(result))
  .catch((e: Error) => console.log(e.message))
