## React Native

- expo init appNameAqui
- criar tsconfig.json (typescript)
- expo start (aceitar instalar typescript)
- renomar App.js para App.tsx

---

## Editor Config

- instalar a extensão e com o botão direito do mouse criar um novo .editorconfig file colocar:

  root = true

  [*]
  indent_style = space
  indent_size = 2
  end_of_line = lf
  charset = utf-8
  trim_trailing_whitespace = true
  insert_final_newline = true

---

## Eslint

- instalar dependencias de desenvolvimento:
  npm i -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
- criar .eslintignore colocar:
  \*\*.\*.js
  node_modules
  build
  android
  ios
  .expo

- criar .eslintrc.json colocar:
  {
  "env": {
  "es2021": true
  },
  "settings": {
  "import/resolver": {
  "typescript": {}
  }
  },
  "extends": [
  "eslint:recommended",
  "plugin:react/recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:react-hooks/recommended",
  "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
  "ecmaFeatures": {
  "jsx": true
  },
  "ecmaVersion": 12,
  "sourceType": "module"
  },
  "plugins": [
  "react",
  "@typescript-eslint",
  "prettier"
  ],
  "rules": {
  "react/prop-types": "off",
  "react-in-jsx-scope": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/no-empty-interface": "off",
  "@typescript-eslint/no-empty-function": "off"
  }
  }

---

## Prettier

- instalar dependencias de desenvolvimento:
  npm i -D prettier eslint-plugin-prettier eslint-config-prettier

- criar .prettierignore colocar:
  \*\*.\*.js
  node_modules
  build
  android
  ios
  .expo

- criar .prettierrc.json colocar:
  {
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "arrowParens": "avoid"
  }

---

## Styled Components

- instalar dependências

### Web

npm install --save styled-components @types/styled-components

### React Native

npm install --save styled-components @types/styled-components @types/styled-components-react-native

---

## React Navigation (expo bare mobile)

- instalar dependências
  npm install @react-navigation/native
  npm install react-native-screens react-native-safe-area-context (se for um projeto expo puro, trocar o "npm install" por "expo install")

- editar MainActivity.java file which is located in android/app/src/main/java/your package name/MainActivity.java.
  @Override
  protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
  }
  import android.os.Bundle;

- instalar native stack navigator
  npm install @react-navigation/native-stack

---

## React Native Responsive Font Size

https://github.com/heyman333/react-native-responsive-fontsize/blob/master/README.md

---

## Roboto Slab

- https://www.npmjs.com/package/@expo-google-fonts/roboto-slab
- expo install @expo-google-fonts/roboto-slab expo-font

## Font Loading e Splash Screen

- https://docs.expo.dev/versions/latest/sdk/splash-screen/
- https://docs.expo.dev/versions/latest/sdk/font/

## React Hook Forms

- instalar dependências:
  npm install react-hook-form

## Yup

- instalar dependências:
  npm install @hookform/resolvers yup
