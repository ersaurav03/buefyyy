<script>
    import { Bubble } from 'vue-chartjs';
    export default {
        extends: Bubble,
        props: ['data', 'options'],
        mounted () {
            this.renderChart({
                 labels: ['Jan', 'Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'],
                datasets: [
                {
                    label: 'Bubble Chart Representation',
          backgroundColor: [
          'rgba(255, 99, 132, 1.0)',
          'rgba(0, 162, 235, 1.0)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.9)',
          'rgba(255, 159, 64, 1.0)',
          'rgba(255, 99, 132, 1.0)',
          'rgba(0, 162, 235, 1.0)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.9)',
          'rgba(255, 159, 64, 1.0)',
           'rgba(255, 159, 0, 1.0)'
          ],
          borderColor:
          [
          'rgb(255, 0, 132)',
          'rgb(255,99,132)',
          'rgb(255,99,132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(255, 0, 132)',
          'rgb(255,99,132)',
          'rgb(255,99,132)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)'
          ] ,

                    borderWidth: 1,
                    data: [
                                        {
                        x: -10,
                        y: 0
                       
                    }, {
                        x: 0,
                        y: 10
                    
                    }, {
                        x: 10,
                        y: 5
                      
                    },
                    {
                        x: -20,
                        y: 0
                       
                    }, {
                        x: 0,
                        y: 15
                 
                    }, {
                        x: 10,
                        y: 50
                        
                    },{
                      x:10,
                      y:20
                    },{
                      x:33,
                      y:45
                    },{
                      x:99,
                      y:81
                    },{
                      x:44,
                      y:83
                    },{
                      x:77,
                      y:30
                    },{
                      x:20,
                      y:83
                    }
                    ]
                }
                ]
            }, {
                responsive:false,
                maintainAspectRatio:false

            })
        }
    }
</script>