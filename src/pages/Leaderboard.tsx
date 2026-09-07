import { useState } from "react";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import leaderboardData from "@/data/leaderboard.json";
import { getPodiumMembers, rankMembers } from "@/lib/leaderboard.js";

const periodKeys = ["weekly", "monthly", "yearly", "alltime"] as const;
type PeriodKey = (typeof periodKeys)[number];

type Member = (typeof leaderboardData.periods.weekly.members)[number];

const badgeIcons: Record<string, string> = {
  "Bug Hunter": "◈",
  "Helpful Hero": "♥",
  "Open Source": "⌘",
  "Event Champion": "★",
  Mentor: "✦",
  "Community Builder": "⬡",
  "Rising Star": "↑",
  "7 Day Streak": "⚡",
  "Top 3": "♛",
  "Community Legend": "✺",
  "First Contribution": "✓",
};

const badgeDescriptions = Object.fromEntries(
  leaderboardData.badgeCatalog.map((badge) => [badge.name, badge.description]),
);

function MemberAvatar({ member, featured = false }: { member: Member; featured?: boolean }) {
  return (
    <div
      className={`grid shrink-0 place-items-center rounded-full bg-gradient-ocean font-bold text-primary-foreground shadow-sm ${
        featured ? "h-[4.25rem] w-[4.25rem] text-lg" : "h-10 w-10 text-xs"
      }`}
      aria-hidden="true"
    >
      {member.avatar}
    </div>
  );
}

