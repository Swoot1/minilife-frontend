<template>
    <div class="md-layout md-gutter">
        <router-link
            class="md-layout-item md-size-100"
            :to="{ name: 'viewitem', params:{ id: item.id} }"
            v-for="item in items"
            :key="item.id"
            tag="div"
        >
            <md-card>
                <md-card-header>
                    <div class="md-title">{{ item.itemDescription }}</div>
                </md-card-header>

                <md-card-content>
                    <md-icon>{{ item.actionType | actionToIconName }}</md-icon>
                    {{ item.actionDate | ISOStringToDateString }}
                    <span v-if="item.price">
                        {{ item.price | formatMoney}}
                        <md-icon>attach_money</md-icon>
                    </span>
                </md-card-content>
            </md-card>
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

