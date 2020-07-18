<template>
  <div class="flex-container containercontent">
    <div class="arearegister">
      <div class="text_header_register">Register</div>
      <div class="spaceinput">Username</div>
      <input v-model="username" type="text" class="spacecontent" />
      <div class="spaceinput">Password</div>
      <input v-model="password" v-if="checking" type="password" class="spacecontent" />
      <input v-model="password" v-else type="password" class="spacecontent invalidinput" />
      <div class="spaceinput">Re-type Password</div>
      <input v-model="checkpass" v-if="checking" type="password" class="spacecontent" />
      <input v-model="checkpass" v-else type="password" class="spacecontent invalidinput" />
      <button
        class="btn spaceinput butt"
        v-if="checking"
        style="width:100%; margin-top: 60px;"
        @click="submit"
      >SUBMIT</button>
      <button
        class="btn spaceinput butt"
        @click="errr"
        v-else
        style="width:100%; margin-top: 60px;"
      >SUBMIT</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      checkpass: ""
    };
  },
  computed: {
    checking: function() {
      return this.password === this.checkpass;
    }
  },
  methods: {
    submit: async function() {
      if (this.username !== "" && this.password !== "") {
        const { data } = await axios.post("http://localhost:8081/register", {
          username: this.username,
          password: this.password
        });
        alert(data.msg);
        this.$router.push({ name: "Home" });
      }
    },
    errr: function() {
      alert("Please input correctly");
    }
  }
};
</script>>

<style scoped>
input:focus {
  outline: none;
}
.spaceinput {
  margin-top: 30px;
}
.spacecontent {
  margin-top: 5px;
}
.invalidinput {
  background-color: rgba(250, 55, 94, 0.808);
}
.butt {
  font-size: 16px;
  height: 70px;
  color: aliceblue;
  width: 100%;
  background-color: rgb(46, 143, 255);
}
input {
  border: solid 1px #e7e7e7;
  color: rgb(10, 14, 32);
  width: 97%;
  font-size: 20px;
  padding: 7px 7px 7px 7px;
}
.containercontent {
  margin-top: 70px;
  justify-content: center;
}
.arearegister {
  width: 35vw;
  height: 70vh;
  background-color: rgba(243, 243, 243, 0.685);
  border-radius: 8px;
  padding: 30px;
  align-content: space-around;
}
.text_header_register {
  font-size: 32px;
  text-align: center;
}
</style>