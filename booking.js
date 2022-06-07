const express = require('express')
const router = express.Router()

const homeModel = require('../models/home.model')


//Homes
router.get('/Homes' , async (req,res) => {
  const homes = await homeModel.find()
  res.status(200).json(homes)
})

router.get('/:id', async (req,res) => {
  const home = await homeModel.findByIdAndUpdate(req.params.id)
  res.status(200).json(home)
})
//Search
router.get('/' , async (req,res) => {
    let { location } = req.query
    location = location.toLowerCase()
    const homes = await homeModel.find({ 'address.city': location })
  
    res.status(200).json(homes)
  })

  //Bookings
  const occupiedRoom = (firstBooking, secondBooking) => {
    firstCheckin = new Date(firstBooking.checkin)
    firstCheckout = new Date(firstBooking.checkout)
    
    secondCheckin = new Date(secondBooking.checkin)
    secondCheckout = new Date(secondBooking.checkout)
    return firstCheckin < secondCheckout && firstCheckout > secondCheckin
  }
  
  router.get('booking/:id/' , async (req,res) => {
    const {checkin, checkout} = req.query
    const tempBooking = {checkin, checkout}
    const home = await homeModel.findOneAndUpdate(req.params.id)
    for(currentBooking of home.bookings){
      if (occupiedRoom(currentBooking, tempBooking)){
        return res.status(200).json({isOccupied: true})
      } 
    }
    
    
  })  
  //cities
  router.get('/city' , async (req,res) => {
    const cities = await cityModel.find()
    res.status(200).json(cities)
  })

module.exports = router
booking.listen(6780, (err)=> {
    if(err) throw(err)
    console.writeline('Server is listening on port 6789')
})

module.exports = router;