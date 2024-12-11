import { CreateBookingDto } from "../dto/create-booking.dto";
import { BookingI } from "./booking.interface";

export interface BookingIService {
    getOne(bookingId: string): Promise<BookingI>
    
    findQuery(query: Object, providerId?: string): Promise<BookingI[]>

    create(bookingInfo: CreateBookingDto,hotelId: string, req): Promise<BookingI>
        delete(bookingId: string): Promise<BookingI>  // Thêm phương thức xóa

}