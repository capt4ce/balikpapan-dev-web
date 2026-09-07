import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { getPodiumMembers, rankMembers } from "../src/lib/leaderboard.js";

const data = JSON.parse(
  await readFile(new URL("../src/data/leaderboard.json", import.meta.url), "utf8"),
);

const ranked = rankMembers(data.members);
assert.equal(ranked.length, data.members.length, "ranking preserves every member");
assert.ok(ranked.every((member, index) => index === 0 || ranked[index - 1].points >= member.points), "members are ranked by descending points");
assert.deepEqual(getPodiumMembers(data.members).map((member) => member.name), [ranked[1].name, ranked[0].name, ranked[2].name], "podium renders in 2–1–3 order");

const leaderboardSource = await readFile(new URL("../src/pages/Leaderboard.tsx", import.meta.url), "utf8");
for (const badge of data.badgeCatalog) {
  assert.ok(badge.description, `${badge.name} has a tooltip description`);
}
assert.match(leaderboardSource, /TooltipTrigger/, "badges expose hover and focus triggers");
assert.match(leaderboardSource, /aria-label=.*badge/, "badge triggers are labelled for tap and keyboard users");
assert.ok(Array.isArray(data.members), "leaderboard has one member list");
assert.doesNotMatch(leaderboardSource, /Tabs|periodKeys|PeriodKey/, "leaderboard has no period variants");
