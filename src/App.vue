<template>
    <div id="app">
        <router-view></router-view>
        <div class="phone-viewport">
            <md-bottom-bar md-sync-route class="mini-bottom-menu">
                <md-bottom-bar-item to="/" md-label="Home" md-icon="home" exact></md-bottom-bar-item>
                <md-bottom-bar-item
                    :to="{ name: 'newitem' }"
                    md-label="Action"
                    md-icon="repeat_one"
                ></md-bottom-bar-item>
                <md-bottom-bar-item :to="{ name: 'timeline' }" md-label="Timeline" md-icon="list"></md-bottom-bar-item>
            </md-bottom-bar>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
html,
body {
    height: 100%;
    margin-bottom: 85px;
}
#app {
    min-height: 100%;
}
.mini-bottom-menu {
    overflow: hidden;
    position: fixed;
    bottom: 0;
    z-index: 1000;
}
</style>
