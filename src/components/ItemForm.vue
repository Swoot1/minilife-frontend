<template>
    <form class="md-layout">
        <md-card class="md-layout-item md-small-size-100">
            <md-card-header>
                <div class="md-title">Item</div>
            </md-card-header>
            <md-card-content>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-size-50 md-small-size-100">
                        <md-field>
                            <label for="item-description">Description</label>
                            <md-input
                                name="item-description"
                                id="item-description"
                                v-model="item.itemDescription"
                            />
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-50 md-small-size-100">
                        <md-datepicker v-model="item.actionDate" md-immediately/>
                    </div>
                </div>
            </md-card-content>
            <md-card-content></md-card-content>
            <md-card-content>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-size-50 md-small-size-100">
                        <md-field>
                            <label for="action-type">Action</label>
                            <md-select
                                name="action-type"
                                id="action-type"
                                v-model="item.actionType"
                                md-dense
                                :disabled="sending"
                            >
                                <md-option></md-option>
                                <md-option
                                    v-for="option in options"
                                    :key="option"
                                    :value="option"
                                >{{ option | actionToText }}</md-option>
                            </md-select>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-50 md-small-size-100" v-if="isPriceOption()">
                        <md-field>
                            <label for="price">Price</label>
                            <md-input name="price" id="price" v-model="item.price"/>
                        </md-field>
                    </div>
                </div>
            </md-card-content>
            <md-card-actions>
                <md-button
                    type="submit"
                    class="md-primary"
                    :disabled="sending"
                    @click.prevent.stop="submitMethod(item)"
                >Submit</md-button>
            </md-card-actions>
        </md-card>
    </form>
</template>
<script>
export default {
    name: "itemform",
    data() {
        return {
            options: ["SOLD_IT", "GAVE_IT_AWAY", "THREW_IT", "PURCHASED_IT"]
        };
    },
    props: {
        item: {
            required: true,
            type: Object
        },
        sending: {
            required: true,
            type: Boolean
        },
        submitMethod: {
            required: true,
            type: Function
        }
    },
    methods: {
        isPriceOption() {
            return (
                this.item.actionType === "SOLD_IT" ||
                this.item.actionType === "PURCHASED_IT"
            );
        }
    }
};
</script>

