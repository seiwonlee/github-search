import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';;
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { BaseService } from "./base.service";

@Injectable({
  providedIn: 'root'
})
export class SearchService extends BaseService {
  constructor(protected override http: HttpClient) {
    super(http);
  }
  //GraphQL
  public searchUserGraphQL(input,headers: HttpHeaders = new HttpHeaders()): Observable<any> {
    let tmp = {
      "queryString": input.queryString
    };
  
    if (input.direction === 1){
      tmp["first"] = input.pageSize;
      tmp["after"] = input.cursor;
    }
    else if (input.direction === -1){
      tmp["last"] = input.pageSize;
      tmp["before"] = input.cursor;
    }
    
    let variables = JSON.stringify(tmp);
    //GitHub GraphQL's Search doesn't defin the 'skip' operation
    //So we're stuck to having just the Prev/Next for paing using cursors 
    let query = `
    query searchUsers(
      $queryString:String!, 
      ${tmp['first']?'$first: Int!, ':''} 
      ${tmp['last']?'$last: Int!,':''}
      ${tmp['after']?'$after: String, ':''}
      ${tmp['before']?'$before: String':''}){

      search(query: $queryString, type: USER, 
        ${tmp['first']?'first: $first, ':''}
        ${tmp['last']?'last: $last, ':''} 
        ${tmp['after']?'after: $after, ':''}
        ${tmp['before']?'before: $before, ':''}) {
        userCount
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            ... on User {
                avatarUrl
                login
                name
                location
                email
                bio
                url
                viewerIsFollowing
                starredRepositories{
                  totalCount
                }
                followers{
                  totalCount
                }
            }
          }
        }
      }
    }
    `;
    return this.http.post<any>(this.getGraphQLBaseUrl(), 
      {query, variables}, {headers})
      .pipe(
        map(({ data }) => (data)?data.search:data),
        catchError(err=>throwError(err))
      )
  }

  //REST API
  public searchUsers(
    query,
    headers: HttpHeaders = new HttpHeaders()
  ): Promise<any> {
    return this.getResource(
      this.getBaseUrl() + `/search/users?${query}`,
      headers
    )
      .map((json: any) => json)
      .catch((err: any) => throwError(err))
      .toPromise<any>();
  }

  public followUser(
    username,
    headers: HttpHeaders = new HttpHeaders()
  ): Observable<any> {
    return this.http.put<any>(this.getBaseUrl() + `/user/following/${username}`, {
      headers,
    });
  }
  public unfollowUser(
    username,
    headers: HttpHeaders = new HttpHeaders()
  ): Observable<any> {
    return this.http.delete<any>(this.getBaseUrl() + `/user/following/${username}`, {
      headers,
    });
  }
}


