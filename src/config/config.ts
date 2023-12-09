import { Injectable } from "@angular/core";
import * as app from "./app.json";

@Injectable({
    providedIn: 'root',
  })
export class Config {
    public readonly apiUrl: string;

    constructor() {
        this.apiUrl = app.default["apiUrl"]
    }
}

