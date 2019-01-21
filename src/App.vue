<template>
    <div id="app">
        <router-view></router-view>
        <div class="phone-viewport">
            <md-bottom-bar md-sync-route>
                <md-bottom-bar-item to="/" md-label="Home" md-icon="home"></md-bottom-bar-item>
                <md-bottom-bar-item :to="{ name: 'timeline' }" md-label="Timeline" md-icon="money"></md-bottom-bar-item>
                <md-bottom-bar-item
                    :to="{ name: 'newitem' }"
                    md-label="New Item"
                    md-icon="favorite"
                ></md-bottom-bar-item>
            </md-bottom-bar>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
