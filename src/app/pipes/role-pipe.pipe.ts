import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rolePipe'
})
export class RolePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
