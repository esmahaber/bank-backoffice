import {Account} from './account';
export class Transaction{
    id: number;
    senderAccountId: Account[];
    amount: number;
    explanation: string;
    transactinDate: Date;
    transactionType: string;
    receiverAccountId: Account[];

}