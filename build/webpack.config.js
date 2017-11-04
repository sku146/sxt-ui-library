import map from 'lodash/map';
import themeTemplate from './theme-template';
import buildConfigs from './config';

export default [
  ...map(buildConfigs.themes, theme => themeTemplate({
    entryPoint: [theme.style],
    outputPoint: 'lib',
    themePoint: theme.themeConfig,
    themeVariables: theme.themeVariables,
    name: theme.name,
  })),
];
