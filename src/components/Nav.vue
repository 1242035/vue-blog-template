<template>
    <div class="navbar-menu is-active">
        <div class="navbar-start">
            <router-link :to="{'name':'home'}" class="navbar-item">Home</router-link>
            <router-link v-if="status.loggedIn" :to="{'name':'post'}" class="navbar-item">Post</router-link>
            <router-link :to="{'name':'about'}" class="navbar-item">About</router-link>
            <router-link :to="{'name':'contact'}" class="navbar-item">Contact</router-link>
        </div>
        <div class="navbar-end">
            <div class="navbar-item is-hidden-mobile">
                <a class="navbar-item">
                    <span class="icon">
                        <i class="fa fa-facebook"></i>
                    </span>
                </a>
                <a class="navbar-item">
                    <span class="icon">
                        <i class="fa fa-twitter"></i>
                    </span>
                </a>
                <a class="navbar-item">
                    <span class="icon">
                        <i class="fa fa-instagram"></i>
                    </span>
                </a>
                <a class="navbar-item">
                    <span class="icon">
                        <i class="fa fa-rss"></i>
                    </span>
                </a>
            </div>
            <div class="navbar-item">
                <div class="buttons" v-if="!status.loggedIn">
                    <router-link :to="{'name': 'register'}" class="button is-primary">Sign Up</router-link>
                    <router-link :to="{'name': 'login'}" class="button is-light">Login</router-link>
                </div>
                <div class="buttons" v-if="status.loggedIn">
                    <router-link @click="logout" class="button is-primary">Logout</router-link>
                    <router-link :to="{'name': 'login'}" class="button is-light">Login</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'Nav',
    computed:{
        ...mapState('account',['status','user'])
    },
    methods:{
        logout: function() {
            this.$store.dispath('account/logout');
        }
    }
}
</script>

