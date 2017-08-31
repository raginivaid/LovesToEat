import React, { Component } from 'react';
import Cooking from './japenese.mp4';
class Aboutus extends Component {
    render(){
        return(
            <div>
                
                <video className="videoTag" autoPlay loop muted>
                    <source src={Cooking} type='video/mp4' />
                </video>

                <h1 style={{margin:'5% 35% 5% 45%'}}>ABOUT US </h1>
                

                        <div className="row">
                            <div className="col-md-6 col-sm-12"> 
                               
                                <img style={{margin:'2% 0% 0% 0%'}} src={require('./sesame-noodles2.jpg')} alt="food"/>
                            </div>

                            <div className="col-md-6 col-sm-12"> 
                                <h3 style={{color: 'green',margin:'2% 5% 0% 15%'}}><em>"The most helpful food resource for all the home cooks."</em></h3><br />
                                 <h3 style={{color: 'black',margin:'3% 5% 5% 15%'}}>
                                    We have a massive collection of recipes that are submitted and viewed by people who are passionate about food.<br /><br />
                                    Recipes available of different cuisine, from international cuisines to national cuisine.<br /><br />
                                    Get access to Quick and easy to make recipes for healthy living, for party ideas etc.
                                 </h3>
                            </div>
                        </div>
                
            </div>
        );
    }
}
export default Aboutus;