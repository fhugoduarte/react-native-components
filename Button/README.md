# Component Button

A button with several options for quick and easy-to-use style customizations.

![picture alt](https://i.imgur.com/ea7UoIO.jpg)

#### Usage Example ####

```javascript
export default example = () => (
  <Button
    title="Click Me"
    onPress={() => console.log('click')}
    primary
  />
)
```

#### Props ####
  * [TouchableOpacity props...](https://facebook.github.io/react-native/docs/touchableopacity#docsNav)
  * [disabled](#disabled)
  * [full](#full)
  * [rounded](#rounded)
  * [bordered](#bordered)
  * [transparent](#transparent)
  * [light](#light)
  * [textStyle](#textstyle)
  * [title](#title)
  * [info](#info)
  * [primary](#primary)
  * [success](#success)
  * [warning](#warning)
  * [danger](#danger)
  * [dark](#dark)
  
---------------

## Reference ##
## Props ##

#### `disabled` ####

This property defines whether the button can be clicked and gives an intuitive style to it.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `full` ####

If this property is set to true, the button will have the width equal to the width of the device.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `rounded` ####

The button will have the border slightly more rounded.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `bordered` ####

The button will have `backgroundColor = 'transparent'` and the text and border will have the main color of the button.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `transparent` ####

The button will have `backgroundColor = 'transparent'` and the text will have the button's main color.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `light` ####

The title of the button will have the title with finer lines.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `textStyle` ####

Style that will be applied in the title of the button. (This style will override any other standard title style)

*TYPE*  | *REQUIRED*
------------- | -------------
style  | No

#### `title` ####

Text that will be added as the title of the button.

*TYPE*  | *REQUIRED*
------------- | -------------
string  | No

#### `info` ####

An already customized style for the button.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `primary` ####

An already customized style for the button.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `success` ####

An already customized style for the button.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `warning` ####

An already customized style for the button.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `danger` ####

An already customized style for the button.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `dark` ####

An already customized style for the button.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No


