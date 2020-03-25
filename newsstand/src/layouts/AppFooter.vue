<template>
  <q-footer>
    <div class="row q-pa-lg">
      <div class="col-4">
        <q-list dense>
          <q-item-label header class="text-white">Sections</q-item-label>
          <q-item>
          <router-link class="anchor" tag="a" to="#dummy">Around the globe</router-link>
          </q-item>
          <q-item>
          <router-link class="anchor" tag="a" to="#dummy">News From Your Region</router-link>
          </q-item>
          <q-item>
          <router-link class="anchor" tag="a" to="#dummy">Trending Topics</router-link>
          </q-item>
          <q-item>
          <router-link class="anchor" tag="a" to="#dummy">Coronavirus</router-link>
          </q-item>
        </q-list>
      </div>
      <div class="col-4">
          <q-list dense>
          <q-item-label header class="text-white">About</q-item-label>
          <q-item>
          <router-link class="anchor" tag="a" to="#dummy">Contact us</router-link>
          </q-item>
          <q-item>
          <router-link class="anchor" tag="a" to="#dummy">Feedback</router-link>
          </q-item>
          <q-item>
          <router-link class="anchor" tag="a" to="#dummy">Terms of use</router-link>
          </q-item>
          <q-item>
          <router-link class="anchor" tag="a" to="#dummy">Privacy policy</router-link>
          </q-item>
          <q-item>
          <router-link class="anchor" tag="a" to="#dummy">Advertising</router-link>
          </q-item>
          <q-item>
          <router-link class="anchor" tag="a" to="#dummy">Parental Guidance</router-link>
          </q-item>
        </q-list>
      </div>
      <div class="col-4">
        <q-item-label header class="text-white">Connect with us</q-item-label>
          <q-item>
              <a href="https://www.facebook.com" class="anchor q-mr-sm" style="font-size:36px">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="https://github.com/AbdullahSohail-SE" class="anchor q-mx-sm" style="font-size:36px">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/abdullahsohailned/?originalSubdomain=pk" class="anchor q-mx-sm" style="font-size:36px">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="anchor q-mx-sm" style="font-size:36px">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="anchor q-mx-sm" style="font-size:36px">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="anchor q-mx-sm" style="font-size:36px">
                <i class="fab fa-youtube"></i>
              </a>
          </q-item>
          <div class="q-ml-md q-mt-xl">
            <span>* This website is for purely educational purposes and not for commercial usage.I have used the services of <a href="https://newsapi.org/" target="new" class="anchor a-external"> News API <i class="fas fa-external-link-alt"></i></a> to serve content on this site</span>
          </div>
      </div>
    </div>
    
    <div class="bg-white text-primary text-bold text-center q-pa-sm">
      <span class="">Copyright © 2020 NEWSSTAND News Internet Ventures.k</span>
    </div>
  </q-footer>
</template>
<script>

export default {
  
}
</script>
<style lang="scss" scoped>
.anchor {
  text-decoration: none;
  color: white;

  transition-duration: .2s;
  transition-property: all;

  &:hover{
    transform: scale(1.1);
  }
}
.a-external{
  font-size: 14px;
  transform: scale(1.1);
  &:hover{
    text-decoration: underline;
  }
}
</style>