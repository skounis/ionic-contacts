import { async, inject, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';

import { DataService } from './data.service';

import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../test-config/mocks-ionic';

describe('Service: DataService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientModule,
      ],
      providers: [
        Contact,
        HttpClient,
        DataService
      ]
    })
  }));

   it('should be defined', inject([DataService], (service) => {
       expect(service).toBeDefined();
    }));

    it('should has CRUD interface implemented', inject([DataService], (service) => {
        expect(typeof service.getContacts).toBe("function");
        expect(typeof service.createContact).toBe("function");
        expect(typeof service.updateContact).toBe("function");
        expect(typeof service.deleteContact).toBe("function");
     }));
 });
