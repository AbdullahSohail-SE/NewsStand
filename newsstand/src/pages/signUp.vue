<template>
  <q-page padding class="row items-center justify-center">
    <q-card class="q-pa-lg" style="width:400px">
      <q-card-section class="text-center ">
        <h5 class="text-teal q-my-none">Sign up</h5>
        <p class="text-subtle-grey">...to be informed </p>
      </q-card-section>
      <q-card-section>
        <q-input ref="nameInput" class="q-my-sm" filled label="Name" v-model="name" label-color="teal" bg-color="white" color="teal" type="text" :rules="[val => !!val || 'Field is required']">
          <template v-slot:prepend>
            <q-icon color="teal" name="person" />
          </template>
        </q-input>
        <q-input ref="emailInput" lazy-rules class="q-my-md" filled label="Email" v-model="email" label-color="teal" bg-color="white" color="teal" type="email" :rules="[val => !!val || 'Field is required',validateEmail]">
          <template v-slot:prepend>
            <q-icon color="teal" name="mail" />
          </template>
        </q-input>
        <q-input ref="passwordInput" class="q-my-sm" filled label="Password" v-model="password" label-color="teal" bg-color="white"
          color="teal" type="password" 
          :rules="[
          val => !!val || 'Field is required',
          val => val.length >= 6 || 'Please use atleast 6 characters'
          ]">
          <template v-slot:prepend>
            <q-icon color="teal" name="vpn_key" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section class="text-center">
        <q-btn ref="signUpBtn" @click="signUp" outline  label="Sign Up" size="md" text-color="teal"  color="teal"></q-btn><q-spinner-oval v-if="signUpSpinner" size="md" class="q-ml-md"  color="teal" >
      </q-spinner-oval>
        <span style="display:block" class="text-teal q-mt-lg q-mb-sm">OR</span>
      <router-link  class="text-teal hover" to="/users/signIn">Already have an account?</router-link>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { required,email } from 'vuelidate/lib/validators'
  export default {
    data() {
      return {
        slide: 1,
        email: '',
        password: '',
        name: '',
        signUpSpinner:false
      }
    },
    methods:{
      signUp:function(){
        
        const nameInput=this.$refs.nameInput;
        const emailInput=this.$refs.emailInput;
        const passwordInput=this.$refs.passwordInput;
        
        nameInput.validate();
        emailInput.validate();
        passwordInput.validate();

        if(nameInput.hasError || emailInput.hasError || passwordInput.hasError)
          return;
          
        if(this.$refs)

        this.signUpSpinner=true;
        this.$refs.signUpBtn.$el.disabled=true;
        this.$store.dispatch('signUpUser',{email:this.email,password:this.password,displayName:this.name})
        .then(()=>{
        this.signUpSpinner=false;
        this.$refs.signUpBtn.disabled=false;
        })
        .catch(()=>{
        this.signUpSpinner=false;
        this.$refs.signUpBtn.disabled=false;
        });
      },
      validateEmail:function(val){
        return new Promise((resolve,reject)=>{
          if(!val.includes("@")){
            resolve("*Please type a valid email");
            return;
            }
          this.$firebaseDbREST.get('Users.json?orderBy="email"&equalTo="'+val+'"')
          .then((res)=>{
            if(!Object.keys(res.data).length == 0){
            resolve("*This email address has already been registered");
            return;
            }
            else
            resolve();
          })
        })
      }
    }
  }

</script>
