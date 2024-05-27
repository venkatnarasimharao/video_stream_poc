import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { S3CommonService } from '../s3.common.service';


@Component({
  selector: 'app-video-main-container',
  templateUrl: './video-main-container.component.html',
  styleUrls: ['./video-main-container.component.scss']
})
export class VideoMainContainerComponent implements OnInit {
  files: string[] = [];
  bucketName = 'video-storage-poc-tricon';
  videoData: any = [];
  videoSrc = 'https://d2c6supkhungkj.cloudfront.net/POC_DATA/sample-1/sample-1.mp4';
  videoName = 'sample-1.mp4';
  @ViewChild('videoPlayer') videoPlayer: ElementRef | undefined;
  constructor(private s3Service: S3CommonService) { }

  async ngOnInit(): Promise<void> {
    this.videoData = await this.s3Service.getVideoUrl();
    console.log('this.videoData-------------->', this.videoData);
  }
  onNotify(event: any) {
    console.log('onNotify clicked---------->', event);
    this.updateVideo(event.name, event.key);
  }

  updateVideo(newFolderName: string, newVideo: string) {
    console.log('video old::', this.videoSrc);
    this.videoName = newVideo
    this.videoSrc = `https://d2c6supkhungkj.cloudfront.net/POC_DATA/${newFolderName}/${newVideo}`;
    console.log('video new::', this.videoSrc);
    this.reloadVideo();
  }

  reloadVideo() {
    const video: HTMLVideoElement = this.videoPlayer?.nativeElement;
    video.load();
  }

  forceDownload(blob: string, filename: string) {
    var a = document.createElement('a');
    a.download = filename;
    a.href = blob;
    // For Firefox https://stackoverflow.com/a/32226068
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  // Current blob size limit is around 500MB for browsers
  downloadResource(url: any) {
    const filename = url.split('\\').pop().split('/').pop();
    console.log('filename::', filename);

    fetch(url, {
      headers: new Headers({
        'Origin': location.origin
      }),
      mode: 'cors'
    })
      .then(response => response.blob())
      .then(blob => {
        let blobUrl = window.URL.createObjectURL(blob);
        this.forceDownload(blobUrl, filename);
      })
      .catch(e => console.error(e));
  }
}