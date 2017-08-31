import React, { Component } from 'react';
import Cooking from './Cooking.mp4';
class Aboutus extends Component {
    render(){
        return(
            <div>
                
                <video className="videoTag" autoPlay loop muted>
                    <source src={Cooking} type='video/mp4' />
                </video>

                <h1 style={{margin:'5% 35% 5% 45%'}}>ABOUT US </h1>
                

                        <div className="row">
                            <div className="col-md-1 col-sm-12"> 
                       
                                
                            </div>

                            <div className="col-md-10 col-sm-12"> 
                                <h3 style={{color: 'green',margin:'3% 15% 0% 25%'}}><strong>"The most helpful food resource for all the home cooks."</strong></h3><br />
                                 <h3 style={{color: 'green',margin:'3% 15% 5% 25%'}}>
                                    We have a massive collection of recipes that are submitted and viewed by people who are passionate about food.<br /><br />
                                    Recipes available of different cuisine, from international cuisines to national cuisine.<br /><br />
                                    Get access to Quick and easy to make recipes for healthy living, for party ideas etc.
                                 </h3>
                            </div>

                            <div className="col-md-1 col-sm-12"> 
                       
                                
                            </div>

                        </div>

                    

                
            </div>
        );
    }
}
export default Aboutus;