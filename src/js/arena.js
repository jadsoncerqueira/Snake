export default class Arena {
    constructor(largura, altura, idArea) {
      this._quant = 65;
      this._tamanhoPixel = largura / this._quant;
      this._largura = largura;
      this._altura = altura * this._tamanhoPixel;
      this._area = document.querySelector(`#${idArea}`);
      this._canvas = document.createElement('canvas');
      this._contexto = this._canvas.getContext('2d');
    }

    start() {
      this._canvas.classList = 'canvas';
      this._canvas.setAttribute('width', `${this._largura}`);
      this._canvas.setAttribute('height', `${this._altura}`);
      this._area.appendChild(this._canvas);

      this._contexto.strokeStyle = '#dbd9d9';
      this._contexto.fillStyle = '#dbd9d9';

      for (let i = 0; i < this._quant; i += 1) {
        this._contexto.strokeRect(i * this._tamanhoPixel, i * this._tamanhoPixel, this._tamanhoPixel, this._tamanhoPixel);
        for (let j = 0; j < this._quant; j += 1) {
          this._contexto.strokeRect(i * this._tamanhoPixel, j * this._tamanhoPixel, this._tamanhoPixel, this._tamanhoPixel);
        }
      }
      
    }
}