# React Native Paper Grid 🐵
WARNING!! THIS LIB IS UNDER DEVELOPMENT!! DON'T USE IN AMBIENT PRODUCTION!

This is a small and easy grid layout for the react-native-paper library UI.
The ideas is to make the components more easier to position.

## Installation

```
npm install react-native-paper-grid --save
```

## Usage

### Include the components

```
import { Col, Row, Grid } from "react-native-paper-grid";
```

### 1. One column (100%)

```
<Grid>
  <Row>
    <Col></Col>
  </Row>
</Grid>
```

### 2. Two columns (50% and 50%)

```
<Grid>
  <Row>
    <Col></Col>
    <Col></Col>
  </Row>
</Grid>
```

> Note: If you don't assign the size property, it defaults to equal width (or height) with its siblings

### 3. Three columns (33.33% each)

```
<Grid>
  <Row>
    <Col></Col>
    <Col></Col>
    <Col></Col>
  </Row>
</Grid>
```

### 4. Two rows

```
<Grid>
    <Row>
      <Col></Col>
    </Row>
    <Row>
      <Col></Col>
    </Row>
</Grid>
```

### 5. Two cols (75% and 25%)

```
<Grid>
  <Row>
    <Col size={75}></Col>
    <Col size={25}></Col>
  </Row>
</Grid>
```

This is exactly same as

```
<Grid>
  <Row>
    <Col size={3}></Col>
    <Col size={1}></Col>
  </Row>
</Grid>
```

> Same concept applies to `<Col />`

### 6. Inline components

```
<Grid>
  <Row>
    <Col inline>
      <RadioButton
        value="first"
        status={'unchecked' }
        onPress={() => {}}
      />
      <Text>Radio Button 1</Text>
    </Col>
    <Col inline>
      <RadioButton
        value="second"
        status={'unchecked' }
        onPress={() => {}}
      />
      <Text>Radio Button 2</Text>
    </Col>
  </Row>
</Grid>
```

### 7. Nested Layout or Grid

```
<Grid>
  <Row>
    <Col>
        <Text>1</Text>
    </Col>
    <Col>
        <Row>
          <Col>
            <Text>2</Text>
          </Col>
          <Col>
            <Text>3</Text>
          </Col>
        </Row>
    </Col>
  </Row>
</Grid>
```

### 8. Fixed width and fluid width combination

```
<Grid>
  <Row>
    <Col width={60}>
        <Text>Fixed width</Text>
    </Col>
    <Col>
        <Text>Fluid width</Text>
    </Col>
  </Row>
</Grid>
```

# Important note about usage with `<ScrollView />`

> Note: If you're using `<Row />` inside a `<ScrollView />`, the height of the <Row /> component would be flexible according to the content, though you can always apply the `height` styling.
