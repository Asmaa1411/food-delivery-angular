import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: Firestore) {}

getRestaurants(): Observable<any[]> {
  const restaurantsRef = collection(this.firestore, 'restaurants');
  return collectionData(restaurantsRef, { idField: 'id' }) as Observable<any[]>;
}
}
