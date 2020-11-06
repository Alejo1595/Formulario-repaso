import { BehaviorSubject, Observable } from 'rxjs';

export class Store<T> {

    public state$: Observable<T>;
    private sateSub$: BehaviorSubject<T>;

    protected constructor(initialState: T) {
        this.sateSub$ = new BehaviorSubject<T>(initialState);
        this.state$ = this.sateSub$.asObservable();
    }

    get state(): T {
        return this.sateSub$.getValue();
    }

    setState(nextValue: T): void {
        this.sateSub$.next(nextValue);
    }
}
