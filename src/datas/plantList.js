import monstera from '../assets/monstera.jpg';
import lyrata from '../assets/lyrata.jpg';
import pothos from '../assets/pothos.jpg';
import succulent from '../assets/succulent.jpg';
import olive from '../assets/olive.jpg';
import basil from '../assets/basil.jpg';
import mint from '../assets/mint.jpg';
import calathea from '../assets/calathea.jpg';
import cactus from '../assets/cactus.jpg';

export const plantList = [
	{
		name: 'monstera',
		category: 'classic',
		id: '1ed',
    isBestSale: true,
    isSpecialOffer: true,
    water: 2,
    light: 1,
    cover: monstera,
    price: 8
	},
	{
		name: 'ficus lyrata',
		category: 'classic',
		id: '2ab',
    isBestSale: false,
    isSpecialOffer: true,
    water: 2,
    light: 3,
    cover: lyrata,
    price: 10
	},
	{
		name: 'silver pothos',
		category: 'classic',
		id: '3sd',
    isBestSale: false,
    isSpecialOffer: false,
    water: 1,
    light: 2,
    cover: pothos,
    price: 7
	},
	{
		name: 'yucca',
		category: 'classic',
		id: '4kk',
    isBestSale: false,
    isSpecialOffer: false,
    water: 3,
    light: 1,
    cover: mint,
    price: 5
	},
	{
		name: 'olive tree',
		category: 'exterior',
		id: '5pl',
    isBestSale: false,
    isSpecialOffer: false,
    water: 1,
    light: 3,
    cover: olive,
    price: 15
	},
	{
		name: 'geranium',
		category: 'exterior',
		id: '6uo',
    isBestSale: false,
    isSpecialOffer: true,
    water: 3,
    light: 2,
    cover: calathea,
    price: 12
	},
	{
		name: 'basil',
		category: 'exterior',
		id: '7ie',
    isBestSale: true,
    isSpecialOffer: false,
    water: 3,
    light: 2,
    cover: basil,
    price: 6
	},
	{
		name: 'aloe',
		category: 'succulent',
		id: '8fp',
    isBestSale: false,
    isSpecialOffer: false,
    water: 1,
    light: 1,
    cover: cactus,
    price: 4
	},
	{
		name: 'succulent',
		category: 'succulent',
		id: '9vn',
    isBestSale: false,
    isSpecialOffer: true,
    water: 1,
    light: 3,
    cover: succulent,
    price: 9
	}
]
