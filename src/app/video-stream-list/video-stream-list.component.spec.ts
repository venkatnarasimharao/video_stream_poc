import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoStreamListComponent } from './video-stream-list.component';

describe('VideoStreamListComponent', () => {
  let component: VideoStreamListComponent;
  let fixture: ComponentFixture<VideoStreamListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoStreamListComponent]
    });
    fixture = TestBed.createComponent(VideoStreamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
