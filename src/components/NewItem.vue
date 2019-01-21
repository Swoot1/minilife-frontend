<template>
    <div>
        <mini-item-form :item="this.item" :sending="sending" :submitMethod="create"></mini-item-form>
    </div>
</template>
<script>
import axios from "axios";
import Charts from "chart.js";
import ItemForm from "./ItemForm.vue";

export default {
    name: "mini-newitem",
    data() {
        return {
            item: {
                itemDescription: "",
                actionDate: null,
                actionType: null,
                price: null
            },
            sending: false,
            firstDayOfAWeek: 1
        };
    },
    methods: {
        create() {
            this.sending = true;
            axios
                .post("/items", this.item)
                .then(() => {
                    this.sending = false;
                    alert("great success");
                })
                .catch(err => {
                    this.sending = false;
                    console.log(err);
                });
        }
    },
    components: {
        "mini-item-form": ItemForm
    }
};
</script>
