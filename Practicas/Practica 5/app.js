import React from 'react';
import { Image } from 'react-native';

const Imagen = () => {
  let pic = {
    uri:'https://media.istockphoto.com/id/1330062180/es/vector/gato-asiático-aislado-del-kawaii-neko-con-una-mano-hacia-arriba.jpg?s=1024x1024&w=is&k=20&c=tcPf8Qgse43SfhSbAbwaQHPsPo9bZRRxZEatOGT8ilA='
  };
  return (
    <Image source={pic} style={{width:193, height: 110, marginTop: 50}}></Image>
  );
};

export default Imagen;
