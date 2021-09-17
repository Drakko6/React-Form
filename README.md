# Formulario con varias secciones hecho con React, Material UI, Formik y Yup

Este proyecto tuvo el propósito de realizar un formulario con muchos campos, por lo que se dividieron éstos en varias secciones.

## Desarrollo

Primeramente se ideó la forma en que se dividirían los campos y posteriormente se plasmó en un mockup, tomando en cuenta la semántica de éstos. De igual manera, se trató de hacer el código lo más reutilizable posible, con posibilidad de mejorarlo aún más con mayor tiempo.

### Validaciones

Se agregaron validaciones para todos los campos con ayuda de Formik y un esquema de validación hecho con Yup, dando en todo momento al usuario retroalimentación sobre la captura de datos.
Asimismo, se incluyó un "Stepper" que va señalando los pasos del formulario, como modo para ir guiando al usuario sobre su proceso.
Por último, se incluyen alertas hechas con ayuda de la biblioteca Sweet Alert para indicar cuando se está saliendo del formulario, cuando se quiere guardan y no se terminó el proceso y cuando se terminó satisfactoriamente.

### APIs

Se hizo uso de algunas APIs para autocompletar los campos de domicilio, en espefíco cuando se introduce el Código Postal se buscan los datos de éste para llenar la colonia, ciudad, estado y país.

### Subida de archivos

Para la subida de archivos, se usaron inputs de tipo file simples, pero se le agregó la posibilidad de ver la previsualización de la imagen cargada también como retroalimentación al usuario.

