<template>
    <div class="container-a">
        <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link :to="{'name': 'home'}" class="navbar-item">
                    <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
                </router-link>
                <a @click="toggleNavBar" :class="{'is-active': isToggle}" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMain">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" :class="{'is-active': isToggle}">
                <Nav />
            </div>
        </nav>
    </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
    name:'Header',
    components: {
        Nav
    },
    data() {
        return {
            isToggle: false
        }
    },
    methods:{
        toggleNavBar: function() {
            this.isToggle = ! this.isToggle;
        }
    }
}
</script>

