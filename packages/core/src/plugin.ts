/**
 * Core Plugin Interface
 * All plugins must implement this interface
 */
export interface IPlugin {
  /**
   * Unique identifier for the plugin
   */
  readonly id: string;
  
  /**
   * Plugin name for display purposes
   */
  readonly name: string;
  
  /**
   * Plugin version
   */
  readonly version: string;
  
  /**
   * Initialize the plugin
   */
  initialize(): Promise<void>;
  
  /**
   * Clean up resources when plugin is unloaded
   */
  dispose(): Promise<void>;
  
  /**
   * Optional: Dependencies required by this plugin
   */
  readonly dependencies?: string[];
}

/**
 * Plugin Manager handles loading and managing all plugins
 */
export class PluginManager {
  private plugins: Map<string, IPlugin> = new Map();
  
  /**
   * Register a new plugin
   */
  async register(plugin: IPlugin): Promise<void> {
    if (this.plugins.has(plugin.id)) {
      throw new Error(`Plugin with id '${plugin.id}' is already registered`);
    }
    
    // Check dependencies
    if (plugin.dependencies) {
      for (const depId of plugin.dependencies) {
        if (!this.plugins.has(depId)) {
          throw new Error(`Dependency '${depId}' not found for plugin '${plugin.id}'`);
        }
      }
    }
    
    await plugin.initialize();
    this.plugins.set(plugin.id, plugin);
    console.log(`Plugin '${plugin.name}' (${plugin.id}) registered successfully`);
  }
  
  /**
   * Get a plugin by ID
   */
  getPlugin<T extends IPlugin>(id: string): T | undefined {
    return this.plugins.get(id) as T | undefined;
  }
  
  /**
   * Unload a plugin
   */
  async unload(id: string): Promise<void> {
    const plugin = this.plugins.get(id);
    if (!plugin) return;
    
    await plugin.dispose();
    this.plugins.delete(id);
  }
  
  /**
   * Unload all plugins
   */
  async unloadAll(): Promise<void> {
    for (const [id] of this.plugins) {
      await this.unload(id);
    }
  }
}
