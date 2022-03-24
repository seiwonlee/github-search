import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { MessageService } from "primeng/api";
import { SearchInput } from 'src/app/models/search-input';
import { SearchOutput } from 'src/app/models/search-output';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  block = false;
  initialized = false;
  searchSortOptions:any;
  selectedSort:any;
  
  searchTextInput="";
  searchResults:any=[];
  args:SearchInput;
  output:SearchOutput;

  constructor(
    private searchService: SearchService,
    private messageService: MessageService,
  ) {
    this.setupSort();
    this.initializeSearch();
   }
  ngOnInit(): void {}

  /* 
  let query = `q=q&sort=followers&page=${this.page}&per_page=${this.pageSize}`;
  While REST API is easier to use for pagination, it takes multiple subsequent calls to get at the child props
  (i.e. starredRepositories).

  While using GraphQL gives easier access to data, the pagination is made more difficult by GitHub API not supporting
  'skip' or 'limit' operations on the search field. No choice but to just use the cursor to paginate Prev & Next only.
  */
  searchUsers(){
    if (this.searchTextInput.trim() === "") { return; }

    this.args.searchText = this.searchTextInput;
    const input = {
      queryString: `${this.args.searchText} sort:${this.selectedSort.code}`,
      cursor: this.output.cursor,
      pageSize: this.args.pageSize,
      direction: this.args.paginationDirection
    }
    this.block = true;
    this.searchService.searchUserGraphQL(input).subscribe(d=>{
      if (!d) {
        this.searchResults = []; 
        return;
      }
      this.output.totalRecords = d.userCount;
      this.output.startCursor = d.pageInfo.startCursor;
      this.output.endCursor = d.pageInfo.endCursor;
      this.searchResults = d.edges.map(d=>({...d.node, cursor:d.cursor}));
    })
    .add(() => {
      this.block = false;
      this.initialized=true;
    }),
    err=>{
      this.msg('error','Search',err)
    }
  }

  loadPage(e){
    if (e.page > (this.args.currentPage ?? 0)){
      //next
      this.args.paginationDirection = 1;
      this.output.cursor = this.output.endCursor;
    }
    else if (e.page < (this.args.currentPage ?? 0)){
      //prev
      this.args.paginationDirection = -1;
      this.output.cursor = this.output.startCursor;
    }
    this.args.currentPage = e.page;
    this.searchUsers();
  }

  changeSort(e){
    this.initializeSearch();
    this.loadPage({page:0});
  }
  initializeSearch(){
    this.args = {
      paginationDirection:1,
      pageSize:10,
      currentPage:0,
      searchText:this.searchTextInput
    };
    this.output = {
      totalRecords:0,
      startCursor:"",
      endCursor:"",
      cursor:""
    }
  }
  setupSort(){
    this.searchSortOptions = [
      {name: 'Best match', code: ''},
      {name: 'Most followers', code: 'followers-desc'},
      {name: 'Fewest followers', code: 'followers-asc'},
      {name: 'Most repositories', code: 'repositories-desc'},
      {name: 'Fewest repositories', code: 'repositories-asc'},
    ];
    this.selectedSort = {name: 'Best match', code: ''};
    // this.searchResults = [];
    
  }
  msg(severity, summary, err, life?){
    console.log(err);
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: err.error.message,
      life: life ? life : 5000
    });
  }

  followUser(e, user){
    //I'll use REST API to show variations
    this.block = true;
    this.searchService.followUser(user.login)
    .toPromise()
    .then(d=>{
      user.viewerIsFollowing = true;
    })
    .catch(err=>{
      this.msg('error','Update Error',{error:{messsage:'Follow failed. Please try again.'}})
    })
    .finally(()=>{ this.block = false; })
  }
  unfollowUser(e, user){
    this.block = true;
    this.searchService.unfollowUser(user.login)
    .toPromise()
    .then(d=>{
      user.viewerIsFollowing = false;
    })
    .catch(err=>{
      this.msg('error','Update Error',{error:{messsage:'Unfollow failed. Please try again.'}})
    })
    .finally(()=>{ this.block = false; })
  }
}
