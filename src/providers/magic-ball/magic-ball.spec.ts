import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { MagicBall } from './magic-ball';
 
describe('MagicBall', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [MagicBall]
      });
    });
   
    it(
      'should get users',
      inject(
        [HttpTestingController, MagicBall],
        (httpMock: HttpTestingController, dataService: MagicBall) => {
          const mockUsers = [
            { name: 'Bob', website: 'www.yessss.com' },
            { name: 'Juliette', website: 'nope.com' }
          ];
   
          dataService.getData().subscribe((event: HttpEvent<any>) => {
            switch (event.type) {
              case HttpEventType.Response:
                expect(event.body).toEqual(mockUsers);
            }
          });
   
          const mockReq = httpMock.expectOne(dataService.url);
   
          expect(mockReq.cancelled).toBeFalsy();
          expect(mockReq.request.responseType).toEqual('json');
          mockReq.flush(mockUsers);
   
          httpMock.verify();
        }
      )
    );
   });