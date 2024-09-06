const Biomes = {
  Forest: "Forest",
  Graveyard: "Graveyard",
  Underground: "Underground",
  Snow: "Snow",
  Desert: "Desert",
  Ocean: "Ocean",
  Jungle: "Jungle",
  Dungeon: "Dungeon",
  Space: "Space",
  Hallow: "Hallow",
  Mushroom: "Mushroom",
  Crag: "Crag",
};

const Npcs = {
  //Vanilla
  Guide: "Guide",
  Merchant: "Merchant",
  Nurse: "Nurse",
  Demolitionist: "Demolitionist",
  DyeTrader: "Dye Trader",
  Angler: "Angler",
  Zoologist: "Zoologist",
  Dryad: "Dryad",
  Painter: "Painter",
  Golfer: "Golfer",
  ArmsDealer: "Arms Dealer",
  Tavernkeep: "Tavernkeep",
  Stylist: "Stylist",
  GoblinTinkerer: "Goblin Tinkerer",
  WitchDoctor: "Witch Doctor",
  Clothier: "Clothier",
  Mechanic: "Mechanic",
  PartyGirl: "Party Girl",
  Wizard: "Wizard",
  TaxCollector: "Tax Collector",
  Truffle: "Truffle",
  Pirate: "Pirate",
  Steampunker: "Steampunker",
  SantaClaus: "Santa Claus",
  Cyborg: "Cyborg",
  Princess: "Princess",
  //AlchemistNPC
  Alchemist: "Alchemist",
  Brewer: "Brewer",
  Jeweler: "Jeweler",
  Tinkerer: "Tinkerer",
  Architect: "Architect",
  Operator: "Operator",
  Musician: "Musician",
  YoungBrewer: "Young Brewer",
  //Bosses as NPCs
  KingSlime: "King Slime",
  TorchGod: "Torch God",
  EyeOfCthulhu: "Eye of Cthulhu",
  EaterOfWorlds: "Eater of Worlds",
  BrainOfCthulhu: "Brain of Cthulhu",
  QueenBee: "Queen Bee",
  Skeletron: "Skeletron",
  Deerclops: "Deerclops",
  WallOfFlesh: "Wall of Flesh",
  QueenSlime: "Queen Slime",
  Destroyer: "The Destroyer",
  Retinazer: "Retinazer",
  Spazmatism: "Spazmatism",
  SkeletronPrime: "Skeletron Prime",
  Dreadnautilus: "Dreadnautilus",
  Mothron: "Mothron",
  Plantera: "Plantera",
  Golem: "Golem",
  Pumpking: "Pumpking",
  IceQueen: "Ice Queen",
  MartianSaucer: "Martian Saucer",
  EmpressOfLight: "Empress of Light",
  DukeFishron: "Duke Fishron",
  Betsy: "Betsy",
  LunaticCultist: "Lunatic Cultist",
  MoonLord: "Moon Lord",
  //Calamity Mod
  SeaKing: "Sea King",
  Bandit: "Bandit",
  DrunkPrincess: "Drunk Princess",
  Archmage: "Archmage",
  BrimstoneWitch: "Brimstone Witch",
  //Fargo's Mod
  LumberJack: "LumberJack",
  Deviantt: "Deviantt",
  Abominationn: "Abominationn",
  Mutant: "Mutant",
  Squirrel: "Squirrel",
  //Thorium Mod
  Cobbler: "Cobbler",
  DesertAcolyte: "Desert Acolyte",
  Cook: "Cook",
  ConfusedZombie: "Confused Zombie",
  Blacksmith: "Blacksmith",
  Tracker: "Tracker",
  Diverman: "Diverman",
  Druid: "Druid",
  Spiritualist: "Spiritualist",
  WeaponMaster: "Weapon Master",
  //One-Offs
  Automaton: "Automaton", //From Magic Storage
};

const NpcBuilder = function (npcName) {
  this.npc = {
    Name: npcName,
    Loved: {
      Biome: null,
      NPCs: [],
    },
    Liked: {
      Biome: null,
      NPCs: [],
    },
    Disliked: {
      Biome: null,
      NPCs: [],
    },
    Hated: {
      Biome: null,
      NPCs: [],
    },
  };

  this.lovesBiome = function (biome) {
    this.npc.Loved.Biome = biome;
    return this;
  };

  this.lovesNPCs = function (...things) {
    this.npc.Loved.NPCs = this.npc.Loved.NPCs.concat(Array.from(things));
    return this;
  };

  this.likesBiome = function (biome) {
    this.npc.Liked.Biome = biome;
    return this;
  };

  this.likesNPCs = function (...things) {
    this.npc.Liked.NPCs = this.npc.Liked.NPCs.concat(Array.from(things));
    return this;
  };

  this.dislikesBiome = function (biome) {
    this.npc.Disliked.Biome = biome;
    return this;
  };

  this.dislikesNPCs = function (...things) {
    this.npc.Disliked.NPCs = this.npc.Disliked.NPCs.concat(Array.from(things));
    return this;
  };

  this.hatesBiome = function (biome) {
    this.npc.Hated.Biome = biome;
    return this;
  };

  this.hatesNPCs = function (...things) {
    this.npc.Hated.NPCs = this.npc.Hated.NPCs.concat(Array.from(things));
    return this;
  };

  this.build = function () {
    return this.npc;
  };
};

