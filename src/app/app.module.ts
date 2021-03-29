import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, CounterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ButtonComponent, CounterComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(ButtonComponent, { injector: this.injector });
    customElements.define('custom-button', el);

    const el1 = createCustomElement(CounterComponent, { injector: this.injector });
    customElements.define('custom-counter', el1);
  }
  ngDoBootstrap() {}
}
