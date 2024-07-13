const Biomes = {
    Forest: 'Forest',
    Underground: 'Underground',
    Snow: 'Snow',
    Desert: 'Desert',
    Ocean: 'Ocean',
    Jungle: 'Jungle',
    Dungeon: 'Dungeon',
    Space: 'Space',
    Hallow: 'Hallow',
    Mushroom: 'Mushroom',
    Crag: 'Crag'
};

const Npcs = {
    //Vanilla
    Guide: 'Guide',
    Merchant: 'Merchant',
    Nurse: 'Nurse',
    Demolitionist: 'Demolitionist',
    DyeTrader: 'Dye Trader',
    Angler: 'Angler',
    Zoologist: 'Zoologist',
    Dryad: 'Dryad',
    Painter: 'Painter',
    Golfer: 'Golfer',
    ArmsDealer: 'Arms Dealer',
    Tavernkeep: 'Tavernkeep',
    Stylist: 'Stylist',
    GoblinTinkerer: 'Goblin Tinkerer',
    WitchDoctor: 'Witch Doctor',
    Clothier: 'Clothier',
    Mechanic: 'Mechanic',
    PartyGirl: 'Party Girl',
    Wizard: 'Wizard',
    TaxCollector: 'Tax Collector',
    Truffle: 'Truffle',
    Pirate: 'Pirate',
    Steampunker: 'Steampunker',
    SantaClaus: 'Santa Claus',
    Cyborg: 'Cyborg',
    Princess: 'Princess',
    //AlchemistNPC
    Alchemist: 'Alchemist',
    Brewer: 'Brewer',
    Jeweler: 'Jeweler',
    Tinkerer: 'Tinkerer',
    Architect: 'Architect',
    Operator: 'Operator',
    Musician: 'Musician',
    YoungBrewer: 'Young Brewer',
    //Calamity Mod
    SeaKing: 'Sea King',
    Bandit: 'Bandit',
    DrunkPrincess: 'Drunk Princess',
    Archmage: 'Archmage',
    CragWitch: 'Crag Witch',
    //Fargo's Mod
    LumberJack: 'LumberJack',
    Deviantt: 'Deviantt',
    Abominationn: 'Abominationn',
    Mutant: 'Mutant',
    Squirrel: 'Squirrel',
    //Thorium Mod
    Cobbler: 'Cobbler',
    DesertAcolyte: 'Desert Acolyte',
    Cook: 'Cook',
    ConfusedZombie: 'Confused Zombie',
    Blacksmith: 'Blacksmith',
    Tracker: 'Tracker',
    Diverman: 'Diverman',
    Druid: 'Druid',
    Spiritualist: 'Spiritualist',
    WeaponMaster: 'Weapon Master',
    //One-Offs
    Automaton: 'Automaton' //From Magic Storage
};

const NpcBuilder = function(npcName) {
    this.npc = {
        Name: npcName,
        Loved: [],
        Liked: [],
        Disliked: [],
        Hated: []
    };
    
    this.loves = function(things) { this.npc.Loved = this.npc.Loved.concat(Array.from(arguments)); return this; };
    this.likes = function(things) { this.npc.Liked = this.npc.Liked.concat(Array.from(arguments)); return this; };
    this.dislikes = function(things) { this.npc.Disliked = this.npc.Disliked.concat(Array.from(arguments)); return this; };
    this.hates = function(things) { this.npc.Hated = this.npc.Hated.concat(Array.from(arguments)); return this; };
    this.build = function() { return this.npc };
}

