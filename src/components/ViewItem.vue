<template>
    <div>
        <p>
            {{ item.itemDescription }} {{ item.actionType }} {{ item.dateOfAction }} {{ item.price }}
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
        </p>
    </div>
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