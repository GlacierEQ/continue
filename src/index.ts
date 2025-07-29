import { PluginManager } from './core/plugin';
import { createGuiPlugin } from './gui/plugin';

/**
 * Main application class
 */
class ContinueApp {
  private pluginManager: PluginManager;
  
  constructor() {
    this.pluginManager = new PluginManager();
  }
  
  /**
   * Initialize the application and load all plugins
   */
  async initialize(): Promise<void> {
    console.log('Initializing Continue Application...');
    
    try {
      // Register core plugins
      // Note: In a real implementation, you might want to dynamically discover and load plugins
      
      // Register GUI plugin
      const guiPlugin = createGuiPlugin();
      await this.pluginManager.register(guiPlugin);
      
      console.log('Continue Application initialized successfully!');
    } catch (error) {
      console.error('Failed to initialize application:', error);
      throw error;
    }
  }
  
  /**
   * Clean up resources when the application is shutting down
   */
  async shutdown(): Promise<void> {
    console.log('Shutting down Continue Application...');
    await this.pluginManager.unloadAll();
  }
}

// Create and start the application
async function main() {
  const app = new ContinueApp();
  
  // Handle process termination
  process.on('SIGINT', async () => {
    console.log('Received SIGINT. Shutting down...');
    await app.shutdown();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('Received SIGTERM. Shutting down...');
    await app.shutdown();
    process.exit(0);
  });
  
  try {
    await app.initialize();
  } catch (error) {
    console.error('Fatal error during application initialization:', error);
    process.exit(1);
  }
}

// Start the application
main().catch(console.error);
