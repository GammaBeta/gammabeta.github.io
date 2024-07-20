Vue.component("town", {
  template: `
    <div class="ui-frame town">
      <div style='display: flex; justify-content: space-evenly' :style="{width: townUIWidth + 'px'}">
        <img width="44px" v-for='biome in availableBiomes' :src="'images/' + biome + '.png'" :title="biome" :class="{ disabled: !biomes.includes(biome) }" v-on:click="toggleBiome(biome)" style="cursor: pointer;" />
            
        <select name="npcs" v-model='selectedNpc' style='margin-left: 44px; width: 150px;'>
          <optgroup v-for='(npcs, group) in availableNpcs' :label="group">
            <option v-for='npc in npcs' :value="npc">{{npc.Name}}</option>
          </optgroup>
        </select>
        <button v-on:click='addSelectedNpc()'>Add NPC</button>
        <!--<button @click='removeTown'>Remove Town</button>-->
      </div>
        
      <div style="display: flex; flex-direction: row; flex-wrap: wrap; min-height: 105px;">
        <div class="npc" v-for='npc in npcs'>
          <div v-if='npc.Name != "Princess"'>
            <img :src="'images/' + npc.Name.replace(' ', '') + '.png'" />
            <div class="name">{{npc.Name}}</div>
            <div :class="{ happy: happiness[npc.Name] <= 90, sad: happiness[npc.Name] > 100 }">{{happiness[npc.Name]}}%</div>
            <div class="remove" v-on:click="removeNpc(npc)" title="Remove from town">X</div>
            <div class="tooltip">
              <div>Loves: <img v-for="love in npc.Loved" :src="'images/emotes/'+love.replace(' ', '')+'.png'" :title="love"></div>
              <div>Likes: <img v-for="like in npc.Liked" :src="'images/emotes/'+like.replace(' ', '')+'.png'" :title="like"></div>
              <div>Dislikes: <img v-for="dislike in npc.Disliked" :src="'images/emotes/'+dislike.replace(' ', '')+'.png'" :title="dislike"></div>
              <div>Hates: <img v-for="hate in npc.Hated" :src="'images/emotes/'+hate.replace(' ', '')+'.png'" :title="hate"></div>
            </div>
          </div>
          <div v-else>
            <img :src="'images/' + npc.Name.replace(' ', '') + '.png'" />
            <div class="name">{{npc.Name}}</div>
            <div :class="{ happy: happiness[npc.Name] <= 90, sad: happiness[npc.Name] > 100 }">{{happiness[npc.Name]}}%</div>
            <div class="remove" v-on:click="removeNpc(npc)" title="Remove from town">X</div>
            <div class="tooltip" style="width: 127px;">
              <div>Loves: Every NPC</div>
              <div>Likes: </div>
              <div>Dislikes: </div>
              <div>Hates: Being alone</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,
  created() {
    if (this.id === 1) {
      this.npcs.push(
        NpcModels.Vanilla.filter((npc) => npc.Name === "Guide")[0]
      );
      this.settledNpcs.push(
        NpcModels.Vanilla.filter((npc) => npc.Name === "Guide")[0]
      );
      this.biomes.push(Biomes.Forest);
    }
  },
  data() {
    return {
      selectedNpc: "",
      selectedBiome: "",

      npcs: [],
      biomes: [],
      townUIWidth: (Object.values(Biomes).length + 2) * 44 + 251, // + 106,
    };
  },
  props: {
    settledNpcs: Array,
    id: Number,
  },
  methods: {
    addSelectedNpc() {
      if (this.selectedNpc) {
        this.settledNpcs.push(this.selectedNpc);
        this.npcs.push(this.selectedNpc);
        this.selectedNpc = "";
      }
    },
    removeNpc(npc) {
      this.settledNpcs.splice(this.settledNpcs.indexOf(npc), 1);
      this.npcs.splice(this.npcs.indexOf(npc), 1);
    },
    toggleBiome(biome) {
      let index = this.biomes.indexOf(biome);
      if (index < 0) {
        this.biomes.push(biome);
      } else {
        this.biomes.splice(index, 1);
      }
    },
    imageUrl(npc) {
      return "images/" + npc.Name.replace(" ", "") + ".png";
    },
    removeTown() {
      this.$emit("removed");
    },
  },
  computed: {
    availableBiomes() {
      return Object.values(Biomes);
    },
    availableNpcs() {
      const available = {};
      for (const group in NpcModels) {
        const npcs = NpcModels[group];
        const filtered = npcs.filter((npc) => !this.settledNpcs.includes(npc));
        if (filtered.length != 0) available[group] = filtered;
      }
      return available;
    },
    happiness() {
      let npcsHappiness = {};

      this.npcs.forEach((npc) => {
        npcsHappiness[npc.Name] = getHappiness(npc, this.npcs, this.biomes);
      });

      return npcsHappiness;
    },
  },
});

let app = new Vue({
  el: "#app",
  template: `
    <div>
        <town v-for="i in towns" :settledNpcs="settledNpcs" :id="i" :key="i" @removed="removeTown(i)"></town>
        <div v-on:click="towns++" class="ui-frame transparent">
            <div>Add next town</div>
        </div>
    </div>
    `,
  data: {
    towns: 1,
    settledNpcs: [],
  },
  methods: {
    removeTown(index) {
      console.info("Removing town " + index);
    },
  },
});
