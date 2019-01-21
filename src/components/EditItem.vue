<template>
    <div>
        <mini-item-form :item="this.item" :sending="sending" :submitMethod="update"></mini-item-form>
    </div>
</template>
<script>
import axios from "axios";
import ItemForm from "./ItemForm.vue";

export default {
    name: "itemedit",
    data() {
        return {
            item: {},
            sending: false
        };
    },
    methods: {
        update(item) {
            this.sending = true;
            axios
                .put("/items/" + this.$route.params.id, item)
                .then(function() {
                    this.sending = false;
                    alert("great success!");
                })
                .catch(error => {
                    this.sending = false;
                });
        }
    },
    created() {
        const that = this;
        axios.get("/items/" + this.$route.params.id).then(result => {
            that.item = result.data;
        });
    },
    components: {
        "mini-item-form": ItemForm
    }
};
</script>

