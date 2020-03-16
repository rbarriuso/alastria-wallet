import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as socketIo from 'socket.io-client';

// MODELS
// import { Event } from 'src/app/models/enums/enums.model';

// import { environment } from './../../../environments/environment';


const webSocket = WebSocket; // Here we stub out the window object

const SERVER_URL = 'http://34.244.47.233:10011';

@Injectable()
export class SocketService {
  constructor() {

  }
  private socket: any;

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public sendDisconnect(): void {
    if (this.socket) {
      this.socket.close();
    }
  }

  public onMessage(): Observable<any> {
      return new Observable<any>(observer => {
          this.socket.on('message', (data: any) => observer.next(data));
      });
  }

  public onCreateIdentityWv(): Observable<any> {
    return new Observable<any>(observer => {
        this.socket.on('createIdentityWs', (data: any) => observer.next(data));
    });
  }

  public onEvent(event: string): Observable<any> {
    return new Observable<Event>(observer => {
        this.socket.on(event, () => observer.next());
    });
  }
}