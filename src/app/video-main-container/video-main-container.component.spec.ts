import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMainContainerComponent } from './video-main-container.component';

describe('VideoMainContainerComponent', () => {
  let component: VideoMainContainerComponent;
  let fixture: ComponentFixture<VideoMainContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoMainContainerComponent]
    });
    fixture = TestBed.createComponent(VideoMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
