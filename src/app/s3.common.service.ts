import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class S3CommonService {

  constructor() { }

  async getVideoUrl() {
    try {
      const response = await axios.get('https://d3ngc5oa7eval3.cloudfront.net/video-data.json', {
        responseType: 'json'
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