const NpcModels = {
  Vanilla: [
    new NpcBuilder(Npcs.Guide)
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.Clothier,
        Npcs.Zoologist,
        Npcs.Princess,
        Npcs.KingSlime,
        Npcs.EyeOfCthulhu
      )
      .dislikesBiome(Biomes.Ocean)
      .dislikesNPCs(Npcs.Steampunker)
      .hatesNPCs(Npcs.Painter, Npcs.WallOfFlesh)
      .build(),
    new NpcBuilder(Npcs.Merchant)
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.Golfer,
        Npcs.Nurse,
        Npcs.Princess,
        Npcs.BrainOfCthulhu,
        Npcs.IceQueen,
        Npcs.QueenBee
      )
      .dislikesBiome(Biomes.Desert)
      .dislikesNPCs(Npcs.TaxCollector)
      .hatesNPCs(Npcs.Angler)
      .build(),
    new NpcBuilder(Npcs.Nurse)
      .lovesNPCs(Npcs.ArmsDealer)
      .likesBiome(Biomes.Hallow)
      .likesNPCs(
        Npcs.Wizard,
        Npcs.Princess,
        Npcs.QueenSlime,
        Npcs.EmpressOfLight
      )
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(
        Npcs.Dryad,
        Npcs.PartyGirl,
        Npcs.Destroyer,
        Npcs.Retinazer,
        Npcs.Spazmatism,
        Npcs.SkeletronPrime,
        Npcs.MartianSaucer
      )
      .hatesNPCs(Npcs.Zoologist)
      .build(),
    new NpcBuilder(Npcs.Demolitionist)
      .lovesNPCs(Npcs.Tavernkeep)
      .likesBiome(Biomes.Underground)
      .likesNPCs(
        Npcs.Mechanic,
        Npcs.Princess,
        Npcs.MartianSaucer,
        Npcs.SkeletronPrime
      )
      .dislikesBiome(Biomes.Ocean)
      .dislikesNPCs(
        Npcs.ArmsDealer,
        Npcs.GoblinTinkerer,
        Npcs.EaterOfWorlds,
        Npcs.BrainOfCthulhu
      )
      .build(),
    new NpcBuilder(Npcs.DyeTrader)
      .likesBiome(Biomes.Desert)
      .likesNPCs(
        Npcs.ArmsDealer,
        Npcs.Painter,
        Npcs.Princess,
        Npcs.Plantera,
        Npcs.KingSlime,
        Npcs.Mothron
      )
      .dislikesBiome(Biomes.Forest)
      .dislikesNPCs(Npcs.Steampunker, Npcs.Dreadnautilus)
      .hatesNPCs(Npcs.Pirate)
      .build(),
    new NpcBuilder(Npcs.Angler)
      .likesBiome(Biomes.Ocean)
      .likesNPCs(
        Npcs.Demolitionist,
        Npcs.PartyGirl,
        Npcs.TaxCollector,
        Npcs.Princess,
        Npcs.DukeFishron,
        Npcs.Dreadnautilus
      )
      .dislikesBiome(Biomes.Desert)
      .dislikesNPCs(Npcs.QueenBee, Npcs.Mothron)
      .hatesNPCs(Npcs.Tavernkeep)
      .build(),
    new NpcBuilder(Npcs.Zoologist)
      .lovesNPCs(Npcs.WitchDoctor)
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.Golfer,
        Npcs.Princess,
        Npcs.DukeFishron,
        Npcs.QueenBee,
        Npcs.Betsy,
        Npcs.Deerclops
      )
      .dislikesBiome(Biomes.Desert)
      .dislikesNPCs(Npcs.Angler, Npcs.WallOfFlesh)
      .hatesNPCs(Npcs.ArmsDealer)
      .build(),
    new NpcBuilder(Npcs.Dryad)
      .lovesNPCs(Npcs.EmpressOfLight, Npcs.Plantera)
      .likesBiome(Biomes.Jungle)
      .likesNPCs(
        Npcs.WitchDoctor,
        Npcs.Truffle,
        Npcs.Princess,
        Npcs.Golem,
        Npcs.QueenBee,
        Npcs.QueenSlime
      )
      .dislikesBiome(Biomes.Desert)
      .dislikesNPCs(Npcs.Angler, Npcs.Dreadnautilus)
      .hatesNPCs(
        Npcs.Golfer,
        Npcs.EaterOfWorlds,
        Npcs.BrainOfCthulhu,
        Npcs.MoonLord
      )
      .build(),
    new NpcBuilder(Npcs.Painter)
      .lovesNPCs(Npcs.Dryad)
      .likesBiome(Biomes.Jungle)
      .likesNPCs(
        Npcs.PartyGirl,
        Npcs.Princess,
        Npcs.EmpressOfLight,
        Npcs.EyeOfCthulhu,
        Npcs.IceQueen
      )
      .dislikesBiome(Biomes.Forest)
      .dislikesNPCs(Npcs.Truffle, Npcs.Cyborg, Npcs.MartianSaucer)
      .build(),
    new NpcBuilder(Npcs.Golfer)
      .lovesNPCs(Npcs.Angler, Npcs.DukeFishron)
      .likesBiome(Biomes.Forest)
      .likesNPCs(Npcs.Painter, Npcs.Zoologist, Npcs.Princess, Npcs.KingSlime)
      .dislikesBiome(Biomes.Underground)
      .dislikesNPCs(Npcs.Pirate, Npcs.WallOfFlesh)
      .hatesNPCs(Npcs.Merchant)
      .build(),
    new NpcBuilder(Npcs.ArmsDealer)
      .lovesNPCs(Npcs.Nurse)
      .likesBiome(Biomes.Desert)
      .likesNPCs(
        Npcs.Steampunker,
        Npcs.Princess,
        Npcs.EaterOfWorlds,
        Npcs.Pumpking,
        Npcs.BrainOfCthulhu
      )
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(Npcs.Golfer)
      .hatesNPCs(Npcs.Demolitionist)
      .build(),
    new NpcBuilder(Npcs.Tavernkeep)
      .lovesNPCs(Npcs.Demolitionist)
      .likesBiome(Biomes.Hallow)
      .likesNPCs(
        Npcs.GoblinTinkerer,
        Npcs.Princess,
        Npcs.EaterOfWorlds,
        Npcs.BrainOfCthulhu,
        Npcs.Dreadnautilus,
        Npcs.LunaticCultist,
        Npcs.TorchGod
      )
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(Npcs.Guide, Npcs.Golem)
      .hatesNPCs(Npcs.DyeTrader)
      .build(),
    new NpcBuilder(Npcs.Stylist)
      .lovesNPCs(Npcs.DyeTrader, Npcs.EmpressOfLight)
      .likesBiome(Biomes.Ocean)
      .likesNPCs(Npcs.Pirate, Npcs.Princess, Npcs.QueenSlime, Npcs.Plantera)
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(
        Npcs.Tavernkeep,
        Npcs.QueenBee,
        Npcs.WallOfFlesh,
        Npcs.Pumpking,
        Npcs.Mothron
      )
      .hatesNPCs(
        Npcs.GoblinTinkerer,
        Npcs.EyeOfCthulhu,
        Npcs.EaterOfWorlds,
        Npcs.BrainOfCthulhu,
        Npcs.Skeletron,
        Npcs.Destroyer,
        Npcs.Retinazer,
        Npcs.Spazmatism,
        Npcs.SkeletronPrime,
        Npcs.MartianSaucer
      )
      .build(),
    new NpcBuilder(Npcs.GoblinTinkerer)
      .lovesNPCs(Npcs.Mechanic)
      .likesBiome(Biomes.Underground)
      .likesNPCs(Npcs.DyeTrader, Npcs.Princess)
      .dislikesBiome(Biomes.Jungle)
      .dislikesNPCs(Npcs.Clothier)
      .hatesNPCs(Npcs.Stylist)
      .build(),
    new NpcBuilder(Npcs.WitchDoctor)
      .likesBiome(Biomes.Jungle)
      .likesNPCs(
        Npcs.Dryad,
        Npcs.Guide,
        Npcs.Princess,
        Npcs.Destroyer,
        Npcs.Retinazer,
        Npcs.Spazmatism,
        Npcs.SkeletronPrime,
        Npcs.MartianSaucer
      )
      .dislikesBiome(Biomes.Hallow)
      .dislikesNPCs(Npcs.Nurse, Npcs.TorchGod)
      .hatesNPCs(Npcs.Truffle)
      .build(),
    new NpcBuilder(Npcs.Clothier)
      .lovesNPCs(Npcs.Truffle)
      .likesBiome(Biomes.Underground)
      .likesNPCs(
        Npcs.TaxCollector,
        Npcs.Princess,
        Npcs.EmpressOfLight,
        Npcs.Pumpking,
        Npcs.KingSlime,
        Npcs.QueenSlime
      )
      .dislikesBiome(Biomes.Hallow)
      .dislikesNPCs(Npcs.Nurse, Npcs.Dreadnautilus)
      .hatesNPCs(Npcs.Mechanic)
      .build(),
    new NpcBuilder(Npcs.Mechanic)
      .lovesNPCs(Npcs.GoblinTinkerer)
      .likesBiome(Biomes.Snow)
      .likesNPCs(Npcs.Cyborg, Npcs.Princess, Npcs.MartianSaucer)
      .dislikesBiome(Biomes.Underground)
      .dislikesNPCs(
        Npcs.ArmsDealer,
        Npcs.Destroyer,
        Npcs.Retinazer,
        Npcs.Spazmatism,
        Npcs.SkeletronPrime,
        Npcs.LunaticCultist
      )
      .hatesNPCs(Npcs.Clothier)
      .build(),
    new NpcBuilder(Npcs.PartyGirl)
      .lovesNPCs(Npcs.Wizard, Npcs.Zoologist)
      .likesBiome(Biomes.Hallow)
      .likesNPCs(
        Npcs.Stylist,
        Npcs.Princess,
        Npcs.EmpressOfLight,
        Npcs.Betsy,
        Npcs.QueenSlime,
        Npcs.Mothron
      )
      .dislikesBiome(Biomes.Underground)
      .dislikesNPCs(Npcs.Merchant, Npcs.Dreadnautilus)
      .hatesNPCs(Npcs.TaxCollector)
      .build(),
    new NpcBuilder(Npcs.Wizard)
      .lovesNPCs(Npcs.Golfer)
      .likesBiome(Biomes.Hallow)
      .likesNPCs(
        Npcs.Merchant,
        Npcs.Princess,
        Npcs.EmpressOfLight,
        Npcs.LunaticCultist,
        Npcs.MoonLord
      )
      .dislikesBiome(Biomes.Ocean)
      .dislikesNPCs(Npcs.WitchDoctor, Npcs.MartianSaucer)
      .hatesNPCs(Npcs.Cyborg)
      .build(),
    new NpcBuilder(Npcs.TaxCollector)
      .lovesNPCs(Npcs.Merchant)
      .likesBiome(Biomes.Snow)
      .likesNPCs(Npcs.PartyGirl, Npcs.Princess)
      .dislikesBiome(Biomes.Hallow)
      .dislikesNPCs(
        Npcs.Demolitionist,
        Npcs.Mechanic,
        Npcs.WallOfFlesh,
        Npcs.MartianSaucer,
        Npcs.Deerclops
      )
      .hatesNPCs(Npcs.SantaClaus)
      .build(),
    new NpcBuilder(Npcs.Truffle)
      .lovesNPCs(Npcs.Guide, Npcs.Skeletron)
      .likesBiome(Biomes.Mushroom)
      .likesNPCs(Npcs.Dryad, Npcs.Princess, Npcs.Plantera)
      .dislikesNPCs(Npcs.Clothier, Npcs.DukeFishron, Npcs.TorchGod)
      .hatesNPCs(Npcs.WitchDoctor)
      .build(),
    new NpcBuilder(Npcs.Pirate)
      .lovesNPCs(Npcs.Angler)
      .likesBiome(Biomes.Ocean)
      .likesNPCs(Npcs.Tavernkeep, Npcs.Princess, Npcs.DukeFishron)
      .dislikesBiome(Biomes.Underground)
      .dislikesNPCs(Npcs.Stylist, Npcs.Destroyer, Npcs.Dreadnautilus)
      .hatesNPCs(Npcs.Guide)
      .build(),
    new NpcBuilder(Npcs.Steampunker)
      .lovesNPCs(Npcs.Cyborg)
      .likesBiome(Biomes.Desert)
      .likesNPCs(
        Npcs.Painter,
        Npcs.Princess,
        Npcs.Destroyer,
        Npcs.Retinazer,
        Npcs.Spazmatism,
        Npcs.SkeletronPrime,
        Npcs.MartianSaucer
      )
      .dislikesBiome(Biomes.Jungle)
      .dislikesNPCs(
        Npcs.Dryad,
        Npcs.Wizard,
        Npcs.PartyGirl,
        Npcs.Pumpking,
        Npcs.EyeOfCthulhu
      )
      .build(),
    new NpcBuilder(Npcs.Cyborg)
      .likesBiome(Biomes.Snow)
      .likesNPCs(
        Npcs.Steampunker,
        Npcs.Pirate,
        Npcs.Stylist,
        Npcs.Princess,
        Npcs.Destroyer,
        Npcs.Retinazer,
        Npcs.Spazmatism,
        Npcs.SkeletronPrime,
        Npcs.MartianSaucer
      )
      .dislikesBiome(Biomes.Jungle)
      .dislikesNPCs(
        Npcs.Zoologist,
        Npcs.EmpressOfLight,
        Npcs.IceQueen,
        Npcs.Pumpking
      )
      .hatesNPCs(Npcs.Wizard)
      .build(),
    new NpcBuilder(Npcs.SantaClaus)
      .lovesBiome(Biomes.Snow)
      .likesNPCs(Npcs.Princess, Npcs.Deerclops, Npcs.IceQueen)
      .dislikesNPCs(Npcs.Pumpking)
      .hatesBiome(Biomes.Desert)
      .hatesNPCs(Npcs.TaxCollector, Npcs.MoonLord)
      .build(),
    new NpcBuilder(Npcs.Princess)
      .lovesNPCs(...Object.values(Npcs).filter((npc) => npc !== "Princess"))
      .build(),
  ],
  AlchemistNPC: [
    new NpcBuilder(Npcs.Alchemist)
      .lovesBiome(Biomes.Underground)
      .lovesNPCs(Npcs.YoungBrewer)
      .likesBiome(Biomes.Forest)
      .likesNPCs(Npcs.Mechanic, Npcs.Princess)
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(Npcs.Brewer)
      .build(),
    new NpcBuilder(Npcs.Brewer)
      .lovesBiome(Biomes.Forest)
      .lovesNPCs(Npcs.YoungBrewer)
      .likesBiome(Biomes.Jungle)
      .likesNPCs(Npcs.Alchemist, Npcs.Princess)
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(Npcs.WitchDoctor)
      .build(),
    new NpcBuilder(Npcs.Jeweler)
      .lovesBiome(Biomes.Forest)
      .lovesNPCs(Npcs.Merchant)
      .likesBiome(Biomes.Jungle)
      .likesNPCs(Npcs.TaxCollector, Npcs.Princess)
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(Npcs.PartyGirl)
      .build(),
    new NpcBuilder(Npcs.Tinkerer)
      .lovesBiome(Biomes.Snow)
      .lovesNPCs(Npcs.Steampunker)
      .likesBiome(Biomes.Underground)
      .likesNPCs(Npcs.Mechanic, Npcs.Princess)
      .dislikesBiome(Biomes.Desert)
      .dislikesNPCs(Npcs.DyeTrader)
      .build(),
    new NpcBuilder(Npcs.Architect)
      .lovesBiome(Biomes.Jungle)
      .lovesNPCs(Npcs.Painter)
      .likesBiome(Biomes.Ocean)
      .likesNPCs(Npcs.GoblinTinkerer, Npcs.Princess)
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(Npcs.TaxCollector)
      .build(),
    new NpcBuilder(Npcs.Operator)
      .lovesBiome(Biomes.Snow)
      .lovesNPCs(Npcs.Cyborg)
      .likesBiome(Biomes.Ocean)
      .likesNPCs(Npcs.Steampunker, Npcs.Princess)
      .dislikesBiome(Biomes.Underground)
      .dislikesNPCs(Npcs.Clothier)
      .build(),
    new NpcBuilder(Npcs.Musician)
      .lovesBiome(Biomes.Hallow)
      .lovesNPCs(Npcs.PartyGirl)
      .likesBiome(Biomes.Underground)
      .likesNPCs(Npcs.Wizard, Npcs.Princess)
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(Npcs.GoblinTinkerer)
      .build(),
    new NpcBuilder(Npcs.YoungBrewer)
      .lovesBiome(Biomes.Forest)
      .lovesNPCs(Npcs.Brewer)
      .likesBiome(Biomes.Desert)
      .likesNPCs(Npcs.Alchemist, Npcs.Princess)
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(Npcs.GoblinTinkerer)
      .build(),
  ],
  "Bosses as NPCs": [
    new NpcBuilder(Npcs.KingSlime)
      .lovesBiome(Biomes.Forest)
      .lovesNPCs(Npcs.QueenSlime, Npcs.EyeOfCthulhu)
      .likesBiome(Biomes.Hallow)
      .likesNPCs(
        Npcs.Pumpking,
        Npcs.DukeFishron,
        Npcs.Guide,
        Npcs.DyeTrader,
        Npcs.Golfer,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Snow)
      .build(),
    new NpcBuilder(Npcs.TorchGod)
      .lovesBiome(Biomes.Underground)
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.MoonLord,
        Npcs.Golem,
        Npcs.Pumpking,
        Npcs.Betsy,
        Npcs.Guide,
        Npcs.Tavernkeep,
        Npcs.Wizard,
        Npcs.Steampunker,
        Npcs.Princess
      )
      .dislikesNPCs(Npcs.Dreadnautilus, Npcs.IceQueen, Npcs.Pirate)
      .build(),
    new NpcBuilder(Npcs.EyeOfCthulhu)
      .lovesBiome(Biomes.Forest)
      .lovesNPCs(Npcs.Retinazer, Npcs.Spazmatism)
      .likesBiome(Biomes.Desert)
      .likesNPCs(
        Npcs.BrainOfCthulhu,
        Npcs.Skeletron,
        Npcs.MoonLord,
        Npcs.Guide,
        Npcs.Painter,
        Npcs.PartyGirl,
        Npcs.Princess
      )
      .build(),
    new NpcBuilder(Npcs.EaterOfWorlds)
      .lovesBiome(Biomes.Graveyard)
      .lovesNPCs(Npcs.BrainOfCthulhu)
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.WallOfFlesh,
        Npcs.Destroyer,
        Npcs.Tavernkeep,
        Npcs.ArmsDealer,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Jungle)
      .dislikesNPCs(Npcs.Dryad, Npcs.EmpressOfLight)
      .hatesBiome(Biomes.Hallow)
      .build(),
    new NpcBuilder(Npcs.BrainOfCthulhu)
      .lovesBiome(Biomes.Graveyard)
      .lovesNPCs(Npcs.EaterOfWorlds)
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.WallOfFlesh,
        Npcs.EyeOfCthulhu,
        Npcs.MoonLord,
        Npcs.Dreadnautilus,
        Npcs.Tavernkeep,
        Npcs.ArmsDealer,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Jungle)
      .dislikesNPCs(Npcs.Dryad, Npcs.EmpressOfLight)
      .hatesBiome(Biomes.Hallow)
      .build(),
    new NpcBuilder(Npcs.QueenBee)
      .lovesBiome(Biomes.Jungle)
      .lovesNPCs(Npcs.Dryad)
      .likesBiome(Biomes.Underground)
      .likesNPCs(
        Npcs.Plantera,
        Npcs.Golem,
        Npcs.QueenSlime,
        Npcs.IceQueen,
        Npcs.Mothron,
        Npcs.WitchDoctor,
        Npcs.Zoologist,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Graveyard)
      .dislikesNPCs(Npcs.Demolitionist)
      .hatesBiome(Biomes.Snow)
      .build(),
    new NpcBuilder(Npcs.Skeletron)
      .lovesBiome(Biomes.Graveyard)
      .lovesNPCs(Npcs.Clothier)
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.LunaticCultist,
        Npcs.SkeletronPrime,
        Npcs.EyeOfCthulhu,
        Npcs.BrainOfCthulhu,
        Npcs.MoonLord,
        Npcs.Merchant,
        Npcs.Princess
      )
      .dislikesNPCs(Npcs.Angler)
      .build(),
    new NpcBuilder(Npcs.Deerclops)
      .lovesBiome(Biomes.Snow)
      .lovesNPCs(Npcs.Betsy)
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.IceQueen,
        Npcs.EyeOfCthulhu,
        Npcs.Mothron,
        Npcs.Zoologist,
        Npcs.SantaClaus,
        Npcs.Princess
      )
      .dislikesNPCs(Npcs.TaxCollector)
      .build(),
    new NpcBuilder(Npcs.WallOfFlesh)
      .lovesNPCs(Npcs.Guide)
      .likesBiome(Biomes.Underground)
      .likesNPCs(
        Npcs.EaterOfWorlds,
        Npcs.BrainOfCthulhu,
        Npcs.Dreadnautilus,
        Npcs.TaxCollector,
        Npcs.GoblinTinkerer,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Forest)
      .dislikesNPCs(Npcs.QueenBee)
      .build(),
    new NpcBuilder(Npcs.QueenSlime)
      .lovesBiome(Biomes.Hallow)
      .lovesNPCs(Npcs.KingSlime, Npcs.EmpressOfLight)
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.QueenBee,
        Npcs.IceQueen,
        Npcs.PartyGirl,
        Npcs.Nurse,
        Npcs.Dryad,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Snow)
      .build(),
    new NpcBuilder(Npcs.Destroyer)
      .lovesNPCs(
        Npcs.Retinazer,
        Npcs.Spazmatism,
        Npcs.SkeletronPrime,
        Npcs.Mechanic
      )
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.EaterOfWorlds,
        Npcs.MoonLord,
        Npcs.Steampunker,
        Npcs.Cyborg,
        Npcs.GoblinTinkerer,
        Npcs.Princess
      )
      .dislikesNPCs(Npcs.Wizard)
      .build(),
    new NpcBuilder(Npcs.Retinazer)
      .lovesNPCs(
        Npcs.Destroyer,
        Npcs.Spazmatism,
        Npcs.SkeletronPrime,
        Npcs.Mechanic
      )
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.EyeOfCthulhu,
        Npcs.MoonLord,
        Npcs.Steampunker,
        Npcs.Cyborg,
        Npcs.GoblinTinkerer,
        Npcs.Princess
      )
      .dislikesNPCs(Npcs.Nurse)
      .build(),
    new NpcBuilder(Npcs.Spazmatism)
      .lovesNPCs(
        Npcs.Destroyer,
        Npcs.Retinazer,
        Npcs.SkeletronPrime,
        Npcs.Mechanic
      )
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.EyeOfCthulhu,
        Npcs.MoonLord,
        Npcs.TorchGod,
        Npcs.Steampunker,
        Npcs.Cyborg,
        Npcs.GoblinTinkerer,
        Npcs.Princess
      )
      .dislikesNPCs(Npcs.Nurse)
      .build(),
    new NpcBuilder(Npcs.SkeletronPrime)
      .lovesNPCs(Npcs.Destroyer, Npcs.Retinazer, Npcs.Spazmatism, Npcs.Mechanic)
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.Skeletron,
        Npcs.MoonLord,
        Npcs.Steampunker,
        Npcs.Cyborg,
        Npcs.GoblinTinkerer,
        Npcs.Princess
      )
      .dislikesNPCs(Npcs.Pirate)
      .build(),
    new NpcBuilder(Npcs.Dreadnautilus)
      .lovesBiome(Biomes.Ocean)
      .lovesNPCs(Npcs.BrainOfCthulhu)
      .likesBiome(Biomes.Graveyard)
      .likesNPCs(
        Npcs.DukeFishron,
        Npcs.WallOfFlesh,
        Npcs.Mothron,
        Npcs.Zoologist,
        Npcs.Tavernkeep,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Underground)
      .dislikesNPCs(Npcs.Angler, Npcs.Pirate)
      .hatesBiome(Biomes.Snow)
      .build(),
    new NpcBuilder(Npcs.Mothron)
      .lovesBiome(Biomes.Graveyard)
      .lovesNPCs(Npcs.Deerclops, Npcs.WitchDoctor)
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.QueenBee,
        Npcs.Betsy,
        Npcs.Dreadnautilus,
        Npcs.TorchGod,
        Npcs.Zoologist,
        Npcs.Merchant,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Underground)
      .dislikesNPCs(Npcs.DyeTrader, Npcs.Golfer)
      .build(),
    new NpcBuilder(Npcs.Plantera)
      .lovesBiome(Biomes.Jungle)
      .lovesNPCs(Npcs.WitchDoctor, Npcs.Dryad)
      .likesBiome(Biomes.Underground)
      .likesNPCs(
        Npcs.Golem,
        Npcs.QueenBee,
        Npcs.EmpressOfLight,
        Npcs.LunaticCultist,
        Npcs.Steampunker,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Graveyard)
      .dislikesNPCs(Npcs.DyeTrader)
      .hatesBiome(Biomes.Snow)
      .build(),
    new NpcBuilder(Npcs.Golem)
      .lovesBiome(Biomes.Jungle)
      .lovesNPCs(Npcs.WitchDoctor)
      .likesBiome(Biomes.Underground)
      .likesNPCs(
        Npcs.Plantera,
        Npcs.QueenBee,
        Npcs.EmpressOfLight,
        Npcs.LunaticCultist,
        Npcs.Dryad,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Graveyard)
      .dislikesNPCs(Npcs.GoblinTinkerer, Npcs.Demolitionist)
      .build(),
    new NpcBuilder(Npcs.Pumpking)
      .lovesBiome(Biomes.Graveyard)
      .lovesNPCs(Npcs.IceQueen)
      .likesBiome(Biomes.Desert)
      .likesNPCs(
        Npcs.Betsy,
        Npcs.MartianSaucer,
        Npcs.KingSlime,
        Npcs.DukeFishron,
        Npcs.Mothron,
        Npcs.TorchGod,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(Npcs.PartyGirl)
      .build(),
    new NpcBuilder(Npcs.IceQueen)
      .lovesBiome(Biomes.Snow)
      .lovesNPCs(Npcs.Pumpking)
      .likesBiome(Biomes.Ocean)
      .likesNPCs(
        Npcs.Betsy,
        Npcs.MartianSaucer,
        Npcs.Deerclops,
        Npcs.QueenSlime,
        Npcs.QueenBee,
        Npcs.SantaClaus,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Graveyard)
      .dislikesNPCs(Npcs.Mothron, Npcs.TorchGod, Npcs.Painter)
      .build(),
    new NpcBuilder(Npcs.MartianSaucer)
      .lovesNPCs(Npcs.Cyborg, Npcs.Steampunker)
      .likesBiome(Biomes.Desert)
      .likesNPCs(
        Npcs.IceQueen,
        Npcs.Pumpking,
        Npcs.Betsy,
        Npcs.Mechanic,
        Npcs.GoblinTinkerer,
        Npcs.Princess
      )
      .dislikesNPCs(Npcs.Wizard, Npcs.TaxCollector)
      .build(),
    new NpcBuilder(Npcs.EmpressOfLight)
      .lovesBiome(Biomes.Hallow)
      .lovesNPCs(Npcs.Dryad, Npcs.QueenSlime)
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.Plantera,
        Npcs.Golem,
        Npcs.LunaticCultist,
        Npcs.Wizard,
        Npcs.PartyGirl,
        Npcs.Stylist,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Underground)
      .dislikesNPCs(Npcs.EaterOfWorlds, Npcs.BrainOfCthulhu)
      .hatesBiome(Biomes.Graveyard)
      .build(),
    new NpcBuilder(Npcs.DukeFishron)
      .lovesBiome(Biomes.Ocean)
      .lovesNPCs(Npcs.Betsy, Npcs.Angler)
      .likesBiome(Biomes.Snow)
      .likesNPCs(
        Npcs.EmpressOfLight,
        Npcs.KingSlime,
        Npcs.Pumpking,
        Npcs.Dreadnautilus,
        Npcs.Pirate,
        Npcs.Truffle,
        Npcs.Princess
      )
      .dislikesNPCs(Npcs.ArmsDealer)
      .build(),
    new NpcBuilder(Npcs.Betsy)
      .lovesBiome(Biomes.Forest)
      .lovesNPCs(Npcs.DukeFishron, Npcs.Deerclops)
      .likesBiome(Biomes.Hallow)
      .likesNPCs(
        Npcs.IceQueen,
        Npcs.Pumpking,
        Npcs.MartianSaucer,
        Npcs.Mothron,
        Npcs.TorchGod,
        Npcs.Zoologist,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Underground)
      .dislikesNPCs(Npcs.Merchant)
      .build(),
    new NpcBuilder(Npcs.LunaticCultist)
      .lovesBiome(Biomes.Graveyard)
      .lovesNPCs(Npcs.MoonLord)
      .likesBiome(Biomes.Ocean)
      .likesNPCs(
        Npcs.Skeletron,
        Npcs.Plantera,
        Npcs.Golem,
        Npcs.EmpressOfLight,
        Npcs.Clothier,
        Npcs.Princess
      )
      .dislikesNPCs(Npcs.WitchDoctor, Npcs.Dreadnautilus)
      .build(),
    new NpcBuilder(Npcs.MoonLord)
      .lovesBiome(Biomes.Graveyard)
      .lovesNPCs(Npcs.LunaticCultist)
      .likesNPCs(
        Npcs.EyeOfCthulhu,
        Npcs.BrainOfCthulhu,
        Npcs.Skeletron,
        Npcs.Destroyer,
        Npcs.Retinazer,
        Npcs.Spazmatism,
        Npcs.SkeletronPrime,
        Npcs.Mechanic,
        Npcs.Princess
      )
      .dislikesNPCs(Npcs.EmpressOfLight, Npcs.Dryad)
      .hatesNPCs(Npcs.TorchGod)
      .build(),
  ],
  "Calamity Mod": [
    new NpcBuilder(Npcs.SeaKing)
      .likesBiome(Biomes.Ocean)
      .likesNPCs(Npcs.Pirate, Npcs.Princess)
      .dislikesBiome(Biomes.Desert)
      .dislikesNPCs(Npcs.Demolitionist)
      .hatesNPCs(Npcs.Angler)
      .build(),
    new NpcBuilder(Npcs.Bandit)
      .likesBiome(Biomes.Desert)
      .likesNPCs(Npcs.GoblinTinkerer, Npcs.Princess)
      .dislikesBiome(Biomes.Jungle)
      .dislikesNPCs(Npcs.Dryad)
      .build(),
    new NpcBuilder(Npcs.DrunkPrincess)
      .lovesBiome(Biomes.Hallow)
      .lovesNPCs(Npcs.Stylist, Npcs.Zoologist)
      .likesBiome(Biomes.Ocean)
      .likesNPCs(Npcs.PartyGirl, Npcs.Truffle, Npcs.Princess)
      .dislikesBiome(Biomes.Desert)
      .dislikesNPCs(Npcs.Tavernkeep, Npcs.TaxCollector)
      .hatesBiome(Biomes.Underground)
      .hatesNPCs(Npcs.Angler, Npcs.GoblinTinkerer)
      .build(),
    new NpcBuilder(Npcs.Archmage)
      .likesBiome(Biomes.Snow)
      .likesNPCs(Npcs.Wizard, Npcs.Princess)
      .dislikesBiome(Biomes.Desert)
      .dislikesNPCs(Npcs.Cyborg)
      .build(),
    new NpcBuilder(Npcs.BrimstoneWitch)
      .likesBiome(Biomes.Forest)
      .likesNPCs(Npcs.Clothier, Npcs.Princess)
      .dislikesBiome(Biomes.Crag)
      .dislikesNPCs(Npcs.PartyGirl)
      .build(),
  ],
  "Fargo's Mod": [
    new NpcBuilder(Npcs.LumberJack)
      .lovesBiome(Biomes.Forest)
      .likesNPCs(Npcs.Squirrel, Npcs.Princess)
      .dislikesNPCs(Npcs.Dryad)
      .hatesNPCs(Npcs.Demolitionist)
      .build(),
    new NpcBuilder(Npcs.Deviantt)
      .lovesBiome(Biomes.Space)
      .lovesNPCs(Npcs.Mutant)
      .likesBiome(Biomes.Jungle)
      .likesNPCs(Npcs.Abominationn, Npcs.Princess)
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(Npcs.Zoologist)
      .hatesBiome(Biomes.Desert)
      .hatesNPCs(Npcs.Angler)
      .build(),
    new NpcBuilder(Npcs.Abominationn)
      .lovesBiome(Biomes.Space)
      .lovesNPCs(Npcs.Mutant)
      .likesBiome(Biomes.Ocean)
      .likesNPCs(Npcs.Deviantt, Npcs.Princess)
      .dislikesBiome(Biomes.Dungeon)
      .hatesNPCs(Npcs.Nurse)
      .build(),
    new NpcBuilder(Npcs.Mutant)
      .lovesBiome(Biomes.Space)
      .lovesNPCs(Npcs.Abominationn)
      .likesBiome(Biomes.Forest)
      .likesNPCs(Npcs.Deviantt, Npcs.Princess)
      .dislikesBiome(Biomes.Hallow)
      .dislikesNPCs(Npcs.LumberJack)
      .build(),
    new NpcBuilder(Npcs.Squirrel)
      .lovesBiome(Biomes.Forest)
      .likesNPCs(Npcs.LumberJack, Npcs.Princess)
      .hatesBiome(Biomes.Underground)
      .build(),
  ],
  "Thorium Mod": [
    new NpcBuilder(Npcs.Cobbler)
      .lovesNPCs(Npcs.Zoologist, Npcs.Golfer)
      .likesBiome(Biomes.Forest)
      .likesNPCs(Npcs.Spiritualist, Npcs.Princess)
      .dislikesBiome(Biomes.Ocean)
      .dislikesNPCs(Npcs.Druid, Npcs.Dryad, Npcs.Angler)
      .hatesNPCs(Npcs.Nurse)
      .build(),
    new NpcBuilder(Npcs.DesertAcolyte)
      .likesBiome(Biomes.Desert)
      .likesNPCs(Npcs.Nurse, Npcs.Spiritualist, Npcs.Princess)
      .dislikesBiome(Biomes.Jungle)
      .dislikesNPCs(Npcs.Pirate)
      .hatesNPCs(Npcs.GoblinTinkerer, Npcs.WitchDoctor, Npcs.WeaponMaster)
      .build(),
    new NpcBuilder(Npcs.Cook)
      .lovesNPCs(Npcs.SantaClaus)
      .likesBiome(Biomes.Mushroom)
      .likesNPCs(Npcs.Truffle, Npcs.Princess)
      .dislikesBiome(Biomes.Underground)
      .dislikesNPCs(Npcs.Angler)
      .hatesNPCs(Npcs.Cyborg)
      .build(),
    new NpcBuilder(Npcs.ConfusedZombie)
      .lovesNPCs(Npcs.Guide)
      .likesBiome(Biomes.Forest)
      .likesNPCs(Npcs.Clothier, Npcs.Princess)
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(Npcs.Spiritualist)
      .build(),
    new NpcBuilder(Npcs.Blacksmith)
      .lovesNPCs(Npcs.Demolitionist)
      .likesBiome(Biomes.Underground)
      .likesNPCs(Npcs.WeaponMaster, Npcs.Princess)
      .dislikesNPCs(Npcs.Tracker)
      .build(),
    new NpcBuilder(Npcs.Tracker)
      .lovesNPCs(Npcs.Tavernkeep)
      .likesBiome(Biomes.Snow)
      .likesNPCs(Npcs.Guide, Npcs.Stylist, Npcs.Princess)
      .dislikesBiome(Biomes.Forest)
      .dislikesNPCs(Npcs.DyeTrader)
      .hatesNPCs(Npcs.DesertAcolyte)
      .build(),
    new NpcBuilder(Npcs.Diverman)
      .lovesNPCs(Npcs.PartyGirl)
      .likesBiome(Biomes.Ocean)
      .likesNPCs(Npcs.Pirate, Npcs.Princess)
      .dislikesBiome(Biomes.Desert)
      .dislikesNPCs(Npcs.Angler)
      .build(),
    new NpcBuilder(Npcs.Druid)
      .likesBiome(Biomes.Jungle)
      .likesNPCs(Npcs.Dryad, Npcs.Princess)
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(Npcs.Demolitionist)
      .hatesNPCs(Npcs.Steampunker)
      .build(),
    new NpcBuilder(Npcs.Spiritualist)
      .lovesNPCs(Npcs.Stylist)
      .likesBiome(Biomes.Hallow)
      .likesNPCs(Npcs.WitchDoctor, Npcs.Princess)
      .dislikesBiome(Biomes.Underground)
      .dislikesNPCs(Npcs.WeaponMaster)
      .hatesNPCs(Npcs.TaxCollector)
      .build(),
    new NpcBuilder(Npcs.WeaponMaster)
      .lovesNPCs(Npcs.TaxCollector)
      .likesBiome(Biomes.Underground)
      .likesNPCs(Npcs.GoblinTinkerer, Npcs.WitchDoctor, Npcs.Princess)
      .dislikesBiome(Biomes.Hallow)
      .dislikesNPCs(Npcs.ConfusedZombie, Npcs.Guide)
      .hatesNPCs(Npcs.Spiritualist)
      .build(),
  ],
  "One-Offs": [
    new NpcBuilder(Npcs.Automaton)
      .lovesBiome(Biomes.Snow)
      .lovesNPCs(Npcs.Mechanic)
      .likesBiome(Biomes.Forest)
      .likesNPCs(Npcs.WitchDoctor, Npcs.Princess)
      .dislikesBiome(Biomes.Desert)
      .dislikesNPCs(Npcs.Wizard)
      .hatesBiome(Biomes.Hallow)
      .hatesNPCs(Npcs.TaxCollector)
      .build(),
  ],
};
