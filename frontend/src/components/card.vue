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
import axios from "axios";
export default {
  props: {
    partyName: String,
    partyDiscription: String
  },
  methods: {
    vote: function() {
      console.log(this.partyName);
      if (this.$store.state.permission === "User") {
        if (this.$store.state.voted === false) {
          const token = localStorage.getItem("token");
          console.log(token);
          axios.patch("http://localhost:8081/vote", {
            token: token,
            username: this.$store.state.username
          });
          alert("Thank you for voted");
        } else {
          alert("you have been voted already");
        }
      } else {
        alert("Please login before select the Party");
      }
    }
  }
};
</script>
