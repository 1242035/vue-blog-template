<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Register</h3>
                    <p></p>
                    <div class="box">
                        <figure class="avatar">
                            <img src="https://placehold.it/128x128">
                        </figure>
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Your Email" autofocus="" v-model="item.email" @input="$v.item.email.$touch()">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="Your Password" v-model="item.password" @input="$v.item.password.$touch()">
                                </div>
                            </div>
                            <button :disabled="true" @click.prevent="register" class="button is-block is-info is-large is-fullwidth">Register</button>
                            
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <router-link :to="{'name': 'login'}">Login</router-link>&nbsp;·&nbsp;
                        <router-link :to="{'name': 'passwordForgot'}">Forgot Password</router-link>&nbsp;·&nbsp;
                        <router-link :to="{'name': 'home'}">Home</router-link>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { required, email } from 'vuelidate';
export default {
    name:'Register',
    data() {
        return {
            item:{
                email:'',
                password:''
            }
        }
    },
    validations:{
        item:{
            email:{
                required,
                email
            },
            password:{
                required
            }
        }
    },
    
    mounted(){
        console.log(this);
    },
    methods:{
        register: () => {
            this.$store.dispatch('account/register', this.item );
        }
    }
}
</script>

