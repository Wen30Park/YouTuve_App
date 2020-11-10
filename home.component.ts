import {Component, OnInt} from '@angular/core';
import {YoutubeService} from '../../services/youtube.service';
import { YoutuveService } from '../services/youtube.service';

Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: './home.cpmponent.css'
})
export class HomeComponent implements OnInit{

    videos  Video[] = []

    constructor (private youtubeService: YoutuveService){
 
    ngOnInit(){
        this.youtubeService.getVideos()
        .subcribe( resp  => {

            this.videos.push(...resp);
            console.log(resp);
        })
    }

    mostrarVideo( video: Video){

        console.log(video)
        Swal.fire({
            html:
             <h4>{video.title}</h4>

        })
    }
    }
}