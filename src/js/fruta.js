export default class Fruta {
  constructor() {
    this._fruta = 0;
    this._posicao = {
        x: 12,
        y: 12,
    };
  };

  fruta(snake) {
    if(this._fruta === 0) {

      this._posicao.x = (parseInt(Math.random() * ((snake._arena._quant - 1) - 0) + 0));
      this._posicao.y = (parseInt(Math.random() * (((snake._arena._altura / snake._arena._tamanhoPixel) - 1) - 0) + 0));

      const newRastro = snake._rastro.map((el) => {
        return { x: el.x / snake._arena._tamanhoPixel, y: el.y / snake._arena._tamanhoPixel }
      })
    
      let veri = newRastro.some(
        (el) => JSON.stringify(Object.values(el)) === JSON.stringify(Object.values({x: this._posicao.x , y: this._posicao.y}))
      );

      console.log(veri);
      while(veri) {
        console.log('dentro' + veri);
        this._posicao.x = parseInt(Math.random() * ((snake._arena._quant - 1) - 0) + 0);
        this._posicao.y = parseInt(Math.random() * (((snake._arena._altura / snake._arena._tamanhoPixel) - 1) - 0) + 0);
        veri = newRastro.some(
          (el) => JSON.stringify(Object.values(el)) === JSON.stringify(Object.values({x: this._posicao.x , y: this._posicao.y}))
        );
      }
    
      snake._arena._contexto.fillStyle = '#055ef7';
      snake._arena._contexto.fillRect(
        this._posicao.x * snake._arena._tamanhoPixel,
        this._posicao.y * snake._arena._tamanhoPixel,
        snake._arena._tamanhoPixel,
        snake._arena._tamanhoPixel
      );
      this._fruta = 1
    }
    if (JSON.stringify(Object.values(snake._posicao)) === JSON.stringify(Object.values(this._posicao)) && this._fruta === 1) {
      this._fruta = 0;
      snake._tamanho += 1;
    }
  }
}