import fs from "fs";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResults";
const reader = new CsvFileReader("football.csv");
reader.read();

let manUnitedWins = 0;
const dateOfFirstMatch = reader.data[0][0];
for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins += 1;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins += 1;
  }
}

console.log(`Man United won ${manUnitedWins} games`);