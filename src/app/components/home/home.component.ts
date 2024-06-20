import {Component} from '@angular/core';
import {VideoUploadService} from "../../services/video-upload.service";
import {videoDTO} from "../save-video-details/videoDTO";
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private videoUploadService: VideoUploadService, private router: Router) {
    this.videoUploadService.getAllVideos().subscribe(
      res => {
        this.allVideos = res;
        console.log(this.allVideos);
      }
    );
  }
  allVideos: any[] = [];
  video: any;

  openVideo(video: any){
    this.router.navigateByUrl("/video-details/"+ video.id);
  }
}
