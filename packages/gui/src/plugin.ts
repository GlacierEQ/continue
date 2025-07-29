import { IPlugin } from '@continuedev/core/plugin';

export class GuiPlugin implements IPlugin {
  readonly id = 'gui';
  readonly name = 'GUI Plugin';
  readonly version = '1.0.0';
  readonly dependencies = ['core'];
  
  private rootElement: HTMLElement | null = null;
  
  async initialize(): Promise<void> {
    console.log('Initializing GUI Plugin...');
    // Initialize GUI components here
    this.rootElement = document.createElement('div');
    this.rootElement.id = 'app';
    document.body.appendChild(this.rootElement);
    
    // Load GUI application
    await this.loadGui();
  }
  
  private async loadGui(): Promise<void> {
    // This would be replaced with actual GUI loading logic
    if (this.rootElement) {
      this.rootElement.innerHTML = `
        <div style="padding: 20px;">
          <h1>Continue GUI</h1>
          <p>GUI plugin loaded successfully!</p>
        </div>
      `;
    }
  }
  
  async dispose(): Promise<void> {
    console.log('Disposing GUI Plugin...');
    if (this.rootElement && this.rootElement.parentNode) {
      this.rootElement.parentNode.removeChild(this.rootElement);
    }
    this.rootElement = null;
  }
}

// Export a function that creates an instance of the plugin
export function createGuiPlugin(): IPlugin {
  return new GuiPlugin();
}
