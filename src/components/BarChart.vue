<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    this.renderChart({
      labels: [
        'Adam Elementary School',
        'Alvin Elementary School',
        'Arellanes Elementary',
        'Battles Elementary',
        'Bonita Elementary',
        'El Camino Junior High',
        'Fairlawn Elementary',
        'Fesler Junior High',
        'Jimenez Elementary',
        'Kunst (Tommie) Junior',
        'Liberty Elementary',
        'Miller (Isaac)',
        'Oakley (Calvin C.)',
        'Ontiveros Elementary',
        'Rice (William)',
        'Robert Bruce Elementary',
        'Sanchez Elementary',
        'Taylor Elementary',
        'Tunnell (Martin Luther)'
      ],
      datasets: [
        {
          backgroundColor: '#8CA64E',
          data: [90, 50, 20, 80, 10, 90, 10, 90, 280, 150, 80, 60, 120, 170, 30, 90, 10, 220, 160]
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'BY SCHOOL',
        position: 'top',
        fontSize: 16,
        fontColor: '#2A262A',
        padding: 30
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false,
            maxRotation: 90,
            minRotation: 90
          }
        }],
        yAxes: [{
          ticks: {
            stepSize: 100
          }
        }]
      }
    }
    )
  }
}
</script>
