import React from "react";
import './corouselComponent.css'
import Corousel1one from '../../img/corousel1/1.PNG'
import Corousel1two from '../../img/corousel1/2.PNG'
import Corousel1three from '../../img/corousel1/3.PNG'
import Corousel1four from '../../img/corousel1/4.PNG'
import Corousel2one from '../../img/corousel2/1.PNG'
import Corousel2two from '../../img/corousel2/2.PNG'
import Corousel2three from '../../img/corousel2/3.PNG'
import Corousel2four from '../../img/corousel2/4.PNG'
import Corousel2five from '../../img/corousel2/5.PNG'
import Corousel2six from '../../img/corousel2/6.PNG'
import Corousel2seven from '../../img/corousel2/7.PNG'
import Corousel2eight from '../../img/corousel2/8.PNG'

export class corouselComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       
        return (
          <div>
            <div className="carousel_outer_div">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
         
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>
     
            <div class="carousel-inner">
              <div class="item active">
                <img src={Corousel1one} alt="Los Angeles"/>
            </div>
          
              <div class="item">
                <img src={Corousel1two} alt="Chicago"/>
              </div>
          
              <div class="item">
                <img src={Corousel1three} alt="New York"/>
              </div>

              <div class="item">
                <img src={Corousel1four} alt="New York"/>
              </div>
            </div>
          
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

          <div id="myCarousel2" class="carousel slide" data-ride="carousel">
         
            <ol class="carousel-indicators">
              <li data-target="#myCarousel2" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel2" data-slide-to="1"></li>
              <li data-target="#myCarousel2" data-slide-to="2"></li>
              <li data-target="#myCarousel2" data-slide-to="3"></li>
              <li data-target="#myCarousel2" data-slide-to="4"></li>
              <li data-target="#myCarousel2" data-slide-to="5"></li>
              <li data-target="#myCarousel2" data-slide-to="6"></li>
              <li data-target="#myCarousel2" data-slide-to="7"></li>
            </ol>
     
            <div class="carousel-inner">
              <div class="item active">
                <img src={Corousel2one} alt="Los Angeles"/>
            </div>
          
           
              <div class="item">
                <img src={Corousel2two} alt="Los Angeles"/>
            </div>

          
              <div class="item">
                <img src={Corousel2three} alt="Los Angeles"/>
            </div>

          
              <div class="item">
                <img src={Corousel2four} alt="Los Angeles"/>
            </div>

              <div class="item">
                <img src={Corousel2five} alt="Los Angeles"/>
            </div>

            
              <div class="item">
                <img src={Corousel2six} alt="Los Angeles"/>
            </div>

            
              <div class="item">
                <img src={Corousel2seven} alt="Los Angeles"/>
            </div>

            
              <div class="item">
                <img src={Corousel2eight} alt="Los Angeles"/>
            </div>
          
            <a class="left carousel-control" href="#myCarousel2" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel2" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

          </div>
                
        </div>
        <br/><br/>
        <p>More content coming.. </p>
        </div>
        );
    }
}

export default corouselComponent;
