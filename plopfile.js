module.exports = plop => {
  plop.setGenerator('Component', {
    description: 'Component generator',
    prompts: [
      {
        type: 'input',
        name: 'folder-name',
        message: 'Folder Name?'
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component Name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: `packages/lmel-components/src/{{folder-name}}/{{name}}.jsx`,
        templateFile: 'plop-templates/component.hbs'
      },
      {
        type: 'add',
        path: 'packages/lmel-components/src/{{folder-name}}/{{name}}.styles.js',
        templateFile: 'plop-templates/component-style.hbs'
      },
      {
        type: 'add',
        path: 'packages/lmel-components/src/{{folder-name}}/{{name}}.test.jsx',
        templateFile: 'plop-templates/component-test.hbs'
      },
      {
        type: 'add',
        path: 'packages/lmel-components/src/{{folder-name}}/index.js',
        templateFile: 'plop-templates/component-index.hbs'
      },
      {
        type: 'add',
        path:
          'packages/lmel-components/src/{{folder-name}}/{{name}}.stories.jsx',
        templateFile: 'plop-templates/component-story.hbs'
      }
    ]
  });
};
