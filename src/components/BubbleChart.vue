<script>
import { Bubble } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default {
  extends: Bubble,
  mounted () {
    this.addPlugin(ChartDataLabels)
    this.renderChart({
      datasets: [
        {
          backgroundColor: '#8CA64E',
          data: [
            {
              x: 9,
              y: 0,
              r: 42,
              label: '26'
            },
            {
              x: 7,
              y: 0,
              r: 48,
              label: '29'
            },
            {
              x: 5,
              y: 0,
              r: 56,
              label: '33'
            },
            {
              x: 3,
              y: 0,
              r: 70,
              label: '40'
            },
            {
              x: 1,
              y: 0,
              r: 70,
              label: '40'
            }
          ]
        }
      ]
    },
    {
      plugins: {
        datalabels: {
          color: '#FFFFFF',
          font: {
            size: 16,
            weight: 'bold'
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'TOP AUTHORS',
        position: 'top',
        fontSize: 20,
        fontColor: '#2A262A'
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
            drawBorder: false,
            drawOnChartArea: true
          },
          ticks: {
            display: false,
            drawTicks: false,
            beginAtZero: true,
            maxTicksLimit: 1,
            max: 10
          }
        }],
        yAxes: [{
          gridLines: {
            drawBorder: false,
            drawOnChartArea: true
          },
          ticks: {
            display: false,
            maxTicksLimit: 1,
            drawTicks: false
          }
        }]
      }
    })
  }
}
</script>
