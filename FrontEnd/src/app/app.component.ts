import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<button md-icon-button [mdMenuTriggerFor]="menu">
  <md-icon>more_vert</md-icon>
</button>
<md-slider></md-slider>
<button class="btn" type="button">Button button</button>
<a class="btn" href="#" role="button">Link button</a>
<button class="btn btn-sm btn-primary" type="button">Small primary button</button>
<span class="tooltipped tooltipped-s border p-2 mb-2 mr-2 left" aria-label="This is the tooltip.">
  Tooltip North
</span>

`,
})
export class AppComponent  { name = 'Angular'; 
color = 'accent';
  checked = false;
  disabled = false;}
