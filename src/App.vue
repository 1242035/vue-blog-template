<template>
    <div id="app" class="container">
        <Header v-if="!isLoginPage"/>
        <div class="main-content">
            <div class="container">
                <router-view />
            </div>
        </div>
        <Footer v-if="!isLoginPage"/>
    </div>
</template>
<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
    name:'App',
    components:{
        Header,
        Footer
    },
    mounted() {
        let name = this.$router.currentRoute.name || '';
        this.isLoginPage = (name == 'login' || name == 'register' || name == 'passwordForgot') ? true : false;
    },
    data() {
        return {
            isLoginPage: false
        }
    }
}
</script>
