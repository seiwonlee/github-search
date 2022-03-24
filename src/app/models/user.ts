export interface User{
    name?:string;
    email?:string;
    avatarUrl?:string;
    login?:string;
    url?:string;
    bio?:string;
    location?:string;
    followers?:{
        totalCount?:number
    };
    starredRepositories?:{
        totalCount?:number
    };
    viewerIsFollowing?:boolean;
}
