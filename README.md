<div align="center">

![Continue logo](media/readme.png)

</div>

## 🚀 New Pluggable Architecture

We've introduced a new pluggable architecture to make Continue more modular and extensible. Key features include:

- **Core Plugin System**: A robust plugin interface for extending functionality
- **Modular Design**: Each component (GUI, Binary, Extensions) is now a separate plugin
- **Simplified Development**: Easier to develop and test components in isolation
- **Better Dependency Management**: Improved dependency management with npm workspaces

### Getting Started with Plugins

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Run the Application**
   ```bash
   npm start
   ```

### Creating a New Plugin

1. Create a new directory in `packages/` for your plugin
2. Implement the `IPlugin` interface from `@continuedev/core`
3. Register your plugin in the main application
4. Build and test your plugin

For more details, see our [plugin development guide](docs/plugins/README.md).

<h1 align="center">Continue</h1>

<div align="center">

**[Continue](https://docs.continue.dev) enables developers to create, share, and use custom AI code assistants with our
open-source [VS Code](https://marketplace.visualstudio.com/items?itemName=Continue.continue)
and [JetBrains](https://plugins.jetbrains.com/plugin/22707-continue-extension) extensions
and [hub of models, rules, prompts, docs, and other building blocks](https://hub.continue.dev)**

</div>

<div align="center">

<a target="_blank" href="https://opensource.org/licenses/Apache-2.0" style="background:none">
    <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" style="height: 22px;" />
</a>
<a target="_blank" href="https://docs.continue.dev" style="background:none">
    <img src="https://img.shields.io/badge/continue_docs-%23BE1B55" style="height: 22px;" />
</a>
<a target="_blank" href="https://changelog.continue.dev" style="background:none">
    <img src="https://img.shields.io/badge/changelog-%96EFF3" style="height: 22px;" />
</a>
<a target="_blank" href="https://discord.gg/vapESyrFmJ" style="background:none">
    <img src="https://img.shields.io/badge/discord-join-continue.svg?labelColor=191937&color=6F6FF7&logo=discord" style="height: 22px;" />
</a>

<p></p>

## Agent

[Agent](https://continue.dev/docs/agent/how-to-use-it) enables you to make more substantial changes to your codebase

![agent](docs/images/agent.gif)

## Chat

[Chat](https://continue.dev/docs/chat/how-to-use-it) makes it easy to ask for help from an LLM without needing to leave
the IDE

![chat](docs/images/chat.gif)

## Autocomplete

[Autocomplete](https://continue.dev/docs/autocomplete/how-to-use-it) provides inline code suggestions as you type

![autocomplete](docs/images/autocomplete.gif)

## Edit

[Edit](https://continue.dev/docs/edit/how-to-use-it) is a convenient way to modify code without leaving your current
file

![edit](docs/images/edit.gif)

</div>

## Getting Started

Learn about how to install and use Continue in the docs [here](https://continue.dev/docs/getting-started/install)

## Contributing

Read the [contributing guide](https://github.com/continuedev/continue/blob/main/CONTRIBUTING.md), and
join [#contribute on Discord](https://discord.gg/vapESyrFmJ).

## License

[Apache 2.0 © 2023-2024 Continue Dev, Inc.](./LICENSE)
