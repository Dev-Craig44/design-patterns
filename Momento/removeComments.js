import * as fs from "fs";
import * as path from "path";
import stripJsonComments from "strip-json-comments";

const configFile = path.join(process.cwd(), "tsconfig.json");
const rawJSON = fs.readFileSync(configFile, "utf-8");
const cleanJSON = JSON.parse(stripJsonComments(rawJSON));

function main() {
  fs.writeFileSync(configFile, JSON.stringify(cleanJSON), "utf-8");
}

main();
