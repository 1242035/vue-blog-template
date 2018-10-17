<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Forgot password</h3>
                    <div class="box">
                        <figure class="avatar">
                            <img src="https://placehold.it/128x128">
                        </figure>
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                                </div>
                            </div>
                            
                            <button class="button is-block is-info is-large is-fullwidth">Reset</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <router-link :to="{'name': 'register'}">Sign Up</router-link>&nbsp;·&nbsp;
                        <router-link :to="{'name': 'login'}">Login</router-link>&nbsp;·&nbsp;
                        <router-link :to="{'name': 'home'}">Home</router-link>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:'ForgotPassword'
}
</script>