import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsService } from './forms.service';


fdescribe('FormsService', () => {
  let service: FormsService;
  let httpMock: HttpTestingController;
  let form: string = 'cardDetails';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FormsService]
    });

    // inject the service
    service = TestBed.get(FormsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Should get userPC data successful', () => {
    const mockUser = {
      rqUID: '123456444',
      addUsrIdentif: {
        userId: '1',
        requestDate: '2016-09-01T12:01:00',
        userLanguage: 'en_US',
        financialInstitution: '000001',
        providerLogin: 'firstUser',
        providerPasswd: '76dff1e87b09f0476cabe343e6fc1aaded65d2683dbdf15a6a0d2b2a92c75d29f2c82463e21fc03de6fe7cd7c72692175467284f91a46fa2b2628c184de1877c'
      }
    };
    service.getUser().subscribe((data: any) => {
      expect(data.rqUID).toBe('123456444');
      expect(data.addUsrIdentif.providerLogin).toBe('firstUser');
      expect(data.addUsrIdentif.providerPasswd).toBe('76dff1e87b09f0476cabe343e6fc1aaded65d2683dbdf15a6a0d2b2a92c75d29f2c82463e21fc03de6fe7cd7c72692175467284f91a46fa2b2628c184de1877c');
      expect(data.addUsrIdentif.userId).toBe('1');
      expect(data.addUsrIdentif.userLanguage).toBe('en_US');
      expect(data.addUsrIdentif.financialInstitution).toBe('000001');
      expect(data.addUsrIdentif.requestDate).toBe('2016-09-01T12:01:00');
    });

    const req = httpMock.expectOne(`http://localhost:8080/myapp/list/userpc/1`, 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush(mockUser);

    httpMock.verify();
  });

  it('Should get form data successful', () => {
    const mockForm = {
      inputType: 'number',
      label: 'cardNumber',
      name: 'cardNumber',
      type: 'input',

    };

    service.getForm(this.form).subscribe((data: any) => {

      expect(data.inputType).toBe('number');
      expect(data.label).toBe('cardNumber');
      expect(data.name).toBe('cardNumber');
      expect(data.type).toBe('input');
    });

    const req = httpMock.expectOne(`http://localhost:8080/myapp/forms/list/${this.form}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockForm);

    httpMock.verify();
  });

});



