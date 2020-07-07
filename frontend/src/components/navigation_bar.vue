<template>
  <div class="grid-container-nav background-colour">
    <div class="title">Election</div>
    <div></div>
    <div
      class="flex-container"
      style="width:600px; justify-content: space-around;"
      v-if="this.$store.state.permission === 'Guest'"
    >
      <div class="text-header-login" style="margin-right:120px;">ID Number</div>
      <div class="fifty-percen text-header-login">Password</div>
      <input v-model="id" type="text" />
      <input v-model="password" type="password" />
      <button class="btn">Log in</button>
    </div>
    <div
      class="flex-container"
      style="width:80%; justify-content: flex-end; align-content: flex-end;"
      v-else-if="this.$store.state.permission === 'User'"
    >
      <div class="flex-container" style="width:40%">
        <img src="@/assets/user.svg" alt />
        <div style="margin-top:10px; margin-left:20px">Kittikorn</div>
      </div>
      <button class="btn" style="margin-right:20px">Log out</button>
    </div>
  </div>
</template>
<style scoped>
.text-header-login {
  text-align: start;
  font-size: 19px;
}
.grid-container-nav > div {
  padding: 10px 0;
  text-align: center;
  color: rgb(240, 240, 240);
}
.background-colour {
  background-color: rgb(10, 4, 31);
}
.title {
  font-size: 50px;
}
.grid-container-nav {
  display: grid;
  grid-template-columns: 40% 20% 40%;
}
input {
  width: 200px;
}
</style>
<script>
export default {
  data() {
    return {
      id: "",
      password: ""
    };
  },
  name: "navbar"
};
</script>
