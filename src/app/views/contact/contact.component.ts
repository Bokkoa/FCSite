import { Component, OnInit } from '@angular/core';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Message } from '../../models/message';
import { MessageService } from '../../services/message.service';
import { Global } from '../../services/global.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MessageService]
})
export class ContactComponent implements OnInit {

  faPaperPlane = faPaperPlane;  
  
  public url: string;
  public messageModel: Message;

  constructor(
    private _messageService: MessageService
  ) { 
    this.url = Global.newMessageUrl;
    this.messageModel = new Message('', '', '');
  }

  ngOnInit(): void {
    console.log(this.messageModel);
  }

  onSubmit(form){
    console.log("El modelo: ");
    console.log(this.messageModel);

    this._messageService.saveMessage(this.messageModel).subscribe(
      res => {
        if(res.status === '200'){
          swal({title: 'Listo!', 
                text:'Registro enviado con exito',
                icon:'success'});
          form.reset();
        }
        else{
          swal({title:'Oops!', 
          text: 'Hubo un error al realizar la peticion',
          icon: 'error'});
        }
      },
      err => {
        swal({title: 'Oops!', 
          text: 'Algo salio mal :(',
          icon: 'error'});
        console.log(err);
      }
    )
  }

}
