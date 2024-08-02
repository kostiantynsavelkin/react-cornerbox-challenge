# CornerBox Component

## Description

The `CornerBox` component is a customizable box with configurable corners. It supports different corner types (square, angled, boxed), customizable corner sizes, background color, and border color. The component can render children components inside the box.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kostiantynsavelkin/react-cornerbox-challenge.git
   cd react-cornerbox-challenge
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Run the Next.js development server:
    ```
    npm run dev
    ```
4. Run the storybook
    ```
    npm run storybook
    ```

## Usage

Import the CornerBox component and use it in your application:

```
import CornerBox from './components/CornerBox';

const App = () => (
  <CornerBox
    topLeft="boxed"
    topRight="angled"
    bottomLeft="angled"
    bottomRight="boxed"
    topLeftSize="1em"
    topRightSize="1em"
    bottomLeftSize="1em"
    bottomRightSize="1em"
    backgroundColor="lightblue"
    borderColor="blue"
  >
    This is the customizable CornerBox.
  </CornerBox>
);

export default App;
```

Storybook:
Storybook is set up to showcase various configurations of the CornerBox component. You can view the stories by running the Storybook server:
```
npm run storybook
```

Available Stories:
```
Default: A basic CornerBox with all corners set to square.
```
```
MixedCorners: A CornerBox with a mix of angled, square, and boxed corners.
```
```
AllAngles: A CornerBox with all corners set to angled.
```
```
AllBoxed: A CornerBox with all corners set to boxed.
```