const NpcModels = [
    //Template: new NpcBuilder(Npcs.Name).loves().likes().dislikes().hates().build(),
    //Vanilla
    new NpcBuilder(Npcs.Guide).likes(Biomes.Forest, Npcs.Clothier, Npcs.Zoologist, Npcs.Princess).dislikes(Biomes.Ocean, Npcs.Steampunker).hates(Npcs.Painter).build(),
    new NpcBuilder(Npcs.Merchant).likes(Biomes.Forest, Npcs.Golfer, Npcs.Nurse, Npcs.Princess).dislikes(Biomes.Desert, Npcs.TaxCollector).hates(Npcs.Angler).build(),
    new NpcBuilder(Npcs.Nurse).loves(Npcs.ArmsDealer).likes(Biomes.Hallow, Npcs.Wizard, Npcs.Princess).dislikes(Biomes.Snow, Npcs.Dryad, Npcs.PartyGirl).hates(Npcs.Zoologist).build(),
    new NpcBuilder(Npcs.Demolitionist).loves(Npcs.Tavernkeep).likes(Biomes.Underground, Npcs.Mechanic, Npcs.Princess).dislikes(Biomes.Ocean, Npcs.ArmsDealer, Npcs.GoblinTinkerer).build(),
    new NpcBuilder(Npcs.DyeTrader).likes(Biomes.Desert, Npcs.ArmsDealer, Npcs.Painter, Npcs.Princess).dislikes(Biomes.Forest, Npcs.Steampunker).hates(Npcs.Pirate).build(),
    new NpcBuilder(Npcs.Angler).likes(Biomes.Ocean, Npcs.Demolitionist, Npcs.PartyGirl, Npcs.TaxCollector, Npcs.Princess).dislikes(Biomes.Desert).hates(Npcs.Tavernkeep).build(),
    new NpcBuilder(Npcs.Zoologist).loves(Npcs.WitchDoctor).likes(Biomes.Forest, Npcs.Golfer, Npcs.Princess).dislikes(Biomes.Desert, Npcs.Angler).hates(Npcs.ArmsDealer).build(),
    new NpcBuilder(Npcs.Dryad).likes(Biomes.Jungle, Npcs.WitchDoctor, Npcs.Truffle, Npcs.Princess).dislikes(Biomes.Desert, Npcs.Angler).hates(Npcs.Golfer).build(),
    new NpcBuilder(Npcs.Painter).loves(Npcs.Dryad).likes(Biomes.Jungle, Npcs.PartyGirl, Npcs.Princess).dislikes(Biomes.Forest, Npcs.Truffle, Npcs.Cyborg).build(),
    new NpcBuilder(Npcs.Golfer).loves(Npcs.Angler).likes(Biomes.Forest, Npcs.Painter, Npcs.Zoologist, Npcs.Princess).dislikes(Biomes.Underground, Npcs.Pirate).hates(Npcs.Merchant).build(),
    new NpcBuilder(Npcs.ArmsDealer).loves(Npcs.Nurse).likes(Biomes.Desert, Npcs.Steampunker, Npcs.Princess).dislikes(Biomes.Snow ,Npcs.Golfer).hates(Npcs.Demolitionist).build(),
    new NpcBuilder(Npcs.Tavernkeep).loves(Npcs.Demolitionist).likes(Biomes.Hallow, Npcs.GoblinTinkerer, Npcs.Princess).dislikes(Biomes.Snow, Npcs.Guide).hates(Npcs.DyeTrader).build(),
    new NpcBuilder(Npcs.Stylist).loves(Npcs.DyeTrader).likes(Biomes.Ocean, Npcs.Pirate, Npcs.Princess).dislikes(Biomes.Snow, Npcs.Tavernkeep).hates(Npcs.GoblinTinkerer).build(),
    new NpcBuilder(Npcs.GoblinTinkerer).loves(Npcs.Mechanic).likes(Biomes.Underground, Npcs.DyeTrader, Npcs.Princess).dislikes(Biomes.Jungle, Npcs.Clothier).hates(Npcs.Stylist).build(),
    new NpcBuilder(Npcs.WitchDoctor).likes(Biomes.Jungle, Npcs.Dryad, Npcs.Guide, Npcs.Princess).dislikes(Biomes.Hallow, Npcs.Nurse).hates(Npcs.Truffle).build(),
    new NpcBuilder(Npcs.Clothier).loves(Npcs.Truffle).likes(Biomes.Underground, Npcs.TaxCollector, Npcs.Princess).dislikes(Biomes.Hallow, Npcs.Nurse).hates(Npcs.Mechanic).build(),
    new NpcBuilder(Npcs.Mechanic).loves(Npcs.GoblinTinkerer).likes(Biomes.Snow, Npcs.Cyborg, Npcs.Princess).dislikes(Biomes.Underground, Npcs.ArmsDealer).hates(Npcs.Clothier).build(),
    new NpcBuilder(Npcs.PartyGirl).loves(Npcs.Wizard, Npcs.Zoologist).likes(Biomes.Hallow, Npcs.Stylist, Npcs.Princess).dislikes(Biomes.Underground, Npcs.Merchant).hates(Npcs.TaxCollector).build(),
    new NpcBuilder(Npcs.Wizard).loves(Npcs.Golfer).likes(Biomes.Hallow, Npcs.Merchant, Npcs.Princess).dislikes(Biomes.Ocean, Npcs.WitchDoctor).hates(Npcs.Cyborg).build(),
    new NpcBuilder(Npcs.TaxCollector).loves(Npcs.Merchant).likes(Biomes.Snow, Npcs.PartyGirl, Npcs.Princess).dislikes(Biomes.Hallow, Npcs.Demolitionist, Npcs.Mechanic).hates(Npcs.SantaClaus).build(),
    new NpcBuilder(Npcs.Truffle).loves(Npcs.Guide).likes(Biomes.Mushroom, Npcs.Dryad, Npcs.Princess).dislikes(Npcs.Clothier).hates(Npcs.WitchDoctor).build(),
    new NpcBuilder(Npcs.Pirate).loves(Npcs.Angler).likes(Biomes.Ocean, Npcs.Tavernkeep, Npcs.Princess).dislikes(Biomes.Underground, Npcs.Stylist).hates(Npcs.Guide).build(),
    new NpcBuilder(Npcs.Steampunker).loves(Npcs.Cyborg).likes(Biomes.Desert, Npcs.Painter, Npcs.Princess).dislikes(Biomes.Jungle, Npcs.Dryad, Npcs.Wizard, Npcs.PartyGirl).build(),
    new NpcBuilder(Npcs.Cyborg).likes(Biomes.Snow, Npcs.Steampunker, Npcs.Pirate, Npcs.Stylist, Npcs.Princess).dislikes(Biomes.Jungle, Npcs.Zoologist).hates(Npcs.Wizard).build(),
    new NpcBuilder(Npcs.SantaClaus).loves(Biomes.Snow).likes(Npcs.Princess).hates(Biomes.Desert, Npcs.TaxCollector).build(),
    new NpcBuilder(Npcs.Princess).loves(...Object.values(Npcs).filter(npc => npc !== "Princess")).build(),
    //AlchemistNPC
    new NpcBuilder(Npcs.Alchemist).loves(Biomes.Underground, Npcs.YoungBrewer).likes(Biomes.Forest, Npcs.Mechanic, Npcs.Princess).dislikes(Biomes.Snow, Npcs.Brewer).build(),
    new NpcBuilder(Npcs.Brewer).loves(Biomes.Forest, Npcs.YoungBrewer).likes(Biomes.Jungle, Npcs.Alchemist, Npcs.Princess).dislikes(Biomes.Snow, Npcs.WitchDoctor).build(),
    new NpcBuilder(Npcs.Jeweler).loves(Biomes.Forest, Npcs.Merchant).likes(Biomes.Jungle, Npcs.TaxCollector, Npcs.Princess).dislikes(Biomes.Snow, Npcs.PartyGirl).build(),
    new NpcBuilder(Npcs.Tinkerer).loves(Biomes.Snow, Npcs.Steampunker).likes(Biomes.Underground, Npcs.Mechanic, Npcs.Princess).dislikes(Biomes.Desert, Npcs.DyeTrader).build(),
    new NpcBuilder(Npcs.Architect).loves(Biomes.Jungle, Npcs.Painter).likes(Biomes.Ocean, Npcs.GoblinTinkerer, Npcs.Princess).dislikes(Biomes.Snow, Npcs.TaxCollector).build(),
    new NpcBuilder(Npcs.Operator).loves(Biomes.Snow, Npcs.Cyborg).likes(Biomes.Ocean, Npcs.Steampunker, Npcs.Princess).dislikes(Biomes.Underground, Npcs.Clothier).build(),
    new NpcBuilder(Npcs.Musician).loves(Biomes.Hallow, Npcs.PartyGirl).likes(Biomes.Underground, Npcs.Wizard, Npcs.Princess).dislikes(Biomes.Snow, Npcs.GoblinTinkerer).build(),
    new NpcBuilder(Npcs.YoungBrewer).loves(Biomes.Forest, Npcs.Brewer).likes(Biomes.Desert, Npcs.Alchemist, Npcs.Princess).dislikes(Biomes.Snow, Npcs.GoblinTinkerer).build(),
    //Calamity Mod
    new NpcBuilder(Npcs.SeaKing).likes(Biomes.Ocean, Npcs.Pirate, Npcs.Princess).dislikes(Biomes.Desert, Npcs.Demolitionist).hates(Npcs.Angler).build(),
    new NpcBuilder(Npcs.Bandit).likes(Biomes.Desert, Npcs.GoblinTinkerer, Npcs.Princess).dislikes(Biomes.Jungle, Npcs.Dryad).build(),
    new NpcBuilder(Npcs.DrunkPrincess).loves(Biomes.Hallow, Npcs.Stylist, Npcs.Zoologist).likes(Biomes.Ocean, Npcs.PartyGirl, Npcs.Truffle, Npcs.Princess).dislikes(Biomes.Desert, Npcs.Tavernkeep, Npcs.TaxCollector).hates(Biomes.Underground, Npcs.Angler, Npcs.GoblinTinkerer).build(),
    new NpcBuilder(Npcs.Archmage).likes(Biomes.Snow, Npcs.Wizard, Npcs.Princess).dislikes(Biomes.Desert, Npcs.Cyborg).build(),
    new NpcBuilder(Npcs.CragWitch).likes(Biomes.Forest, Npcs.Clothier, Npcs.Princess).dislikes(Biomes.Crag, Npcs.PartyGirl).build(),
    //Fargo's Mod
    new NpcBuilder(Npcs.LumberJack).loves(Biomes.Forest).likes(Npcs.Squirrel, Npcs.Princess).dislikes(Npcs.Dryad).hates(Npcs.Demolitionist).build(),
    new NpcBuilder(Npcs.Deviantt).loves(Biomes.Space, Npcs.Mutant).likes(Biomes.Jungle, Npcs.Abominationn, Npcs.Princess).dislikes(Biomes.Snow, Npcs.Zoologist).hates(Biomes.Desert, Npcs.Angler).build(),
    new NpcBuilder(Npcs.Abominationn).loves(Biomes.Space, Npcs.Mutant).likes(Biomes.Ocean, Npcs.Deviantt, Npcs.Princess).dislikes(Biomes.Dungeon).hates(Npcs.Nurse).build(),
    new NpcBuilder(Npcs.Mutant).loves(Biomes.Space, Npcs.Abominationn).likes(Biomes.Forest, Npcs.Deviantt, Npcs.Princess).dislikes(Biomes.Hallow, Npcs.LumberJack).build(),
    new NpcBuilder(Npcs.Squirrel).loves(Biomes.Forest).likes(Npcs.LumberJack, Npcs.Princess).hates(Biomes.Underground).build(),
    //Thorium Mod
    new NpcBuilder(Npcs.Cobbler).loves(Npcs.Zoologist, Npcs.Golfer).likes(Biomes.Forest, Npcs.Spiritualist, Npcs.Princess).dislikes(Biomes.Ocean, Npcs.Druid, Npcs.Dryad, Npcs.Angler).hates(Npcs.Nurse).build(),
    new NpcBuilder(Npcs.DesertAcolyte).likes(Biomes.Desert, Npcs.Nurse, Npcs.Spiritualist, Npcs.Princess).dislikes(Biomes.Jungle, Npcs.Pirate).hates(Npcs.GoblinTinkerer, Npcs.WitchDoctor, Npcs.WeaponMaster).build(),
    new NpcBuilder(Npcs.Cook).loves(Npcs.SantaClaus).likes(Biomes.GrowingMushroom, Npcs.Truffle, Npcs.Princess).dislikes(Biomes.Underground, Npcs.Angler).hates(Npcs.Cyborg).build(),
    new NpcBuilder(Npcs.ConfusedZombie).loves(Npcs.Guide).likes(Biomes.Forest, Npcs.Clothier, Npcs.Princess).dislikes(Biomes.Snow, Npcs.Princess).build(),
    new NpcBuilder(Npcs.Blacksmith).loves(Npcs.Demolitionist).likes(Biomes.Underground, Npcs.WeaponMaster, Npcs.Princess).dislikes(Npcs.Tracker).build(),
    new NpcBuilder(Npcs.Tracker).loves(Npcs.Tavernkeep).likes(Biomes.Snow, Npcs.Guide, Npcs.Stylist, Npcs.Princess).dislikes(Biomes.Forest, Npcs.DyeTrader).hates(Npcs.DesertAcolyte).build(),
    new NpcBuilder(Npcs.Diverman).loves(Npcs.PartyGirl).likes(Biomes.Ocean, Npcs.Pirate, Npcs.Princess).dislikes(Biomes.Desert, Npcs.Angler).build(),
    new NpcBuilder(Npcs.Druid).likes(Biomes.Jungle, Npcs.Dryad, Npcs.Princess).dislikes(Biomes.Snow, Npcs.Demolitionist).hates(Npcs.Steampunker).build(),
    new NpcBuilder(Npcs.Spiritualist).loves(Npcs.Stylist).likes(Biomes.Hallow, Npcs.WitchDoctor, Npcs.Princess).dislikes(Biomes.Underground, Npcs.WeaponMaster).hates(Npcs.TaxCollector).build(),
    new NpcBuilder(Npcs.WeaponMaster).loves(Npcs.TaxCollector).likes(Biomes.Underground, Npcs.GoblinTinkerer, Npcs.WitchDoctor, Npcs.Princess).dislikes(Biomes.Hallow, Npcs.ConfusedZombie, Npcs.Guide).hates(Npcs.Spiritualist).build(),
    //One-Offs
    new NpcBuilder(Npcs.Automaton).loves(Biomes.Snow, Npcs.Mechanic).likes(Biomes.Forest, Npcs.WitchDoctor, Npcs.Princess).dislikes(Biomes.Desert, Npcs.Wizard).hates(Biomes.Hallow, Npcs.TaxCollector).build()
]
