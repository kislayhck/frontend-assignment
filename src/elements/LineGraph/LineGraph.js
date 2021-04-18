import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'
import './style.css'

export default class LineGraph extends Component {

    constructor(props) {
        super(props);

        this.state = {
        
          series: [42, 47, 52],
          options: {
            chart: {
              width: 380,
              type: 'polarArea'
            },
            labels: ['DONE', 'INPROGRESS', 'TODO'],
            fill: {
              opacity: 1
            },
            stroke: {
              width: 1,
              colors: undefined
            },
            yaxis: {
              show: false
            },
            legend: {
              position: 'bottom'
            },
            plotOptions: {
              polarArea: {
                rings: {
                  strokeWidth: 0
                },
                spokes: {
                  strokeWidth: 0
                },
              }
            },
            theme: {
              monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6
              }
            }
          },
        
        
        };
      }


    render() {
        return (
            <div>
            <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="polarArea" width={380} />
            </div>
            </div>
        )
    }
}
