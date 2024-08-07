const {Booking} = require('../models/index');
const { ValidationError,AppError,ServiceError } = require('../utils/error/index');
const {StatusCodes}=require('http-status-codes');
class BookingRepository{
    async create(data){
        try {
            const booking = await Booking.create(data);
            return booking;            
        } catch (error) {
            if(error.name=='SequelizeValidationError'){
                throw new ValidationError(error);                
            }
            throw new AppError('RepositoryError',
                'Cannot create booking',
                'There was some issues creeating a booking ,please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );            
        }
    }

    async update(data){
        
    }

}

module.exports =BookingRepository;