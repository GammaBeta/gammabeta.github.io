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
    Loved: [],
    Liked: [],
    Disliked: [],
    Hated: [],
  };

  this.loves = function (...things) {
    this.npc.Loved = this.npc.Loved.concat(Array.from(things));
    return this;
  };
  this.likes = function (...things) {
    this.npc.Liked = this.npc.Liked.concat(Array.from(things));
    return this;
  };
  this.dislikes = function (...things) {
    this.npc.Disliked = this.npc.Disliked.concat(Array.from(things));
    return this;
  };
  this.hates = function (...things) {
    this.npc.Hated = this.npc.Hated.concat(Array.from(things));
    return this;
  };
  this.build = function () {
    return this.npc;
  };
};

const NpcModels = {
  Vanilla: [
    new NpcBuilder(Npcs.Guide)
      .likes(
        Biomes.Forest,
        Npcs.Clothier,
        Npcs.Zoologist,
        Npcs.Princess,
        Npcs.KingSlime,
        Npcs.EyeOfCthulhu
      )
      .dislikes(Biomes.Ocean, Npcs.Steampunker)
      .hates(Npcs.Painter, Npcs.WallOfFlesh)
      .build(),
    new NpcBuilder(Npcs.Merchant)
      .likes(
        Biomes.Forest,
        Npcs.Golfer,
        Npcs.Nurse,
        Npcs.Princess,
        Npcs.BrainOfCthulhu,
        Npcs.IceQueen,
        Npcs.QueenBee
      )
      .dislikes(Biomes.Desert, Npcs.TaxCollector)
      .hates(Npcs.Angler)
      .build(),
    new NpcBuilder(Npcs.Nurse)
      .loves(Npcs.ArmsDealer)
      .likes(
        Biomes.Hallow,
        Npcs.Wizard,
        Npcs.Princess,
        Npcs.QueenSlime,
        Npcs.EmpressOfLight
      )
      .dislikes(
        Biomes.Snow,
        Npcs.Dryad,
        Npcs.PartyGirl,
        Npcs.Destroyer,
        Npcs.Retinazer,
        Npcs.Spazmatism,
        Npcs.SkeletronPrime,
        Npcs.MartianSaucer
      )
      .hates(Npcs.Zoologist)
      .build(),
    new NpcBuilder(Npcs.Demolitionist)
      .loves(Npcs.Tavernkeep)
      .likes(
        Biomes.Underground,
        Npcs.Mechanic,
        Npcs.Princess,
        Npcs.MartianSaucer,
        Npcs.SkeletronPrime
      )
      .dislikes(
        Biomes.Ocean,
        Npcs.ArmsDealer,
        Npcs.GoblinTinkerer,
        Npcs.EaterOfWorlds,
        Npcs.BrainOfCthulhu
      )
      .build(),
    new NpcBuilder(Npcs.DyeTrader)
      .likes(
        Biomes.Desert,
        Npcs.ArmsDealer,
        Npcs.Painter,
        Npcs.Princess,
        Npcs.Plantera,
        Npcs.KingSlime,
        Npcs.Mothron
      )
      .dislikes(Biomes.Forest, Npcs.Steampunker, Npcs.Dreadnautilus)
      .hates(Npcs.Pirate)
      .build(),
    new NpcBuilder(Npcs.Angler)
      .likes(
        Biomes.Ocean,
        Npcs.Demolitionist,
        Npcs.PartyGirl,
        Npcs.TaxCollector,
        Npcs.Princess,
        Npcs.DukeFishron,
        Npcs.Dreadnautilus
      )
      .dislikes(Biomes.Desert, Npcs.QueenBee, Npcs.Mothron)
      .hates(Npcs.Tavernkeep)
      .build(),
    new NpcBuilder(Npcs.Zoologist)
      .loves(Npcs.WitchDoctor)
      .likes(
        Biomes.Forest,
        Npcs.Golfer,
        Npcs.Princess,
        Npcs.DukeFishron,
        Npcs.QueenBee,
        Npcs.Betsy,
        Npcs.Deerclops
      )
      .dislikes(Biomes.Desert, Npcs.Angler, Npcs.WallOfFlesh)
      .hates(Npcs.ArmsDealer)
      .build(),
    new NpcBuilder(Npcs.Dryad)
      .loves(Npcs.EmpressOfLight, Npcs.Plantera)
      .likes(
        Biomes.Jungle,
        Npcs.WitchDoctor,
        Npcs.Truffle,
        Npcs.Princess,
        Npcs.Golem,
        Npcs.QueenBee,
        Npcs.QueenSlime
      )
      .dislikes(Biomes.Desert, Npcs.Angler, Npcs.Dreadnautilus)
      .hates(
        Npcs.Golfer,
        Npcs.EaterOfWorlds,
        Npcs.BrainOfCthulhu,
        Npcs.MoonLord
      )
      .build(),
    new NpcBuilder(Npcs.Painter)
      .loves(Npcs.Dryad)
      .likes(
        Biomes.Jungle,
        Npcs.PartyGirl,
        Npcs.Princess,
        Npcs.EmpressOfLight,
        Npcs.EyeOfCthulhu,
        Npcs.IceQueen
      )
      .dislikes(Biomes.Forest, Npcs.Truffle, Npcs.Cyborg, Npcs.MartianSaucer)
      .build(),
    new NpcBuilder(Npcs.Golfer)
      .loves(Npcs.Angler, Npcs.DukeFishron)
      .likes(
        Biomes.Forest,
        Npcs.Painter,
        Npcs.Zoologist,
        Npcs.Princess,
        Npcs.KingSlime
      )
      .dislikes(Biomes.Underground, Npcs.Pirate, Npcs.WallOfFlesh)
      .hates(Npcs.Merchant)
      .build(),
    new NpcBuilder(Npcs.ArmsDealer)
      .loves(Npcs.Nurse)
      .likes(
        Biomes.Desert,
        Npcs.Steampunker,
        Npcs.Princess,
        Npcs.EaterOfWorlds,
        Npcs.Pumpking,
        Npcs.BrainOfCthulhu
      )
      .dislikes(Biomes.Snow, Npcs.Golfer)
      .hates(Npcs.Demolitionist)
      .build(),
    new NpcBuilder(Npcs.Tavernkeep)
      .loves(Npcs.Demolitionist)
      .likes(
        Biomes.Hallow,
        Npcs.GoblinTinkerer,
        Npcs.Princess,
        Npcs.EaterOfWorlds,
        Npcs.BrainOfCthulhu,
        Npcs.Dreadnautilus,
        Npcs.LunaticCultist,
        Npcs.TorchGod
      )
      .dislikes(Biomes.Snow, Npcs.Guide, Npcs.Golem)
      .hates(Npcs.DyeTrader)
      .build(),
    new NpcBuilder(Npcs.Stylist)
      .loves(Npcs.DyeTrader, Npcs.EmpressOfLight)
      .likes(
        Biomes.Ocean,
        Npcs.Pirate,
        Npcs.Princess,
        Npcs.QueenSlime,
        Npcs.Plantera
      )
      .dislikes(
        Biomes.Snow,
        Npcs.Tavernkeep,
        Npcs.QueenBee,
        Npcs.WallOfFlesh,
        Npcs.Pumpking,
        Npcs.Mothron
      )
      .hates(
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
      .loves(Npcs.Mechanic)
      .likes(Biomes.Underground, Npcs.DyeTrader, Npcs.Princess)
      .dislikes(Biomes.Jungle, Npcs.Clothier)
      .hates(Npcs.Stylist)
      .build(),
    new NpcBuilder(Npcs.WitchDoctor)
      .likes(
        Biomes.Jungle,
        Npcs.Dryad,
        Npcs.Guide,
        Npcs.Princess,
        Npcs.Destroyer,
        Npcs.Retinazer,
        Npcs.Spazmatism,
        Npcs.SkeletronPrime,
        Npcs.MartianSaucer
      )
      .dislikes(Biomes.Hallow, Npcs.Nurse, Npcs.TorchGod)
      .hates(Npcs.Truffle)
      .build(),
    new NpcBuilder(Npcs.Clothier)
      .loves(Npcs.Truffle)
      .likes(
        Biomes.Underground,
        Npcs.TaxCollector,
        Npcs.Princess,
        Npcs.EmpressOfLight,
        Npcs.Pumpking,
        Npcs.KingSlime,
        Npcs.QueenSlime
      )
      .dislikes(Biomes.Hallow, Npcs.Nurse, Npcs.Dreadnautilus)
      .hates(Npcs.Mechanic)
      .build(),
    new NpcBuilder(Npcs.Mechanic)
      .loves(Npcs.GoblinTinkerer)
      .likes(Biomes.Snow, Npcs.Cyborg, Npcs.Princess, Npcs.MartianSaucer)
      .dislikes(
        Biomes.Underground,
        Npcs.ArmsDealer,
        Npcs.Destroyer,
        Npcs.Retinazer,
        Npcs.Spazmatism,
        Npcs.SkeletronPrime,
        Npcs.LunaticCultist
      )
      .hates(Npcs.Clothier)
      .build(),
    new NpcBuilder(Npcs.PartyGirl)
      .loves(Npcs.Wizard, Npcs.Zoologist)
      .likes(
        Biomes.Hallow,
        Npcs.Stylist,
        Npcs.Princess,
        Npcs.EmpressOfLight,
        Npcs.Betsy,
        Npcs.QueenSlime,
        Npcs.Mothron
      )
      .dislikes(Biomes.Underground, Npcs.Merchant, Npcs.Dreadnautilus)
      .hates(Npcs.TaxCollector)
      .build(),
    new NpcBuilder(Npcs.Wizard)
      .loves(Npcs.Golfer)
      .likes(
        Biomes.Hallow,
        Npcs.Merchant,
        Npcs.Princess,
        Npcs.EmpressOfLight,
        Npcs.LunaticCultist,
        Npcs.MoonLord
      )
      .dislikes(Biomes.Ocean, Npcs.WitchDoctor, Npcs.MartianSaucer)
      .hates(Npcs.Cyborg)
      .build(),
    new NpcBuilder(Npcs.TaxCollector)
      .loves(Npcs.Merchant)
      .likes(Biomes.Snow, Npcs.PartyGirl, Npcs.Princess)
      .dislikes(
        Biomes.Hallow,
        Npcs.Demolitionist,
        Npcs.Mechanic,
        Npcs.WallOfFlesh,
        Npcs.MartianSaucer,
        Npcs.Deerclops
      )
      .hates(Npcs.SantaClaus)
      .build(),
    new NpcBuilder(Npcs.Truffle)
      .loves(Npcs.Guide, Npcs.Skeletron)
      .likes(Biomes.Mushroom, Npcs.Dryad, Npcs.Princess, Npcs.Plantera)
      .dislikes(Npcs.Clothier, Npcs.DukeFishron, Npcs.TorchGod)
      .hates(Npcs.WitchDoctor)
      .build(),
    new NpcBuilder(Npcs.Pirate)
      .loves(Npcs.Angler)
      .likes(Biomes.Ocean, Npcs.Tavernkeep, Npcs.Princess, Npcs.DukeFishron)
      .dislikes(
        Biomes.Underground,
        Npcs.Stylist,
        Npcs.Destroyer,
        Npcs.Dreadnautilus
      )
      .hates(Npcs.Guide)
      .build(),
    new NpcBuilder(Npcs.Steampunker)
      .loves(Npcs.Cyborg)
      .likes(
        Biomes.Desert,
        Npcs.Painter,
        Npcs.Princess,
        Npcs.Destroyer,
        Npcs.Retinazer,
        Npcs.Spazmatism,
        Npcs.SkeletronPrime,
        Npcs.MartianSaucer
      )
      .dislikes(
        Biomes.Jungle,
        Npcs.Dryad,
        Npcs.Wizard,
        Npcs.PartyGirl,
        Npcs.Pumpking,
        Npcs.EyeOfCthulhu
      )
      .build(),
    new NpcBuilder(Npcs.Cyborg)
      .likes(
        Biomes.Snow,
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
      .dislikes(
        Biomes.Jungle,
        Npcs.Zoologist,
        Npcs.EmpressOfLight,
        Npcs.IceQueen,
        Npcs.Pumpking
      )
      .hates(Npcs.Wizard)
      .build(),
    new NpcBuilder(Npcs.SantaClaus)
      .loves(Biomes.Snow)
      .likes(Npcs.Princess, Npcs.Deerclops, Npcs.IceQueen)
      .dislikes(Npcs.Pumpking)
      .hates(Biomes.Desert, Npcs.TaxCollector, Npcs.MoonLord)
      .build(),
    new NpcBuilder(Npcs.Princess)
      .loves(...Object.values(Npcs).filter((npc) => npc !== "Princess"))
      .build(),
  ],
  AlchemistNPC: [
    new NpcBuilder(Npcs.Alchemist)
      .loves(Biomes.Underground, Npcs.YoungBrewer)
      .likes(Biomes.Forest, Npcs.Mechanic, Npcs.Princess)
      .dislikes(Biomes.Snow, Npcs.Brewer)
      .build(),
    new NpcBuilder(Npcs.Brewer)
      .loves(Biomes.Forest, Npcs.YoungBrewer)
      .likes(Biomes.Jungle, Npcs.Alchemist, Npcs.Princess)
      .dislikes(Biomes.Snow, Npcs.WitchDoctor)
      .build(),
    new NpcBuilder(Npcs.Jeweler)
      .loves(Biomes.Forest, Npcs.Merchant)
      .likes(Biomes.Jungle, Npcs.TaxCollector, Npcs.Princess)
      .dislikes(Biomes.Snow, Npcs.PartyGirl)
      .build(),
    new NpcBuilder(Npcs.Tinkerer)
      .loves(Biomes.Snow, Npcs.Steampunker)
      .likes(Biomes.Underground, Npcs.Mechanic, Npcs.Princess)
      .dislikes(Biomes.Desert, Npcs.DyeTrader)
      .build(),
    new NpcBuilder(Npcs.Architect)
      .loves(Biomes.Jungle, Npcs.Painter)
      .likes(Biomes.Ocean, Npcs.GoblinTinkerer, Npcs.Princess)
      .dislikes(Biomes.Snow, Npcs.TaxCollector)
      .build(),
    new NpcBuilder(Npcs.Operator)
      .loves(Biomes.Snow, Npcs.Cyborg)
      .likes(Biomes.Ocean, Npcs.Steampunker, Npcs.Princess)
      .dislikes(Biomes.Underground, Npcs.Clothier)
      .build(),
    new NpcBuilder(Npcs.Musician)
      .loves(Biomes.Hallow, Npcs.PartyGirl)
      .likes(Biomes.Underground, Npcs.Wizard, Npcs.Princess)
      .dislikes(Biomes.Snow, Npcs.GoblinTinkerer)
      .build(),
    new NpcBuilder(Npcs.YoungBrewer)
      .loves(Biomes.Forest, Npcs.Brewer)
      .likes(Biomes.Desert, Npcs.Alchemist, Npcs.Princess)
      .dislikes(Biomes.Snow, Npcs.GoblinTinkerer)
      .build(),
  ],
    "Bosses as NPCs": [
    new NpcBuilder(Npcs.KingSlime)
      .loves(Biomes.Forest, Npcs.QueenSlime, Npcs.EyeOfCthulhu)
      .likes(
        Biomes.Hallow,
        Npcs.Pumpking,
        Npcs.DukeFishron,
        Npcs.Guide,
        Npcs.DyeTrader,
        Npcs.Golfer,
        Npcs.Princess
      )
      .dislikes(Biomes.Snow)
      .build(),
    new NpcBuilder(Npcs.TorchGod)
      .loves(Biomes.Underground)
      .likes(
        Biomes.Forest,
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
      .dislikes(Npcs.Dreadnautilus, Npcs.IceQueen, Npcs.Pirate)
      .build(),
    new NpcBuilder(Npcs.EyeOfCthulhu)
      .loves(Biomes.Forest, Npcs.Retinazer, Npcs.Spazmatism)
      .likes(
        Biomes.Desert,
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
      .loves(Biomes.Graveyard, Npcs.BrainOfCthulhu)
      .likes(
        Biomes.Forest,
        Npcs.WallOfFlesh,
        Npcs.Destroyer,
        Npcs.Tavernkeep,
        Npcs.ArmsDealer,
        Npcs.Princess
      )
      .dislikes(Biomes.Jungle, Npcs.Dryad, Npcs.EmpressOfLight)
      .hates(Biomes.Hallow)
      .build(),
    new NpcBuilder(Npcs.BrainOfCthulhu)
      .loves(Biomes.Graveyard, Npcs.EaterOfWorlds)
      .likes(
        Biomes.Forest,
        Npcs.WallOfFlesh,
        Npcs.EyeOfCthulhu,
        Npcs.MoonLord,
        Npcs.Dreadnautilus,
        Npcs.Tavernkeep,
        Npcs.ArmsDealer,
        Npcs.Princess
      )
      .dislikes(Biomes.Jungle, Npcs.Dryad, Npcs.EmpressOfLight)
      .hates(Biomes.Hallow)
      .build(),
    new NpcBuilder(Npcs.QueenBee)
      .loves(Biomes.Jungle, Npcs.Dryad)
      .likes(
        Biomes.Underground,
        Npcs.Plantera,
        Npcs.Golem,
        Npcs.QueenSlime,
        Npcs.IceQueen,
        Npcs.Mothron,
        Npcs.WitchDoctor,
        Npcs.Zoologist,
        Npcs.Princess
      )
      .dislikes(Biomes.Graveyard, Npcs.Demolitionist)
      .hates(Biomes.Snow)
      .build(),
    new NpcBuilder(Npcs.Skeletron)
      .loves(Biomes.Graveyard, Npcs.Clothier)
      .likes(
        Biomes.Forest,
        Npcs.LunaticCultist,
        Npcs.SkeletronPrime,
        Npcs.EyeOfCthulhu,
        Npcs.BrainOfCthulhu,
        Npcs.MoonLord,
        Npcs.Merchant,
        Npcs.Princess
      )
      .dislikes(Npcs.Angler)
      .build(),
    new NpcBuilder(Npcs.Deerclops)
      .loves(Biomes.Snow, Npcs.Betsy)
      .likes(
        Biomes.Forest,
        Npcs.IceQueen,
        Npcs.EyeOfCthulhu,
        Npcs.Mothron,
        Npcs.Zoologist,
        Npcs.SantaClaus,
        Npcs.Princess
      )
      .dislikes(Npcs.TaxCollector)
      .build(),
    new NpcBuilder(Npcs.WallOfFlesh)
      .loves(Npcs.Guide)
      .likes(
        Biomes.Underground,
        Npcs.EaterOfWorlds,
        Npcs.BrainOfCthulhu,
        Npcs.Dreadnautilus,
        Npcs.TaxCollector,
        Npcs.GoblinTinkerer,
        Npcs.Princess
      )
      .dislikes(Biomes.Forest, Npcs.QueenBee)
      .build(),
    new NpcBuilder(Npcs.QueenSlime)
      .loves(Biomes.Hallow, Npcs.KingSlime, Npcs.EmpressOfLight)
      .likes(
        Biomes.Forest,
        Npcs.QueenBee,
        Npcs.IceQueen,
        Npcs.PartyGirl,
        Npcs.Nurse,
        Npcs.Dryad,
        Npcs.Princess
      )
      .dislikes(Biomes.Snow)
      .build(),
    new NpcBuilder(Npcs.Destroyer)
      .loves(
        Npcs.Retinazer,
        Npcs.Spazmatism,
        Npcs.SkeletronPrime,
        Npcs.Mechanic
      )
      .likes(
        Biomes.Forest,
        Npcs.EaterOfWorlds,
        Npcs.MoonLord,
        Npcs.Steampunker,
        Npcs.Cyborg,
        Npcs.GoblinTinkerer,
        Npcs.Princess
      )
      .dislikes(Npcs.Wizard)
      .build(),
    new NpcBuilder(Npcs.Retinazer)
      .loves(
        Npcs.Destroyer,
        Npcs.Spazmatism,
        Npcs.SkeletronPrime,
        Npcs.Mechanic
      )
      .likes(
        Biomes.Forest,
        Npcs.EyeOfCthulhu,
        Npcs.MoonLord,
        Npcs.Steampunker,
        Npcs.Cyborg,
        Npcs.GoblinTinkerer,
        Npcs.Princess
      )
      .dislikes(Npcs.Nurse)
      .build(),
    new NpcBuilder(Npcs.Spazmatism)
      .loves(Npcs.Destroyer, Npcs.Retinazer, Npcs.SkeletronPrime, Npcs.Mechanic)
      .likes(
        Biomes.Forest,
        Npcs.EyeOfCthulhu,
        Npcs.MoonLord,
        Npcs.TorchGod,
        Npcs.Steampunker,
        Npcs.Cyborg,
        Npcs.GoblinTinkerer,
        Npcs.Princess
      )
      .dislikes(Npcs.Nurse)
      .build(),
    new NpcBuilder(Npcs.SkeletronPrime)
      .loves(Npcs.Destroyer, Npcs.Retinazer, Npcs.Spazmatism, Npcs.Mechanic)
      .likes(
        Biomes.Forest,
        Npcs.Skeletron,
        Npcs.MoonLord,
        Npcs.Steampunker,
        Npcs.Cyborg,
        Npcs.GoblinTinkerer,
        Npcs.Princess
      )
      .dislikes(Npcs.Pirate)
      .build(),
    new NpcBuilder(Npcs.Dreadnautilus)
      .loves(Biomes.Ocean, Npcs.BrainOfCthulhu)
      .likes(
        Biomes.Graveyard,
        Npcs.DukeFishron,
        Npcs.WallOfFlesh,
        Npcs.Mothron,
        Npcs.Zoologist,
        Npcs.Tavernkeep,
        Npcs.Princess
      )
      .dislikes(Biomes.Underground, Npcs.Angler, Npcs.Pirate)
      .hates(Biomes.Snow)
      .build(),
    new NpcBuilder(Npcs.Mothron)
      .loves(Biomes.Graveyard, Npcs.Deerclops, Npcs.WitchDoctor)
      .likes(
        Biomes.Forest,
        Npcs.QueenBee,
        Npcs.Betsy,
        Npcs.Dreadnautilus,
        Npcs.TorchGod,
        Npcs.Zoologist,
        Npcs.Merchant,
        Npcs.Princess
      )
      .dislikes(Biomes.Underground, Npcs.DyeTrader, Npcs.Golfer)
      .build(),
    new NpcBuilder(Npcs.Plantera)
      .loves(Biomes.Jungle, Npcs.WitchDoctor, Npcs.Dryad)
      .likes(
        Biomes.Underground,
        Npcs.Golem,
        Npcs.QueenBee,
        Npcs.EmpressOfLight,
        Npcs.LunaticCultist,
        Npcs.Steampunker,
        Npcs.Princess
      )
      .dislikes(Biomes.Graveyard, Npcs.DyeTrader)
      .hates(Biomes.Snow)
      .build(),
    new NpcBuilder(Npcs.Golem)
      .loves(Biomes.Jungle, Npcs.WitchDoctor)
      .likes(
        Biomes.Underground,
        Npcs.Plantera,
        Npcs.QueenBee,
        Npcs.EmpressOfLight,
        Npcs.LunaticCultist,
        Npcs.Dryad,
        Npcs.Princess
      )
      .dislikes(Biomes.Graveyard, Npcs.GoblinTinkerer, Npcs.Demolitionist)
      .build(),
    new NpcBuilder(Npcs.Pumpking)
      .loves(Biomes.Graveyard, Npcs.IceQueen)
      .likes(
        Biomes.Desert,
        Npcs.Betsy,
        Npcs.MartianSaucer,
        Npcs.KingSlime,
        Npcs.DukeFishron,
        Npcs.Mothron,
        Npcs.TorchGod,
        Npcs.Princess
      )
      .dislikes(Biomes.Snow, Npcs.PartyGirl)
      .build(),
    new NpcBuilder(Npcs.IceQueen)
      .loves(Biomes.Snow, Npcs.Pumpking)
      .likes(
        Biomes.Ocean,
        Npcs.Betsy,
        Npcs.MartianSaucer,
        Npcs.Deerclops,
        Npcs.QueenSlime,
        Npcs.QueenBee,
        Npcs.SantaClaus,
        Npcs.Princess
      )
      .dislikes(Biomes.Graveyard, Npcs.Mothron, Npcs.TorchGod, Npcs.Painter)
      .build(),
    new NpcBuilder(Npcs.MartianSaucer)
      .loves(Npcs.Cyborg, Npcs.Steampunker)
      .likes(
        Biomes.Desert,
        Npcs.IceQueen,
        Npcs.Pumpking,
        Npcs.Betsy,
        Npcs.Mechanic,
        Npcs.GoblinTinkerer,
        Npcs.Princess
      )
      .dislikes(Npcs.Wizard, Npcs.TaxCollector)
      .build(),
    new NpcBuilder(Npcs.EmpressOfLight)
      .loves(Biomes.Hallow, Npcs.Dryad, Npcs.QueenSlime)
      .likes(
        Biomes.Forest,
        Npcs.Plantera,
        Npcs.Golem,
        Npcs.LunaticCultist,
        Npcs.Wizard,
        Npcs.PartyGirl,
        Npcs.Stylist,
        Npcs.Princess
      )
      .dislikes(Biomes.Underground, Npcs.EaterOfWorlds, Npcs.BrainOfCthulhu)
      .hates(Biomes.Graveyard)
      .build(),
    new NpcBuilder(Npcs.DukeFishron)
      .loves(Biomes.Ocean, Npcs.Betsy, Npcs.Angler)
      .likes(
        Biomes.Snow,
        Npcs.EmpressOfLight,
        Npcs.KingSlime,
        Npcs.Pumpking,
        Npcs.Dreadnautilus,
        Npcs.Pirate,
        Npcs.Truffle,
        Npcs.Princess
      )
      .dislikes(Npcs.ArmsDealer)
      .build(),
    new NpcBuilder(Npcs.Betsy)
      .loves(Biomes.Forest, Npcs.DukeFishron, Npcs.Deerclops)
      .likes(
        Biomes.Hallow,
        Npcs.IceQueen,
        Npcs.Pumpking,
        Npcs.MartianSaucer,
        Npcs.Mothron,
        Npcs.TorchGod,
        Npcs.Zoologist,
        Npcs.Princess
      )
      .dislikes(Biomes.Underground, Npcs.Merchant)
      .build(),
    new NpcBuilder(Npcs.LunaticCultist)
      .loves(Biomes.Graveyard, Npcs.MoonLord)
      .likes(
        Biomes.Ocean,
        Npcs.Skeletron,
        Npcs.Plantera,
        Npcs.Golem,
        Npcs.EmpressOfLight,
        Npcs.Clothier,
        Npcs.Princess
      )
      .dislikes(Npcs.WitchDoctor, Npcs.Dreadnautilus)
      .build(),
    new NpcBuilder(Npcs.MoonLord)
      .loves(Biomes.Graveyard, Npcs.LunaticCultist)
      .likes(
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
      .dislikes(Npcs.EmpressOfLight, Npcs.Dryad)
      .hates(Npcs.TorchGod)
      .build(),
  ],
  "Calamity Mod": [
    new NpcBuilder(Npcs.SeaKing)
      .likes(Biomes.Ocean, Npcs.Pirate, Npcs.Princess)
      .dislikes(Biomes.Desert, Npcs.Demolitionist)
      .hates(Npcs.Angler)
      .build(),
    new NpcBuilder(Npcs.Bandit)
      .likes(Biomes.Desert, Npcs.GoblinTinkerer, Npcs.Princess)
      .dislikes(Biomes.Jungle, Npcs.Dryad)
      .build(),
    new NpcBuilder(Npcs.DrunkPrincess)
      .loves(Biomes.Hallow, Npcs.Stylist, Npcs.Zoologist)
      .likes(Biomes.Ocean, Npcs.PartyGirl, Npcs.Truffle, Npcs.Princess)
      .dislikes(Biomes.Desert, Npcs.Tavernkeep, Npcs.TaxCollector)
      .hates(Biomes.Underground, Npcs.Angler, Npcs.GoblinTinkerer)
      .build(),
    new NpcBuilder(Npcs.Archmage)
      .likes(Biomes.Snow, Npcs.Wizard, Npcs.Princess)
      .dislikes(Biomes.Desert, Npcs.Cyborg)
      .build(),
    new NpcBuilder(Npcs.BrimstoneWitch)
      .likes(Biomes.Forest, Npcs.Clothier, Npcs.Princess)
      .dislikes(Biomes.Crag, Npcs.PartyGirl)
      .build(),
  ],
  "Fargo's Mod": [
    new NpcBuilder(Npcs.LumberJack)
      .loves(Biomes.Forest)
      .likes(Npcs.Squirrel, Npcs.Princess)
      .dislikes(Npcs.Dryad)
      .hates(Npcs.Demolitionist)
      .build(),
    new NpcBuilder(Npcs.Deviantt)
      .loves(Biomes.Space, Npcs.Mutant)
      .likes(Biomes.Jungle, Npcs.Abominationn, Npcs.Princess)
      .dislikes(Biomes.Snow, Npcs.Zoologist)
      .hates(Biomes.Desert, Npcs.Angler)
      .build(),
    new NpcBuilder(Npcs.Abominationn)
      .loves(Biomes.Space, Npcs.Mutant)
      .likes(Biomes.Ocean, Npcs.Deviantt, Npcs.Princess)
      .dislikes(Biomes.Dungeon)
      .hates(Npcs.Nurse)
      .build(),
    new NpcBuilder(Npcs.Mutant)
      .loves(Biomes.Space, Npcs.Abominationn)
      .likes(Biomes.Forest, Npcs.Deviantt, Npcs.Princess)
      .dislikes(Biomes.Hallow, Npcs.LumberJack)
      .build(),
    new NpcBuilder(Npcs.Squirrel)
      .loves(Biomes.Forest)
      .likes(Npcs.LumberJack, Npcs.Princess)
      .hates(Biomes.Underground)
      .build(),
  ],
  "Thorium Mod": [
    new NpcBuilder(Npcs.Cobbler)
      .loves(Npcs.Zoologist, Npcs.Golfer)
      .likes(Biomes.Forest, Npcs.Spiritualist, Npcs.Princess)
      .dislikes(Biomes.Ocean, Npcs.Druid, Npcs.Dryad, Npcs.Angler)
      .hates(Npcs.Nurse)
      .build(),
    new NpcBuilder(Npcs.DesertAcolyte)
      .likes(Biomes.Desert, Npcs.Nurse, Npcs.Spiritualist, Npcs.Princess)
      .dislikes(Biomes.Jungle, Npcs.Pirate)
      .hates(Npcs.GoblinTinkerer, Npcs.WitchDoctor, Npcs.WeaponMaster)
      .build(),
    new NpcBuilder(Npcs.Cook)
      .loves(Npcs.SantaClaus)
      .likes(Biomes.Mushroom, Npcs.Truffle, Npcs.Princess)
      .dislikes(Biomes.Underground, Npcs.Angler)
      .hates(Npcs.Cyborg)
      .build(),
    new NpcBuilder(Npcs.ConfusedZombie)
      .loves(Npcs.Guide)
      .likes(Biomes.Forest, Npcs.Clothier, Npcs.Princess)
      .dislikes(Biomes.Snow, Npcs.Princess)
      .build(),
    new NpcBuilder(Npcs.Blacksmith)
      .loves(Npcs.Demolitionist)
      .likes(Biomes.Underground, Npcs.WeaponMaster, Npcs.Princess)
      .dislikes(Npcs.Tracker)
      .build(),
    new NpcBuilder(Npcs.Tracker)
      .loves(Npcs.Tavernkeep)
      .likes(Biomes.Snow, Npcs.Guide, Npcs.Stylist, Npcs.Princess)
      .dislikes(Biomes.Forest, Npcs.DyeTrader)
      .hates(Npcs.DesertAcolyte)
      .build(),
    new NpcBuilder(Npcs.Diverman)
      .loves(Npcs.PartyGirl)
      .likes(Biomes.Ocean, Npcs.Pirate, Npcs.Princess)
      .dislikes(Biomes.Desert, Npcs.Angler)
      .build(),
    new NpcBuilder(Npcs.Druid)
      .likes(Biomes.Jungle, Npcs.Dryad, Npcs.Princess)
      .dislikes(Biomes.Snow, Npcs.Demolitionist)
      .hates(Npcs.Steampunker)
      .build(),
    new NpcBuilder(Npcs.Spiritualist)
      .loves(Npcs.Stylist)
      .likes(Biomes.Hallow, Npcs.WitchDoctor, Npcs.Princess)
      .dislikes(Biomes.Underground, Npcs.WeaponMaster)
      .hates(Npcs.TaxCollector)
      .build(),
    new NpcBuilder(Npcs.WeaponMaster)
      .loves(Npcs.TaxCollector)
      .likes(
        Biomes.Underground,
        Npcs.GoblinTinkerer,
        Npcs.WitchDoctor,
        Npcs.Princess
      )
      .dislikes(Biomes.Hallow, Npcs.ConfusedZombie, Npcs.Guide)
      .hates(Npcs.Spiritualist)
      .build(),
  ],
  "One-Offs": [
    new NpcBuilder(Npcs.Automaton)
      .loves(Biomes.Snow, Npcs.Mechanic)
      .likes(Biomes.Forest, Npcs.WitchDoctor, Npcs.Princess)
      .dislikes(Biomes.Desert, Npcs.Wizard)
      .hates(Biomes.Hallow, Npcs.TaxCollector)
      .build(),
  ],
};
