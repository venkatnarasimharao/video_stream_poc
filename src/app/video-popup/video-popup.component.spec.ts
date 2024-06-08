import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { VideoPopupComponent } from './video-popup.component';

describe('VideoPopupComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ VideoPopupComponent ]
    })
    .compileComponents();
  });

  describe('`ngOnInit` method', () => {

    it('should define ngOnInit', inject([VideoPopupComponent],
      (app: VideoPopupComponent) => {
        expect(app.ngOnInit).toBeDefined();
      }));

    it('ngOnInit  ', inject([VideoPopupComponent],
      (app: VideoPopupComponent) => {
        jest.spyOn(app.closePopup, 'emit');
        app.ngOnInit();
        const event = new KeyboardEvent('keydown', {'keyCode': 37 , key: 'Escape'});
        document.body.dispatchEvent(event);
    }));

  });

  describe('`closeModal` method', () => {

    it('`closeModal` should be defined', inject([VideoPopupComponent],
      (app: VideoPopupComponent) => {
        expect(app.closeModal).toBeTruthy();
    }));

    it('`closeModal` should emit true when event is not passed ', inject([VideoPopupComponent],
      (app: VideoPopupComponent) => {

        const divElement = document.createElement('div');
        divElement.classList.add('video-popup-sub-container');
        const testElement = document.createElement('a');
        divElement.append(testElement)
        document.body.appendChild(divElement)
        app.closeModal({target: testElement})
    }));

   it('`closeModal` should emit false when event is not passed ', inject([VideoPopupComponent],
      (app: VideoPopupComponent) => {
        jest.spyOn(app.closePopup, 'emit');
        app.closeModal();
        expect(app.closePopup.emit).toHaveBeenCalledWith(false);
    }));

  });
});
