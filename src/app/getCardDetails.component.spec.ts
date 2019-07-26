import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';

import { GetCardDetailsComponent } from './pages/getCardDetails/getCardDetails.component';
import { PagesModule } from './pages/pages.module';
import { FormlyModule } from '@ngx-formly/core';

fdescribe('GetCardDetailsComponent', () => {
    let component: GetCardDetailsComponent;
    let fixture: ComponentFixture<GetCardDetailsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
            ],
            imports: [
                ReactiveFormsModule, FormsModule, FormlyModule, PagesModule
            ]
        });

        fixture = TestBed.createComponent(GetCardDetailsComponent);
        component = fixture.componentInstance;
    });


    it('Should create the component', () => {
        const fixture = TestBed.createComponent(GetCardDetailsComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('Should get the form data successful', () => {
        expect(component.fields[0].key).toBe('cardNumber');

    });  

});