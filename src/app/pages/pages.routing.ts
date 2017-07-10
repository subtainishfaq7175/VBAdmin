import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
      { path: 'lists', loadChildren: './list/list.module#ListsModule' },
      { path: 'grids', loadChildren: './grid/grid.module#GridModule' },
      { path: 'dropdowns', loadChildren: './dropDown/dropDown.module#DropDownModule' },
      { path: 'tabs', loadChildren: './tabs/tabs.module#TabsModule' },
      { path: 'multiselectors', loadChildren: './multiselectors/multiSelectors.module#MultiSelectorsModule' },
      { path: 'cards', loadChildren: './cards/cards.module#CardsModule' },
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
