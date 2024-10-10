import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private messageQueue: string[] = []; 
  private isDisplaying = false; 

  showSuccess(message: string): void {
    this.addToQueue('success', message);
  }

  showError(message: string): void {
    this.addToQueue('error', message);
  }

  private addToQueue(type: 'success' | 'error', message: string): void {
    this.messageQueue.push(message);
    this.displayNext(type);
  }

  private displayNext(type: 'success' | 'error'): void {
    if (this.isDisplaying || this.messageQueue.length === 0) {
      return;
    }

    this.isDisplaying = true;
    const message = this.messageQueue.shift(); 

    Swal.fire({
      icon: type,
      text: message,
      timer: 3000, 
      showConfirmButton: false,
      position: 'bottom-end', 
      toast: true,
    }).then(() => {
      this.isDisplaying = false;
      this.displayNext(type); 
    });
  }
}
