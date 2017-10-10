import { Injectable } from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Injectable()
export class MessageService {

  constructor(private snackBar: MdSnackBar) { }

  openSnackBar(message: string, action: string = "OK", duration: number = 2000) {
      this.snackBar.open(message, action, {
        duration: duration,
      });
    }


}
