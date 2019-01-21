<template>
    <div>
        <mini-sign-up></mini-sign-up>
        <mini-login></mini-login>
    </div>
</template>
<script>
import SignUp from "./SignUp.vue";
import Login from "./Login.vue";

export default {
    name: "home",
    components: {
        MiniSignUp: SignUp,
        MiniLogin: Login
    }
};
</script>
