import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { getPodiumMembers, rankMembers } from "../src/lib/leaderboard.js";

const data = JSON.parse(
  await readFile(new URL("../src/data/leaderboard.json", import.meta.url), "utf8"),
);

for (const [key, period] of Object.entries(data.periods)) {
  const ranked = rankMembers(period.members);
  assert.equal(ranked.length, period.members.length, `${key} preserves every member`);
  assert.ok(
    ranked.every((member, index) => index === 0 || ranked[index - 1].points >= member.points),
    `${key} is ranked by descending points`,
  );
  assert.deepEqual(
    getPodiumMembers(period.members).map((member) => member.name),
    [ranked[1].name, ranked[0].name, ranked[2].name],
    `${key} renders the 2–1–3 podium order`,
  );
}

assert.notEqual(
  rankMembers(data.periods.weekly.members)[0].name,
  rankMembers(data.periods.monthly.members)[0].name,
  "changing period can change the leader",
);

console.log("Leaderboard period and ranking checks passed.");

const leaderboardSource = await readFile(new URL("../src/pages/Leaderboard.tsx", import.meta.url), "utf8");
for (const badge of data.badgeCatalog) {
  assert.ok(badge.description, `${badge.name} has a tooltip description`);
}
assert.match(leaderboardSource, /TooltipTrigger/, "badges expose hover and focus triggers");
assert.match(leaderboardSource, /aria-label=.*badge/, "badge triggers are labelled for tap and keyboard users");
