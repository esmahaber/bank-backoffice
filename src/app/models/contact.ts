import {Address} from './address';
export class Contact {
    id: number;
    customerId: number;
    phoneNumber: string;
    email: string;
    address: Address[];    
}