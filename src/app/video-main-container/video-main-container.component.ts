import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { S3CommonService } from '../s3.common.service';
//import { S3Service } from '../s3.service';
 
 
@Component({
  selector: 'app-video-main-container',
  templateUrl: './video-main-container.component.html',
  styleUrls: ['./video-main-container.component.scss']
})
export class VideoMainContainerComponent implements OnInit {
  files: string[] = [];
  bucketName = 'video-storage-poc-tricon';
    s3Obj:any = [];
    videoSrc= 'https://d2c6supkhungkj.cloudfront.net/POC_DATA/sample-2/sample-2.mp4';
    @ViewChild('videoPlayer') videoPlayer: ElementRef | undefined;
  constructor(private s3Service: S3CommonService) { }
 
  async ngOnInit(): Promise<void> {
    // console.log('Inside VideoMainContainerComponent----------------------->',this.s3Obj);
    this.s3Obj = await this.s3Service.getVideoUrl();
    console.log('this.s3Obj-------------->',this.s3Obj);
    // this.downloadResource(this.videoSrc);
   //this.dataService.getVideoUrl();
    //console.log('result-------------->',result);
   
  }
  onNotify(event: any) {
    console.log('onNotify clicked---------->', event);
    this.updateVideo(event.name,event.key);
  }
 
  updateVideo(newFolderName: string, newVideo: string) {
    console.log('video old::',this.videoSrc);
    this.videoSrc = `https://d2c6supkhungkj.cloudfront.net/POC_DATA/${newFolderName}/${newVideo}`;
    console.log('video new::',this.videoSrc);
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
  downloadResource(url:any){
    const filename = url.split('\\').pop().split('/').pop();
    console.log('filename::',filename);
   
    fetch(url, {
        // headers: new Headers({
        //   'Origin': location.origin
        // }),
        // mode: 'cors'
      })
      .then(response => response.blob())
      .then(blob => {
        let blobUrl = window.URL.createObjectURL(blob);
        this.forceDownload(blobUrl, filename);
      })
      .catch(e => console.error(e));
  }
 
 
 
  // downloadImage(downloadLink: any) {
  //   this.mediaService.getImage(downloadLink).subscribe(
  //     (res) => {
  //                const a = document.createElement('a');
  //                a.href = URL.createObjectURL(res);
  //                a.download = title;
  //                document.body.appendChild(a);
  //                a.click();
  //             });
  //           }
  //         }
 
  // listFiles(): void {
  //   console.log('Inside listFiles-------------');
  //   this.s3Service.listFiles(this.bucketName).then(
  //     (files) => {
  //       this.files = files;
  //     },
  //     (err) => {
  //       console.error('Error listing files', err);
  //     }
  //   );
  // }
}