export function rankMembers(members) {
  return [...members].sort(
    (left, right) => right.points - left.points || left.name.localeCompare(right.name),
  );
}

export function getPodiumMembers(members) {
  const ranked = rankMembers(members);

  return [ranked[1], ranked[0], ranked[2]].filter(Boolean);
}
