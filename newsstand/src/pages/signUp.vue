<template>
  <q-page padding class="row items-center justify-center">
    <q-card class="q-pa-lg" style="width:400px">
      <q-card-section class="text-center ">
        <h5 class="text-teal q-my-none">Sign up</h5>
        <p class="text-subtle-grey">...to be informed </p>
      </q-card-section>
      <q-card-section>
        <q-input class="q-my-sm" filled label="Name" v-model="name" label-color="teal" bg-color="white" color="teal" type="text">
          <template v-slot:prepend>
            <q-icon color="teal" name="person" />
          </template>
        </q-input>
        <q-input class="q-my-sm" filled label="Email" v-model="email" label-color="teal" bg-color="white" color="teal" type="email">
          <template v-slot:prepend>
            <q-icon color="teal" name="mail" />
          </template>
        </q-input>
        <q-input class="q-my-sm" filled label="Password" v-model="password" label-color="teal" bg-color="white"
          color="teal" type="password">
          <template v-slot:prepend>
            <q-icon color="teal" name="vpn_key" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section class="text-center">
        <q-btn @click="signUp" outline  label="Sign Up" size="md" text-color="teal"  color="teal"></q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        slide: 1,
        email: '',
        password: '',
        name: ''
      }
    },
    methods:{
      signUp:function(){
        this.$store.dispatch('signUpUser',{email:this.email,password:this.password,displayName:this.name});
      }
    }
  }

</script>
