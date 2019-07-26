import { Component } from '@angular/core';
import { FormsService } from "../../forms.service";
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-updateForm',
  templateUrl: './updateForm.component.html',
  styleUrls: ['./updateForm.component.scss']
})

export class UpdateFormComponent {
  selectedFiles: FileList;
  currentFile: File;
  showSucc: boolean = false;
  showErr: boolean = false;
  messSucc: string = 'File is completely uploaded!';
  messErr: string = 'Unable to save Forms!';
  showSuccc: boolean = false;
  showErrr: boolean = false;
  messSuccc: string = 'File is deleted!';
  messErrr: string = 'Unable to delete Forms!';
  form: String;

  constructor(private formsService: FormsService) { }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.currentFile = this.selectedFiles.item(0);
    this.formsService.uploadForm(this.currentFile).subscribe(res => {
      console.log(res);
      if (res == 1) {
        this.showSucc = true;
        console.log('File is completely uploaded!');
        setTimeout(() => {
          this.showSucc = false;
        }, 4000);
      }
      else {
        this.showErr = true;
      }

    });
    this.selectedFiles = undefined;
  }

  delete() {
    this.formsService.deleteForm(this.form).subscribe((res) => {
      if (res == 1) {
        this.showSuccc = true;
        console.log('File is deleted!');
        setTimeout(() => {
          this.showSuccc = false;
        }, 4000);
      }
      else {
        this.showErrr = true;
      }
    })

  }

}