function MemberBadges({ badges, limit }: { badges: string[]; limit?: number }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {badges.slice(0, limit).map((badge) => (
        <Tooltip key={badge} delayDuration={150}>
          <TooltipTrigger asChild>
            <button type="button" aria-label={`${badge} badge: ${badgeDescriptions[badge]}`}>
              <Badge
                variant="outline"
                className="cursor-help whitespace-nowrap bg-background/70 px-2 py-1 text-[11px] font-medium"
              >
                <span aria-hidden="true" className="mr-1">
                  {badgeIcons[badge] ?? "✦"}
                </span>
                {badge}
              </Badge>
            </button>
          </TooltipTrigger>
          <TooltipContent className="max-w-64 text-center">
            <p className="font-semibold">{badge}</p>
            <p>{badgeDescriptions[badge]}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}

function Movement({ change }: { change: number }) {
  if (change === 0) {
    return (
      <span className="inline-flex items-center gap-1 text-muted-foreground" aria-label="No rank change">
        <Minus className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    );
  }

  const improved = change > 0;
  const Icon = improved ? ArrowUp : ArrowDown;

  return (
    <span
      className={`inline-flex items-center gap-0.5 font-semibold ${
        improved ? "text-emerald-600 dark:text-emerald-400" : "text-destructive"
      }`}
      aria-label={`${improved ? "Up" : "Down"} ${Math.abs(change)} ${Math.abs(change) === 1 ? "place" : "places"}`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {Math.abs(change)}
    </span>
  );
}

function LeaderboardPanel({ periodKey }: { periodKey: PeriodKey }) {
  const period = leaderboardData.periods[periodKey];
  const rankedMembers = rankMembers(period.members) as Member[];
  const podiumMembers = getPodiumMembers(period.members) as Member[];

  return (
    <>
      <p className="mt-5 text-sm font-medium text-muted-foreground">{period.range}</p>

      <section className="mt-12 grid grid-cols-1 items-end gap-4 md:grid-cols-3" aria-label="Top three members">
        {podiumMembers.map((member) => {
          const rank = rankedMembers.indexOf(member) + 1;
          const isWinner = rank === 1;

          return (
            <Card
              key={member.handle}
              className={`relative rounded-3xl p-6 text-center shadow-card ${
                isWinner
                  ? "order-first border-primary/50 bg-gradient-card py-9 shadow-elegant md:order-none"
                  : "py-6"
              }`}
            >
              <span
                className={`absolute left-4 top-4 grid h-8 w-8 place-items-center rounded-full text-sm font-extrabold ${
                  isWinner ? "bg-gradient-ocean text-primary-foreground" : "bg-muted text-foreground"
                }`}
                aria-label={`Rank ${rank}`}
              >
                {rank}
              </span>
              <div className="mx-auto w-fit">
                <MemberAvatar member={member} featured />
              </div>
              <h2 className="mt-4 text-lg font-bold">{member.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{member.handle}</p>
              <p className="mt-3 text-lg font-extrabold tabular-nums">
                {member.points.toLocaleString()} <span className="text-sm font-semibold text-muted-foreground">pts</span>
              </p>
              <div className="mt-4 flex justify-center">
                <MemberBadges badges={member.badges} limit={2} />
              </div>
            </Card>
          );
        })}
      </section>

      <section className="mt-5 overflow-hidden rounded-2xl border bg-card shadow-sm" aria-label="Remaining leaderboard">
        <div role="table" aria-label={`${period.label} community rankings`}>
          <div className="sr-only" role="rowgroup">
            <div role="row">
              <span role="columnheader">Rank</span>
              <span role="columnheader">Member</span>
              <span role="columnheader">Badges</span>
              <span role="columnheader">Movement</span>
              <span role="columnheader">Points</span>
            </div>
          </div>
          <div role="rowgroup">
            {rankedMembers.slice(3).map((member, index) => (
              <div
                key={member.handle}
                role="row"
                className="grid grid-cols-[1.5rem_2.5rem_minmax(0,1fr)_2.5rem_4.25rem] items-center gap-2 border-b px-3 py-3.5 last:border-0 md:grid-cols-[2rem_2.75rem_minmax(0,1.2fr)_minmax(0,1.4fr)_3.5rem_6rem] md:gap-3 md:px-5"
              >
                <strong role="cell" className="text-sm text-muted-foreground">
                  {index + 4}
                </strong>
                <div role="presentation">
                  <MemberAvatar member={member} />
                </div>
                <div role="cell" className="min-w-0">
                  <p className="truncate text-sm font-semibold sm:text-base">{member.name}</p>
                  <p className="truncate text-xs text-muted-foreground sm:text-sm">{member.handle}</p>
                </div>
                <div role="cell" className="sr-only flex-wrap gap-1.5 md:not-sr-only md:flex">
                  <MemberBadges badges={member.badges} />
                </div>
                <div role="cell" className="text-sm">
                  <Movement change={member.change} />
                </div>
                <strong role="cell" className="text-right text-sm tabular-nums sm:text-base">
                  {member.points.toLocaleString()}
                  <span className="sr-only"> points</span>
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function Leaderboard() {
  const [period, setPeriod] = useState<PeriodKey>("weekly");

  return (
    <>
      <SEO
        title="Community Leaderboard"
        description="Celebrate the top contributors moving Balikpapan's developer community forward across weekly, monthly, yearly, and all-time rankings."
        url="https://balikpapan.dev/projects/balikpapan-dev/leaderboard"
      />
      <div className="container min-h-screen py-12 md:py-16">
        <header className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">Community leaderboard</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Podium Spotlight</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Celebrate the people moving Balikpapan&apos;s developer community forward.
          </p>
        </header>

        <Tabs value={period} onValueChange={(value) => setPeriod(value as PeriodKey)} className="mt-8">
          <TabsList className="grid h-auto w-full grid-cols-4 rounded-xl p-1 sm:inline-grid sm:w-auto" aria-label="Leaderboard period">
            {periodKeys.map((key) => (
              <TabsTrigger key={key} value={key} className="rounded-lg px-2 py-2.5 sm:px-5">
                {leaderboardData.periods[key].label}
              </TabsTrigger>
            ))}
          </TabsList>
          {periodKeys.map((key) => (
            <TabsContent key={key} value={key} className="mt-0">
              <LeaderboardPanel periodKey={key} />
            </TabsContent>
          ))}
        </Tabs>

        <p className="mt-9 text-center text-xs text-muted-foreground">Community data · Updated 7 September 2026</p>
      </div>
    </>
  );
}
