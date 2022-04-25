import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import tableau from 'tableau-api';
import Pagination from '@material-ui/lab/Pagination';

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

   
    render(){
       
        return(
            <div>      
                <div id="vizContainer" style={{height:"450px", width:"100%", marginLeft:"0%"}}></div>                                 
                <div style={{marginLeft:"27%", marginTop:"2%"}}><button onClick={this.onPreviousClicked} style={{float:"left", height:"31px", marginLeft:"1%", width:"7%", background:"#e8eaf6", border:"0px solid", borderRadius:"5px"}}>Previous</button><Pagination id = "divPagination" style={{float:"left"}} defaultPage={parseInt(localStorage.getItem('currentPage'))} count={this.state.limit} color="primary" variant="outlined" shape="rounded" onClick = {this.onPageClick}/>
                <button onClick={this.onNextClicked} style={{float:"left", height:"31px", width:"7%", background:"#e8eaf6", border:"0px solid", borderRadius:"5px"}}>Next</button></div>
            </div> 
        )
    }
}

export default Home;