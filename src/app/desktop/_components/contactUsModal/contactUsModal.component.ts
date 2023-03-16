import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsModalService } from 'src/app/services/modals/ContactUsModalService';
import { ContactUsModalViewModal } from 'src/app/viewModels/contactUsModalViewModal';

@Component({
  selector: 'contactUsModal',
  templateUrl: './contactUsModal.component.html',
  styleUrls: ['./contactUsModal.component.css'],
})
export class ContactUsModalComponent {
  @ViewChild('modal') modal: ElementRef;
  @Input() vm!: ContactUsModalViewModal;

  form: FormGroup;
  requeststatus: 'loading' | 'done' | null = null;

  phoneRegex = /^(?=.*\d)[\d\w]{8,20}$/;
  mailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(
    private contactUsModalService: ContactUsModalService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      mail: ['', Validators.required, Validators.email],
      msg: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
  close() {
    this.contactUsModalService.hide();
  }

  async send() {
    const phone: string = this._phone.value;
    const mail: string = this._mail.value;

    if (!phone.match(this.phoneRegex)) {
      this._phone.setErrors({ patern: true });
    }

    if (!mail.match(this.mailRegex)) {
      this._mail.setErrors({ patern: true });
    }

    if (
      this._name.status !== 'INVALID' &&
      this._msg.status !== 'INVALID' &&
      this._mail.status !== 'INVALID' &&
      this._phone.status !== 'INVALID'
    ) {
      this.requeststatus = 'loading';

      const formData = new FormData();
      formData.append('action', 'contact_form');
      formData.append('full_name', this._name.value);
      formData.append('email', this._mail.value);
      formData.append('phone', this._phone.value);
      formData.append('message', this._msg.value);

      const res = await this.http
        .post('https://api.111minutes.com/wp-admin/admin-ajax.php', formData)
        .toPromise();

      //@ts-ignore
      if (res!.success) {
        this._mail.disable();
        this._phone.disable();
        this._msg.disable();
        this._name.disable();
        this.requeststatus = 'done';
      } else {
        console.error(res);
        this.requeststatus = null;
      }
    }
  }

  get _name() {
    return this.form.get('name')!;
  }

  get _mail() {
    return this.form.get('mail')!;
  }

  get _phone() {
    return this.form.get('phone')!;
  }

  get _msg() {
    return this.form.get('msg')!;
  }
}
