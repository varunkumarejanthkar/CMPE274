import React,{Component} from 'react';

class Navbar extends Component {
    constructor(props){
        super(props);        
    }

    navigate = () => {
        this.props.history.push("/landing");
    }

    render(){        
        return(
            <div>                
            <nav class="navbar navbar-inverse" style={{background:"#0e1b6c"}}>
                <div class="container-fluid">
                    <div class="navbar-header">
                        <div style={{float:"left"}}><button style = {{background:"#0e1b6c", color:"white", marginTop:"18%", border:"0px"}} onClick={this.navigate}>Home Page</button></div>
                        <div style={{float:"right"}}><a style={{color:"white", marginLeft:"105%", width:"110%", fontSize:"23px"}} class="navbar-brand">Covid-19 Vaccination Dashboards</a></div>
                    </div>                  
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar;