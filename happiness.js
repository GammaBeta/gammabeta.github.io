function getHappiness(npc, npcs, biomes) {
  let value = 100.0;

  if (npc.Name == "Princess" && npcs.length < 3) return "150";
  else {
    if (npcs.length > 4) {
      value *= Math.pow(1.05, npcs.length - 4);
    }

    if (npcs.length <= 3) {
      value *= 0.95;
    }

    let biomeMultipliers = biomes.map((biome) =>
      getHappinessMultiplier(npc, biome)
    );
    if (biomeMultipliers.some((it) => it != 1)) {
      value *= Math.min(...biomeMultipliers.filter((it) => it != 1));
    }

    npcs
      .map((n) => n.Name)
      .map((other) => getHappinessMultiplier(npc, other))
      .forEach((mult) => (value *= mult));

    value = Math.round(value);
    value = Math.max(value, 75);
    value = Math.min(value, 150);
    return value;
  }
}

function getHappinessMultiplier(npc, thing) {
  if (npc.Loved.includes(thing)) return 0.88;
  if (npc.Liked.includes(thing)) return 0.94;
  if (npc.Disliked.includes(thing)) return 1.06;
  if (npc.Hated.includes(thing)) return 1.12;
  return 1;
}
