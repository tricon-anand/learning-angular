import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AutoGrowDirective } from './directives/auto-grow.directive';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { RatingsComponent } from './ratings/ratings.component';
import { LikeUnlikeComponent } from './like-unlike/like-unlike.component';
import { VoteComponent } from './vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoGrowDirective,
    TwoWayBindingComponent,
    RatingsComponent,
    LikeUnlikeComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
