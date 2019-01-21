<template>
    <div>
        <form>
            <label for="itemDescription">Description</label>
            <input id="itemDescription" type="text" v-model="item.itemDescription">
            <label for="action-date">Date</label>
            <input id="action-date" type="date" v-model="item.actionDate">
            <label v-for="option in options" :key="option">
                {{ option }}
                <input
                    type="radio"
                    name="actionType"
                    :value="option"
                    v-model="item.actionType"
                >
            </label>
            <label for="price">Price</label>
            <input id="price" type="number" v-model="item.price">
            <button @click.prevent.stop="update">Submit</button>
        </form>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "itemedit",
    data() {
        return {
            item: {},
            options: ["SOLD_IT", "GAVE_IT_AWAY", "THREW_IT", "PURCHASED_IT"]
        };
    },
    methods: {
        update() {
            axios
                .put("/items/" + this.$route.params.id, this.item)
                .then(function() {
                    alert("great success!");
                });
        }
    },
    created() {
        const that = this;
        axios.get("/items/" + this.$route.params.id).then(result => {
            that.item = result.data;
        });
    }
};
</script>

