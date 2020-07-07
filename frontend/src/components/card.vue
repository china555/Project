<template>
  <div>
    <div class="party-name">{{partyName}}</div>
    <div>Discription:{{partyDiscription}}</div>
    <button class="btn" @click="vote()">Vote</button>
  </div>
</template>
<style scoped>
.grid-container > div {
  width: 450px;
  background-color: rgba(243, 243, 243, 0.699);
  text-align: center;
}
.party-name {
  font-size: 32px;
  color: rgb(7, 4, 27);
}
</style>
<script>
export default {
  props: {
    partyName: String,
    partyDiscription: String
  },
  methods: {
    vote: function() {
      if (this.$store.commit({ type: "checkpermission" })) {
        alert("Thank you for voted");
      }
      alert("Please login before select the Party");
    }
  }
};
</script>
