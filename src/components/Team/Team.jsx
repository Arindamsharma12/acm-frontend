import React from "react";
import "./Team.css";

const Team = () => {
    return (
        <div className="team-container">
            <div className="team-bg"></div>
            <h1 className="team-title">Meet the Team</h1>
            <div className="team-section">
                 <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                        <div class="card h-100">
                            <img src="web-dev.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Dr. Chetan Khemraj</h5>
                                    <p class="card-text">Faculty Sponsor</p>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="web-dev.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Ms. Geetanjali</h5>
                                    <p class="card-text">Secretary</p>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="web-dev.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Arindam Sharma</h5>
                                    <p class="card-text">Chair</p>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="web-dev.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">S D Keerthiga Devi</h5>
                                    <p class="card-text">Vice Chair</p>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="web-dev.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Anup Raj</h5>
                                    <p class="card-text">Treasurer</p>
                                </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Team;