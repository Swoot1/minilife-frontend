<template>
    <div class="chart-container">
        <canvas id="myChart" width="100" height="100"></canvas>
    </div>
</template>
<script>
import Chart from "chart.js";
export default {
    mounted() {
        var ctx = document.getElementById("myChart").getContext("2d");
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: "line",

            // The data for our dataset
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July"
                ],
                datasets: [
                    {
                        label: "My First dataset",
                        backgroundColor: "rgb(255, 99, 132)",
                        borderColor: "rgb(255, 99, 132)",
                        data: [0, 10, 5, 2, 20, 30, 45]
                    }
                ]
            },

            // Configuration options go here
            options: {
                responsive: true
                // maintainAspectRatio: false
            }
        });

        //chart.canvas.parentNode.style.height = "400px";
        //chart.canvas.parentNode.style.width = "400px";
    }
};
</script>
<style>
.chart-container {
    max-width: 700px;
    height: 500px;
}
</style>


