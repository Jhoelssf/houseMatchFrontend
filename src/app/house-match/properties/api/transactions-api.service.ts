import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
    BoolOutput,
    HouseMatch,
    IdOutput,
    TransactionInput,
    TransactionSecondLevel,
} from '../../../api/houseMatch.api';

@Injectable({
    providedIn: 'root',
})
export class TransactionsApiService {
    transactions$: Subject<TransactionSecondLevel[] | any> = new Subject<TransactionSecondLevel[] | any>();
    updateTransaction$: Subject<BoolOutput | any> = new Subject<BoolOutput | any>();
    createTransaction$: Subject<IdOutput | any> = new Subject<IdOutput | any>();
    deleteTransaction$: Subject<BoolOutput | any> = new Subject<BoolOutput | any>();
    constructor(private houseMatchApi: HouseMatch) {}

    getTransactions(): void {
        this.houseMatchApi.getTransactions().subscribe((Transactions) => {
            this.transactions$.next(Transactions);
        });
    }
    updateTransaction(id: string, body: TransactionInput): void {
        this.houseMatchApi.updateTransaction(id, body).subscribe((transaction) => {
            this.updateTransaction$.next(transaction);
        });
    }
    createTransaction(body: TransactionInput): void {
        this.houseMatchApi.createTransaction(body).subscribe((transaction) => {
            this.createTransaction$.next(transaction);
        });
    }
    createTransactionObs(body: TransactionInput): Observable<IdOutput> {
        return this.houseMatchApi.createTransaction(body);
    }
    deleteTransaction(id: string): void {
        this.houseMatchApi.deleteTransaction(id).subscribe((transaction) => {
            this.deleteTransaction$.next(transaction);
        });
    }
}