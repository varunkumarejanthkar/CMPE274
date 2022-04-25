import React,{Component} from 'react';

class Navbar extends Component {
    constructor(props){
        super(props);        
    }

    render(){        
        return(
            <div>                
            <nav class="navbar navbar-inverse" style={{background:"#0e1b6c"}}>
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a style={{color:"white", marginLeft:"105%", width:"110%", fontSize:"23px"}} class="navbar-brand">Covid-19 Vaccination Dashboards</a>
                    </div>                  
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar;