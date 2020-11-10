 export interface YoutubeResponse{
     kind:          string;
     etag:          string;
     nextPageToken: string;
     pageInto:      PageInto;
     items:         Item[];     
 }

 export interface Item {
     kind:       Itemkind;
     etang:      string;
     id:         string;
    snippet:     Video;
 }

 export enum Itemkind{
     YoutubePlaylistItem = "youtube#playlistItem",
     }

     export interface  Video{
         publishedAt:  Date;
         channelId:    ChannelID;
         title:        string;
         description:  string;
         thumbnaiLs:   Tumbnails;
         playlistId:   PlaylistID;
         position:     number;
         resourceId:   ResourceID;
     }

     export enum ChannelID{
         UCUAPTYj15JSkETGnEseaFFg = "UCUAPTYj15JSkETGnEseaFFg "
     }

     export enum ChannelTitle{
         WendyCocoletzi = "WendyCocoletzi",
     }

     export enum PlaylistID {
         UCUAPTYj15JSkETGnEseaFFg = "UCUAPTYj15JSkETGnEseaFFg", 
     }

     export interface ResourceID{
         kind:     ResourceIDKind;
         videoId:  string;
     }

     export enum ResourceIDKind {
         YoutuveVideo = "youtube#video",
     }

     export interface Thumbnails{
         default:    Default;
         medium:     Default;
         high:       Default;
         standard:   Default;
         maxres:     Default;
     }

     export interface Default{
     url:    String;
     widht:  number;
     height: number;  
     }

     export interface PageInfo{
         totalResults:      number;
         resultsPerPage:    number;
     }