import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatarInitials'
})
export class AvatarInitialsPipe implements PipeTransform {

  transform(firstName: string, ...args: string[]): string {
    return firstName.toUpperCase().charAt(0) + (args.length > 0 ? args[0].toUpperCase().charAt(0) : '');
  }

}
