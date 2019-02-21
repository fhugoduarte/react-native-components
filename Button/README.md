# Component Button

A button with several options for quick and easy-to-use style customizations.

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
Essa propriedade define se o botão pode ser clicado e dá um estilo intuituvo ao mesmo.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `full` ####
Se essa propriedade for definida como `true` o botão terá a largura igual a largura do dispositivo.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `rounded` ####
O botão ficará com a borda um pouco mais arrendondada.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `bordered` ####
O botão ficará com o `backgroundColor = 'transparent'` e o texto e borda terão a cor principal do botão.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `transparent` ####
O botão ficará com o `backgroundColor = 'transparent'` e o texto terá a cor principal do botão.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `light` ####
O título do botão ficará com o titulo com linhas mais finas.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `textStyle` ####
Estilo que será aplicado no titulo do botão. (Esse estilo irá sobrepor qualquer outro estilo padrão do titulo)

*TYPE*  | *REQUIRED*
------------- | -------------
style  | No

#### `title` ####
Texto que será adicionado como titulo do botão.

*TYPE*  | *REQUIRED*
------------- | -------------
string  | No

#### `info` ####
Um estilo já customizado para o botão.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `primary` ####
Um estilo já customizado para o botão.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `success` ####
Um estilo já customizado para o botão.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `warning` ####
Um estilo já customizado para o botão.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `danger` ####
Um estilo já customizado para o botão.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No

#### `dark` ####
Um estilo já customizado para o botão.

*TYPE*  | *REQUIRED*
------------- | -------------
bool  | No


