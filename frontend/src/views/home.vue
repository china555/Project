<template>
  <div>
    <navbar2 />
    <div class="grid-container" style="margin-top:50px;">
      <card
        v-for="({name,score},index) in this.parties "
        :key="`-${index}`"
        :partyName="name"
        :score="score"
      ></card>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=B612&display=swap");
.onehun-percen {
  width: 100%;
}
.fifty-percen {
  width: 50%;
}
body {
  margin: 0;
}
* {
  font-family: "B612", sans-serif;
  box-shadow: none;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
.grid-container {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  justify-items: center;
}
.btn {
  width: 80px;
  height: 40px;
  border: 3px transparent;
  border-radius: 7px;
}
.btn:hover {
  cursor: pointer;
}
</style>

<script>
// import navbar2 from "@/components/navigation_bar.vue";
import navbar2 from "../components/navigation_bar.vue";
import card from "../components/card.vue";
import axios from "axios";
export default {
  data() {
    return {
      parties: []
    };
  },
  components: {
    navbar2,
    card
  },
  async created() {
    const { data } = await axios.get("http://localhost:8081/getparty");
    this.parties = data;
  }
};
</script>
