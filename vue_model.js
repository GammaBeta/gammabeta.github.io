Vue.component("biome", {
  template: `
    <div class="biomeButton" @click="toggle" :class="{ disabled: !enabled }" :title="name">
      <img :src="image" />
    </div>
  `,
  props: {
    name: String,
    enabled: Boolean,
  },
  data() {
    return {
      image: "images/biome/" + this.name.replaceAll(" ", "") + ".png",
    };
  },
  methods: {
    toggle() {
      this.$emit("toggle", this.name);
    },
  },
});

Vue.component("npc", {
  template: `
    <div class="npc" @mouseenter="onHover">
      <img :src="imageUrl" />
      <div class="name">{{this.npc.Name}}</div>
      <div :class="{ happy: this.happiness <= 90, sad: this.happiness > 100 }" v-text="this.happiness + '%'"></div>
      <div class="remove" @click="removeNpc" title="Remove from town">X</div>
      <div class="tooltip" :style="styleObj" v-if='this.npc.Name == "Princess"' style="width: 116px;">
        <div>Loves: Every NPC</div>
        <div>Likes: </div>
        <div>Dislikes: </div>
        <div>Hates: Being alone</div>
      </div>
      <div class="tooltip" :style="styleObj" v-else>
        <div>Loves: 
          <img v-if="npc.Loved.Biome != null" :src="biomeImage(npc.Loved.Biome)" :title="npc.Loved.Biome">
          <img v-for="love in npc.Loved.NPCs" :src="emoteImage(love)" :title="love">
        </div>
        <div>Likes: 
          <img v-if="npc.Liked.Biome != null" :src="biomeImage(npc.Liked.Biome)" :title="npc.Liked.Biome">
          <img v-for="like in npc.Liked.NPCs" :src="emoteImage(like)" :title="like">
        </div>
        <div>Dislikes: 
          <img v-if="npc.Disliked.Biome != null" :src="biomeImage(npc.Disliked.Biome)" :title="npc.Disliked.Biome">
          <img v-for="dislike in npc.Disliked.NPCs" :src="emoteImage(dislike)" :title="dislike">
        </div>
        <div>Hates: 
          <img v-if="npc.Hated.Biome != null" :src="biomeImage(npc.Hated.Biome)" :title="npc.Hated.Biome">
          <img v-for="hate in npc.Hated.NPCs" :src="emoteImage(hate)" :title="hate">
        </div>
      </div>
  </div>
  `,
  props: {
    npc: Object,
    npcs: Array,
    biomes: Array,
  },
  data() {
    return {
      imageUrl: "images/npc/" + this.npc.Name.replaceAll(" ", "") + ".png",
      styleObj: {
        left: "100%",
      },
    };
  },
  methods: {
    emoteImage(name) {
      return "images/emote/" + name.replaceAll(" ", "") + ".png";
    },
    biomeImage(name) {
      return "images/biome/" + name.replaceAll(" ", "") + ".png";
    },
    removeNpc() {
      this.$emit("removeNpc");
    },
    onHover() {
      const npcBounds = this.$el.getBoundingClientRect();
      const npcRight = npcBounds.x + npcBounds.width;
      if (this.tooltipWidth + npcRight > window.innerWidth) {
        this.styleObj.left = -this.tooltipWidth + "px";
      } else {
        this.styleObj.left = "100%";
      }
    },
  },
  computed: {
    happiness() {
      return getHappiness(this.npc, this.npcs, this.biomes);
    },
    tooltipWidth() {
      return (
        55 +
        Math.max(
          this.npc.Loved.length,
          this.npc.Liked.length,
          this.npc.Disliked.length,
          this.npc.Hated.length
        ) *
          40
      );
    },
  },
});

Vue.component("town", {
  template: `
    <div class="ui-frame town">
      <div style='display: flex; justify-content: space-evenly' :style="{width: townUIWidth + 'px'}">
        <biome v-for="biome in biomes" :key="biome"
          :name="biome" :enabled="townData.biomes.includes(biome)"
          @toggle="toggleBiome"></biome>
            
        <select name="npcs" v-model='selectedNpc' style='margin-left: 44px; width: 150px;'>
          <optgroup v-for='(npcs, group) in availableNpcs' :label="group">
            <option v-for='npc in npcs' :value="npc">{{npc.Name}}</option>
          </optgroup>
        </select>
        <button @click='addSelectedNpc'>Add NPC</button>
        <button @click='removeTown'>Remove Town</button>
      </div>
        
      <div style="display: flex; flex-direction: row; flex-wrap: wrap; min-height: 105px;">
        <npc v-for='(npc, i) in townData.npcs' :key="npc.Name"
          :npc="npc" :npcs="townData.npcs" :biomes="townData.biomes"
          @removeNpc="removeNpc(npc)"></npc>
      </div>
    </div>
    `,
  data() {
    return {
      selectedNpc: "",
      biomes: Object.values(Biomes),
      townUIWidth: (Object.values(Biomes).length + 2) * 44 + 251 + 106,
    };
  },
  props: {
    townData: Object,
    availableNpcs: Object,
    id: Number,
  },
  methods: {
    addSelectedNpc() {
      if (this.selectedNpc) {
        this.$emit("addNpc", this.id, this.selectedNpc);
        this.selectedNpc = "";
      }
    },
    removeNpc(npc) {
      this.$emit("removeNpc", this.id, npc);
    },
    toggleBiome(biome) {
      this.$emit("toggleBiome", this.id, biome);
    },
    removeTown() {
      this.$emit("removeTown", this.id);
    },
    biomeImage(biome) {
      return "images/" + biome.replaceAll(" ", "") + ".png";
    },
  },
});

let app = new Vue({
  el: "#app",
  template: `
    <div>
        <town v-for="(town, i) in towns" :key="i" :id="i"
          :townData="town" :availableNpcs="availableNpcs"
          @removeTown="removeTown" @removeNpc="removeNpc" @addNpc="addNpc"
          @toggleBiome="toggleBiome"></town>
        <div @click="createTown" class="ui-frame transparent">
            <div>Add next town</div>
        </div>
    </div>
    `,
  data: {
    towns: [],
    settledNpcs: [],
  },
  created() {
    this.towns.push({
      npcs: [NpcModels.Vanilla[0]],
      biomes: [Biomes.Forest],
    });
  },
  methods: {
    createTown() {
      this.towns.push({ npcs: [], biomes: [] });
    },
    removeTown(index) {
      this.towns.splice(index, 1);
    },
    addNpc(town, npc) {
      this.towns[town].npcs.push(npc);
    },
    removeNpc(town, npc) {
      const npcs = this.towns[town].npcs;
      const index = npcs.indexOf(npc);
      this.towns[town].npcs.splice(index, 1);
    },
    toggleBiome(town, biome) {
      const biomes = this.towns[town].biomes;
      const currentIndex = biomes.indexOf(biome);
      if (currentIndex < 0) biomes.push(biome);
      else biomes.splice(currentIndex, 1);
    },
  },
  computed: {
    availableNpcs() {
      models = {};
      for (const group in NpcModels) {
        const modelsInGroup = [];
        for (npc of NpcModels[group]) {
          if (
            this.towns.every(
              (town) => !town.npcs.some((other) => other.Name == npc.Name)
            )
          )
            modelsInGroup.push(npc);
        }
        if (modelsInGroup.length != 0) models[group] = modelsInGroup;
      }
      return models;
    },
  },
});
