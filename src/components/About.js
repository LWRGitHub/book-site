import React from 'react';

const About = () => (
    <div class="container mb-3">
        <div class="row">
            <div class="col col-md-7 p-1">
                <div class='p-5 bg-light rounded'>
                    <a href="https://www.amazon.com/Logan-Reynolds/e/B089CBVN5F" target="_blank"><img width="80px" height="75px" id="me" className='position-absolute rounded-circle'  src={process.env.PUBLIC_URL + '/images/self.jpeg'}/></a>
                    <p>Hello,</p>
                    <p>My name is Logan, I was born and raised in the San Francisco Bay area. I have always been interested in life as a writer, although my first published book was not until 2018, I was writing books many years prior. As a young new author, I found it very difficult to get my books published by a publishing company.</p>
                    <p>I remember a time when I was trying to find a publisher's address but found out it was a PO box in the UPS store. I was trying to publish a vegan cookbook and later when I found the address the publisher was insisting that she did not think anybody would publish the book but I could pay her a "TON" of money to try. Unfortunately I never actually was able to publish that book.</p>
                    <p>Although I no longer have some of the books that I wrote, I was able to create a self-publishing factory right here on Amazon.com naming it The Midnight Dream Publishing. I am glad that my books can be enjoyed and bring value to many all over the world. Also, I would of course not mind if I were to make enuff money to live comfortably!</p>
                    <p>Thank you for taking the time to read,</p>
                    <p className='m-0'>Logan Reynolds</p>
                </div>
            </div>
            <div class="col-12 col-md-5 p-1">
                <img class="rounded img-fluid" src={process.env.PUBLIC_URL + '/images/sfStreet.jpg'}/>
            </div>
        </div>
    </div>
)

export default About;