<template>
    <div class="chart-container">
        <canvas id="doughnut-chart"></canvas>
    </div>
</template>
<script>
import Chart from "chart.js";

export default {
    mounted() {
        var ctx = document.getElementById("doughnut-chart").getContext("2d");
        var myDoughnutChart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Red", "Yellow", "Blue"],
                datasets: [
                    {
                        data: [10, 20, 30]
                    }
                ]
            },
            options: {}
        });
    }
};
</script>
