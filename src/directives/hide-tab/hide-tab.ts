import { Directive } from '@angular/core';

/**
 * Generated class for the HideTabDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hide-tab]' // Attribute selector
})
export class HideTabDirective {

  constructor() {
    console.log('Hello HideTabDirective Directive');
  }

}
