import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_resource_bar extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_resource_bar:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_resource_bar is activated!');
  }
};

export default plugin;
