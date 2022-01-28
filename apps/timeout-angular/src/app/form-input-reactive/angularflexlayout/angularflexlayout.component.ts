import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-angular-flex',
  styles: [`
    div[fxLayoutAlign] {
      padding: 10px;
      padding-left: 25px;
      padding-top: 15px;
    }
  `],
  template: `
<!--
    <div fxLayoutWrap fxLayout="row" fxLayout.xs="column" fxLayoutAlign="start center" fxLayoutGap="10px" style="background-color: wheat; height:300px; max-height: 300px">

      <! &#45;&#45; fill out row but without percentages fill out only one row &ndash;&gt;
      <mat-form-field fxFlex style="background-color: lightgray;">
        <input matInput [matDatepicker]="picker1" placeholder="{{label}} From1"/>
        <mat-datepicker-toggle matSuffix [for]="picker1"></mat-datepicker-toggle>
        <mat-datepicker #picker1></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex style="background-color: dimgray;">
        <input matInput [matDatepicker]="picker2" placeholder="{{label}} To2">
        <mat-datepicker-toggle matSuffix [for]="picker2"></mat-datepicker-toggle>
        <mat-datepicker #picker2></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex style="background-color: lightslategray;">
        <input matInput [matDatepicker]="picker3" placeholder="{{label}} From3">
        <mat-datepicker-toggle matSuffix [for]="picker3"></mat-datepicker-toggle>
        <mat-datepicker #picker3></mat-datepicker>
      </mat-form-field>

      &lt;!&ndash; border is still on the left problem &ndash;&gt;
      <mat-form-field fxFlex="50%" style="background-color: slategray;">
        <input matInput [matDatepicker]="picker4" placeholder="{{label}} From4">
        <mat-datepicker-toggle matSuffix [for]="picker4"></mat-datepicker-toggle>
        <mat-datepicker #picker4></mat-datepicker>
      </mat-form-field>


      <mat-form-field fxFlex="50%" style="background-color: mediumslateblue;">
        <input matInput [matDatepicker]="picker5" placeholder="{{label}} From5">
        <mat-datepicker-toggle matSuffix [for]="picker5"></mat-datepicker-toggle>
        <mat-datepicker #picker5></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex="40%" style="background-color: slateblue;">
        <input matInput [matDatepicker]="picker6" placeholder="{{label}} From6">
        <mat-datepicker-toggle matSuffix [for]="picker6"></mat-datepicker-toggle>
        <mat-datepicker #picker6></mat-datepicker>
      </mat-form-field>

      &lt;!&ndash; TODO as you can see we need a min width for some inputs as they become unreadable &ndash;&gt;
      <mat-form-field fxFlex="2%" style="background-color: darkslateblue;">
        <input matInput [matDatepicker]="picker7" placeholder="{{label}} From7">
        <mat-datepicker-toggle matSuffix [for]="picker7"></mat-datepicker-toggle>
        <mat-datepicker #picker7></mat-datepicker>
      </mat-form-field>

    </div>

    <h2>Solution with paddings from flex layout, thus extra padding on the right (<span style="color:red">Not a good option</span>, much more manual padding and 100% is not working correctly</h2>
    &lt;!&ndash;<div fxLayoutWrap fxLayout="row" fxLayout.xs="column" fxLayoutAlign="start center" fxLayoutGap="10px" style="background-color: wheat; width:100%">    &ndash;&gt;
    <div fxLayoutWrap fxLayout="row" fxLayout.xs="column"  fxLayoutGap="10px" style="background-color: wheat; width:100%; padding-bottom:10px; padding-left:10px">

      <! &#45;&#45; fill out row but without percentages fill out only one row &ndash;&gt;
      <mat-form-field fxFlex="calc(34% - 18px)" style="background-color: lightgray; width:100%">
        <input matInput [matDatepicker]="picker11" placeholder="{{label}} From1"/>
        <mat-datepicker-toggle matSuffix [for]="picker11"></mat-datepicker-toggle>
        <mat-datepicker #picker11></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex="calc(34% - 18px)" style="background-color: dimgray; width:100%">
        <input matInput [matDatepicker]="picker12" placeholder="{{label}} To2">
        <mat-datepicker-toggle matSuffix [for]="picker12"></mat-datepicker-toggle>
        <mat-datepicker #picker12></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex="calc(34%-18px)" style="background-color: lightslategray; width:100%">
        <input matInput [matDatepicker]="picker13" placeholder="{{label}} From3">
        <mat-datepicker-toggle matSuffix [for]="picker13"></mat-datepicker-toggle>
        <mat-datepicker #picker13></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex="calc(50% - 10px)" style="background-color: slategray; width:100%">
        <input matInput [matDatepicker]="picker14" placeholder="{{label}} From4">
        <mat-datepicker-toggle matSuffix [for]="picker14"></mat-datepicker-toggle>
        <mat-datepicker #picker14></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex="calc(50% - 10px)" style="background-color: mediumslateblue; width:100%">
        <input matInput [matDatepicker]="picker15" placeholder="{{label}} From5">
        <mat-datepicker-toggle matSuffix [for]="picker15"></mat-datepicker-toggle>
        <mat-datepicker #picker15></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex="75%" style="background-color: slateblue; width:100%">
        <input matInput [matDatepicker]="picker16" placeholder="{{label}} From6">
        <mat-datepicker-toggle matSuffix [for]="picker16"></mat-datepicker-toggle>
        <mat-datepicker #picker16></mat-datepicker>
      </mat-form-field>

      &lt;!&ndash; a 100% width form field can only be shorted by setting the padding as can be seen the margin-right has now effect &ndash;&gt;
      <mat-form-field fxFlex="calc(100% - 100px)" style="background-color: darkslateblue; width:100%; margin-right:100px; padding-right:300px">
        <input matInput [matDatepicker]="picker17" placeholder="{{label}} From723" style="background-color: red; margin-right:100px;">
        <mat-datepicker-toggle matSuffix [for]="picker17"></mat-datepicker-toggle>
        <mat-datepicker #picker17></mat-datepicker>
      </mat-form-field>

    </div>

    <h2>Solution with padding in side each form element (Clean Good Option)</h2>
&lt;!&ndash;    <div fxLayout="row" fxFlexOffset="0px" fxLayout.xs="column" fxLayoutAlign="start center" fxLayoutGap="10px" style="background-color: wheat; width:100%">  &ndash;&gt;
    <div fxLayoutWrap fxLayout="row" fxLayout.xs="column" fxFlexOffset="0px" style="background-color: wheat; width:100%; padding-bottom:10px">

      <mat-form-field fxFlex="calc(25%)" style="background-color: lightgray;  padding-left:10px; padding-right:10px; width:100%">
        <input matInput [matDatepicker]="picker181" placeholder="{{label}} From1"/>
        <mat-datepicker-toggle matSuffix [for]="picker181"></mat-datepicker-toggle>
        <mat-datepicker #picker181></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex="calc(25%)" style="background-color: dimgray;  padding-left:10px; padding-right:10px; width:100%">
        <input matInput [matDatepicker]="picker18" placeholder="{{label}} From1"/>
        <mat-datepicker-toggle matSuffix [for]="picker18"></mat-datepicker-toggle>
        <mat-datepicker #picker18></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex="calc(25%)" style="background-color: lightslategray;  padding-left:10px; padding-right:10px; width:100%">
        <input matInput [matDatepicker]="picker19" placeholder="{{label}} From1"/>
        <mat-datepicker-toggle matSuffix [for]="picker19"></mat-datepicker-toggle>
        <mat-datepicker #picker19></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex="calc(25%)" style="background-color: slategray;  padding-left:10px; padding-right:10px; width:100%">
        <input matInput [matDatepicker]="picker20" placeholder="{{label}} From1"/>
        <mat-datepicker-toggle matSuffix [for]="picker20"></mat-datepicker-toggle>
        <mat-datepicker #picker20></mat-datepicker>
      </mat-form-field>



      <! &#45;&#45; fill out row but without percentages fill out only one row &ndash;&gt;
      <mat-form-field fxFlex="calc(33%)" style="background-color: lightgray;  padding-left:10px; padding-right:10px; width:100%">
        <input matInput [matDatepicker]="picker21" placeholder="{{label}} From1"/>
        <mat-datepicker-toggle matSuffix [for]="picker21"></mat-datepicker-toggle>
        <mat-datepicker #picker21></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex="calc(33%)" style="background-color: dimgray;  padding-left:10px; padding-right:10px; width:100%">
        <input matInput [matDatepicker]="picker22" placeholder="{{label}} To2">
        <mat-datepicker-toggle matSuffix [for]="picker22"></mat-datepicker-toggle>
        <mat-datepicker #picker22></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex="calc(33%)" style="background-color: lightslategray; padding-left:10px; padding-right:10px; width:100%">
        <input matInput [matDatepicker]="picker23" placeholder="{{label}} From3">
        <mat-datepicker-toggle matSuffix [for]="picker23"></mat-datepicker-toggle>
        <mat-datepicker #picker23></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex="50%" style="background-color: slategray;  padding-left:10px; padding-right:10px; width:100%">
        <input matInput [matDatepicker]="picker24" placeholder="{{label}} From4">
        <mat-datepicker-toggle matSuffix [for]="picker24"></mat-datepicker-toggle>
        <mat-datepicker #picker24></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex="50%" style="background-color: mediumslateblue;  padding-left:10px; padding-right:10px; width:100%">
        <input matInput [matDatepicker]="picker25" placeholder="{{label}} From5">
        <mat-datepicker-toggle matSuffix [for]="picker25"></mat-datepicker-toggle>
        <mat-datepicker #picker25></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex="75%" style="background-color: slateblue; padding-left:10px; padding-right:10px; width:100%">
        <input matInput [matDatepicker]="picker26" placeholder="{{label}} From6">
        <mat-datepicker-toggle matSuffix [for]="picker26"></mat-datepicker-toggle>
        <mat-datepicker #picker26></mat-datepicker>
      </mat-form-field>

      <mat-form-field fxFlex="100%" style="background-color: darkslateblue; padding-left:10px; padding-right:10px; width:100%">
        <input matInput [matDatepicker]="picker27" placeholder="{{label}} From7">
        <mat-datepicker-toggle matSuffix [for]="picker27"></mat-datepicker-toggle>
        <mat-datepicker #picker27></mat-datepicker>
      </mat-form-field>

    </div>


    &lt;!&ndash; Example of a tutorial which shows this as a good aproach &ndash;&gt;
    <h2>Mobile and Desktop layout column vs row layout</h2>
    <div fxLayout="column" style="background-color: wheat">
      <header style="background-color: lightgray;">header</header>
        <div fxLayout="row" fxLayout.xs="column" style="background-color: dimgray;">
          <nav fxFlex="1 6 20%" fxFlexOrder fxFlexOrder.xs="2" style="background-color: mediumslateblue;">Nav</nav>
          <article fxFlex="3 1 60%" fxFlexOrder fxFlexOrder.xs="1" style="background-color: slateblue;">article</article>
          <aside fxFlex="1 6 20%" fxFlexOrder fxFlexOrder.xs="3" style="background-color: mediumslateblue;">aside</aside>
        </div>
      <footer style="background-color: slategray;">footer</footer>
    </div>




    <div class="container"
         fxLayout
         fxLayout.xs="column"
         fxLayoutAlign="center"
         fxLayoutGap="50px"
         fxLayoutGap.xs="0">
      <div class="item item-1" fxFlex>Rest</div>
      <div class="item item-2" fxFlex="15%">15%</div>
      <div class="item item-3" fxFlex="25%">25%</div>
      <div class="item item-4" fxFlex="15%">15%</div>
      <div class="item item-5" fxFlex>Rest</div>
    </div>

    <div class="container"
         fxLayout
         fxLayout.xs="column"
         fxLayoutAlign="left"
         fxLayoutGap="10px"
         fxLayoutGap.xs="0">
      <div class="item item-1" fxFlex fxFlexOffset="50px" fxFlexOffset.xs="0">Rest</div>
      <div class="item item-2" fxFlex="400px">400px</div>
      <div class="item item-2" fxFlex="200px">200px</div>
    </div>

    <div class="container"
         fxLayout
         fxLayout.xs="column"
         fxLayoutAlign="right"
         fxLayoutGap="10px"
         fxLayoutGap.xs="0">
      <div class="item item-1" fxFlex="15%">15%</div>
      <div class="item item-2" fxFlex="20%">20%</div>
      <div class="item item-3" fxFlex>Rest</div>
    </div>


    <div class="container"
         fxLayout
         fxLayout.xs="column"
         fxLayoutAlign="center"
         fxLayoutGap.xs="0">
      <div class="item item-1" fxFlex="15%">15%</div>
      <div class="item item-2" fxFlex="20%">20%</div>
      <div class="item item-3" fxFlex>Rest 1</div>
      <div class="item item-4" fxFlex >Rest 2</div>
    </div>

    <div class="flex-container"
         fxLayout
         fxLayout.xs="column"
         fxLayoutGap="10px"
         fxLayoutAlign="end none"
         fxLayoutAlign.xs="end none" class="container-style">

      &lt;!&ndash; first column &ndash;&gt;

      <div class="item item-1" fxFlex="15%">15%</div>
      <div class="flex-item" fxFlex="25%" fxShow.xs="false">25%</div>

      &lt;!&ndash; second column &ndash;&gt;
      <div class="flex-item" fxFlex="52%">52%</div>

      &lt;!&ndash; third column &ndash;&gt;
      <div class="flex-item" fxFlex>Rest = 11%</div>
    </div>
-->
    <div>angularflexlayout needs to be converted to none matrial implemenation</div>
  `
})
export class AngularFlexLayoutComponent {
  @Input() label = "";
  @Input() start = "";
  @Input() end = "";
}
