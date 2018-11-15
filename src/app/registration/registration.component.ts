import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  RegisteruserService } from '../registeruser.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private registeruserservice: RegisteruserService, private modalService: BsModalService) { }
  surname: String;
  name: String;
  fatherName: String;
  birthPlace: String;
  birthDate: Date = undefined;
  age: Number;
  height: Number;
  weight: Number;
  education: String;
  spectacles: String = undefined;
  complexion: String = undefined;
  carrierAbroad: String = undefined;
  engagebroken: String = undefined;
  janmakshar: String = undefined;
  mangal: String = undefined;
  shani: String = undefined;
  house: String = undefined;
  religiousness: String = undefined;
  gnati: String = undefined;
  mulvatan: String = undefined;
  mobile: Number;
  socialEvent: String = undefined;
  physicalDisability: String = undefined;
  candidateOfficeAdderess: String = undefined;
  residentialAdderess: String = undefined;
  partnerExpectations: String = undefined;
  annulaIncome: Number;
  marriedBrother: String = undefined;
  umarriedBrother: String = undefined;
  marriedSister: String = undefined;
  umarriedSister: String = undefined;
  maternalRefrence: String = undefined;
  maternalCity: String = undefined;
  jainRefrence: String = undefined;
  jainRefrenceMobile: Number = undefined;
  jainRefrenceAdderess: String = undefined;
  email: String = undefined;
  birthTime: String = undefined ;
  birthTimeFormat: String = undefined ;
  public base64image: String;
  public mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public maskTime = [/[0-1]/, /\d/, ':', /[0-5]/, /\d/];
  ngOnInit() {
  }
  openModal(template: TemplateRef<any> , e) {
    if (e.target.checked) {
      this.modalRef = this.modalService.show(template);
    }
  }

  Register(regForm) {
    // tslint:disable-next-line:member-ordering
  const user: any = {
      firstName: this.name,
      middleName: this.fatherName,
      lastName: this.surname,
      dateofBirth: this.birthDate,
      birthTime: this.birthTime,
      birthPlace: this.birthPlace,
      height: this.height,
      weight: this.weight,
      skinColor: this.complexion,
      spectacle: this.spectacles,
      education: this.education,
      religion: this.gnati,
      workingAddress: this.candidateOfficeAdderess,
      mobileNumber: this.mobile,
      annualIncome: this.annulaIncome,
      isBroke: this.engagebroken,
      toForeign: this.carrierAbroad,
      kundli: this.janmakshar,
      isMangal: this.mangal,
      isSunny: this.shani,
      house: this.house,
      apexa: this.partnerExpectations,
      society: this.residentialAdderess,
      handicapped: this.physicalDisability,
      dharmik: this.religiousness,
      native: this.mulvatan,
      email: this.email,
      brotherMarried: this.marriedBrother,
      sisterMarried: this.marriedSister,
      nativeDetail: this.maternalRefrence,
      jainodkhanName: this.jainRefrence,
      odkhanAddress: this.jainRefrenceAdderess,
      odkhanNumber: this.jainRefrenceMobile,
      profilepic: this.base64image
    };

    this.registeruserservice.registerUser(user).subscribe(data => {
      console.log(data);
      // tslint:disable-next-line:one-line
      if (data.success){
        console.log('you are registered successfully');
      }
      // tslint:disable-next-line:one-line
      else{

        console.log('something went wrong');
      }

    });
  }

}
