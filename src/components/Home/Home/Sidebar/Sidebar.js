import React from 'react';
import './Sidebar.css'
import Slider from "react-slick";
import Rating from 'react-rating';
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
const Sidebar = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };
    return (
        <div className='sidebar'>
            <h2 className='text-light pt-4 pb-3'>Top Rated</h2>
            <Slider {...settings}>
                <div>
                    <img src="https://image.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg" alt="" />
                    <div className='text-light'>
                        <h2>TravelerName :Ace</h2>
                        <h4>TravelLocation :South Island, New Zealand</h4>
                        <p>Description :New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to fjords to glaciers. Here, you can admire the mountains of Fiordland National Park, a UNESCO World Heritage Site, from hiking trails or a boat on Milford Sound. At night, journey to the University of Canterbury's Mount John Observatory to gaze at the starry skies. You can also indulge your inner daredevil in Queenstown, explore two of the most accessible glaciers in the world on the island's west coast or sample delicious food and wine in the Marlborough region.</p>
                        <p>Cost :$4.62</p>
                        <Rating initialRating={5}
                            emptySymbol={<BsStar />}
                            fullSymbol={<BsStarFill />}
                            readonly />
                    </div>
                </div>
                <div>
                    <img src="https://image.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-coconut-palm-tree-sunrise-time_74190-7454.jpg" alt="" />
                    <div className='text-light'>
                        <h2>TravelerName :Arvad</h2>
                        <h4>TravelLocation :Paris</h4>
                        <p>Description :The magnetic City of Light draws visitors from around the globe who come to see iconic attractions like the Eiffel Tower, the Louvre and the Arc de Triomphe. But what travelers really fall in love with are the city's quaint cafes, vibrant markets, trendy shopping districts and unmistakable je ne sais quoi charm. Get lost wandering along Paris' cobblestone streets, or grab a croissant and relax on the banks of the Seine for hours. If you're up for a quick daytrip, head about 15 miles southwest of the city center to another must-see attraction: the Palace of Versailles</p>
                        <p>Cost :$6.71</p>
                        <Rating initialRating={5}
                            emptySymbol={<BsStar />}
                            fullSymbol={<BsStarFill />}
                            readonly />
                    </div>
                </div>
                <div>
                    <img src="https://image.freepik.com/free-photo/beautiful-paradise-island-with-beach-sea_74190-1023.jpg" alt="" />
                    <div className='text-light'>
                        <h2>TravelerName :Abir</h2>
                        <h4>TravelLocation :Bora Bora</h4>
                        <p>Description :What this small French Polynesian island may lack in size it makes up for in sheer tropical beauty. Here, you'll find picturesque beaches, lush jungles and luxurious resorts. The island's dormant volcano, Mount Otemanu, makes for a great photo-op or challenging hike, and the friendly Bora Bora locals can help you catch a glimpse of the island's best sights during an off-road excursion. To relax, head to Matira Beach for crystal-clear water and soft sand. Although a trip to Bora Bora is very expensive, most travelers say it's worth every penny.</p>
                        <p>Cost :$4.05</p>
                        <Rating initialRating={5}
                            emptySymbol={<BsStar />}
                            fullSymbol={<BsStarFill />}
                            readonly />
                    </div>
                </div>
                <div>
                    <img src="https://image.freepik.com/free-photo/beautiful-tropical-beach-sea-with-chair-blue-sky_74190-7488.jpg" alt="" />
                    <div className='text-light'>
                        <h2>TravelerName :Ahascharah</h2>
                        <h4>TravelLocation :Maui</h4>
                        <p>Description :Whether you're driving along the Road to Hana, enjoying a bird's-eye view of the lush coastline from a helicopter, snorkeling with sea turtles or simply relaxing on the Hawaiian island's honey- or black-colored beaches, you'll find that Maui is unlike any other tropical destination. Don't miss a chance to visit Haleakala National Park, which is home to the world's largest dormant volcano. You should also attend a luau for a dose of local culture and a taste of Hawaiian specialties like poi, poke and mahimahi.</p>
                        <p>Cost :$4.57</p>
                        <Rating initialRating={4}
                            emptySymbol={<BsStar />}
                            fullSymbol={<BsStarFill />}
                            readonly />
                    </div>
                </div>
                <div>
                    <img src="https://image.freepik.com/free-photo/beautiful-tropical-beach-sea-with-coconut-palm-tree-paradise-island_74190-2206.jpg" alt="" />
                    <div className='text-light'>
                        <h2>TravelerName :Ahim</h2>
                        <h4>TravelLocation :Tahiti</h4>
                        <p>Description :Travel to this island – the largest in French Polynesia – if you've been dreaming of a vacation spent lazing in a lavish overwater bungalow. Beyond the posh resorts, Tahiti boasts black sand beaches, a bustling capital and prime snorkeling and surfing conditions. If you're looking for more cultural experiences, check out some of the island's ancient temples or shop at its traditional covered markets. To save money, opt to stay in a vacation rental</p>
                        <p>Cost :$2.14</p>
                        <Rating initialRating={4}
                            emptySymbol={<BsStar />}
                            fullSymbol={<BsStarFill />}
                            readonly />
                    </div>
                </div>
                <div>
                    <img src="https://image.freepik.com/free-photo/beautiful-paradise-island-with-beach-sea_74190-6626.jpg" alt="" />
                    <div className='text-light'>
                        <h2>TravelerName :Aniveshak</h2>
                        <h4>TravelLocation :St. Lucia</h4>
                        <p>Description :Dotted with luxurious boutique hotels, this Caribbean destination is tailor-made for lovebirds and adrenaline junkies. Those in search of relaxation will find it on the island's unspoiled shorelines (specifically Reduit Beach and Anse Chastanet). Meanwhile, adventure seekers can test their limits climbing the Pitons or zip lining through the Chassin region's rainforest. The dry season, December to April, is the most popular (and expensive) time to visit, but budget-conscious travelers can find superb weather and cheaper room rates if they arrive in May or June.</p>
                        <p>Cost :$5.85</p>
                        <Rating initialRating={4}
                            emptySymbol={<BsStar />}
                            fullSymbol={<BsStarFill />}
                            readonly />
                    </div>
                </div>
            </Slider>
            {/* <Slider {...settings}>
                <div>
                    <img src="https://image.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg" alt="" />
                    <div>
                        <h2>TravelerName :Ace</h2>
                        <h4>TravelLocation :South Island, New Zealand</h4>
                        <p>Description :New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to fjords to glaciers. Here, you can admire the mountains of Fiordland National Park, a UNESCO World Heritage Site, from hiking trails or a boat on Milford Sound. At night, journey to the University of Canterbury's Mount John Observatory to gaze at the starry skies. You can also indulge your inner daredevil in Queenstown, explore two of the most accessible glaciers in the world on the island's west coast or sample delicious food and wine in the Marlborough region.</p>
                        <p>Cost :$4.62</p>
                    </div>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider> */}
        </div>
    );
};

export default Sidebar;