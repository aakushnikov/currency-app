import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Config } from "../../config/config";

@Injectable({
    providedIn: 'root'
  })
export class CurrencyApiService
{
	constructor(
		private _http: HttpClient,
		private _config: Config)
	{
	}

	public getCurrenciesList() : Observable<any>
	{
		let url = new URL('currency/list', this._config.apiUrl).toString();
		return this._http.get(url);
	}

	public getCurrencyTick(currency: string, date: Date) : Observable<any>
	{
		let formattedDate = date.toISOString().substring(0, 10);
		let url = new URL('currency/'.concat(currency, '/', formattedDate), this._config.apiUrl).toString();
		return this._http.get(url);
	}
}
