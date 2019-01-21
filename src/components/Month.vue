<template>
    <div>
        <p>Monthly total {{ totalItem }} saker</p>
        <p>You sould: {{ totalSoldItems }} for an amount of {{ totalSoldItemsEarning }}</p>
        <p>You gave away: {{ totalGivenAway }}</p>
        <p>You throwed away: {{ totalThrownAway }}</p>
        <h2>These are the things you've gotten rid of:</h2>
        <ul>
            <li
                v-for="itemOut in itemsOut"
                :key="itemOut.id"
            >{{ itemOut.description }} {{ itemOut.dateOfAction }}</li>
        </ul>
        <h2>But, you also purchased these items for an amount of {{ totalPurchasedItemsCost }}:</h2>
        <ul>
            <li
                v-for="itemIn in itemsIn"
                :key="itemIn.id"
            >{{ itemIn.description }} {{ itemIn.dateOfAction }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            itemsOut: [
                {
                    id: 1,
                    description: "avbitartång",
                    action: "SOLD",
                    dateOfAction: "2019-01-01",
                    price: 20
                }
            ],
            itemsIn: [
                {
                    id: 1,
                    description: "aktivitetsklocka",
                    action: "PURCHASED",
                    dateOfAction: "2019-01-01",
                    price: 499
                }
            ]
        };
    }
};
</script>

