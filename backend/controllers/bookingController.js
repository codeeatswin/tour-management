import Booking from '../models/Bookings.js';
// create booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: 'your tour is booked',
      data: savedBooking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'internal server error',
    });
  }
};

// get single booking
export const getBooking = async(req,res)=>{
    const id = req.params.id
    try {
        const book = await Booking.findById(id)
        res.status(200).json({
            success: true,
            message: 'successful',
            data: book
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'not found',
          });
    }
}
// get  All booking
export const getAllBooking = async(req,res)=>{
    const id = req.params.id
    try {
        const books = await Booking.findById()
        res.status(200).json({
            success: true,
            message: 'successful',
            data: books
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal server error',
          });
    }
}