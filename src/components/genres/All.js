import React from 'react';

const Finaces = () => (
    <div>
        <div class="row row-cols-1 row-cols-md-3">
            <div class="col mb-4">
                <div class="card">
                <img src={process.env.PUBLIC_URL + '/images/dropship.png'} class="card-img-top" alt="Make money with drop shipping audiobook cover delivery man delivering package somewhere in the city, The big smile on his face he's wearing a blue hat and a blue collared shirt." />
                <div class="card-body">
                    <h5 class="card-title">Make Money With Drop Shipping</h5>
                    {/* <p class="card-text">...</p> */}
                </div>
                </div>
            </div>
            <div class="col mb-4">
                <div class="card">
                <img src={process.env.PUBLIC_URL + '/images/Get-a-real-estate-life.png'} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Get a (Real Estate) Life!</h5>
                    {/* <p class="card-text">...</p> */}
                </div>
                </div>
            </div>
            {/* <div class="col mb-4">
                <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div> */}
            <div class="col mb-4">
                <div class="card">
                <img src={process.env.PUBLIC_URL + '/images/9-year-old-hero.png'} class="card-img-top" alt=" Image of nine-year-old hero audio book cover. By Logan Reynolds through the midnight dream publishing. Red head in a superhero costume nine-year-old kid. Blue cape red shirt white clothes socks in the living room." />
                <div class="card-body">
                    <h5 class="card-title">The 9 Year Old Hero</h5>
                    {/* <p class="card-text">...</p> */}
                </div>
                </div>
            </div>
        </div>
    </div>
)

export default Finaces;