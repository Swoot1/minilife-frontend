<template>
    <div class="md-layout md-gutter">
        <router-link
            class="md-layout-item md-size-100"
            :to="{ name: 'viewitem', params:{ id: item.id} }"
            v-for="item in items"
            :key="item.id"
            tag="div"
        >
            <p>{{ item.itemDescription }} {{ item.actionType }} {{ item.actionDate }} {{ item.price }}</p>
        </router-link>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "timeline",
    data() {
        return {
            items: []
        };
    },
    created() {
        const that = this;
        axios.get("/items").then(result => {
            that.items = result.data;
        });
    }
};
</script>

