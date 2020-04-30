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
    this._messageService.saveMessage(this.messageModel).subscribe(
      res => {
        if(res == true){
          swal('Listo!', 
                'Registro enviado con exito',
                'success');
          form.reset();
        }
        else{
          console.log("Respuesta: ");
          console.log(res);
          swal('Oops!', 
          'Hubo un error al realizar la peticion',
          'error');
        }
      },
      err => {
        swal('Oops!', 
          'Algo salio mal :(',
          'error');
        console.log(err);
      }
    )
  }

}
