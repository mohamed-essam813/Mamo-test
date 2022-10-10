import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type INavRoute = {
  path: string;
  label: string;
  icon: JSX.Element;
};

export type ILayout = {
  children: any;
  routes: INavRoute[];
};
