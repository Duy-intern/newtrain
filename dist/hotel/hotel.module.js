"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const client_hotel_controller_1 = require("./controllers/client.hotel.controller");
const hotel_service_1 = require("./hotel.service");
const hotel_schema_1 = require("./schema/hotel.schema");
const hotel_repository_1 = require("./hotel.repository");
const auth_module_1 = require("../auth/auth.module");
;
const booking_module_1 = require("../booking/booking.module");
const admin_hotel_controller_1 = require("./controllers/admin.hotel.controller");
const provider_hotel_controller_1 = require("./controllers/provider.hotel.controller");
let HotelModule = class HotelModule {
};
exports.HotelModule = HotelModule;
exports.HotelModule = HotelModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: "Hotel", schema: hotel_schema_1.HotelSchema }
            ]),
            auth_module_1.AuthModule,
            (0, common_1.forwardRef)(() => booking_module_1.BookingModule)
        ],
        controllers: [client_hotel_controller_1.HotelController, admin_hotel_controller_1.AdminHotelController, provider_hotel_controller_1.ProviderHotelController],
        providers: [
            {
                provide: "HotelIService",
                useClass: hotel_service_1.HotelService
            },
            {
                provide: "HotelIRepo",
                useClass: hotel_repository_1.HotelRepository
            },
            hotel_service_1.HotelService, hotel_repository_1.HotelRepository
        ],
        exports: [hotel_service_1.HotelService]
    })
], HotelModule);
//# sourceMappingURL=hotel.module.js.map