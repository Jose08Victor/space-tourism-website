import { Idata } from '../types';
import { Crew } from '@/pages/crew';
import { Destination } from '@/pages/destination';
import { Technology } from '@/pages/technology';
import { renderComponent } from '@/utils';
import { fireEvent } from '@testing-library/react';

const mockData: Idata = {
    "destinations": [
        {
            "name": "Moon",
            "image": "https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/destination/image-moon.webp",
            "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            "distance": "384,400 km",
            "travel": "3 days"
        },
        {
            "name": "Mars",
            "image": "https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/destination/image-mars.webp",
            "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            "distance": "225 mil. km",
            "travel": "9 months"
        },
        {
            "name": "Europa",
            "image": "https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/destination/image-europa.webp",
            "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            "distance": "628 mil. km",
            "travel": "3 years"
        },
        {
            "name": "Titan",
            "image": "https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/destination/image-titan.webp",
            "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            "distance": "1.6 bil. km",
            "travel": "7 years"
        }
    ],
    "crew": [
        {
            "name": "Douglas Hurley",
            "image": "https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/crew/image-douglas-hurley.webp",
            "role": "Commander",
            "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            "name": "Mark Shuttleworth",
            "image": "https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/crew/image-mark-shuttleworth.webp",
            "role": "Mission Specialist",
            "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            "name": "Victor Glover",
            "image": "https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/crew/image-victor-glover.webp",
            "role": "Pilot",
            "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
            "name": "Anousheh Ansari",
            "image": "https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/crew/image-anousheh-ansari.webp",
            "role": "Flight Engineer",
            "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
    ],
    "technology": [
        {
            "name": "Launch vehicle",
            "images": {
                "portrait": "https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/technology/image-launch-vehicle-portrait.jpg",
                "landscape": "https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/technology/image-launch-vehicle-landscape.jpg"
            },
            "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            "name": "Spaceport",
            "images": {
                "portrait": "https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/technology/image-spaceport-portrait.jpg",
                "landscape": "https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/technology/image-spaceport-landscape.jpg"
            },
            "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            "name": "Space capsule",
            "images": {
                "portrait": "https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/technology/image-space-capsule-portrait.jpg",
                "landscape": "https://raw.githubusercontent.com/Jose08Victor/space-tourism-website/main/src/assets/technology/image-space-capsule-landscape.jpg"
            },
            "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]
}

describe('Testing data from the "Destination" page', () => {
    test('provides correct data to consumers', () => {
        const { getByRole, getAllByRole, getByAltText, getByText } = renderComponent(<Destination />);

        const destinationData = getAllByRole('listitem');

        destinationData.forEach((e, index) => {
            fireEvent.click(e);

            expect(getByAltText(mockData.destinations[index].name)).toBeInTheDocument();
            expect(getByRole('heading', { name: mockData.destinations[index].name })).toBeInTheDocument();
            expect(getByText(mockData.destinations[index].description)).toBeInTheDocument();
            expect(getByText(mockData.destinations[index].distance)).toBeInTheDocument();
            expect(getByText(mockData.destinations[index].travel)).toBeInTheDocument();
        });
    });

    test('checks if the amount of data is correct', () => {
        const { getAllByRole } = renderComponent(<Destination />);

        const destinationData = getAllByRole('listitem');
        expect(destinationData.length).toEqual(mockData.crew.length);
    })
});

describe('Testing data from the "Crew" page', () => {
    test('provides correct data to consumers', () => {
        const { getByText, getAllByRole, getByAltText } = renderComponent(<Crew />);
        const crewData = getAllByRole('listitem');

        crewData.forEach((e, index) => {
            fireEvent.click(e);

            expect(getByText(mockData.crew[index].role)).toBeInTheDocument();
            expect(getByText(mockData.crew[index].name)).toBeInTheDocument();
            expect(getByText(mockData.crew[index].bio)).toBeInTheDocument();
            expect(getByAltText(mockData.crew[index].name)).toBeInTheDocument();
        });
    });

    test('checks if the amount of data is correct', () => {
        const { getAllByRole } = renderComponent(<Crew />);
        const crewData = getAllByRole('listitem');

        expect(mockData.crew.length).toEqual(crewData.length);
    })
});

describe('Testing data from the "Technology" page', () => {
    test('provides correct data to consumers', () => {
        const { getByText, getAllByRole, getByAltText } = renderComponent(<Technology/>);
        const technologyData = getAllByRole('listitem');

        technologyData.forEach((e, index) => {
            fireEvent.click(e);

            expect(getByText(mockData.technology[index].name)).toBeInTheDocument();
            expect(getByText(mockData.technology[index].description)).toBeInTheDocument();
            expect(getByAltText(mockData.technology[index].name)).toBeInTheDocument();
        });
    });

    test('checks if the amount of data is correct', () => {
        const { getAllByRole } = renderComponent(<Technology />);
        const technologyData = getAllByRole('listitem');

        expect(mockData.technology.length).toEqual(technologyData.length);
    })
});