import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import tableau from 'tableau-api';
import Pagination from '@material-ui/lab/Pagination';
import background from '../../Pictures/covid.jpg'
//import from '../../../public/Pictures/bg.jfif'

class Home extends Component {
    constructor(){
        super();
        this.state = {   
            currentPage: 1,
            url1:"https://public.tableau.com/views/CMPE274_16507779959670/Sheet",
            url2:"?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
            limit : 7
        }       
    }  
  
    onPreviousClicked = () => {
        if(localStorage.getItem('currentPage') == null)
            localStorage.setItem('currentPage', 1);     
            
        if(parseInt(localStorage.getItem('currentPage')) < 2)
            return;       
        
        localStorage.setItem('currentPage', parseInt(localStorage.getItem('currentPage')) - 1);
        window.location.reload();
    }

    onNextClicked = () => {
        if(localStorage.getItem('currentPage') == null)
            localStorage.setItem('currentPage', 1);     
            
        if(parseInt(localStorage.getItem('currentPage')) == this.state.limit)
            return;        

        localStorage.setItem('currentPage', parseInt(localStorage.getItem('currentPage')) + 1);                
        window.location.reload();
    }

    onPageClick = (e) => {
        const pageNumber = e.target.innerText;
        localStorage.setItem('currentPage', pageNumber);                
        window.location.reload();  
      }

    intitalizeTableau = () => {       
        var containerDiv = document.getElementById("vizContainer");        
        var url = this.state.url1 + localStorage.getItem('currentPage') + this.state.url2;
        const options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }                
        };
    let viz = new window.tableau.Viz(containerDiv, url, options);
    }

    componentDidMount(){          
        this.intitalizeTableau();
    }

    setSheet = (e) => {
        localStorage.setItem('currentPage', e.target.id);
    }
   
    render(){       
        return(
            <div>      
                <div style={{position:"absolute", backgroundImage: `url(${background})`, opacity:"0.7", backgroundRepeat:"no-repeat", width:"100%", height:"100vh", backgroundSize:"100%", marginTop:"-1.7%"}}></div>
                <div style={{position:"relative"}}>
                <h4 style={{marginLeft:"2%", paddingTop: "2%", fontWeight:"bold"}}>List of Dashboards</h4>
                <ul>
                    <li><a style = {{color:"black"}} id = "1" onClick={this.setSheet} href = "/home">World Data</a></li>
                    <li><a style = {{color:"black"}} id = "2" onClick={this.setSheet} href = "/home">Percentage of people vaccinated, fully vaccinated, boosters administered based on country's population</a></li>
                    <li><a style = {{color:"black"}} id = "3" onClick={this.setSheet} href = "/home">Vaccination rates based on location</a></li>
                    <li><a style = {{color:"black"}} id = "4" onClick={this.setSheet} href = "/home">Top 10 countries with highest number of people vaccinated and boosters administered for 100 people</a></li>                    
                    <li><a style = {{color:"black"}} id = "5" onClick={this.setSheet} href = "/home">Vaccinations based on manufacturers</a></li>                    
                    <li><a style = {{color:"black"}} id = "6" onClick={this.setSheet} href = "/home">Vaccination rates by country income level</a></li>
                </ul>
                </div>
            </div> 
        )
    }
}

export default Home;