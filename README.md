# Proyecto - Customer Scoops

Pequeña aplicación que solo hace falta generar la aplicación usando vite e instalar la dependencia styled components.

## Estructura de carpetas y archivos

```plaintext
my-project/
├── src/
│   ├── components/       # Componentes reutilizables de la interfaz
│   ├── App.tsx           # Componente raíz de la aplicación
│   └── main.tsx          # Punto de entrada de la aplicación
├── public/               # Archivos públicos estáticos
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Documentación del proyecto

## Enlaces
- [web](https://customer-scopes-project.netlify.app/) 
- [repo](https://github.com/devcecode/customer-scoops-project/)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
