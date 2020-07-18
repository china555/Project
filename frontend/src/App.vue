<template>
  <div>
    <router-view />
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
</script>
