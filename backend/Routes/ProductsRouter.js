const ensureAuthenticated = require('../Middlewares/Auth')
const router = require('express').Router()

// Sample products with images
router.get('/', ensureAuthenticated, (req, res) => {
    console.log('--- logged in user detail', req.user)

    const products = [
        {
            name: 'Mobile',
            price: 100000,
            image: 'https://media.gadgetbytenepal.com/2024/12/Tesla-Phone.jpg'
        },
        {
            name: 'TV',
            price: 20000,
            image: 'https://imgs.search.brave.com/wdVKTZPoU021Ppu6Lluw_8ImVfaeWjvA_6QuEPalBTI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDI1LzA5L0JFU1Qt/TENELUxFRC1UVi0z/MjMxLmpwZw'
        },
        {
            name: 'Laptop',
            price: 150000,
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=200&fit=crop'
        },
        {
            name: 'Headphones',
            price: 20060,
            image: 'https://img.drz.lazcdn.com/static/np/p/50f9f56fdc8981e775704eb3ef20cf39.jpg_720x720q80.jpg'
        },
        {
            name: 'Smart Watch',
            price: 30060,
            image: 'https://st.depositphotos.com/1000128/5054/i/450/depositphotos_50545021-stock-photo-collection-of-smart-watches.jpg'
        }
    ]

    res.status(200).json(products)
})

module.exports = router
