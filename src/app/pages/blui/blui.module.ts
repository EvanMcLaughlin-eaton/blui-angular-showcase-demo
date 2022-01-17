import { NgModule } from '@angular/core';
import { BluiSurfacesComponent } from './surfaces/surfaces.component';
import { BluiDisplayComponent } from './data-display/display.component';
import { MatCardModule } from '@angular/material/card';
import {
    AppBarModule,
    ChannelValueModule,
    DropdownToolbarModule,
    EmptyStateModule,
    HeroModule,
    InfoListItemModule,
    ListItemTagModule,
    MobileStepperModule,
    ScoreCardModule,
    ThreeLinerModule,
    UserMenuModule,
} from '@brightlayer-ui/angular-components';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { BluiNavigationComponent } from './navigation/navigation.component';

@NgModule({
    declarations: [BluiSurfacesComponent, BluiDisplayComponent, BluiNavigationComponent],
    imports: [
        AppBarModule,
        CommonModule,
        ChannelValueModule,
        DropdownToolbarModule,
        EmptyStateModule,
        HeroModule,
        InfoListItemModule,
        ListItemTagModule,
        ThreeLinerModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MobileStepperModule,
        ScoreCardModule,
        UserMenuModule,
    ],
    exports: [BluiSurfacesComponent, BluiDisplayComponent, BluiNavigationComponent],
})
export class BluiModule {}