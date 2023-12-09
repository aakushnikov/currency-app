import { Component, OnInit } from '@angular/core';
import { CurrencyApiService } from '../../services/api/currency-api-service';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { ICurrencyTick } from '../../model/currency-tick.i';

@Component({
	selector: 'app-currency-tick',
	templateUrl: './currency-tick.component.html',
	styleUrl: './currency-tick.component.css'
})
export class CurrencyTickComponent implements OnInit {
	protected myCurrency = new FormControl();
	protected myDate = new FormControl(new Date(2021, 10, 13));
	protected filteredOptions: Observable<string[]>;
	protected currenciesList: string[] = [];
	protected currencyTick: ICurrencyTick | any;

	constructor(private _currencyApiService: CurrencyApiService)
	{
		this.filteredOptions = this.myCurrency.valueChanges.pipe(
			startWith(''),
			map(value => this._filter(value || '')),
		);
	}

	ngOnInit(): void {
		this._currencyApiService.getCurrenciesList()
			.subscribe(
				{
					next: data =>
						this.currenciesList = data as string[],
					error: error =>
						console.error(error)
				}
			);
	}

	private _filter(value: string): string[] {
		const filterValue = value.toLowerCase();
		return this.currenciesList.filter(option => option.toLowerCase().includes(filterValue));
	}

	protected currencySettingsChange()
	{
		let currency = this.myCurrency.value;
		let date = this.myDate.value as Date;

		if (!date || !currency)
			return;

		this._currencyApiService.getCurrencyTick(currency, date)
			.subscribe(
				{
					next: data =>
						{
							this.currencyTick = data as ICurrencyTick;
							console.log(this.currencyTick);
						},
					error: error =>
						console.error(error)
				}
			);

	}
}
