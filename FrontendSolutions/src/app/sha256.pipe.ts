import { Pipe, PipeTransform } from '@angular/core';
import { sha256 } from 'crypto-hash';

@Pipe({
  name: 'sha256'
})
export class Sha256Pipe implements PipeTransform {

   transform(value: string): Promise<string> {
    const hashedValue = sha256(value);
    return hashedValue;

  }
}
