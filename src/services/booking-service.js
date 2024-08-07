const {BookingRepository}=require('../repository/index');
const axios = require('axios');
const {FLIGHT_SERVICE_PATH} =require('../config/serverConfig');
const { ServiceError } = require('../utils/error');



class BookingService{
    constructor(){
        this.bookingRepository= new BookingRepository();
    }

    async createBooking(data){
        try {
            const flightId=data.flightId;
            const getFlightRequestURL=`${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
            const response = await axios.get(getFlightRequestURL);
            const flightData =response.data.data;
            let priceOfTheFlight = flightData.price;
            if(data.noOfSeats > flightData.totalSeats){
                throw new ServiceError('Something went wrong int he booking process','Insufficient seats');
            }
            const totalCost = priceOfTheFlight*data.noOfSeats;
            const bookingPayload = {...data,totalCost};
            const booking = await this.bookingRepository.create(bookingPayload);
            const updateFlightRequestURL =`${FLIGHT_SERVICE_PATH}/api/v1/flights/${booking.flightId}`;
            await axios.patch(updateFlightRequestURL,{totalseats:flightData.totalseats-data.noOfSeats});
            const finalBooking=await this.bookingRepository.update(booking.id,{status:"Booked"});
            return finalBooking;

        } catch (error) {
            if(error.name=="RepositoryError"  ||  error.name=='ValidationError'){
                throw error;

            }
            throw new ServiceError();            
        }
         
    }

}

module.exports=BookingService;