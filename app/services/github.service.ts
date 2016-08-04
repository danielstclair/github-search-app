import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private username; // Github username

	constructor(private _http:Http) {

	}
	// get user profile
	getUser() {
		return this._http.get(`https://api.github.com/users/${this.username}`).map(res => res.json());
	}

	// get user repos
	getRepos() {
		return this._http.get(`https://api.github.com/users/${this.username}/repos`).map(res => res.json());
	}
	// update username
	updateUser(username) {
		this.username = username;
	}
}
