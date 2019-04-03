<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: [
        '6 District Posts',
        '341 School Posts',
        '1300 Class Posts',
        '259 Group Posts'
      ],
      datasets: [
        {
          backgroundColor: [
            '#C87B91',
            '#8CA64E',
            '#7EB9EA',
            '#F4BF72'
          ],
          data: [6, 341, 1300, 259]
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'right',
        labels: {
          boxWidth: 20,
          usePointStyle: true
        }
      },
      title: {
        display: true,
        text: 'POST DISTRIBUTION',
        position: 'top',
        fontSize: 16,
        fontColor: '#2A262A',
        padding: 30
      }
    }
    )
  }
}
</script>
