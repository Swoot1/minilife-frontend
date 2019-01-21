<template>
    <md-card>
        <md-card-header>
            <div class="md-title">{{ item.itemDescription }}</div>
        </md-card-header>

        <md-card-content>
            <md-icon v-if="item.actionType">{{ item.actionType | actionToIconName }}</md-icon>
            {{ item.actionDate | ISOStringToDateString }}
            <span
                v-if="item.price"
            >{{ item.price | formatMoney}}</span>
            <md-button
                class="md-icon-button md-dense md-raised md-primary"
                :to="{ name: 'itemedit', params: { id: item.id} }"
            >
                <md-icon>edit</md-icon>
            </md-button>
            <md-button
                class="md-icon-button md-dense md-raised md-accent"
                @click.prevent.stop="deleteItem()"
            >
                <md-icon>delete</md-icon>
            </md-button>
        </md-card-content>
    </md-card>
</template>
<script>
import axios from "axios";

export default {
    name: "viewitem",
    data() {
        return {
            item: {}
        };
    },
    created() {
        const that = this;
        axios.get("/items/" + this.$route.params.id).then(result => {
            that.item = result.data;
        });
    },
    methods: {
        deleteItem() {
            axios
                .delete("items/" + this.item.id)
                .then(() => {
                    this.$router.push({
                        name: "timeline"
                    });
                })
                .catch(() => {
                    console.log("something didn't work out");
                });
        }
    }
};
</script>