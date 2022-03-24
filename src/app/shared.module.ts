import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { ListboxModule } from 'primeng/listbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TableModule } from 'primeng/table';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BlockUIModule } from 'primeng/blockui';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import {CarouselModule} from 'primeng/carousel';
import {ChartModule} from 'primeng/chart';
import {RatingModule} from 'primeng/rating';
import {BadgeModule} from 'primeng/badge';
import {OrderListModule} from 'primeng/orderlist';
import {AvatarModule} from 'primeng/avatar';
import {DataViewModule} from 'primeng/dataview';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    SidebarModule,
    MultiSelectModule,
    CheckboxModule,
    TabViewModule,
    ListboxModule,
    InputSwitchModule,
    SelectButtonModule,
    DialogModule,
    OverlayPanelModule,
    RadioButtonModule,
    PanelModule,
    CalendarModule,
    SliderModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ScrollPanelModule,
    ToggleButtonModule,
    ConfirmDialogModule,
    SlideMenuModule,
    BlockUIModule,
    TieredMenuModule,
    TooltipModule,
    MenuModule,
    InputTextModule,
    TableModule,
    SplitterModule,
    DividerModule,
    CarouselModule,
    ChartModule,
    RatingModule,
    BadgeModule,
    OrderListModule,
    AvatarModule,
    DataViewModule,
    PaginatorModule
  ],

  declarations: [],
})
export class SharedModule { }
